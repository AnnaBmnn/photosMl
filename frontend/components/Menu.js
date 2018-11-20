import React, { Component, Fragment } from "react";
import Link from "next/link";
import { TimelineLite } from "gsap";
import { series } from "../static/datas/series";
import FinderImage from "./FinderImage";
import { Z_BLOCK } from "zlib";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hoverElement: false,
      isAnimated: false,
      width: 0, 
      height: 0, 
      clientX: 0, 
      clientY: 0
    };

    // interactivity event
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    // ref to the DOM node
    this.menuRef = React.createRef();
    this.cursorRef = React.createRef();
    this.vietnamRef = React.createRef();
    this.randomRef = React.createRef();
    this.peopleRef = React.createRef();
    this.peopleImgRef = React.createRef();
    this.finderImageUnRef = React.createRef();
    this.finderImageDeuxRef = React.createRef();
    this.finderImageTroisRef = React.createRef();
    this.finderImageQuatreRef = React.createRef();
    

    // ref to the animation
    this.vietnamImageTimeline = new TimelineLite();
    this.peopleTimeline = new TimelineLite();
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
    let callback;
    console.log({hoverElement});
    if(prevState.hoverElement === "random" && hoverElement === "people"){
      this.animateForPeople();
    }
    if(prevState.hoverElement === "people" && hoverElement === "random"){
      this.peopleTimeline.reverse();      
    }
    if(prevState.hoverElement === "random" && hoverElement === "vietnam"){
      this.animateForVietnam();
    }
    if(prevState.hoverElement === "vietnam" && hoverElement === "random"){
      this.vietnamImageTimeline.reverse();      
    }
    if(prevState.hoverElement === "vietnam" && hoverElement === "people"){
      callback = this.animateForPeople();
      console.log("prev vietnam");
      this.vietnamImageTimeline.eventCallback("onReverseComplete", callback);
      this.vietnamImageTimeline.reverse();
    }
    if(prevState.hoverElement === "vietnam" && !hoverElement){
      console.log("prev");
      this.vietnamImageTimeline.eventCallback("onReverseComplete", null);
      this.vietnamImageTimeline.reverse();
    }
    if(!prevState.hoverElement  && hoverElement === "vietnam"){
      this.animateForVietnam();
    }
    if(prevState.hoverElement === "people" && hoverElement === "vietnam"){
      console.log("prev people");
      callback = this.animateForVietnam();
      this.peopleTimeline.eventCallback("onReverseComplete", callback);
      this.peopleTimeline.reverse();
    }
    if(prevState.hoverElement === "people" && !hoverElement){
      this.peopleTimeline.eventCallback("onReverseComplete", null);
      this.peopleTimeline.reverse();
    }
    if(!prevState.hoverElement  && hoverElement === "people"){
      this.animateForPeople();
    }
  }


  handleMouseEnter(hoverElement){
    this.setState({hoverElement: hoverElement});
  }

  handleMouseLeave(){
    this.setState({ hoverElement: false });
  }

  handleMouseMove(e){
    const { hoverElement, isCursorMoving } = this.state;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if( hoverElement === "vietnam" ||  hoverElement === "people" ){
      this.setState({clientX: clientX, clientY: clientY})
    }
  }
  
  animateForPeople(){
    const menuRef = this.menuRef.current;
    const cursorRef = this.cursorRef.current;
    const peopleRef = this.peopleRef.current;
    const vietnamRef = this.vietnamRef.current;
    const randomRef = this.randomRef.current;
    const peopleImgRef = this.peopleImgRef.current;
    
    this.peopleTimeline
      .to(peopleRef, 0.1, {transform: "scaleY(8.4) scaleX(2.3)"})
      .to(cursorRef, 0.1, {opacity: 1}, "-=0.1")
      .to(peopleRef, 0.1, {color: "rgba(255,255,255, 1)"}, "-=0.1")
      .to(peopleImgRef, 0.1, {opacity: 1}, "-=0.1")
      .to(vietnamRef, 0.1, {transform: "translateY(200px)", color: "rgba(255,255,255,0.37)"}, "-=0.1")
      .to(randomRef, 0.1, {transform: "translateY(200px)", color: "rgba(255,255,255,0.37)"}, "-=0.1")
      .play();
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
      .set(vietnamRef, {zIndex: 200})
      .to(menuRef, 0.5, {backgroundColor: "#CE283F"})
      .to(peopleRef, 0.5, {opacity: 0.4}, "-=0.4")
      .to(randomRef, 0.5, {opacity: 0.4},"-=0.4")
      .to(vietnamRef, 0.5, {paddingTop: 150, paddingBottom: 150},"-=0.4")
      .to(finderImageUnRef, 0.5, {bottom: "20%", right: "34%"},"-=0.4")
      .to(finderImageDeuxRef, 0.5, {bottom: "25%", left: "58%"}, "-=0.4")
      .to(finderImageTroisRef, 0.5, {top: "70%", left: "55%"}, "-=0.4")
      .to(finderImageQuatreRef, 0.5, {top: "65%", right: "38%"}, "-=0.4")
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
      <span 
        style={
          {
            transform: `translateX(${clientX-100}px) translateY(${clientY-100}px)`
          }
        } 
        className={`menu__cursor menu__cursor--blue `}
        ref={this.cursorRef} 
      />
      <img ref={this.peopleImgRef} className="people__item" src={series[0].pictures[9][0]}  />
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--1"} 
        ref={this.finderImageUnRef} 
        url={series[1].pictures[0]} 
        clientX={clientX}
        clientY={clientY}
        signX={"-"}
        signY={"-"}
        posX={-50}
        posY={-30}
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
        signX={"+"}
        signY={"-"}
        posX={-50}
        posY={-30}
        width={width}
        height={height}
        isParalax={isParalax}
      />
      <FinderImage 
        className={"finderImageVietnam finderImageVietnam--3"} 
        ref={this.finderImageTroisRef} 
        url={series[1].pictures[0]}
        signX={"+"}
        signY={"+"}
        clientX={clientX}
        clientY={clientY}
        posX={-55}
        posY={-50}
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
        signX={"-"}
        signY={"+"}
        posX={-50}
        posY={-55}
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
