import React, { Component }from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar'
import HomeComponent from './components/homePage';
import CartComponent from './components/cart'
import Details from './components/details';
import SummaryComponent from './components/summary';
import CheckoutComponent from './components/checkout';

import {connect} from 'react-redux'

class App extends Component {
  render(){
    const { arrLength } = this.props
    return (
      <Router>
        <div>
            <NavigationBar
              arrLength={arrLength}
            />
            <Route exact path="/" component={HomeComponent}/>
            <Route path='/details/:id' name="details" component={Details}/>
            <Route path='/cart' component={CartComponent} />
            <Route path='/summary' component={SummaryComponent} />
            <Route path='/checkout' component={CheckoutComponent} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  arrLength: state.arrayCart.products
})

export default connect(mapStateToProps, null)(App);
