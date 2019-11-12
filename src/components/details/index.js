import { withRouter } from 'react-router-dom';
import Details from './details';
import {connect} from 'react-redux'

import {getId} from '../../store/actions/actions'


const mapDispatchToProps= {
    getProductId: getId
}

export default connect(null, mapDispatchToProps)(withRouter(Details));