import React, { Component } from "react";
import Link from "next/link";
import { series } from "../static/datas/series";

class Header extends Component {
  constructor(props) {
    super(props);
    const defaultProps = {
      style: false
    }
  }

  render() {
    const {style} = this.props;
    return(
        <Link  href={"about"} >
          <a className="header__item" style={style}>About</a>
        </Link>
    )
  }


}

export default Header;
