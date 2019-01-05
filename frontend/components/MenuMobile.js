import React, { Component, Fragment } from "react";
import Swipeable from 'react-swipeable';
import Header from "./Header.js";
import Link from "next/link";
import { series, homeMobile } from "../static/datas/series";

class MenuMobile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentItem: 0
        };
    }

    swiped(direction) {
        const { currentItem } = this.state;
        const length = homeMobile.length;
        let indexNewCurrent;

        if(direction === "UP"){
            indexNewCurrent = currentItem - 1;
        }

        if(direction === "DOWN"){
            indexNewCurrent = currentItem + 1;
        }

        indexNewCurrent = (( indexNewCurrent % length) + length) % length;
        indexNewCurrent < 0 ? indexNewCurrent + Math.abs(length) : indexNewCurrent;
        this.setState({currentItem: indexNewCurrent});
    }

    render() {
        const {currentItem} = this.state;
        const item = homeMobile[currentItem];
        return(
            <Swipeable
                className={`menuMobile__container`}
                trackMouse={true}
                onSwipedUp={()=>this.swiped("UP")} 
                onSwipedDown={()=>this.swiped("DOWN")} 
                style={{backgroundColor: item.bgColor}}
            >
                <div className={`menuMobile__containerImg menuMobile__containerImg--${item.slug}`}>
                    <Link href={`/${item.slug}`} >
                        <a >
                            <img src={item.mainImg} />
                        </a>
                    </Link>
                </div>

                <div className={`menuMobile__containerInfos`}>
                    <Link href={`/${item.slug}`}><a className={`menuMobile__title menuMobile__title--${item.slug}`} style={{color: item.textColor}}>{item.slug}</a></Link>
                    <Link href={`/about`}><a className={`menuMobile__about`} style={{color: item.textColor}}>about</a></Link>
                    <span className={`menuMobile__numerotation`} style={{color: item.textColor}}>{`0${currentItem+1}/${homeMobile.length}`}</span>
                </div>
            </Swipeable>
        )
    }


}

export default MenuMobile;
