import React, { Component } from 'react';
import {Switch,Route} from  'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Productlist from './Components/Productlist'
import Details from './Components/Details'
import Card from './Components/Card'
import Default from './Components/Default'
import Modal from './Components/Modal'
class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/" component={Productlist}/>
         <Route path="/Details" component={Details}/>
         <Route path="/Card" component={Card}/>
         <Route component={Default}/>
         
       </Switch>
       <Modal/>
     </React.Fragment>

    )
  }
}

export default App;
