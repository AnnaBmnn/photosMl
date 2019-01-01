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
          indexCurrentImage: 0,
          cursorColor : "",
          bgColor : "",
          photoSrc : ""
        };
        
        // interactivity event
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMobileClick = this.handleMobileClick.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        // this.handleClickPrev = this.handleClickPrev.bind(this);
        

        // ref to the DOM node
        this.cursorRef = React.createRef();
		this.nextButtonMobile = React.createRef();
		this.prevButtonMobile = React.createRef();

        
        // serie
        this.serie = series.find(serie => serie.slug === "people");
        this.pictures = this.serie.pictures;
        this.innerTextCursor = "";
    }

    handleMobileClick(e){
        console.log(e.getSource().getElement().value);
    }

    handleClick(e){
        const { indexCurrentImage, middleWidth } = this.state;
        const length = this.pictures.length;
        const clientX = e.clientX;
        const clientY = e.clientY;
        this.setState({clientX: clientX, clientY: clientY});
        const direction = this.nextOrPrev();
        let indexNewCurrent;

        if(middleWidth> 500) {
            if(direction === "next"){
                indexNewCurrent = indexCurrentImage + 1;
            }
            if(direction === "prev"){
                indexNewCurrent = indexCurrentImage - 1;
            }
            indexNewCurrent = (( indexNewCurrent % length) + length) % length;
            indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
            this.setState({indexCurrentImage : indexNewCurrent}, () => this.updateStyle());
        }
    }

    componentWillMount(){
        this.updateStyle();
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        const { middleWidth } = this.state;
        // this.prevButtonMobile.current.addEventListener('click', this.handleMobileClick);
        if(middleWidth >= 500){
            window.addEventListener('click', this.handleClick);

        } else {
            window.addEventListener('click', this.handleMobileClick);
        }
    }

    componentDidUpdate(prevProps, prevState){
        const { clientX, middleWidth } = this.state;
        if(prevState.clientX !== clientX){
            this.innerTextCursor = this.nextOrPrev();
        }
        if( middleWidth >= 500 && prevState.middleWidth < 500 ){
            window.addEventListener('click', this.handleClick);
            window.removeEventListener('click', this.handleMobileClick);

        }
        if( middleWidth < 500 && prevState.middleWidth >= 500 ){
            window.removeEventListener('click', this.handleClick);
            // this.prevButtonMobile.current.addEventListener('click', this.handleMobileClick);
            window.addEventListener('click', this.handleMobileClick);

        }
    }

    updateStyle(){
        const { indexCurrentImage } = this.state;

        this.setState({cursorColor : this.pictures[indexCurrentImage][2]});
        this.setState({bgColor : this.pictures[indexCurrentImage][1]});
        this.setState({photoSrc : this.pictures[indexCurrentImage][0]});
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
        const { clientX, clientY, cursorColor, bgColor, photoSrc, middleWidth } = this.state;
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
                    <BackButton/>
                    <GotBored/>

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
                            onClick={this.handleClickPrev}
                            // ref={this.prevButtonMobile}

                            
                        >
                            <span className={`cursorText`}
                            >

                                <span>
                                    prev
                                </span>
                            </span>
                        </div> 
                        {/* <span 
                            style={
                                {
                                    backgroundColor: cursorColor
                                }
                            } 
                            className={`menu__cursor menu__cursor--mobile  menu__cursor--next`}
                            // onClick={ this.handleClickPrev} 
                            ref={this.nextButtonMobile}
                            // onClick={middleWidth >= 500 ? false : this.handleClick.bind(this)} 
                        >
                            <span className={`cursorText`} >
                                <span>
                                    next
                                </span>
                            </span>
                        </span> */}
                    </Fragment> 
                    }


                </div>
            </Layout>
        );
    }
}

export default PageWrapper(People);
