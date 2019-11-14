import React, { Component , Fragment} from 'react'
import {Row, Col} from 'reactstrap'
import './style.css'
import Push from '../button/button'
import {Link} from 'react-router-dom'

class CartComponent extends Component {

    totPrice = 0;

    componentWillMount(){
        this.props.arrayProducts.map(item => {
            this.totPrice += parseInt(item.price)
        })
        this.props.exportTotPrice(this.totPrice)
    }

    render(){
        const {
            arrayProducts,
            deleteProduct
        }= this.props

        const deleteProductFromList = id => {
            deleteProduct(id)
        }
        
        return(
            <Fragment>
                {(arrayProducts !== 0) ? (
                    arrayProducts.map((item, i) => {
                        return(
                            <Row md="12" style={{width: '100%', marginTop: '20px'}} key={i}>
                                <Col md="3" style={{textAlign: 'center'}}>
                                    <img src={item.img} alt="" style={{width: '150px'}} />
                                </Col>
                                <Col md="9">
                                    <Row>
                                        {item.nome}
                                    </Row>
                                    <Row>
                                        {item.price}
                                    </Row>
                                    <Row>
                                        {item.disponibilita}
                                    </Row>
                                    <Row>
                                        <Push
                                        onClick={() => deleteProductFromList(item.id)} 
                                        label={"Rimuovi"}
                                        color={"danger"}/>
                                    </Row>
                                </Col>
                            </Row>
                        )
                    })
                ) : ( "Il carrello è vuoto")}
                <Row id="rowButtons">
                    {(arrayProducts.length !== 0) ? (
                        <Fragment>
                            <Col md="12">
                                <Col md="6" id="price">
                                    <b>Totale: {this.totPrice}</b>
                                </Col>
                                <Push
                                    label="Procedi al pagamento"
                                    tag={Link}
                                    to="/summary"
                                    id="paymentButton"
                                />
                            </Col>
                        </Fragment>
                    ) : (
                        <Col md="12">
                            <Push 
                                label="Continua lo shopping"
                                tag={Link}
                                to="/"
                                id="shoppingButton"
                            />
                        </Col>
                    )}
                </Row>
            </Fragment>
        );
    }
}

export default CartComponent