import React, { Component } from "react";

class FilterImage extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();  

  }

  render() {
    const { url, className, innerRef } = this.props;

    return (
        <div ref={innerRef} className={`filterImg__container ${className}`}>
          <img  src={url}  />
          <div className="filter"></div>
        </div>

    );
  }
}

export default ;