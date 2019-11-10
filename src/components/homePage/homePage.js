import React, { Component, Fragment } from 'react'
import ProductsList from '../products/products'

class HomeComponent extends Component{

    render(){
        return(
            <Fragment>
                <ProductsList />
            </Fragment>
        );
    }
}

export default HomeComponent;