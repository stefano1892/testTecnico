import React, { Component, Fragment } from 'react'
import jsonDataText from '../json/images.json'
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

  goToPageDetails = () => {

  }

  /*renderProduct = (json) => {
    
    /*json.forEach(i => {
      this.setState({
        dataProducts: i
      })
      console.log(i)
    });

    for(const i = 0 ; i <= json.length; i++){
      return (
        <Col md="3">
          <Card>
            <CardImg top width='100%' src={json[i].img} />
            <CardBody>
              <CardTitle>{json[i].nome}</CardTitle>
              <CardSubtitle>{json[i].price}</CardSubtitle>
              <Button>{json[i].textButton}</Button>
            </CardBody>
          </Card>
        </Col>
      )
    }
  };*/

  /*console.log(i)
      return (
        <Col md="3">
          <Card>
            <CardImg top width='100%' src={i.img} />
            <CardBody>
              <CardTitle>{i.nome}</CardTitle>
              <CardSubtitle>{i.price}</CardSubtitle>
              <Button>{i.textButton}</Button>
            </CardBody>
          </Card>
        </Col>
  )*/

  render(){
    const json = jsonDataText.products;
    return(
      <Fragment>
        <Row md="12" style={{width: '100%', margin: 0, padding: 0}}>
          <Col md="3">
            <Card>
              <CardImg top width='100%' src={json[0].img} />
              <CardBody>
                <CardTitle>{json[0].nome}</CardTitle>
                <CardSubtitle>{json[0].price}</CardSubtitle>
                <Button>{json[0].textButton}</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardImg top width='100%' src={json[1].img} />
              <CardBody>
                <CardTitle>{json[1].nome}</CardTitle>
                <CardSubtitle>{json[1].price}</CardSubtitle>
                <Button>{json[1].textButton}</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardImg top width='100%' src={json[2].img} />
              <CardBody>
                <CardTitle>{json[2].nome}</CardTitle>
                <CardSubtitle>{json[2].price}</CardSubtitle>
                <Button>{json[2].textButton}</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardImg top width='100%' src={json[3].img} />
              <CardBody>
                <CardTitle>{json[3].nome}</CardTitle>
                <CardSubtitle>{json[3].price}</CardSubtitle>
                <Button >{json[3].textButton}</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ProductsList;