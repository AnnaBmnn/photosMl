import React, { Component } from "react";

class ScrollingBanner extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, moreClass } = this.props;
    return(
        <div className={`scrollingBanner ${moreClass}`}>
            <div className={`scrollingBanner__text`}>
                <span>{text}</span>
            </div>
            <div className={`scrollingBanner__text`}>
                <span>{text}</span>
            </div>
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
