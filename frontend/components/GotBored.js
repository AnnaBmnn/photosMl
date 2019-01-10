import React, { Component, Fragment } from "react";
import Link from "next/link";
import SVGInline from "react-svg-inline";
import trafficLight from "../static/images/vietnam/traffic_light.svg";
import arrow from "../static/images/common/triangle.svg";


class GotBored extends Component {
    constructor() {
        super();
        this.state = {
            isBored: false,
        }
        this.timeOut = false;
    }

    componentDidMount(){
        this.timeOut = window.setTimeout(()=> this.setState({isBored: true}),100)
    }

    componentWillUnmount(){
        clearTimeout(this.timeOut);
    }

    render() {
        const { isBored }  = this.state;
        const { nextPage } = this.props
        return(
            isBored ?
                <Fragment>
                    <div className={`gotBored gotBored--1`}>
                        <div className={`gotBored__container gotBored__container--light`}><SVGInline className={`gotBored__light`} svg={ trafficLight } /></div>
                        <div className={`gotBored__container gotBored__container--center`}>get bored ?</div>
                        <div className={`gotBored__container`}><Link href={`/${nextPage}`}><a className={`gotBored__link`}>next project <SVGInline className={`gotBored__arrow`} svg={ arrow } /></a></Link></div>
                    </div>
                    <div className={`gotBored gotBored--2`}>
                        <div className={`gotBored__container gotBored__container--light`}><SVGInline className={`gotBored__light`} svg={ trafficLight } /></div>
                        <div className={`gotBored__container gotBored__container--center`}>get bored ?</div>
                        <div className={`gotBored__container`}><Link href={`/${nextPage}`}><a className={`gotBored__link`}>next project <SVGInline className={`gotBored__arrow`} svg={ arrow } /></a></Link></div>
                    </div>
                    <div className={`gotBored gotBored--3`}>
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
