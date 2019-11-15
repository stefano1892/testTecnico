import SummaryComponent from './summary'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    totPrice: state.totProducts.totPrice
})

export default connect(mapStateToProps, null)(SummaryComponent);