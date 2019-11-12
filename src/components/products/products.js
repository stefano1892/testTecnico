import React, { Component } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Push from '../button/button'
class ProductsList extends Component {

  render(){
    return(
        <Row md="12" style={{width: '100%', margin: 0, padding: 0}}>
          {this.props.products.map(item => {
            return(
              <Col md="3">
                <Card>
                  <CardImg top width="100%" src={item.img} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.nome}</CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                    <Push 
                    id={"productsButton"}
                    tag={Link}
                    to={`/details/${item.id}`}
                    label={item.textButton} />
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
    );
  }
}

export default ProductsList;