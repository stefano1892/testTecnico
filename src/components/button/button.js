import React, {Component} from  'react'
import { Button } from 'reactstrap'

class Push extends Component{

    render(){
        return(
            <Button
                id={this.props.id}
                to={this.props.to}
                onClick={this.props.onClick}
                tag={this.props.tag}
                color={this.props.color}
            >
                {this.props.label}
            </Button>
        )
    }
}

export default Push