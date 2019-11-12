import React, { Component, Fragment } from 'react'
import ProductsList from '../products/products'
import Products from '../data/data.js'
// import { connect } from 'react-redux'

class HomeComponent extends Component{

    render(){

        return(
            <Fragment>
                <ProductsList 
                    products = {Products}
                />
            </Fragment>
        );
    }
}

export default HomeComponent;