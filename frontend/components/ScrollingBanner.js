import React, { Component, Fragment } from "react";

class ScrollingBanner extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, moreClass } = this.props;
    return(
        <div className={`scrollingBanner ${moreClass}`}>
            { moreClass === "scrollingBanner--vietnam" ?
                <Fragment>
                    <div className={`scrollingBanner__text`}>
                        <span className={`scrollingBanner__span`}>{text}</span>
                        <span  className={`scrollingBanner__span`}>{text}</span>
                    </div> 
                    <div className={`scrollingBanner__text`}>
                        <span  className={`scrollingBanner__span`}>{text}</span>
                        <span  className={`scrollingBanner__span`}> {text}</span>
                    </div> 
                    <div className={`scrollingBanner__text`}>
                        <span  className={`scrollingBanner__span`}>{text}</span>
                        <span  className={`scrollingBanner__span`}>{text}</span>
                    </div> 
                </Fragment>

                :
                <Fragment>
                    <div className={`scrollingBanner__text`}>
                        <span>{text}</span>
                    </div>
                    <div className={`scrollingBanner__text`}>
                        <span>{text}</span>
                    </div>
                </Fragment>
            }
            { moreClass === "scrollingBanner--about" ?
                <div className={`scrollingBanner__text`}>
                    <span>{text}</span>
                </div> 
                :
                ""
            }

            
        </div>
    )
  }


}

export default ScrollingBanner;
