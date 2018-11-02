import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import { series } from "../static/datas/series";

class Vietnam extends Component {
    render() {
        const serie = series.find(serie => serie.slug === "vietnam");
        const {title, pictures} = serie;
        console.log(serie);
        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                <h1>{title}</h1>
                <img src={pictures[0]} />
            </Layout>
        );
    }
}

export default PageWrapper(Vietnam);
