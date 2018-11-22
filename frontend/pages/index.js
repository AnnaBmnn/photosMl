import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import Header from "../components/Header.js";
import Menu from "../components/Menu.js";

class Index extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Menu menu={this.props.headerMenu} />
            </Layout>
        );
    }
}

export default PageWrapper(Index);
