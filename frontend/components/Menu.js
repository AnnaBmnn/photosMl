import React, { Component } from "react";
import Link from "next/link";
import { TweenLite, TimelineLite } from "gsap";
import { series } from "../static/datas/series";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {hoverElement: false};
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    // ref to the DOM node
    this.menuRef = React.createRef();
    this.vietnamRef = React.createRef();
    this.randomRef = React.createRef();
    this.peopleRef = React.createRef();
    // ref to the animation
    this.vietnamMenuTimeline = new TimelineLite();
    this.vietnamTimeline = new TimelineLite();
  }

  // componentDidMount(){
  //   this.setAnimationForVietnam();
  // }

  handleMouseEnter(hoverElement){
    this.setState({hoverElement: hoverElement});
  }

  handleMouseLeave(){
    this.setState({hoverElement: false});
  }

  componentDidUpdate(prevProps, prevState){
    const {hoverElement} = this.state;

    if(prevState.hoverElement !== "vietnam" && hoverElement === "vietnam"){
      console.log("animate");
      this.animateForVietnam();

    }
    if(prevState.hoverElement === "vietnam" && hoverElement !== "vietnam"){
      console.log("stop");
      this.vietnamMenuTimeline.reverse();
    }
  }

  animateForVietnam(){
    const menuRef = this.menuRef.current;
    const peopleRef = this.peopleRef.current;
    const vietnamRef = this.vietnamRef.current;
    const randomRef = this.randomRef.current;

    this.vietnamMenuTimeline
      .to(menuRef, 0.5, {backgroundColor: "#CE283F"})
      .to(peopleRef, 0.3, {top:-100, opacity: 0.4}, "-=0.3")
      .to(randomRef, 0.3, {top:100, opacity: 0.4},"-=0.3")
      .play();
  }

  render() {
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
      <div className="menu" ref={this.menuRef} >
        {menuItems}
      </div>
    )
  }


}

export default Menu;
