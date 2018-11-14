import React, { Component } from "react";
import SVGInline from "react-svg-inline";
import windowBar from "../static/images/vietnam/window_bar.svg";
import titleBar from "../static/images/vietnam/title_bar.svg";
import trafficLight from "../static/images/vietnam/traffic_light.svg";

class FinderImage extends Component {
  constructor(props) {
    super(props);

  }

  paralaxImage(){
    const { width, height, clientX, clientY, posX, posY } = this.props;
    const middleScreenX = width*0.5;
    const middleScreenY = height*0.5;
    const moveX = posX+(middleScreenX - clientX)/(middleScreenX)*10;
    const moveY = posY+(middleScreenY - clientY)/(middleScreenY)*10;
    const ctrans = `scale(1) translate3d(${moveX}%, ${moveY}%, 1px) `;
    return { 
      transform: ctrans
    }
  }

  paralaxImageContainer(){
    const { width, height, clientX, clientY, signX, signY} = this.props;
    const middleScreenX = width*0.5;
    const middleScreenY = height*0.5;
    const moveX = signX === "-" ? -40-Math.abs(middleScreenX - clientX)/(middleScreenX)*10 : -40+Math.abs(middleScreenX - clientX)/(middleScreenX)*10;
    const moveY = signY === "-" ? -40-Math.abs(middleScreenY - clientY)/(middleScreenY)*10 : -40+Math.abs(middleScreenY - clientY)/(middleScreenY)*10;
    const ctrans = `scale(1) translate3d(${moveX}%, ${moveY}%, 1px) `;
    return { 
      transform: ctrans
    }
  }

  render() {
    const { url, className, isParalax, innerRef } = this.props;
    const styleImg =  this.paralaxImage();
    const styleImgContainer =  this.paralaxImageContainer();
    return (
        <div ref={innerRef} className={`finderImg__container ${className}`} style={styleImgContainer}>
          <div className="finderImg__windowBar">
            <SVGInline className="finderImage__bar" svg={ windowBar } />
            <SVGInline className="finderImage__titleBar" svg={ titleBar } />
            <SVGInline className="finderImage__trafficLight" svg={ trafficLight } />
          </div>
          <img  src={url} style={styleImg}  />
          <div className="filter"></div>
        </div>

    );
  }
}

export default React.forwardRef((props, ref) => (<FinderImage url={props.url} isParalax={props.isParalax} posX={props.posX} posY={props.posY} signX={props.signX} signY={props.signY} clientX={props.clientX} clientY={props.clientY} width={props.width} height={props.height}  className={props.className} innerRef={ref} />));