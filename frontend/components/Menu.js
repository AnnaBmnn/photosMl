import React, { Component, Fragment } from "react";
import Header from "./Header.js";
import Link from "next/link";
import { series, home } from "../static/datas/series";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hoverElement: false,
      imgSrc: false
    };

    // interactivity event
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // ref to the DOM node
    this.menuRef = React.createRef();
    this.vietnamRef = React.createRef();
    this.randomRef = React.createRef();
    this.peopleRef = React.createRef();
  }

  handleMouseEnter(hoverElement){
    this.setState({hoverElement: hoverElement});
    const homeInfos = hoverElement ? home.find((element)=> {return element.slug === hoverElement}): home[0];
    const newImgSrc = homeInfos.mainImg === false ? imgSrc : homeInfos.mainImg ;
    this.setState({imgSrc: newImgSrc});
  }

  handleMouseLeave(){
    this.setState({ hoverElement: false });
  }
  

  render() {
    const { hoverElement, imgSrc} = this.state;
    const homeInfos = hoverElement ? home.find((element)=> {return element.slug === hoverElement}): home[0];
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
        <Link href={item.slug} key={item.slug}>
          <a 
            key={item.ID}
            className={`menu__item`}
            ref={refItem? refItem : null}
            onMouseEnter={this.handleMouseEnter.bind(this, item.slug)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
            style={
              {
                color: hoverElement===item.slug? homeInfos.textColor : homeInfos.otherItemColor
              }
            }
          >
            <span>{item.title}</span>
          </a>
        </Link>
      );
    });
  return(
    <div className="menu" ref={this.menuRef} style={{backgroundColor: homeInfos.bgColor}}>
      <div className={`menu__img menu__img--${hoverElement}`}>
        {
          imgSrc ? 
            <img  src={imgSrc} />
          :
            ""
        }
      </div>
      
      <Header             
        style={
          {
            color: homeInfos.otherItemColor
          }
        } 
      />
      {menuItems}
    </div>
    )
  }


}

export default Menu;
