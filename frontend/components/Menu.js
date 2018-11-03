import React, { Component } from "react";
import Link from "next/link";

import { series } from "../static/datas/series";

class Menu extends Component {
  constructor() {
      super();
  }

  render() {
    const menuItems = series.map((item, index) => {
      return (
        <Link href={item.slug} key={item.ID}>
          <a >{item.title}</a>
        </Link>
      );
    });
  return(
      <div className="menu">
        {menuItems}
      </div>
    )
  }


}

export default Menu;
