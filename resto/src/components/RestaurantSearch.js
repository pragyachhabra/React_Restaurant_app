import React, { Component } from 'react';
import { Table,Form,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarMenu from './NavBarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state={

    searchData:null,
    noData:null,
    lastSearch:"",
        }
    }
    search(key){
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((response) => {
                console.warn("response",response)
                if(response.length>0)
                {
                    this.setState({searchData:response,noData:false})
                }
                else
                {
                    this.setState({ noData: true,searchData:null })
                }
           
            })
        })
          
      }
      delete(id){
        fetch("http://localhost:3000/restaurant/" + id, {
            method:"Delete",
            // headers:{
            //     'Content-Type':'application/json'
            // },
            body:JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp)=>{
               alert("Restaurant has beed Deleted Sucessfully ")
               this.search(this.state.lastSearch)
            })
        })
        
            
    }

    
    render() {

        return (
            <Container>
                
<NavBarMenu/>
                <h1>RestaurantSearch</h1>
     
                <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="search..." />
        <div>{
            this.state.searchData?
            <div>
                 <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
                {
                       this.state.searchData.map((item)=>
                       <tr>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.address}</td>
                       <td>{item.rating}</td>
                       <td>{item.email}</td>
                       <td>
                         <Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="Purple" margin-right="20px"/></Link>
                         <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="Red"/></span>
                       </td>
                     </tr>
                       )
                }
                     </tbody>
          </Table>
            </div>
            
            :""

            }
            {
                this.state.noData?<h3>No Data Found</h3>:null
            }
            </div>
            </Container>
        );
    }
}

export default RestaurantSearch;
