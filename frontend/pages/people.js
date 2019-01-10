import Layout from "../components/Layout.js";
import React, { Component, Fragment } from "react";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";
import BackButton from "../components/BackButton.js";
import GotBored from "../components/GotBored.js";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          middleWidth: 0, 
          clientX: 0, 
          clientY: 0,
          indexCurrentImage: 0
        };
        
        // interactivity event
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMobileClickPrev = this.handleMobileClickPrev.bind(this);
        this.handleMobileClickNext = this.handleMobileClickNext.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);        

        // ref to the DOM node
        this.cursorRef = React.createRef();
		this.nextButtonMobile = React.createRef();
		this.prevButtonMobile = React.createRef();

        
        // serie
        this.serie = series.find(serie => serie.slug === "people");
        this.pictures = this.serie.pictures;
        this.innerTextCursor = "";
    }

    handleMobileClickNext(){
        const { indexCurrentImage } = this.state;
        const length = this.pictures.length;
        let indexNewCurrent;
 
        indexNewCurrent = indexCurrentImage + 1;

        indexNewCurrent = (( indexNewCurrent % length) + length) % length;
        indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
        this.setState({indexCurrentImage : indexNewCurrent});
        this.setState({cursorColor : this.pictures[indexNewCurrent][2]});
        this.setState({bgColor : this.pictures[indexNewCurrent][1]});
        this.setState({photoSrc : this.pictures[indexNewCurrent][0]});
    }

    handleMobileClickPrev(){
        const { indexCurrentImage } = this.state;
        const length = this.pictures.length;
        let indexNewCurrent;

        indexNewCurrent = indexCurrentImage - 1;
        

        indexNewCurrent = (( indexNewCurrent % length) + length) % length;
        indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
        this.setState({indexCurrentImage : indexNewCurrent});
        this.setState({cursorColor : this.pictures[indexNewCurrent][2]});
        this.setState({bgColor : this.pictures[indexNewCurrent][1]});
        this.setState({photoSrc : this.pictures[indexNewCurrent][0]});
    }

    handleClick(e){
        const { indexCurrentImage, middleWidth } = this.state;
        const length = this.pictures.length;
        const clientX = e.clientX;
        const clientY = e.clientY;
        this.setState({clientX: clientX, clientY: clientY});
        const direction = this.nextOrPrev();
        let indexNewCurrent;
        if(e.target.id !== "Red" && middleWidth> 500){
            if(direction === "next"){
                indexNewCurrent = indexCurrentImage + 1;
            }
            if(direction === "prev"){
                indexNewCurrent = indexCurrentImage - 1;
            }
            indexNewCurrent = (( indexNewCurrent % length) + length) % length;
            indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
            this.setState({indexCurrentImage : indexNewCurrent});
        }
    }

    componentWillMount(){
        const { indexCurrentImage } = this.state;
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        const { middleWidth } = this.state;
        if(middleWidth >= 500){
            window.addEventListener('click', this.handleClick);

        }
        
    }

    componentDidUpdate(prevProps, prevState){
        const { clientX, middleWidth } = this.state;
        if(prevState.clientX !== clientX){
            this.innerTextCursor = this.nextOrPrev();
        }
        if( middleWidth >= 500 && prevState.middleWidth < 500 ){
            window.addEventListener('click', this.handleClick);

        }
        if( middleWidth < 500 && prevState.middleWidth >= 500 ){
            window.removeEventListener('click', this.handleClick);
        }
    }

    handleMouseMove(e){
        const clientX = e.clientX;
        const clientY = e.clientY;
        this.setState({clientX: clientX, clientY: clientY})
    }

    nextOrPrev(){
        const { middleWidth, clientX } = this.state;
        if( clientX  < middleWidth ){
            return "prev";
        } else {
            return "next";
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ middleWidth: window.innerWidth*0.5 });
    }

    render() {
        const { clientX, clientY, middleWidth, indexCurrentImage } = this.state;
        const indexImg = middleWidth < 500 ? 3 : 0;
        const cursorColor = this.pictures[indexCurrentImage][2];
        const bgColor = this.pictures[indexCurrentImage][1];
        const photoSrc = this.pictures[indexCurrentImage][indexImg];
        const moreClass = bgColor === "#FFFFFF" ? "backButton__svg--black" : "";
        return (
            <Layout>
                <div 
                    className={`people__container`} 
                    onMouseMove={this.handleMouseMove}
                    style={
                        {
                            backgroundColor: bgColor
                        }
                    } 
                >
                    <BackButton moreClass={moreClass}/>
                    <GotBored nextPage={`vietnam`}/>

                    <div className={`people__imgContainer`}>
                        <img className={`people__img`} src={photoSrc} />
                    </div>
                    { middleWidth*2 > 1000 ? 
                    <span 
                        style={
                        {
                            transform: `translateX(${clientX-100}px) translateY(${clientY-100}px)`,
                            backgroundColor: cursorColor
                        }
                        } 
                        className={`menu__cursor`}
                        ref={this.cursorRef} 
                    >
                        <span className={`cursorText`}>
                            <span>
                                {this.innerTextCursor}
                            </span>
                        </span>
                    </span>                    
                    :
                    <Fragment>
                        <div 
                            style={
                            {
                                backgroundColor: cursorColor
                            }
                            } 
                            className={`menu__cursor menu__cursor--mobile menu__cursor--prev`}
                            ref={this.prevButtonMobile}
                            onClick={this.handleMobileClickPrev}
                            
                        >
                            <span className={`cursorText`}
                            >

                                <span>
                                    prev
                                </span>
                            </span>
                        </div> 
                        <span 
                            style={
                                {
                                    backgroundColor: cursorColor
                                }
                            } 
                            className={`menu__cursor menu__cursor--mobile  menu__cursor--next`}
                            ref={this.nextButtonMobile}
                            onClick={this.handleMobileClickNext}
                        >
                            <span className={`cursorText`} >
                                <span>
                                    next
                                </span>
                            </span>
                        </span>
                    </Fragment> 
                    }


                </div>
            </Layout>
        );
    }
}

export default PageWrapper(People);
