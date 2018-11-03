import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class About extends Component {
    render() {
        return (
            <Layout>
                <h1>ABOUT</h1>
            </Layout>
        );
    }
}

export default PageWrapper(About);
