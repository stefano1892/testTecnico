import React, { Component }from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar'
import HomeComponent from './components/homePage';
import Details from './components/details';
import {connect} from 'react-redux'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
            <NavigationBar/>
            <Route exact path="/" component={HomeComponent}/>
            <Route path='/details/:id' name="details" component={Details}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  productId: state.productId
})

export default connect(mapStateToProps, null)(App);
