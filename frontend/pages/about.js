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
            trueHeight: 0,
            disableScroll: false
        };
        
        // interactivity event
        this.handleScroll = this.handleScroll.bind(this);

        // ref to the dom
		this.containerImageRef = React.createRef();

    }

    componentDidMount() {
        const that = this;
        this.setState({trueHeight: that.containerImageRef.current.clientHeight*2})
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(that.handleScroll);
        }, false);
  	}

    componentWillUnmount() {
        window.removeEventListener('scroll', that.handleScroll);
        
    }

	handleScroll(e){
        const {trueHeight, disableScroll} = this.state ;
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const that = this;

        if (!disableScroll) {
        
            if(scrollPos > trueHeight) {
                window.scrollTo({top: 1});
                that.setState({disableScroll: true});
            }
            if(scrollPos <= 1) {
                window.scrollTo({top: trueHeight});
            }
        }

        if (disableScroll) {
        const that = this;

          // Disable scroll-jumping for a short time to avoid flickering
            window.setTimeout(function () {
                that.setState({disableScroll: false});
            }, 40);
        }
	}

    render() {
        const { diffScroll } = this.state;
        return (
            <Layout>
                <div className="about">
					<BackButton/>
                    <div className="about__explanation animate">
                        This is a collaboration project
                        between interactive designer 
                        <Link href={"https://www.instagram.com/yo.marielise/"}><a className="about__fullLine about__name"><span>Marie-Lise Ton</span></a></Link>
                        and front-end developper
                        
                        <Link href={"https://annabaumann.fr"}><a className="about__fullLine about__name"><span>Anna Baumann.</span></a></Link>
                    </div>
                    <div className={`about__credit`}>
                        <div>Photos and Videos by Marie-Lise TON</div>
                        <div>Fonts by Lucas Descroix</div>
                    </div>
                    <div className="about__line">
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                        <span>DON’T TRUST PEOPLE IN THE CYBER WORLD</span>
                    </div>
                    <div className="about__container" ref={this.containerImageRef}>
                        <img src={"static/images/about/ml.png"} />
                        <img src={"static/images/about/anna.png"} />
                    </div>
                    <div className="about__container" >
                        <img src={"static/images/about/ml.png"} />
                        <img src={"static/images/about/anna.png"} />
                    </div>
                    <div className="about__container" ref={this.containerImageRef}>
                        <img src={"static/images/about/ml.png"} />
                        <img src={"static/images/about/anna.png"} />
                    </div>
                    <div className="about__container" >
                        <img src={"static/images/about/ml.png"} />
                        <img src={"static/images/about/anna.png"} />
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
