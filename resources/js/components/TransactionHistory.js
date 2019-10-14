import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
    balance: 0

    };



  }

  


  getData(){

     axios.get('/user/current')
          .then(response => {

              let username = response.data.name;
          
            
          })
          .catch(error => {
            console.log(error)
          })


  }

  componentDidMount(){
    this.getData();

  }



 
  


  render() {


    return (


 <section className="account-management-section">
        <div className="container">
        <AccountSidebar />
        </div>
      </section>
  

      )
    }

  

}



