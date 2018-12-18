import Layout from "../components/Layout.js";
import React, { Component } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import ScrollingBanner from "../components/ScrollingBanner";
import BackButton from "../components/BackButton.js";


class About extends Component {
    constructor(props) {
        super(props);
		this.state = { 
            lastScroll: 0,
            diffScroll: 0,
            isScrolling: false
		};
        // interactivity event
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('mousewheel', this.handleScroll);
  	}

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
		window.addEventListener('mousewheel', this.handleScroll);
        
    }

	handleScroll(e){
        const { lastScroll, isScrolling } = this.state;
        const scrollY = window.scrollY;
        const diff = lastScroll - scrollY;
        this.setState({diffScroll: diff});
        this.setState({lastScroll: scrollY});
	}

    render() {
        const { diffScroll } = this.state;
        const transformStyle =  { transform: `skewX(${diffScroll*0.18}deg)` }  ;
        return (
            <Layout>
                <div className="about">
					<BackButton/>

                    <div className="about__container">
                        <div className="about__dontTrustTitle animate" style={transformStyle}>don't trust people in the cyber world.</div>
                    </div>
                    <ScrollingBanner
                        moreClass={`scrollingBanner--about`}
                        text={"about"}
                    />
                    <div className="about__container about__container--2">
                        <div className="about__explanation animate" style={transformStyle}>
                            This is a collaboration project
                            between interactive designer 
                            <div className="about__fullLine">Marie-Lise Ton</div>
                            and front-end developper
                            
                            <div className="about__fullLine">Anna Baumann.</div>
                            
                        </div>
                        <div className="about__credit">
                            <div className="about__creditColumn animate" style={transformStyle}>
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
                            <div className="about__creditColumn animate" style={transformStyle}>
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

                    <div className={`scrollingBanner scrollingBanner--about2`}>
                        <div className={`scrollingBanner__text`}>
                            <span>Thank you for your visit  😊😊😊</span>
                            <span>Vielen Dank für ihren besuch 😊😊😊</span>
                            <span>Merci de votre visite 😊😊😊</span>
                        </div>
                        <div className={`scrollingBanner__text`}>
                            <span>Thank you for your visit  😊😊😊</span>
                            <span>Vielen Dank für ihren besuch 😊😊😊</span>
                            <span>Merci de votre visite 😊😊😊</span>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(About);
