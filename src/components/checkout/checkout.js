import React, { Component, Fragment } from "react";
import {Row, Col} from 'reactstrap'
import './style.css'
import Push from "../button/button";

class CheckoutComponent extends Component {

    render(){

        const {
            history,
            emptyCart
        }= this.props;

        const backToHome = (id) => {
            this.props.emptyCart(id)
            history.push('/')
        } 

        return(
            <Fragment>
                <Row>
                    <Col md="6">
                     <h3 id="checkoutLabel">Il tuo ordine è stato registrato correttamente</h3>
                    </Col>
                    <Col md="6">
                        <p>Prosegui il tuo shopping</p><br/>
                        <Push 
                            label={"Continua"}
                            onClick={ () => backToHome(0)}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default CheckoutComponent