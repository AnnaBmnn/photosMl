import React, { Component } from "react";
import SVGInline from "react-svg-inline";
import windowBar from "../static/images/vietnam/window_bar.svg";

class FinderImage extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();  

  }

  paralaxImage(){
    const { width, height, clientX, clientY } = this.props;
    const middleScreenX = width*0.5;
    const middleScreenY = height*0.5;
    const moveX = -40+(middleScreenX - clientX)/(middleScreenX)*10;
    const moveY = -40+(middleScreenY - clientY)/(middleScreenY)*10;
    const ctrans = `scale(1.3) translate(${moveX}%, ${moveY}%) `;
    return { 
      transform: ctrans
    }
  }

  render() {
    const { url, className, isParalax } = this.props;
    // const styleImg = isParalax ? this.paralaxImage(): {transform: `scale(1.3) translate(${-50}%, ${-50}%)`};
    const styleImg =  this.paralaxImage();
    return (
        <div ref={this.props.innerRef} className={`finderImg__container ${className}`} style={styleImg}>
          <SVGInline ref={this.imageRef} svg={ windowBar } />
          <img  src={url} style={styleImg}  />
        </div>

    );
  }
}

export default React.forwardRef((props, ref) => (<FinderImage url={props.url} isParalax={props.isParalax} clientX={props.clientX} clientY={props.clientY} width={props.width} height={props.height}  className={props.className} innerRef={ref} />));