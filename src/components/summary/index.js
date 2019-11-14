import SummaryComponent from './summary'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

const mapStateToProps = state => ({
    totPrice: state.totProducts.totPrice
})

export default connect(mapStateToProps, null)(reduxForm(SummaryComponent));