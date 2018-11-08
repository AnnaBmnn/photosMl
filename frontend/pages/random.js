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
        const serie = series.find(serie => serie.slug === "random");
        const {title, pictures} = serie;
        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                <h1>{title}</h1>
            </Layout>
        );
    }
}

export default PageWrapper(Vietnam);
