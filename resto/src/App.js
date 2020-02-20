import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetails from './components/RestaurantDetails'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBarMenu from './components/NavBarMenu'
import Protected from './components/Protected'



function App() {
  return (
    <div className="App">
   <Router>
   
 
       <Route path="/logout"> 
       <Logout/></Route>

    
    <Route path="/login" render={props=>(
       <Login {...props}/>)}>  
    </Route>
    <Protected  exact path="/list" component={RestaurantList} /> 
    <Protected  exact path="/create" component={RestaurantCreate} /> 
    <Protected  exact path="/serach" component={RestaurantSearch} /> 
    <Protected  exact path="/details" component={RestaurantDetails} /> 
    <Protected  exact path="/update/:id" component={RestaurantUpdate} /> 
    <Protected  exact path="/logout" component={RestaurantUpdate} /> 

       <Protected  exact path="/" component={Home} /> 
 
   </Router>
    </div>
  );
}

export default App;
