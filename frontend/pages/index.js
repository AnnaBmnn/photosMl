import Layout from "../components/Layout.js";
import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import MenuMobile from "../components/MenuMobile.js";
import ReactGA from 'react-ga';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 10001, 
            height: 0
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    initializeReactGA() {
        ReactGA.pageview('/home');
    }
    componentDidMount() {
        this.updateWindowDimensions();
        this.initializeReactGA();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const {width} = this.state;
        return (
            <Layout>
                {
                    width > 1000 
                    ?
                    <Menu />
                    :
                    <MenuMobile/>
                }
            </Layout>
        );
    }
}

export default Index;
