import CheckoutComponent from './checkout';
import {connect} from 'react-redux';
import {clearCart} from '../../store/actions/actions'

const mapDispatchToProps = ({
    emptyCart: clearCart
})

export default connect(null, mapDispatchToProps)(CheckoutComponent)