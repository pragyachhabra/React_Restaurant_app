import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            rating:null,
            email:null,
        }
    }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response)=>{
               alert("Restaurant has beed added Sucessfully ")
            })
        })
        
    }
    render() {
        return (
            <div>
                
<NavBarMenu/>
                <h1>RestaurantCreate</h1>
                <div><input onChange={(event)=>{this.setState({name:event.target.value})}} 
                placeholder="Restaurant Name"/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} 
                placeholder="Restaurant Address"/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
                placeholder="Restaurant Rating"/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} 
                placeholder="Restaurant Email"/><br/>
                <br/>
                <button onClick={()=>{this.create()}} > Add Restaurant
                </button><br/>
                <br/>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;