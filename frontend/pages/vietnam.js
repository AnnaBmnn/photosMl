import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import { series } from "../static/datas/series";

class Vietnam extends Component {
    render() {
        const serie = series.find(serie => serie.slug === "vietnam");
        const {title, pictures} = serie;
        console.log(serie);
        return (
            <Layout>
                <h1>{title}</h1>
                <img src={pictures[0]} />
            </Layout>
        );
    }
}

export default PageWrapper(Vietnam);
