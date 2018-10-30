import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {
      return {
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
