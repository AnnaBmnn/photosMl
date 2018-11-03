import React, { Component } from "react";
import Link from "next/link";
import { series } from "../static/datas/series";

class Header extends Component {
  constructor() {
      super();
  }

  render() {
    return(
        <Link  href={"about"}>
          <a className="header__item">About</a>
        </Link>
    )
  }


}

export default Header;
