import React, { Component } from "react";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();  

  }

  render() {
    const { innerRef, className } = this.props;
    return (
        <div ref={innerRef} className={`${className} ball`}>
            {this.props.text}
        </div>
    );
  }
}

export default React.forwardRef((props, ref) => (<Ball className={props.className} text={props.text} innerRef={ref ? ref : null} />));
