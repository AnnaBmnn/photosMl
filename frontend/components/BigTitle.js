import React, { Component } from "react";
import Link from "next/link";

class BigTitle extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, moreClass, innerRef } = this.props;
    return(
      <h2 className={`bigTitle ${moreClass}`} ref={innerRef} >{text}</h2>
    )
  }


}

export default React.forwardRef((props, ref) => (<BigTitle text={props.text} moreClass={props.className} innerRef={ref} />));

