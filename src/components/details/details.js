import React, { Component, Fragment } from 'react';
import Products from '../json/images.js';
import { Row, Col }  from 'reactstrap'

class Details extends Component {

    state = {
        currentProduct: null
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        console.log(id);
        this.setState({
            currentProduct: Products.find(prod => prod.id === id)
        });
    }

    render() {
        const { currentProduct } = this.state;
        if (!currentProduct) return '';
        const {
            img,
            nome,
            price,
            disponibility,
            SKU,
            textButton,
            id,
        } = currentProduct;
        return(
            <Fragment>
                <Row>
                    
                </Row>
            </Fragment>
        );
    }
}

export default Details;