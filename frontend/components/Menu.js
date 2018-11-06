import React, { Component, Fragment } from "react";
import Link from "next/link";
import { TweenLite, TimelineLite } from "gsap";
import { series } from "../static/datas/series";
import FinderImage from "./FinderImage";
import { Z_BLOCK } from "zlib";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {hoverElement: false, width: 0, height: 0, clientX: 0, clientY: 0 };

    // interactivity event
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    // ref to the DOM node
    this.menuRef = React.createRef();
    this.vietnamRef = React.createRef();
    this.randomRef = React.createRef();
    this.peopleRef = React.createRef();
    this.finderImageUnRef = React.createRef();
    this.finderImageDeuxRef = React.createRef();
    this.finderImageTroisRef = React.createRef();
    this.finderImageQuatreRef = React.createRef();
    

    // ref to the animation
    this.vietnamMenuTimeline = new TimelineLite();
    this.vietnamImageTimeline = new TimelineLite();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidUpdate(prevProps, prevState){
    const { hoverElement } = this.state;

    if(prevState.hoverElement !== "vietnam" && hoverElement === "vietnam"){
      this.animateForVietnam();

    }
    if(prevState.hoverElement === "vietnam" && hoverElement !== "vietnam"){
      this.vietnamMenuTimeline.reverse();
      this.vietnamImageTimeline.reverse();
    }
  }

  handleMouseEnter(hoverElement){
    this.setState({hoverElement: hoverElement});
  }

  handleMouseLeave(){
    this.setState({ hoverElement: false });
  }

  handleMouseMove(e){
    const { hoverElement } = this.state;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if( hoverElement === "vietnam" ){
      this.setState({clientX: clientX, clientY: clientY})
    }
  }
  
  animateForVietnam(){
    const menuRef = this.menuRef.current;
    const peopleRef = this.peopleRef.current;
    const vietnamRef = this.vietnamRef.current;
    const randomRef = this.randomRef.current;
    const finderImageUnRef = this.finderImageUnRef.current;
    const finderImageDeuxRef = this.finderImageDeuxRef.current;
    const finderImageTroisRef = this.finderImageTroisRef.current;
    const finderImageQuatreRef = this.finderImageQuatreRef.current;

    this.vietnamImageTimeline
      .set(finderImageUnRef, {opacity: 1})
      .set(finderImageDeuxRef, {opacity: 1})
      .set(finderImageTroisRef, {opacity: 1})
      .set(finderImageQuatreRef, {opacity: 1})
      .to(finderImageUnRef, 0.5, {bottom: "30%", right: "20%"})
      .to(finderImageDeuxRef, 0.5, {bottom: "40%", left: "35%"}, "-=0.5")
      .to(finderImageTroisRef, 0.5, {top: "60%", left: "50%"}, "-=0.5")
      .to(finderImageQuatreRef, 0.5, {top: "40%", right: "40%"}, "-=0.5")
      .play();

    this.vietnamMenuTimeline
      .set(vietnamRef, {zIndex: 200})
      .to(menuRef, 0.5, {backgroundColor: "#CE283F"})
      .to(peopleRef, 0.3, {top:-100, opacity: 0.4}, "-=0.3")
      .to(randomRef, 0.3, {top:100, opacity: 0.4},"-=0.3")
      .play();
  }

  render() {
    const { hoverElement, height, width, clientX, clientY } = this.state;
    const isParalax = hoverElement ? true : false;
    const menuItems = series.map((item, index) => {
      let refItem = null;
      if (item.slug === "vietnam"){
        refItem = this.vietnamRef;
      }
      if (item.slug === "people"){
        refItem = this.peopleRef;
      }
      if (item.slug === "random"){
        refItem = this.randomRef;
      }
      return (
        <Link href={item.slug} key={item.ID}>
          <a 
            className="menu__item"
            ref={refItem? refItem : null}
            onMouseEnter={this.handleMouseEnter.bind(this, item.slug)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
          >
            {item.title}
          </a>
        </Link>
      );
    });
  return(
    <div className="menu" ref={this.menuRef} onMouseMove={this.handleMouseMove.bind(this)}>
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--1"} 
        ref={this.finderImageUnRef} 
        url={series[1].pictures[0]} 
        clientX={clientX}
        clientY={clientY}
        width={width}
        height={height}
        isParalax={isParalax}
      />
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--2"} 
        ref={this.finderImageDeuxRef} 
        url={series[1].pictures[0]} 
        clientX={clientX}
        clientY={clientY}
        width={width}
        height={height}
        isParalax={isParalax}
      />
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--3"} 
        ref={this.finderImageTroisRef} 
        url={series[1].pictures[0]} 
        clientX={clientX}
        clientY={clientY}
        width={width}
        height={height}
        isParalax={isParalax}
      />
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--4"} 
        ref={this.finderImageQuatreRef} 
        url={series[1].pictures[0]} 
        clientX={clientX}
        clientY={clientY}
        width={width}
        height={height}
        isParalax={isParalax}
      />
      {menuItems}
    </div>
    )
  }


}

export default Menu;
