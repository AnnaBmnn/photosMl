import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";

class Index extends Component {
    render() {
        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
            </Layout>
        );
    }
}

export default PageWrapper(Index);
