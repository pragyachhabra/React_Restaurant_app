import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarMenu from './NavBarMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    };
  }
  componentDidMount() {
      this.getData()
 
      
  }

  getData(){
    fetch("http://localhost:3000/restaurant").then(response => {
        response.json().then(result => {
          this.setState({ list: result });
        });
      });
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
           this.getData()
        })
    })
    
        
}
  render() {
    return (
      <div>
          
<NavBarMenu/>
        <h1>RestaurantList</h1>
        {this.state.list ? (
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
            </thead>{" "}
            <tbody>
              {this.state.list.map((item, i) => (
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
              ))}{" "}
            </tbody>
          </Table>
        ) : (
          <p>Please loading</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
