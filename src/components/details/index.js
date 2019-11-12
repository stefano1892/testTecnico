import { withRouter } from 'react-router-dom';
import Details from './details';
import {connect} from 'react-redux'

import {addCartAction} from '../../store/actions/actions'


const mapDispatchToProps= {
    addElementToCart: addCartAction
}

export default connect(null, mapDispatchToProps)(withRouter(Details));