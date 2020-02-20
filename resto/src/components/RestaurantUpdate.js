import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'
class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            rating:null,
            email:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/" + this.props.match.params.id).then((response)=>{
            response.json().then(result =>{
                console.warn(result)
                this.setState({
                    id:result.id,
                    name:result.name,
                    address:result.address,
                    rating:result.rating,
                    email:result.email,

                })
        })

        })
    


    }
    update(){
        fetch("http://localhost:3000/restaurant/" + this.state.id,{
            method:"Put",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp)=>{
               alert("Restaurant has beed updated Sucessfully ")
            })
        })
        
            
    }
    render() {
 
        return (
            <div>
                
<NavBarMenu/>
                <h1>Restaurant Update</h1>
                <div>
            
             <input onChange={(event)=>{this.setState({name:event.target.value})}} 
                placeholder="Restaurant Name" value={this.state.name}/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} 
                placeholder="Restaurant Address" value={this.state.address}/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
                placeholder="Restaurant Rating" value={this.state.rating}/><br/>
                <br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} 
                placeholder="Restaurant Email" value={this.state.email}/><br/>
                <br/>
                <button onClick={()=>{this.update()}} > update Restaurant
                </button><br/>
                <br/>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;