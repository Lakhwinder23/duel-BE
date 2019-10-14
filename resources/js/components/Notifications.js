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
                  <h2><span className="text-primary">Notification</span> Settings</h2>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row notification-row">
                  <div className="custom-toggle-container">
                    Notify me when Aaron creates more awesome components?
                    <div className="switch">
                      <input id="cc-toggle" type="checkbox" />
                      <label htmlFor="cc-toggle" />
                      <span className="yes">yes</span>
                      <span className="no">no</span>
                    </div>
                  </div>
                </div>
                <div className="row submit">
                  <input type="submit" className="btn btn-primary" defaultValue="Save Notification Settings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  

      )
    }

  

}



