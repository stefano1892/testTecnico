import React, { Component, Fragment } from 'react'
import {Row, Col} from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';
import axios from 'axios';
import Push from '../button/button';

class SummaryComponent extends Component{

    render(){

        const {
            totPrice,
            history
        }= this.props

        const sendFakeForm = () => {
            const params = {
                "nome": `${document.getElementById("nome").value}`,
                "cognome": `${document.getElementById("cognome").value}`,
                "indirizzo": `${document.getElementById("indirizzo").value}`,
                "cap": `${document.getElementById("cap").value}`,
                "provincia": `${document.getElementById("provincia").value}`,
                "comune": `${document.getElementById("comune").value}`,
                "telefono": `${document.getElementById("telefono").value}`
            }
            axios.post('https://reqres.in/api/users?page=2', { params })
            .then(res => {

                // lasciati i console log per eventuale check
              console.log(res);
              console.log(JSON.stringify(res.status));
              if(res.status == "201"){
                history.push('/checkout')
                }
            })

        }

        

        return(
            <Fragment>
                <Row id="headerRow">
                    <Col md="8">
                        <b id="summaryLabel">Il tuo riepilogo ordine</b>    
                    </Col>
                    <Col md="4">
                        <Row>
                            <Col md="12">
                                <b id="totLabel">Il tuo totale: {totPrice}€</b>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="rowForm">
                    <Col md={{size:7, offset: 1}}>
                        <Form>
                            <FormGroup>
                                <Label>Nome*</Label>
                                <Input type="text" name="nome" id="nome" placeholder="es: Mario" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cognome*</Label>
                                <Input type="text" name="Cognome" id="cognome" placeholder="Es: Rossi" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Indirizzo*</Label>
                                <Input type="text" name="Indirizzo" id="indirizzo" placeholder="Es: Via Roma" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cap*</Label>
                                <Input type="text" name="Cap" id="cap" placeholder="Es: Via Roma" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Stato*</Label>
                                <Input type="text" name="Stato" id="stato" placeholder="Es: Italia" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Provincia*</Label>
                                <Input type="text" name="Provincia" id="provincia" placeholder="Es: Pavia" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Comune*</Label>
                                <Input type="text" name="Comune" id="comune" placeholder="Es: Vigevano" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono*</Label>
                                <Input type="text" name="telefono" id="telefono"/>
                            </FormGroup>
                            <Push
                                onClick={() => sendFakeForm()}
                                label={"Submit"}
                            />
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default SummaryComponent