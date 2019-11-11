/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import {getId} from '../actions/actions'
import {connect} from 'react-redux'

class ProductsList extends Component {

  updateProductId = (id) => {
    debugger
    this.props.updateProductId(id)
  }

  render(){
    return(
      <Fragment>
        <Row md="12" style={{width: '100%', margin: 0, padding: 0}}>
          {this.props.products.map(item => {
            return(
              <Col md="3">
                  <Card>
                  <CardImg top width="100%" src={item.img} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.nome}</CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                    <Button 
                    tag={Link}
                    to="/details"
                    onClick={() => this.updateProductId(item.id)}>
                      {item.textButton}
                    </Button>
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

const mapDispatchToProps = state => ({
  updateProductId: getId
})

export default connect(mapDispatchToProps)(ProductsList);