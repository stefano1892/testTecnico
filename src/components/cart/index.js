import CartComponent from './cart'
import {connect} from 'react-redux'
import {removeCartAction} from '../../store/actions/actions'

const mapStateToProps = state => ({
    arrayProducts: state.arrayCart.products,
})

const mapDispatchToProps = ({
    deleteProduct: removeCartAction
})

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)