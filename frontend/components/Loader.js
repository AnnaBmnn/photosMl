import React, { Component, Fragment } from "react";



class Loader extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false
        }
        this.timeOutFirst = false;

    }

    componentDidMount(){
        this.timeOutFirst = window.setTimeout(()=> this.setState({isBored: true}),60000)
    }


    componentWillUnmount(){
        clearTimeout(this.timeOutFirst);

    }

    render() {
        const { isBored }  = this.state;
        const { nextPage } = this.props;

        return(

        )
    }


}

export default Loader;

