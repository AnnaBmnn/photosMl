import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import BackButton from "../components/BackButton.js";
import { series } from "../static/datas/series";

class Vietnam extends Component {
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


        // interactivity event
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height:  window.innerHeight });
    }

    handleKeyPress(e) {
        const { height, width, images } = this.state;
        console.log(height);
        const length = this.pictures.length;
        const top = this.getRandombetweenMinAndMax(0, height);
        const left = this.getRandombetweenMinAndMax(0, width);
        const indexImg = Math.floor(this.getRandombetweenMinAndMax(0, length));
        const image = this.pictures[indexImg];
        const newImage = {
            top,
            left,
            image
        };
        images.push(newImage);
        this.setState({images});
        console.log(this.state);

    }

    getRandombetweenMinAndMax(min, max){
        return Math.random() * (max - min) + min;
    }

    render() {
        const serie = series.find(serie => serie.slug === "random");
        const {title, pictures} = serie;
        return (
            <Layout>
                <div className={`random__container`} tabIndex="0" onKeyPress={this.handleKeyPress.bind(this)} >
                    <BackButton/>
                    <h2 className={`random__title`}>Tap a random letter</h2>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Vietnam);
