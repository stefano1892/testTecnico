import React, { Component, Fragment } from 'react'

class Details extends Component {

    render(){
        console.log(this.props.match)
        return(
            <Fragment>
                detail works
            </Fragment>
        );
    }
}

export default Details;