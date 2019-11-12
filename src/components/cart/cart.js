import React, { Component , Fragment} from 'react'
import {Row, Col} from 'reactstrap'
import './style.css'
import Push from '../button/button'

class CartComponent extends Component {

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
                {/*(cartList) ? cartList : "Il carrello è vuoto"*/}
                {arrayProducts.map(item => {
                    return(
                        <Row md="12" style={{width: '100%', marginTop: '20px'}}>
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
                }
            </Fragment>
        );
    }
}

export default CartComponent