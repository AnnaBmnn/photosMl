import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";
import { TimelineMax } from "gsap";
import BigTitle from "../components/BigTitle";
import FinderImage from "../components/FinderImage";
import FilterImage from "../components/FilterImage";
import BackButton from "../components/BackButton.js";
import Sunshines from "../components/Sunshines.js";
import Ball from "../components/Ball.js";


class Vietnam extends Component {
	constructor(props) {
		super(props);
		this.state = { scroll: 0 };

		// interactivity event
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
		const containerUnRef = this.containerUnRef.current;
		const containerDeuxRef = this.containerDeuxRef.current;
		const containerTroisRef = this.containerTroisRef.current;
		const containerQuatreRef = this.containerQuatreRef.current;
		const containerCinqRef = this.containerCinqRef.current;
		const containerSixRef = this.containerSixRef.current;
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


		this.vietnamTimeline
			.to(imageFinderUnRef, 0.1, {opacity: 1}, "+=0.3")
			.to(bigTitleUnRef, 0.1, {opacity: 1}, "+=0.6")
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
			.pause();
	}

	render() {
		const serie = series.find(serie => serie.slug === "vietnam");
		const {title, pictures} = serie;

		return (
			<Layout>
				<div className="bigSize" ref={this.containerRef}>
					<BackButton/>
					<div className="container" ref={this.containerRef}>
						<div className="container--2 opacityNull" ref={this.containerDeuxRef}> 
							<FilterImage 
								className={"vietnam__item--5 opacityNull"} 
								ref={this.imageDeuxRef} 
								url={series[1].pictures[4]} 
								isParalax={false}
							/>
							<FilterImage 
								className={"vietnam__item--6 opacityNull"} 
								ref={this.imageTroisRef} 
								url={series[1].pictures[5]} 
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
								url={series[1].pictures[6]} 
								isParalax={false}
							/>
						</div>
						<div className="container--3 opacityNull" ref={this.containerTroisRef}> 
							<FinderImage 
								className={"opacityNull vietnam__item--31"} 
								ref={this.imageFinderTroisUnRef} 
								url={series[1].pictures[7]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--32"} 
								ref={this.imageFinderTroisDeuxRef} 
								url={series[1].pictures[7]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--33"} 
								ref={this.imageFinderTroisTroisRef} 
								url={series[1].pictures[7]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--34"} 
								ref={this.imageFinderTroisQuatreRef} 
								url={series[1].pictures[7]} 
								isParalax={false}
							/>
							<img ref={this.imageTroisUnRef} className={"opacityNull vietnam__item--image31"}  src={series[1].pictures[8]}/>
							<div className="vietnam__containerSunshine">
								<Sunshines className="sunshines--bottom" ref={this.sunshinesUnRef} />
								<Sunshines className="sunshines--top" ref={this.sunshinesDeuxRef} />
								<Sunshines className="sunshines--bottom" ref={this.sunshinesTroisRef} />
								<Sunshines className="sunshines--top" ref={this.sunshinesQuatreRef} />
								<Sunshines className="sunshines--bottom" ref={this.sunshinesCinqRef} />
							</div>
						</div>
						<div className="container--4 opacityNull" ref={this.containerQuatreRef}> 
							<img ref={this.imageQuatreUnRef} className={" vietnam__imageEmboite vietnam__image41"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreDeuxRef} className={"opacityNull vietnam__imageEmboite vietnam__image42"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreTroisRef} className={"opacityNull vietnam__imageEmboite vietnam__image43"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreQuatreRef} className={"opacityNull vietnam__imageEmboite vietnam__image44"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreCinqRef} className={"opacityNull vietnam__imageEmboite vietnam__image45"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreSixRef} className={"opacityNull vietnam__imageEmboite vietnam__image46"}  src={series[1].pictures[9]}/>
							<img ref={this.imageQuatreSeptRef} className={"opacityNull vietnam__imageEmboite vietnam__image47"}  src={series[1].pictures[9]}/>
						</div>
						<div className="container--5 opacityNull" ref={this.containerCinqRef}> 
							<div className={"vietnam__squareColumn"}>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqUnRef} >
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}   src={series[1].pictures[10]}/>
								</div>
								<div className={"vietnam__square "}>
									<img  className={"vietnam__squareImg "}  src={series[1].pictures[10]}/>
								</div>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqDeuxRef} >
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[10]}/>
								</div>
							</div>
							<div className={"vietnam__squareColumn"}>
								<div className={"vietnam__square"}>
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[11]}/>
								</div>
								<div className={"vietnam__square opacityNull"} ref={this.imageCinqTroisRef} >
									<img className={"vietnam__squareImg"}  src={series[1].pictures[11]}/>
								</div>
								<div className={"vietnam__square"}>
									<img className={"vietnam__squareImg vietnam__squareImg--mirror"}  src={series[1].pictures[11]}/>
								</div>
							</div>
						</div>
						<div className="container--6 opacityNull" ref={this.containerSixRef}> 
							<FilterImage 
								className={""} 
								url={series[1].pictures[12]} 
								isParalax={false}
								className={`vietnam__item--61`}
								ref={this.imageSixUnRef}
							/>
							<FilterImage 
								url={series[1].pictures[13]} 
								isParalax={false}
								className={`vietnam__item--62 opacityNull`}
								ref={this.imageSixDeuxRef}
							/>
							<img ref={this.imageSixTroisRef} className={`vietnam__item--63 opacityNull`}  src={series[1].pictures[14]}/>
							
							<Ball text={"xin chào"} ref={this.ballSixUnRef} className={`vietnam__ball--61`} />
							<Ball text={"xin chào"} ref={this.ballSixUnRef} className={`vietnam__ball--62`}  />
						</div>						
						<div className="container--1" ref={this.containerUnRef}>
							<FinderImage 
								className={"opacityNull vietnam__item--1"} 
								ref={this.imageFinderUnRef} 
								url={series[1].pictures[1]} 
								isParalax={false}
							/>
							<BigTitle
								className="vietnam__item--2 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleUnRef} 
							/>
							<BigTitle
								className="vietnam__item--3 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleDeuxRef} 
							/>
							<BigTitle
								className="vietnam__item--3 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleTroisRef} 
							/>
							<BigTitle
								className="vietnam__item--3 bigTitle--yellow opacityNull"
								text={"vietnam"}
								ref={this.bigTitleQuatreRef} 
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--2 isFilter"} 
								ref={this.imageFinderDeuxRef} 
								url={series[1].pictures[1]} 
								isParalax={false}
							/>
							<FinderImage 
								className={"opacityNull vietnam__item--3 isFilter"} 
								ref={this.imageFinderTroisRef} 
								url={series[1].pictures[1]} 
								isParalax={false}
							/>
							<img ref={this.imageUnRef} className={"opacityNull vietnam__item--4"}  src={series[1].pictures[3]}/>
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
