import React, { Component } from "react";
import SVGInline from "react-svg-inline";
import windowBar from "../static/images/vietnam/window_bar.svg";

class FinderImage extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();  

  }

  paralaxImage(){
    const { width, height, clientX, clientY, posX, posY } = this.props;
    const middleScreenX = width*0.5;
    const middleScreenY = height*0.5;
    const moveX = posX+(middleScreenX - clientX)/(middleScreenX)*10;
    const moveY = posY+(middleScreenY - clientY)/(middleScreenY)*10;
    const ctrans = `scale(1) translate(${moveX}%, ${moveY}%) `;
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
    const ctrans = `scale(1) translate(${moveX}%, ${moveY}%) `;
    return { 
      transform: ctrans
    }
  }

  render() {
    const { url, className, isParalax, innerRef } = this.props;
    // const styleImg = isParalax ? this.paralaxImage(): {transform: `scale(1.3) translate(${-50}%, ${-50}%)`};
    const styleImg =  this.paralaxImage();
    const styleImgContainer =  this.paralaxImageContainer();
    return (
        <div ref={innerRef} className={`finderImg__container ${className}`} style={styleImgContainer}>
          <div className="finderImg__windowBar">
            <SVGInline ref={this.imageRef} svg={ windowBar } />
          </div>
          <img  src={url} style={styleImg}  />
          <div className="filter"></div>
        </div>

    );
  }
}

export default React.forwardRef((props, ref) => (<FinderImage url={props.url} isParalax={props.isParalax} posX={props.posX} posY={props.posY} signX={props.signX} signY={props.signY} clientX={props.clientX} clientY={props.clientY} width={props.width} height={props.height}  className={props.className} innerRef={ref} />));