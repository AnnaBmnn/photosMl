import React, { Component } from "react";


class LoadingScreen extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, src, moreClass } = this.props;
    return(
        <div className={`loadingScreen__container ${moreClass}`}>
            <span className={`loadingScreen__text`}>{ text }</span>
            <div className={`loadingScreen__emojis`}>
                <div className={`loadingScreen__emoji`}><img src={src} /></div>
                <div className={`loadingScreen__emoji`}><img src={src} /></div>
                <div className={`loadingScreen__emoji`}><img src={src} /></div>
            </div>
        </div>
    )
  }


}

export default LoadingScreen;
