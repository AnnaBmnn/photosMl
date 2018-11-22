import React, { Component } from "react";


class LoadingScreen extends Component {
  constructor() {
      super();
  }

  render() {
    const { text, emoji, moreClass } = this.props;
    return(
        <div className={`loadingScreen__container ${moreClass}`}>
            <span className={`loadingScreen__text`}>{ text }</span>
            <div className={`loadingScreen__emojis`}>
                <div className={`loadingScreen__emoji`}>{emoji}</div>
                <div className={`loadingScreen__emoji`}>{emoji}</div>
                <div className={`loadingScreen__emoji`}>{emoji}</div>
            </div>
        </div>
    )
  }


}

export default LoadingScreen;
