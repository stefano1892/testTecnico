import CartComponent from './cart'
import {connect} from 'react-redux'
import {removeCartAction} from '../../store/actions/actions'
import {totPrice} from '../../store/actions/actions'

const mapStateToProps = state => ({
    arrayProducts: state.arrayCart.products,
    totPrice: state.arrayCart.totPrice

})

const mapDispatchToProps = ({
    deleteProduct: removeCartAction,
    exportTotPrice: totPrice
})

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)