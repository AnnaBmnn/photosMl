import Layout from "../components/Layout.js";
import React, { Component } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";
import { TimelineMax } from "gsap";
import { Draggable, SplitText } from "gsap";
import LoadingScreen from "../components/LoadingScreen";
import ScrollingBanner from "../components/ScrollingBanner";
import BigTitle from "../components/BigTitle";
import FinderImage from "../components/FinderImage";
import FilterImage from "../components/FilterImage";
import BackButton from "../components/BackButton.js";
import Sunshines from "../components/Sunshines.js";
import Ball from "../components/Ball.js";


class Vietnam extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isScrolled: false,
			isLoaded: false,
			width: 0, 

		};

		// interactivity event
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleScroll = this.handleScroll.bind(this);

		// ref to the DOM node
		this.imageFinderUnRef = React.createRef();
		this.imageFinderDeuxRef = React.createRef();
		this.imageFinderTroisRef = React.createRef();
		this.imageFinderTroisUnRef = React.createRef();
		this.imageFinderTroisDeuxRef = React.createRef();
		this.imageFinderTroisTroisRef = React.createRef();
		this.imageFinderTroisQuatreRef = React.createRef();
		this.bigTitleUnRef = React.createRef();
		this.bigTitleDeuxRef = React.createRef();
		this.bigTitleTroisRef = React.createRef();
		this.bigTitleQuatreRef = React.createRef();
		this.containerRef = React.createRef();
		this.containerUnRef = React.createRef();
		this.containerDeuxRef = React.createRef();
		this.containerTroisRef = React.createRef();
		this.containerQuatreRef = React.createRef();
		this.containerCinqRef = React.createRef();
		this.containerSixRef = React.createRef();
		this.containerSevenRef = React.createRef();
		this.imageUnRef = React.createRef();
		this.imageDeuxRef = React.createRef();
		this.imageTroisRef = React.createRef();
		this.imageTroisUnRef = React.createRef();
		this.imageQuatreRef = React.createRef();
		this.containerBigTitleRef = React.createRef();
		this.containerMediumTitleRef = React.createRef();
		this.sunshinesUnRef = React.createRef();
		this.sunshinesDeuxRef = React.createRef();
		this.sunshinesTroisRef = React.createRef();
		this.sunshinesQuatreRef = React.createRef();
		this.sunshinesCinqRef = React.createRef();
		this.imageQuatreUnRef = React.createRef();
		this.imageQuatreDeuxRef = React.createRef();
		this.imageQuatreTroisRef = React.createRef();
		this.imageQuatreQuatreRef = React.createRef();
		this.imageQuatreCinqRef = React.createRef();
		this.imageQuatreSixRef = React.createRef();
		this.imageQuatreSeptRef = React.createRef();
		this.imageCinqUnRef = React.createRef();
		this.imageCinqDeuxRef = React.createRef();
		this.imageCinqTroisRef = React.createRef();
		this.imageSixUnRef = React.createRef();
		this.imageSixDeuxRef = React.createRef();
		this.imageSixTroisRef = React.createRef();
		this.ballSixUnRef = React.createRef();
		this.ballSixDeuxRef = React.createRef();
		this.imageSeptUnRef = React.createRef();
		this.imageSeptDeuxRef = React.createRef();
		this.imageSeptTroisRef = React.createRef();
		this.imageSeptQuatreRef = React.createRef();
		this.imageSeptCinqRef = React.createRef();
		this.vroumSeptUnRef = React.createRef();
		this.vroumSeptDeuxRef = React.createRef();
		this.vroumSeptTroisRef = React.createRef();
		this.vroumSeptQuatreRef = React.createRef();
		this.imageSeptSixRef = React.createRef();
		this.imageSeptSeptRef = React.createRef();
		this.imageSeptHuitRef = React.createRef();
		this.imageSeptNeufRef = React.createRef();
		this.imageSeptDixRef = React.createRef();
		this.imageSeptOnzeRef = React.createRef();
		this.imageSeptDouzeRef = React.createRef();
		this.imageSeptTreizeRef = React.createRef();
		this.imageSeptQuatorzeRef = React.createRef();
		this.imageSeptQuinzeRef = React.createRef();
		this.hugeTitleSeptUnRef = React.createRef();
		this.containerVideoSeptUnRef = React.createRef();
		this.audioUnRef = React.createRef();
		this.audioDeuxRef = React.createRef();
		this.videoUnRef = React.createRef();
		this.videoDeuxRef = React.createRef();
		this.videoTroisRef = React.createRef();
		this.containerNextProjectRef = React.createRef();
		this.splitTextUnRef = React.createRef();
		this.splitTextDeuxRef = React.createRef();
		this.splitTextTroisRef = React.createRef();
		

		// ref to the animation
		this.vietnamTimeline = new TimelineMax();
	}

	componentDidMount() {
		this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);		
		window.addEventListener('scroll', this.handleScroll);
		window.setTimeout(()=> this.setState({isLoaded: true}), 10)
		// window.setTimeout(()=> this.setState({isLoaded: true}), 4000)
		this.initTimeline();		
  	}

  	componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    	window.removeEventListener('scroll', this.handleScroll);
	}
	updateWindowDimensions() {
        this.setState({ middleWidth: window.innerWidth*0.5 });
    }
	
	handleScroll(e){
		const { isLoaded } = this.props;
		const { lastScroll } = this.state;
		const scroll = window.scrollY;
		if( scroll !== 0 ){
			this.setState({isScrolled: true});
		}
		
		const windowHeight = window.innerHeight;
		const containerRef = this.containerRef.current;
		const containerHeight = containerRef.getBoundingClientRect().height;
		const ratio = (scroll)/(containerHeight-windowHeight);
		this.vietnamTimeline.progress(ratio);
	}

	playSong(songPlay){

		const {scrollDirection} = this.state;
		console.log(window);
		console.log(scrollDirection);

		if( scrollDirection == "bottom"  ){
			console.log("not reverse");
			songPlay.playbackRate = 1;
			const playPromise = songPlay.play();
			if (playPromise !== undefined) {
				playPromise.then(_ => {
				  // Automatic playback started!
				  // Show playing UI.
				})
				.catch(error => {
				  // Auto-play was prevented
				  // Show paused UI.
				  console.log(error);
	  
				});
			  }
		}
	}

	initTimeline() {
		const containerUnRef = this.containerUnRef.current;
		const containerDeuxRef = this.containerDeuxRef.current;
		const containerTroisRef = this.containerTroisRef.current;
		const containerQuatreRef = this.containerQuatreRef.current;
		const containerCinqRef = this.containerCinqRef.current;
		const containerSixRef = this.containerSixRef.current;
		const containerSevenRef = this.containerSevenRef.current;
		const imageFinderUnRef = this.imageFinderUnRef.current;
		const imageFinderDeuxRef = this.imageFinderDeuxRef.current;
		const imageFinderTroisRef = this.imageFinderTroisRef.current;
		const imageFinderTroisUnRef = this.imageFinderTroisUnRef.current;
		const imageFinderTroisDeuxRef = this.imageFinderTroisDeuxRef.current;
		const imageFinderTroisTroisRef = this.imageFinderTroisTroisRef.current;
		const imageFinderTroisQuatreRef = this.imageFinderTroisQuatreRef.current;
		const bigTitleUnRef = this.bigTitleUnRef.current;
		const bigTitleDeuxRef = this.bigTitleDeuxRef.current;
		const bigTitleTroisRef = this.bigTitleTroisRef.current;
		const bigTitleQuatreRef = this.bigTitleQuatreRef.current;
		const imageUnRef = this.imageUnRef.current;
		const imageDeuxRef = this.imageDeuxRef.current;
		const imageTroisRef = this.imageTroisRef.current;
		const imageTroisUnRef = this.imageTroisUnRef.current;
		const imageQuatreRef = this.imageQuatreRef.current;
		const containerBigTitleRef = this.containerBigTitleRef.current;
		const containerMediumTitleRef = this.containerMediumTitleRef.current;
		const sunshinesUnRef = this.sunshinesUnRef.current;
		const sunshinesDeuxRef = this.sunshinesDeuxRef.current;
		const sunshinesTroisRef = this.sunshinesTroisRef.current;
		const sunshinesQuatreRef = this.sunshinesQuatreRef.current;
		const sunshinesCinqRef = this.sunshinesCinqRef.current;
		const imageQuatreUnRef = this.imageQuatreUnRef.current;
		const imageQuatreDeuxRef = this.imageQuatreDeuxRef.current;
		const imageQuatreTroisRef = this.imageQuatreTroisRef.current;
		const imageQuatreQuatreRef = this.imageQuatreQuatreRef.current;
		const imageQuatreCinqRef = this.imageQuatreCinqRef.current;
		const imageQuatreSixRef = this.imageQuatreSixRef.current;
		const imageQuatreSeptRef = this.imageQuatreSeptRef.current;
		const imageCinqUnRef = this.imageCinqUnRef.current;
		const imageCinqDeuxRef = this.imageCinqDeuxRef.current;
		const imageCinqTroisRef = this.imageCinqTroisRef.current;
		const imageSixUnRef = this.imageSixUnRef.current;
		const imageSixDeuxRef = this.imageSixDeuxRef.current;
		const imageSixTroisRef = this.imageSixTroisRef.current;
		const ballSixUnRef = this.ballSixUnRef.current;
		const ballSixDeuxRef = this.ballSixDeuxRef.current;
		const imageSeptUnRef = this.imageSeptUnRef.current;
		const imageSeptDeuxRef = this.imageSeptDeuxRef.current;
		const imageSeptTroisRef = this.imageSeptTroisRef.current;
		const imageSeptQuatreRef = this.imageSeptQuatreRef.current;
		const imageSeptCinqRef = this.imageSeptCinqRef.current;
		const vroumSeptUnRef = this.vroumSeptUnRef.current;
		const vroumSeptDeuxRef = this.vroumSeptDeuxRef.current;
		const vroumSeptTroisRef = this.vroumSeptTroisRef.current;
		const vroumSeptQuatreRef = this.vroumSeptQuatreRef.current;
		const imageSeptSixRef = this.imageSeptSixRef.current;
		const imageSeptSeptRef = this.imageSeptSeptRef.current;
		const imageSeptHuitRef = this.imageSeptHuitRef.current;
		const imageSeptNeufRef = this.imageSeptNeufRef.current;
		const imageSeptDixRef = this.imageSeptDixRef.current;
		const imageSeptOnzeRef = this.imageSeptOnzeRef.current;
		const imageSeptDouzeRef = this.imageSeptDouzeRef.current;
		const imageSeptTreizeRef = this.imageSeptTreizeRef.current;
		const imageSeptQuatorzeRef = this.imageSeptQuatorzeRef.current;
		const imageSeptQuinzeRef = this.imageSeptQuinzeRef.current;
		const hugeTitleSeptUnRef = this.hugeTitleSeptUnRef.current;
		const containerVideoSeptUnRef = this.containerVideoSeptUnRef.current;
		const audioUnRef = this.audioUnRef.current;
		const audioDeuxRef = this.audioDeuxRef.current;
		const videoUnRef = this.videoUnRef.current;
		const videoDeuxRef = this.videoDeuxRef.current;
		const videoTroisRef = this.videoTroisRef.current;
		const containerNextProjectRef = this.containerNextProjectRef.current;
		const splitTextUnRef = this.splitTextUnRef.current;
		const splitTextDeuxRef = this.splitTextDeuxRef.current;
		const splitTextTroisRef = this.splitTextTroisRef.current;
		
		// const mySplitText = new SplitText(splitTextUnRef, {type:"words"});
		// mySplitText.split({type:"chars, words"});

		const that = this;

		this.vietnamTimeline
			.to(bigTitleUnRef, 0.1, {opacity: 1})
			.to(bigTitleDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleTroisRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleQuatreRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleUnRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "+=0.6")
			.to(bigTitleDeuxRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(bigTitleTroisRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(bigTitleQuatreRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(imageFinderUnRef, 0.1, {className:"+=isFilter"}, "+=0.6")
			.to(imageFinderDeuxRef, 0.1, {opacity: 1}, "+=0.3")
			.to(imageFinderTroisRef, 0.1, {opacity: 1}, "+=0.3")
			.to(bigTitleQuatreRef, 0.1, {opacity: 0}, "+=0.6")
			.to(bigTitleTroisRef, 0.1, {opacity: 0}, "+=0.6")
			.to(bigTitleDeuxRef, 0.1, {opacity: 0}, "+=0.6")
			.to(bigTitleUnRef, 0.1, {opacity: 0}, "+=0.6")
			.to(imageUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(containerBigTitleRef, 0.1, {opacity: "1"}, "+=0.6")
			.to(containerBigTitleRef, 6, {transform: "translateY(-78%)"})
			.to(containerUnRef, 0.1, {opacity: 0})
			.to(containerUnRef, 0.1, {display:"none"}, "-=0.1")
			.to(containerDeuxRef, 0.1, {opacity: 1})
			.to(imageDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageDeuxRef, 0.1, {className: "+=isFilter"}, "+=0.6")
			.to(imageTroisRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageTroisRef, 0.1, {className: "+=isFilter"}, "+=0.6")
			.to(containerMediumTitleRef, 0.1, {opacity: 1}, "+=0.1")
			.to(containerMediumTitleRef, 5, {transform: "translateY(-100%)"}, "+=0.1")
			.to(imageQuatreRef, 0.1, {opacity: 1}, "-=2.5")
			.to(containerDeuxRef, 0.1, {opacity:0}, "+=0.6")
			.to(containerDeuxRef, 0.1, {className:"+=displayNone"})
			.to(containerTroisRef, 0.1, {opacity: 1}, "+=0.1")
			.to(imageFinderTroisUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageFinderTroisDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageFinderTroisTroisRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageFinderTroisQuatreRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageFinderTroisUnRef, 0.1, {className: "+=isFilter"}, "+=0.6")
			.to(imageFinderTroisDeuxRef, 0.1, {className: "+=isFilter"}, "-=0.1")
			.to(imageFinderTroisTroisRef, 0.1, {className: "+=isFilter"}, "-=0.1")
			.to(imageFinderTroisQuatreRef, 0.1, {className: "+=isFilter"}, "-=0.1")
			.to(imageTroisUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(sunshinesUnRef, 3, {transform: "translate3d(0,0,1px)" }, "+=0.6")
			.to(sunshinesDeuxRef, 3, {transform: "translate3d(0,0,1px)" }, "-=3")
			.to(sunshinesTroisRef, 3, {transform: "translate3d(0,0,1px)" }, "-=3")
			.to(sunshinesQuatreRef, 3, {transform: "translate3d(0,0,1px)" }, "-=3")
			.to(sunshinesCinqRef, 3, {transform: "translate3d(0,0,1px)" }, "-=3")
			.to(containerTroisRef, 0.1, {opacity: 0})
			.to(containerTroisRef, 0.1, {className:"+=displayNone"})
			.to(containerQuatreRef, 0.1, {opacity: 1}, "+=0.1")
			.to(imageQuatreDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageQuatreTroisRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageQuatreQuatreRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageQuatreCinqRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageQuatreSixRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageQuatreSeptRef, 0.1, {opacity: 1}, "+=0.6")
			.to(containerQuatreRef, 0.1, {opacity: 0})
			.to(containerQuatreRef, 0.1, {className:"+=displayNone"})
			.to(containerCinqRef, 0.1, {opacity: 1}, "+=0.1")
			.to(imageCinqUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageCinqDeuxRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageCinqTroisRef, 0.1, {opacity: 1}, "-=0.1")
			.to(containerCinqRef, 0.1, {opacity: 0}, "+=0.6")
			.to(containerCinqRef, 0.1, {className:"+=displayNone"})
			.to(containerSixRef, 0.1, {opacity: 1}, "+=0.1")
			.to(imageSixDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageSixUnRef, 0.1, {className: "+=isFilter"}, "-=0.1")
			.to(imageSixDeuxRef, 0.1, {className: "+=isFilter"}, "+=0.6")
			.to(imageSixTroisRef, 0.1, {opacity: 1}, "-=0.1")
			.to(ballSixUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(ballSixDeuxRef, 0.1, {opacity: 1}, "-=0.1")
			.to(containerSixRef, 0.1, {opacity: 0}, "+=0.6")
			.to(containerSixRef, 0.1, {className:"+=displayNone"})
			.to(containerSevenRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageSeptTroisRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptQuatreRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptUnRef, 0.1, {className: "+=isFilter"}, "+=0.6")
			.to(imageSeptDeuxRef, 0.1, {opacity: 0}, "+=0.6")
			.to(imageSeptTroisRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptQuatreRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptUnRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptCinqRef, 0.1, {opacity: 1})
			.to(vroumSeptQuatreRef, 0.2, {opacity: 1}, "+=0.6")
			.to(vroumSeptTroisRef, 0.2, {opacity: 1}, "-=0.2")
			.to(vroumSeptUnRef, 0.2, {opacity: 1}, "+=0.6")
			.to(vroumSeptDeuxRef, 0.2, {opacity: 1}, "-=0.2")
			.to(vroumSeptQuatreRef, 0.2, {opacity: 0}, "+=0.6")
			.to(vroumSeptTroisRef, 0.2, {opacity: 0}, "-=0.2")
			.to(vroumSeptUnRef, 0.2, {opacity: 0}, "+=0.6")
			.to(vroumSeptDeuxRef, 0.2, {opacity: 0}, "-=0.2")
			.to(imageSeptCinqRef, 0.1, {opacity: 0}, "+=0.6")
			.to(imageSeptSixRef, 0.1, {opacity: 1}, "-=0.1")
			.call(that.playSong, [audioUnRef, that.vietnamTimeline], that)
			.to(imageSeptSeptRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptSixRef, 0.1, {opacity: 0}, "+=1.6")
			.to(imageSeptSeptRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptHuitRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptNeufRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptHuitRef, 0.1, {opacity: 0}, "+=0.6")
			.to(imageSeptNeufRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptDixRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptDixRef, 0.1, {opacity: 0}, "+=0.6")
			.call(that.playSong, [audioDeuxRef, that.vietnamTimeline], that)
			.to(imageSeptOnzeRef, 0.1, {opacity: 1}, "-=0.1")
			.to(imageSeptDouzeRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageSeptTreizeRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageSeptQuatorzeRef, 0.1, {opacity: 1}, "+=0.6")
			.to(imageSeptDouzeRef, 0.1, {opacity: 0}, "+=0.6")
			.to(imageSeptTreizeRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptQuatorzeRef, 0.1, {opacity: 0}, "-=0.1")
			.to(imageSeptOnzeRef, 0.1, {className:"+=fullHeight"}, "-=0.1")
			.to(hugeTitleSeptUnRef, 6, {transform: "scaleY(14) scaleX(3.5) translateX(-150%)"}, "+=0.6")
			.to(imageSeptQuinzeRef, 0.1, {opacity: 1}, "-=1.2")
			.to(containerVideoSeptUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(containerVideoSeptUnRef, 6, {transform: "translate3d(-100%, 0px, 1px"}, "+=0.6")
			.add( function(){ 
				videoUnRef.play();
				videoDeuxRef.play();
				videoTroisRef.play();
			}, "-=6" )
			.add( function(){ 
				videoUnRef.pause();
				videoDeuxRef.pause();
				videoTroisRef.pause();
			}, "+=4" )
			.to(containerVideoSeptUnRef, 0.1, {opacity: 0})
			.to(containerSevenRef, 0.1, {opacity: 0}, "-=0.1")
			.to(containerVideoSeptUnRef, 0.1, {className:"+=displayNone"})
			.to(containerNextProjectRef, 0.1, {opacity: 1}, "-=0.1")
			.to(containerNextProjectRef, 6, {transform: "translateY(-55%)"})
			.staggerFrom(".plitText1", 0.3, {x:0, y: "100%", z:"1px"},0.02, "-=6.8")
			.staggerFrom(".plitText2", 0.5, {x:0, y: "100%", z:"1px"},0.02, "-=5")
			.staggerFrom(".plitText3", 1, {x:0, y: "100%", z:"1px"},0.02, "-=2")
			.pause();
	}

	render() {
		const {isLoaded, isScrolled, width} = this.state;
		const serie = series.find(serie => serie.slug === "vietnam");
		const {title, pictures} = serie;
		const indexImg = width < 1000 ? 1 : 0;
		console.log(!isLoaded);
		return (
			<Layout>
				{ !isLoaded || isScrolled == 0 ?
					<LoadingScreen
						moreClass={"loadingScreen--vietnam"}
						src={"static/images/vietnam/drapeau.png"}
						text={"photographies of my trip in vietnam"}
					/>
					:
					""
				}
				{ isLoaded && isScrolled == 0 ?
					<ScrollingBanner
						moreClass={`scrollingBanner--vietnam`}
						text={"scroll to discover"}
					/>
					:
					""
				}
				<audio ref={this.audioUnRef} preload="none" src="static/audio/beach.m4a" ></audio>
				<audio ref={this.audioDeuxRef}  preload="none" src="static/audio/street.m4a" ></audio>
				<div className={`bigSize ${isLoaded? "": "bigSize--notloaded"}`} ref={this.containerRef}>
					<BackButton/>
					<div className="container" ref={this.containerRef}>
						<div className="container--2 opacityNull" ref={this.containerDeuxRef}> 
							<FilterImage 
								className={"vietnam__item--5 opacityNull"} 
								ref={this.imageDeuxRef} 
								url={series[1].pictures[4][indexImg]} 
								isParalax={false}
							/>
							<FilterImage 
								className={"vietnam__item--6 opacityNull"} 
								ref={this.imageTroisRef} 
								url={series[1].pictures[5][indexImg]} 
								isParalax={false}
							/>
							<div className="vietnam__container--mediumTitle " ref={this.containerMediumTitleRef}>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
								<h3>YUMMY</h3>
							</div>
							<FilterImage 
								className={"vietnam__item--7 opacityNull"} 
								ref={this.imageQuatreRef} 
								url={series[1].pictures[6][indexImg]} 
								isParalax={false}
							/>
						</div>
						<div className="container--3 opacityNull" ref={this.containerTroisRef}> 
							<FinderImage 
								className={"opacityNull vietnam__item--31"} 
								ref={this.imageFinderTroisUnRef} 
								url={series[1].pictures[7][indexImg]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--32"} 
								ref={this.imageFinderTroisDeuxRef} 
								url={series[1].pictures[7][indexImg]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--33"} 
								ref={this.imageFinderTroisTroisRef} 
								url={series[1].pictures[7][indexImg]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--34"} 
								ref={this.imageFinderTroisQuatreRef} 
								url={series[1].pictures[7][indexImg]} 
								isParalax={false}
							/>
							<img ref={this.imageTroisUnRef} className={"opacityNull vietnam__item--image31"}  src={series[1].pictures[8][indexImg]}/>
							<div className="vietnam__containerSunshine">
								<Sunshines className="sunshines--bottom" ref={this.sunshinesUnRef} />
								<Sunshines className="sunshines--top" ref={this.sunshinesDeuxRef} />
								<Sunshines className="sunshines--bottom" ref={this.sunshinesTroisRef} />
								<Sunshines className="sunshines--top" ref={this.sunshinesQuatreRef} />
								<Sunshines className="sunshines--bottom" ref={this.sunshinesCinqRef} />
							</div>
						</div>
						<div className="container--4 opacityNull" ref={this.containerQuatreRef}> 
							<img ref={this.imageQuatreUnRef} className={" vietnam__imageEmboite vietnam__image41"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreDeuxRef} className={"opacityNull vietnam__imageEmboite vietnam__image42"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreTroisRef} className={"opacityNull vietnam__imageEmboite vietnam__image43"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreQuatreRef} className={"opacityNull vietnam__imageEmboite vietnam__image44"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreCinqRef} className={"opacityNull vietnam__imageEmboite vietnam__image45"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreSixRef} className={"opacityNull vietnam__imageEmboite vietnam__image46"}  src={series[1].pictures[9][indexImg]}/>
							<img ref={this.imageQuatreSeptRef} className={"opacityNull vietnam__imageEmboite vietnam__image47"}  src={series[1].pictures[9][indexImg]}/>
						</div>
						<div className="container--5 opacityNull" ref={this.containerCinqRef}> 
							<div className={"vietnam__squareColumn"}>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqUnRef} >
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}   src={series[1].pictures[10][indexImg]}/>
								</div>
								<div className={"vietnam__square "}>
									<img  className={"vietnam__squareImg "}  src={series[1].pictures[10][indexImg]}/>
								</div>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqDeuxRef} >
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[10][indexImg]}/>
								</div>
							</div>
							<div className={"vietnam__squareColumn"}>
								<div className={"vietnam__square"}>
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[11][indexImg]}/>
								</div>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqTroisRef} >
									<img className={"vietnam__squareImg"}  src={series[1].pictures[11][indexImg]}/>
								</div>
								<div className={"vietnam__square"}>
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[11][indexImg]}/>
								</div>
							</div>
						</div>
						<div className="container--6 opacityNull" ref={this.containerSixRef}> 
							<FilterImage 
								className={""} 
								url={series[1].pictures[12][indexImg]} 
								isParalax={false}
								className={`vietnam__item--61`}
								ref={this.imageSixUnRef}
							/>
							<FilterImage 
								url={series[1].pictures[13][indexImg]} 
								isParalax={false}
								className={`vietnam__item--62 opacityNull`}
								ref={this.imageSixDeuxRef}
							/>
							<img ref={this.imageSixTroisRef} className={`vietnam__item--63 opacityNull`}  src={series[1].pictures[14][indexImg]}/>
							
							<Ball text={"xin chào"} ref={this.ballSixUnRef} className={`vietnam__ball--61 opacityNull`} />
							<Ball text={"xin chào"} ref={this.ballSixDeuxRef} className={`vietnam__ball--62 opacityNull`}  />
						</div>	
						<div className="container--7 opacityNull" ref={this.containerSevenRef}> 
							<FilterImage 
								url={series[1].pictures[15][indexImg]} 
								isParalax={false}
								className={`vietnam__item--71`}
								ref={this.imageSeptUnRef}
							/>
							<img ref={this.imageSeptDeuxRef} className={`vietnam__item--72 opacityNull`}  src={series[1].pictures[16][indexImg]}/>
							<img ref={this.imageSeptTroisRef} className={`vietnam__item--73 opacityNull`}  src={series[1].pictures[17][indexImg]}/>
							<img ref={this.imageSeptQuatreRef} className={`vietnam__item--74 opacityNull`}  src={series[1].pictures[18][indexImg]}/>
							<img ref={this.imageSeptCinqRef} className={`vietnam__item--75 opacityNull`}  src={series[1].pictures[19][indexImg]}/>
							<div className={`vietnam__vroumContainer`}>
								<h3 ref={this.vroumSeptUnRef} className={`vietnam__vroum vietnam__vroum--1 opacityNull`}>vroum</h3>
								<h3 ref={this.vroumSeptDeuxRef} className={`vietnam__vroum vietnam__vroum--2 opacityNull`}>vroum</h3>
								<h3 ref={this.vroumSeptTroisRef} className={`vietnam__vroum vietnam__vroum--3 opacityNull`}>vroum</h3>
								<h3 ref={this.vroumSeptQuatreRef} className={`vietnam__vroum vietnam__vroum--4 opacityNull`}>vroum</h3>
							</div>
							<img ref={this.imageSeptSixRef} className={`vietnam__item--76 opacityNull`}  src={series[1].pictures[21][indexImg]}/>
							<img ref={this.imageSeptSeptRef} className={`vietnam__item--75 opacityNull`}  src={series[1].pictures[20][indexImg]}/>
							<img ref={this.imageSeptHuitRef} className={`vietnam__item--78 opacityNull`}  src={series[1].pictures[22][indexImg]}/>
							<img ref={this.imageSeptNeufRef} className={`vietnam__item--79 opacityNull`}  src={series[1].pictures[23][indexImg]}/>
							<img ref={this.imageSeptDixRef} className={`vietnam__item--710 opacityNull`}  src={series[1].pictures[24][indexImg]}/>
							<img ref={this.imageSeptOnzeRef} className={`vietnam__item--711 opacityNull`}  src={series[1].pictures[25][indexImg]}/>
							<img ref={this.imageSeptDouzeRef} className={`vietnam__item--712 opacityNull`}  src={series[1].pictures[25][indexImg]}/>
							<img ref={this.imageSeptTreizeRef} className={`vietnam__item--713 opacityNull`}  src={series[1].pictures[25][indexImg]}/>
							<img ref={this.imageSeptQuatorzeRef} className={`vietnam__item--714 opacityNull`}  src={series[1].pictures[25][indexImg]}/>
							<h2 ref={this.hugeTitleSeptUnRef} className="vietnam__hugeTitle">vietnam</h2>
							<img ref={this.imageSeptQuinzeRef} className={`vietnam__item--715 opacityNull`}  src={series[1].pictures[26][indexImg]}/>
							<div ref={this.containerVideoSeptUnRef} className={`vietnam__containerVideo opacityNull`}>
								<div className={`vietnam__video vietnam__video--1`}>
									<video muted webkit-playsinline={"true"} playsInline={true} loop={true} autoPlay="" ref={this.videoUnRef} src="static/images/vietnam/vietnamVideo01.mp4" />
								</div>
								<div className={`vietnam__video vietnam__video--2`}>
									<video muted webkit-playsinline={"true"} playsInline={true} loop={true} autoPlay="" ref={this.videoDeuxRef} autoPlay src="static/images/vietnam/vietnamVideo01.mp4" />

								</div>
								<div className={`vietnam__video vietnam__video--3`}>
									<video muted webkit-playsinline={"true"} playsInline={true} loop={true} autoPlay="" ref={this.videoTroisRef} autoPlay src="static/images/vietnam/vietnamVideo01.mp4" />
								</div>
							</div>
						</div>
						<div ref={this.containerNextProjectRef} className={`nextProject opacityNull`}>
							<span className="nextProject__container" ref={this.splitTextUnRef}>
								<div className="plitText__container"><div className="plitText1">y</div></div>
								<div className="plitText__container"><div className="plitText1">o</div></div>
								<div className="plitText__container"><div className="plitText1">u </div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">a</div></div>
								<div className="plitText__container"><div className="plitText1">r</div></div>
								<div className="plitText__container"><div className="plitText1">e</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">a</div></div>
								<div className="plitText__container"><div className="plitText1">t</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">t</div></div>
								<div className="plitText__container"><div className="plitText1">h</div></div>
								<div className="plitText__container"><div className="plitText1">e</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">e</div></div>
								<div className="plitText__container"><div className="plitText1">n</div></div>
								<div className="plitText__container"><div className="plitText1">d</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">o</div></div>
								<div className="plitText__container"><div className="plitText1">f</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">t</div></div>
								<div className="plitText__container"><div className="plitText1">h</div></div>
								<div className="plitText__container"><div className="plitText1">e</div></div>
								<div className="plitText__container"><div className="plitText1">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText1">p</div></div>
								<div className="plitText__container"><div className="plitText1">r</div></div>
								<div className="plitText__container"><div className="plitText1">o</div></div>
								<div className="plitText__container"><div className="plitText1">j</div></div>
								<div className="plitText__container"><div className="plitText1">e</div></div>
								<div className="plitText__container"><div className="plitText1">c</div></div>
								<div className="plitText__container"><div className="plitText1">t</div></div>
							</span>
							<span  className="nextProject__container" ref={this.splitTextDeuxRef}>
								<div className="plitText__container"><div className="plitText2">k</div></div>
								<div className="plitText__container"><div className="plitText2">e</div></div>
								<div className="plitText__container"><div className="plitText2">e</div></div>
								<div className="plitText__container"><div className="plitText2">p</div></div>
								<div className="plitText__container"><div className="plitText2">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText2">s</div></div>
								<div className="plitText__container"><div className="plitText2">c</div></div>
								<div className="plitText__container"><div className="plitText2">r</div></div>
								<div className="plitText__container"><div className="plitText2">o</div></div>
								<div className="plitText__container"><div className="plitText2">l</div></div>
								<div className="plitText__container"><div className="plitText2">l</div></div>
								<div className="plitText__container"><div className="plitText2">i</div></div>
								<div className="plitText__container"><div className="plitText2">n</div></div>
								<div className="plitText__container"><div className="plitText2">g</div></div>
								<div className="plitText__container"><div className="plitText2">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText2">t</div></div>
								<div className="plitText__container"><div className="plitText2">h</div></div>
								<div className="plitText__container"><div className="plitText2">e</div></div>
								<div className="plitText__container"><div className="plitText2">r</div></div>
								<div className="plitText__container"><div className="plitText2">e</div></div>
								<div className="plitText__container"><div className="plitText2">'</div></div>
								<div className="plitText__container"><div className="plitText2">s</div></div>
								<div className="plitText__container"><div className="plitText2">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText2">n</div></div>
								<div className="plitText__container"><div className="plitText2">o</div></div>
								<div className="plitText__container"><div className="plitText2">t</div></div>
								<div className="plitText__container"><div className="plitText2">h</div></div>
								<div className="plitText__container"><div className="plitText2">i</div></div>
								<div className="plitText__container"><div className="plitText2">n</div></div>
								<div className="plitText__container"><div className="plitText2">g</div></div>
								<div className="plitText__container"><div className="plitText2">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText2">m</div></div>
								<div className="plitText__container"><div className="plitText2">o</div></div>
								<div className="plitText__container"><div className="plitText2">r</div></div>
								<div className="plitText__container"><div className="plitText2">e</div></div>
							</span>
							<span ref={this.splitTextTroisRef}  className="nextProject__container">
								<div className="plitText__container"><div className="plitText3">w</div></div>
								<div className="plitText__container"><div className="plitText3">e</div></div>
								<div className="plitText__container"><div className="plitText3">l</div></div>
								<div className="plitText__container"><div className="plitText3">l</div></div>
								<div className="plitText__container"><div className="plitText3">,</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">i</div></div>
								<div className="plitText__container"><div className="plitText3">f</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">y</div></div>
								<div className="plitText__container"><div className="plitText3">o</div></div>
								<div className="plitText__container"><div className="plitText3">u</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">w</div></div>
								<div className="plitText__container"><div className="plitText3">a</div></div>
								<div className="plitText__container"><div className="plitText3">n</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">o</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">s</div></div>
								<div className="plitText__container"><div className="plitText3">e</div></div>
								<div className="plitText__container"><div className="plitText3">e</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">a</div></div>
								<div className="plitText__container"><div className="plitText3">n</div></div>
								<div className="plitText__container"><div className="plitText3">o</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">h</div></div>
								<div className="plitText__container"><div className="plitText3">e</div></div>
								<div className="plitText__container"><div className="plitText3">r</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">p</div></div>
								<div className="plitText__container"><div className="plitText3">r</div></div>
								<div className="plitText__container"><div className="plitText3">o</div></div>
								<div className="plitText__container"><div className="plitText3">j</div></div>
								<div className="plitText__container"><div className="plitText3">e</div></div>
								<div className="plitText__container"><div className="plitText3">c</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">i</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">'</div></div>
								<div className="plitText__container"><div className="plitText3">s</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<div className="plitText__container"><div className="plitText3">r</div></div>
								<div className="plitText__container"><div className="plitText3">i</div></div>
								<div className="plitText__container"><div className="plitText3">g</div></div>
								<div className="plitText__container"><div className="plitText3">h</div></div>
								<div className="plitText__container"><div className="plitText3">t</div></div>
								<div className="plitText__container"><div className="plitText3">&nbsp;</div></div>
								<Link href={"/random"}>
									<a>
										<div className="plitText__container"><div className="plitText3">h</div></div>
										<div className="plitText__container"><div className="plitText3">e</div></div>
										<div className="plitText__container"><div className="plitText3">r</div></div>
										<div className="plitText__container"><div className="plitText3">e</div></div>
										<div className="plitText__container"><div className="plitText3">i</div></div>
									</a>
								</Link>
							</span>
						</div>
						<div className="container--1" ref={this.containerUnRef}>
							<FinderImage 
								className="vietnam__item--1" 
								ref={this.imageFinderUnRef} 
								url={series[1].pictures[1][indexImg]} 
								isParalax={false}
							/>
							<BigTitle
								className="vietnam__item--2 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleUnRef} 
							/>
							<BigTitle
								className="vietnam__item--3 vietnam__item--13 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleDeuxRef} 
							/>
							<BigTitle
								className="vietnam__item--3 vietnam__item--14 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleTroisRef} 
							/>
							<BigTitle
								className="vietnam__item--3 vietnam__item--15 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleQuatreRef} 
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--2 isFilter"} 
								ref={this.imageFinderDeuxRef} 
								url={series[1].pictures[1][indexImg]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--3 isFilter"} 
								ref={this.imageFinderTroisRef} 
								url={series[1].pictures[1][indexImg]} 
								isParalax={false}
							/>
							<img ref={this.imageUnRef} className={"opacityNull vietnam__item--4"}  src={series[1].pictures[3][indexImg]}/>
							<div className="vietnam__container--bigTitle opacityNull" ref={this.containerBigTitleRef}>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
								<BigTitle
									text={"vietnam"}
								/>
							</div>
						</div>


					
					</div>

				</div>
			</Layout>
		);
	}
}

export default PageWrapper(Vietnam);
