import React, { Component }from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar'
import HomeComponent from './components/homePage';
import CartComponent from './components/cart'
import Details from './components/details';
import SummaryComponent from './components/summary';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
            <NavigationBar/>
            <Route exact path="/" component={HomeComponent}/>
            <Route path='/details/:id' name="details" component={Details}/>
            <Route path='/cart' component={CartComponent} />
            <Route path='/summary' component={SummaryComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
