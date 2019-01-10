import React, { Component, Fragment } from "react";
import Link from "next/link";
import SVGInline from "react-svg-inline";
import trafficLight from "../static/images/vietnam/traffic_light.svg";
import arrow from "../static/images/common/triangle.svg";


class GotBored extends Component {
    constructor() {
        super();
        this.state = {
            isBored: false
        }
        this.timeOutFirst = false;
        this.timeOutSecond = false;

        this.handleClickClose = this.handleClickClose.bind(this);
    }

    componentDidMount(){
        this.timeOutFirst = window.setTimeout(()=> this.setState({isBored: true}),60000)
    }

    handleClickClose(){
        this.setState({isBored: "willClose"});
        this.timeOutSecond = window.setTimeout(()=> this.setState({isBored: false}),900)
    }

    componentWillUnmount(){
        clearTimeout(this.timeOutFirst);
        clearTimeout(this.timeOutSecond);

    }

    render() {
        const { isBored }  = this.state;
        const { nextPage } = this.props;

        return(
            isBored ?
                <Fragment>
                    <div className={`gotBored gotBored--1 ${isBored}`}>
                        <div className={`gotBored__container gotBored__container--light`}>
                            <svg className={`gotBored__light-svg`} width="52px" height="12px" viewBox="0 0 52 12" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <title>Traffic Light</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="VIET" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Group-2" transform="translate(-8.000000, -5.000000)" strokeWidth="0.5">
                                        <g id="Title-Bar">
                                            <g id="Traffic-Light" transform="translate(8.000000, 5.000000)">
                                                <circle id="Green" stroke="#1DAD2D" fill="#28CA42" cx="46" cy="6" r="5.75"></circle>
                                                <circle id="Yellow" stroke="#E0A124" fill="#FFBD2E" cx="26" cy="6" r="5.75"></circle>
                                                <circle id="Red" className="gotBored__close" stroke="#E24640" fill="#FF6059" cx="6" cy="6" r="5.75" onClick={this.handleClickClose}></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className={`gotBored__container gotBored__container--center`}>get bored ?</div>
                        <div className={`gotBored__container`}><Link href={`/${nextPage}`}><a className={`gotBored__link`}>next project <SVGInline className={`gotBored__arrow`} svg={ arrow } /></a></Link></div>
                    </div>
                    <div className={`gotBored gotBored--2 ${isBored}`}>
                        <div className={`gotBored__container gotBored__container--light`}><SVGInline className={`gotBored__light`} svg={ trafficLight } /></div>
                        <div className={`gotBored__container gotBored__container--center`}>get bored ?</div>
                        <div className={`gotBored__container`}><Link href={`/${nextPage}`}><a className={`gotBored__link`}>next project <SVGInline className={`gotBored__arrow`} svg={ arrow } /></a></Link></div>
                    </div>
                    <div className={`gotBored gotBored--3 ${isBored}`}>
                        <div className={`gotBored__container gotBored__container--light`}><SVGInline className={`gotBored__light`} svg={ trafficLight } /></div>
                        <div className={`gotBored__container gotBored__container--center`}>get bored ?</div>
                        <div className={`gotBored__container`}><Link href={`/${nextPage}`}><a className={`gotBored__link`}>next project <SVGInline className={`gotBored__arrow`} svg={ arrow } /></a></Link></div>
                    </div>
                </Fragment>
            :
            ""
        )
    }


}

export default GotBored;

