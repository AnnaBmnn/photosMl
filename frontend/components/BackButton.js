import React, { Component } from "react";
import Link from "next/link";
import SVGInline from "react-svg-inline";
import backSvg from "../static/images/common/back.svg";


class BackButton extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, className, innerRef } = this.props
    return(
        <Link href={"/"} >
            <a className="backButton__container">
                <SVGInline className="backButton__svg backButton__svg--top" svg={ backSvg } />
                <SVGInline className="backButton__svg backButton__svg--bottom" svg={ backSvg } />
            </a>
        </Link>
    )
  }


}

export default BackButton;

