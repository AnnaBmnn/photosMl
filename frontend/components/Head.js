import React, { Component } from "react";
import Head from "next/head";
import stylesheet from '../src/styles/style.scss';
import ReactGA from 'react-ga';

class Header extends Component {
    constructor() {
        super();
    }
    initializeReactGA() {
        ReactGA.initialize('UA-132384836-1');
    }
    componentDidMount(){
        this.initializeReactGA();
    }
    render() {

        return (
            <div>
                <Head lang="en">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport" 
                        content="width=device-width,initial-scale=1,user-scalable=no"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        YO YO YO
                    </title>
                    <meta name="title" content="YO YO YO !"/>
                    <meta name="description" content="Simplistic and playful photos portfolio "/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://yoyoyo.photos/"/>
                    <meta property="og:title" content="YO YO YO !"/>
                    <meta property="og:description" content="Simplistic and playful photos portfolio "/>
                    <meta property="og:image" content="https://yoyoyo.photos/static/vignette.png"/>

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://yoyoyo.photos/" />
                    <meta property="twitter:title" content="YO YO YO !" />
                    <meta property="twitter:description" content="Simplistic and playful photos portfolio " />
                    <meta property="twitter:image" content="https://yoyoyo.photos/static/vignette.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/static/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"></meta>
                </Head>

            </div>
        );
    }
}

export default Header;
