import React, { Component } from "react";
import Head from "next/head";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        const {url} = this.props;
        return (
            <div className="finderImg__container">
                <img className="finderImg__container" src={url} />
            </div>
        );
    }
}

export default Header;