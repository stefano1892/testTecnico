/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react'
import Products from '../json/images.js'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Row, Col } from 'reactstrap'

class ProductsList extends Component {

  constructor(props){
    super(props);

    this.state = {
      dataProducts: []
    }
  }

  render(){
    return(
      <Fragment>
        <Row md="12" style={{width: '100%', margin: 0, padding: 0}}>
          {this.props.products.map(item => {
            console.log(item.nome)
            return(
              <Col md="3">
                  <Card>
                  <CardImg top width="100%" src={item.img} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.nome}</CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                    <Button>{item.textButton}</Button>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Fragment>
    );
  }
}

export default ProductsList;