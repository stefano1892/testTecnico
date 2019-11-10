import NavigationBar from './navigationBar'
import { compose } from 'redux'
import styles from './style'
import withStyles from '@material-ui/core/styles/withStyles'

export default compose(
    withStyles(styles)
)(NavigationBar)