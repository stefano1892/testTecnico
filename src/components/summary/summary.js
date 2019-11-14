import React, { Component, Fragment } from 'react'
import {Row, Col} from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css'

class SummaryComponent extends Component{

    render(){

        const { handleSubmit } = this.props

        const {
            totPrice
        }= this.props

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
                        {/*<Form>
                            <FormGroup>
                                <Label>Nome*</Label>
                                <Input type="text" name="nome" id="nome" placeholder="es: Mario" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cognome*</Label>
                                <Input type="text" name="Cognome" id="Cognome" placeholder="Es: Rossi" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Indirizzo*</Label>
                                <Input type="text" name="Indirizzo" id="CognIndirizzoome" placeholder="Es: Via Roma" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cap*</Label>
                                <Input type="text" name="Indirizzo" id="CognIndirizzoome" placeholder="Es: Via Roma" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Stato*</Label>
                                <Input type="text" name="Stato" id="Stato" placeholder="Es: Italia" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Provincia*</Label>
                                <Input type="text" name="Provincia" id="Provincia" placeholder="Es: Pavia" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Comune*</Label>
                                <Input type="text" name="Comune" id="Comune" placeholder="Es: Vigevano" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono*</Label>
                                <Input type="text" name="Telefono" id="Telefono"/>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>*/}
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default SummaryComponent