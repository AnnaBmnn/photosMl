import React, { Component } from "react";
import Link from "next/link";
import SVGInline from "react-svg-inline";
import backSvg from "../static/images/common/back2black.svg";


class BackButton extends Component {
  constructor() {
      super();
  }

  render() {
    return(

        <Link href={"/"} >
            <a className="backButton__container">
                <SVGInline className="backButton__svg" svg={ backSvg } />
            </a>
        </Link>
    )
  }


}

export default BackButton;

