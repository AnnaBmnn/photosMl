import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import { series } from "../static/datas/series";


const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
    console.log(series);
    const menuItems = series.map((item, index) => {
      return (
        <Link href={item.slug} key={item.ID}>
          <a >{item.title}</a>
        </Link>
      );
    });


    return(
      <div>
        {menuItems}
      </div>
    )
  }


}

export default Menu;
