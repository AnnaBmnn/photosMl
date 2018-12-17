import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import ScrollingBanner from "../components/ScrollingBanner";
import BackButton from "../components/BackButton.js";


const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class About extends Component {
    render() {
        return (
            <Layout>
                <div className="about">
					<BackButton/>

                    <div className="about__container">
                        <div className="about__dontTrustTitle">don't trust people in the cyber world.</div>
                    </div>
                    <ScrollingBanner
                        moreClass={`scrollingBanner--about`}
                        text={"about"}
                    />
                    <div className="about__container about__container--2">
                        <div className="about__explanation">
                            This is a collaboration project
                            between interactive designer 
                            <div className="about__fullLine">Marie-Lise Ton</div>
                            and front-end developper
                            
                            <div className="about__fullLine">Anna Baumann.</div>
                            
                        </div>
                        <div className="about__credit">
                            <div className="about__creditColumn">
                                <div className="about__creditTitle">Socials</div>
                                <div className="about__creditGroup">
                                    <div className="about__creditGroupTitle">
                                        Marie-Lise Ton
                                    </div>
                                    <Link href={"/"} >
                                        <a className="about__creditGroupText">
                                            Instagram
                                        </a>
                                    </Link>
                                    <Link href={"/"} >
                                        <a className="about__creditGroupText">
                                            Linkedin
                                        </a>
                                    </Link>
                                </div>
                                <div className="about__creditGroup">
                                    <div className="about__creditGroupTitle">
                                        Anna Baumann
                                    </div>
                                    <Link href={"/"} >
                                        <a className="about__creditGroupText">
                                            Instagram
                                        </a>
                                    </Link>
                                    <Link href={"/"} >
                                        <a className="about__creditGroupText">
                                            Linkedin
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="about__creditColumn">
                                <div className="about__creditTitle">Credits</div>
                                <div className="about__creditGroup">
                                    <div className="about__creditGroupText">
                                        Pictures
                                    </div>
                                    <div className="about__creditGroupText">
                                        Marie-Lise Ton
                                    </div>
                                </div>
                                <div className="about__creditGroup">
                                    <div className="about__creditGroupText">
                                        Font
                                    </div>
                                    <div className="about__creditGroupText">
                                        Lucas Decroix
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(About);
