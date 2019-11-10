import React, { Component }from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar'
import HomeComponent from './components/homePage';
import Details from './components/details';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
            <NavigationBar/>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/details" component={Details}/>
        </div>
      </Router>
    );
  }
}

export default App;
