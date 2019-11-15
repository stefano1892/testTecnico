import React, { Component, Fragment } from 'react';
import Products from '../data/data.js';
import { Row, Col }  from 'reactstrap'
import Push from '../button/button.js';


class Details extends Component {

    state = {
        currentProduct: null,
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        
        this.setState({
            currentProduct: Products.find(prod => prod.id === id),
            currentId: id
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
            descrizione
        } = currentProduct;

        const {
            addElementToCart
        }= this.props

        const addToCart = (currentProduct) => {
            addElementToCart(currentProduct)
        }

        return(
            <Fragment>
                <Row id="rowDetails">
                    <Col md="6">
                        <img src={img} id="imgDetails" alt=""/>
                    </Col>
                    <Col md="6">
                        <Row id="rowDescProd">
                            <Col md="3">
                                <b>Prodotto:</b>
                            </Col>
                            <Col md="7">
                                <b>{nome}</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <b>Prezzo:</b>
                            </Col>
                            <Col md="7">
                                <b>{price}€</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <b>SKU:</b>
                            </Col>
                            <Col md="7">
                                <b>{SKU}</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <b>Descrizione:</b>
                            </Col>
                            <Col md="7">
                                <b>{descrizione}</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <b>Disponibilità:</b>
                            </Col>
                            <Col md="7">
                                <b>{disponibility}</b>
                            </Col>
                        </Row>
                        <Row>
                            <Push
                            id={"detailsButton"}
                            disabled={disponibility == "Non disponibile"}
                            onClick={() => addToCart(this.state.currentProduct)}
                            label={"Aggiungi al carrello"}/>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Details;