import React, { Component, Fragment } from 'react'
import ProductsList from '../products/products'
import Products from '../json/images'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
    productId: state.id
})

export default connect(mapStateToProps)(HomeComponent);