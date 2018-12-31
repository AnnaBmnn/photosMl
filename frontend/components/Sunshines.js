import React, { Component } from "react";

class Sunshines extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();  

  }

  render() {
    const { innerRef, className } = this.props;
    return (
        <div ref={innerRef} className={`sunshines ${className}`}>
          <span className="sunshines__sun"><img src="static/images/vietnam/sun_vietnam.png" /></span>
          <span className="sunshines__sun"><img src="static/images/vietnam/sun_vietnam.png" /></span>
          <span className="sunshines__sun"><img src="static/images/vietnam/sun_vietnam.png" /></span>
          <span className="sunshines__sun"><img src="static/images/vietnam/sun_vietnam.png" /></span>
        </div>

    );
  }
}

export default React.forwardRef((props, ref) => (<Sunshines className={props.className} innerRef={ref ? ref : null} />));
