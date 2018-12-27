import React, { Component } from "react";
import Head from "next/head";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport" 
                        content="width=device-width,initial-scale=1,user-scalable=no"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        PHOTOS
                    </title>
                </Head>
            </div>
        );
    }
}

export default Header;
