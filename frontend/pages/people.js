import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";

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

        // ref to the DOM node
        this.cursorRef = React.createRef();
        
        // serie
        this.serie = series.find(serie => serie.slug === "people");
        this.pictures = this.serie.pictures;
        this.innerTextCursor = "";
        this.cursorColor = "";
        this.bgColor = "";
        this.photoSrc = "";
    }

    handleClick(e){
        const { indexCurrentImage } = this.state;
        const length = this.pictures.length;
        const direction = this.nextOrPrev();
        let indexNewCurrent;
        if(direction === "next"){
            indexNewCurrent = indexCurrentImage + 1;
        }
        if(direction === "prev"){
            indexNewCurrent = indexCurrentImage - 1;
        }
        indexNewCurrent = (( indexNewCurrent % length) + length) % length;
	    indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
        this.setState({indexCurrentImage : indexNewCurrent});
        this.updateStyle();
    }
    handleMouseMove(e){
        const clientX = e.clientX;
        const clientY = e.clientY;
        this.setState({clientX: clientX, clientY: clientY})
    }
    componentWillMount(){
        // this.setState({indexCurrentImage : 0});
        // this.updateStyle();
        this.handleClick();
    }
    componentDidUpdate(prevProps, prevState){
        const { clientX, indexCurrentImage } = this.state;
        if(prevState.clientX !== clientX){
            this.innerTextCursor = this.nextOrPrev();
        }

    }
    updateStyle(){
        const { indexCurrentImage } = this.state;
        this.cursorColor = this.pictures[indexCurrentImage][2];
        this.bgColor = this.pictures[indexCurrentImage][1];
        this.photoSrc = this.pictures[indexCurrentImage][0];
        console.log({indexCurrentImage});
        console.log(this.cursorColor);
        console.log(this.bgColor);
    }
    nextOrPrev(){
        const { middleWidth, clientX } = this.state;
        if( clientX  < middleWidth ){
            return "prev";
        } else {
            return "next";
        }
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ middleWidth: window.innerWidth*0.5 });
    }
    render() {
        const { clientX, clientY } = this.state;
        return (
            <Layout>
                <div 
                    className={`people__container`} 
                    onClick={this.handleClick.bind(this)} 
                    onMouseMove={this.handleMouseMove.bind(this)}
                    style={
                        {
                            backgroundColor: this.bgColor
                        }
                    } 
                >
                    <span 
                        style={
                        {
                            opacity: 1,
                            transform: `translateX(${clientX-50}px) translateY(${clientY-50}px)`,
                            backgroundColor: this.cursorColor
                        }
                        } 
                        className={`menu__cursor`}
                        ref={this.cursorRef} 
                    >
                        <span className={`cursorText`}>{this.innerTextCursor}</span>
                    </span>
                    <div className={`people__imgContainer`}>
                        <img className={`people__img`} src={this.photoSrc} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(People);
