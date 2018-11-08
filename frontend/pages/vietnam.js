import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";
import { TimelineMax } from "gsap";
import BigTitle from "../components/BigTitle";
import FinderImage from "../components/FinderImage";


class Vietnam extends Component {
	constructor(props) {
		super(props);
		this.state = { scroll: 0 };

		// interactivity event
		this.handleScroll = this.handleScroll.bind(this);

		// ref to the DOM node
		this.imageUnRef = React.createRef();
		this.imageDeuxRef = React.createRef();
		this.imageTroisRef = React.createRef();
		this.bigTitleUnRef = React.createRef();
		this.bigTitleDeuxRef = React.createRef();
		this.bigTitleTroisRef = React.createRef();
		this.bigTitleQuatreRef = React.createRef();
		this.containerRef = React.createRef();

		// ref to the animation
		this.vietnamTimeline = new TimelineMax();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.initTimeline();		
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
	}
	
	handleScroll(e){
		const scroll = window.scrollY;
		const windowHeight = window.innerHeight;
		const containerRef = this.containerRef.current;
		const containerHeight = containerRef.getBoundingClientRect().height;
		const ratio = (scroll)/(containerHeight-windowHeight);
		this.vietnamTimeline.progress(ratio);
	}

	initTimeline() {
		const imageUnRef = this.imageUnRef.current;
		const imageDeuxRef = this.imageDeuxRef.current;
		const imageTroisRef = this.imageTroisRef.current;
		const bigTitleUnRef = this.bigTitleUnRef.current;
		const bigTitleDeuxRef = this.bigTitleDeuxRef.current;
		const bigTitleTroisRef = this.bigTitleTroisRef.current;
		const bigTitleQuatreRef = this.bigTitleQuatreRef.current;

		this.vietnamTimeline
			.to(imageUnRef, 0.1, {opacity: 1}, "+=0.3")
			.to(bigTitleUnRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleDeuxRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleTroisRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleQuatreRef, 0.1, {opacity: 1}, "+=0.6")
			.to(bigTitleUnRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "+=0.6")
			.to(bigTitleDeuxRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(bigTitleTroisRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(bigTitleQuatreRef, 0.1, { color: "#CE283F", textShadow: "-1px -1px 0 #FDD838,  1px -1px 0 #FDD838, -1px 1px 0 #FDD838, 1px 1px 0 #FDD838"}, "-=0.1")
			.to(imageUnRef, 0.1, {className:"+=isFilter"}, "+=0.6")
			.to(imageDeuxRef, 0.1, {opacity: 1}, "+=0.3")
			.to(imageTroisRef, 0.1, {opacity: 1}, "+=0.3")
			.pause();
	}

	render() {
		const serie = series.find(serie => serie.slug === "vietnam");
		const {title, pictures} = serie;

		return (
			<Layout>
				<div className="bigSize" ref={this.containerRef}>
					<div className="container" ref={this.containerRef}>
						<FinderImage 
							className={"opacityNull vietnam__item--1"} 
							ref={this.imageUnRef} 
							url={series[1].pictures[1]} 
							isParalax={false}
						/>
						<BigTitle
							className="vietnam__item--2 opacityNull"
							text={"vietnam"}
							ref={this.bigTitleUnRef} 
						/>
						<BigTitle
							className="vietnam__item--3 opacityNull"
							text={"vietnam"}
							ref={this.bigTitleDeuxRef} 
						/>
						<BigTitle
							className="vietnam__item--3 opacityNull"
							text={"vietnam"}
							ref={this.bigTitleTroisRef} 
						/>
						<BigTitle
							className="vietnam__item--3 opacityNull"
							text={"vietnam"}
							ref={this.bigTitleQuatreRef} 
						/>
						<FinderImage 
							className={"opacityNull vietnam__item--2 isFilter"} 
							ref={this.imageDeuxRef} 
							url={series[1].pictures[1]} 
							isParalax={false}
						/>
						<FinderImage 
							className={"opacityNull vietnam__item--3 isFilter"} 
							ref={this.imageTroisRef} 
							url={series[1].pictures[1]} 
							isParalax={false}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default PageWrapper(Vietnam);
