import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class Notifications extends Component {
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
          <div className="content">
            <div className="notifications">
              <div className="inner">
                <div className="row header">
                  <h2><span className="text-primary">Gamertags</span> Settings</h2>
                </div>
                <form method="POST" action="#">
                  <div className="row settings-fields">
                    <div className="form-group">
                      <div className="label-container">
                        <label>Epic Games</label>
                      </div>
                      <input type="text" placeholder="Epic Games" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Xbox One</label>
                      </div>
                      <input type="text" placeholder="Xbox One" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>PSN</label>
                      </div>
                      <input type="text" placeholder="PSN" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>League Of Legends</label>
                      </div>
                      <input type="text" placeholder="League Of Legends" />
                    </div>
                  </div>
                  <div className="row submit">
                    <input type="submit" className="btn btn-primary" defaultValue="Save Gamertags" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  

      )
    }

  

}



