import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import BackButton from "../components/BackButton.js";
import GotBored from "../components/GotBored.js";

import { series } from "../static/datas/series";

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0,
            images: []
        };
        
        // serie
        this.serie = series.find(serie => serie.slug === "random");
        this.pictures = this.serie.pictures;


        //ref to the dom
		this.containerRef = React.createRef();

        // interactivity event
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.containerRef.current.focus();
    }

    componentWillUnmount() {
        const { images } = this.state;
        images.splice(0, images.length);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate() {
        const { width } = this.state;
        if( width < 1000 ) {
            window.addEventListener('click', this.handleKeyPress);
        } else {
            window.removeEventListener('click', this.handleKeyPress);

        }
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height:  window.innerHeight });
    }

    handleKeyPress(e) {
        const { height, width, images } = this.state;
        const length = this.pictures.length;
        console.log(e);
        const top = e.type == "click" ? e.clientY :this.getRandombetweenMinAndMax(0, height);
        const left = e.type == "click" ? e.clientX : this.getRandombetweenMinAndMax(0, width);
        const indexImg = Math.floor(this.getRandombetweenMinAndMax(0, length));
        const image = this.pictures[indexImg];
        const newImage = {
            top,
            left,
            image
        };
        images.push(newImage);
        images.length > 30 ? images.splice(0,1) : "";
        this.setState({images});

    }

    getRandombetweenMinAndMax(min, max){
        return Math.random() * (max - min) + min;
    }

    render() {
        const { images, width } = this.state;
        const text = width < 1000 ? "Tap Tap Tap" : "Tap a random letter";
        const indexImgSize = width < 1000 ? 1 : 0;
        const imagesDiv = images.map((_image, index) => {
            return (
                <img
                    key={index}
                    className={ `random_img` } 
                    src={_image.image[indexImgSize]}
                    style={
                        {
                            top: `${_image.top}px`,
                            left: `${_image.left}px`,
                          transform: `translateX(-50%) translateY(-50%)`
                        }
                    } 
                />
            );
        });

        return (
            <Layout>
                <div ref={this.containerRef} className={`random__container`} tabIndex="2" onKeyPress={this.handleKeyPress} >
                    <BackButton/>
                    <GotBored nextPage={`people`}/>
                    { imagesDiv }
                    <h2 className={`random__title`}>{text}</h2>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Random);
