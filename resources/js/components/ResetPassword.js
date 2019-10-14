import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
    balance: 0

    };



  }

  





 
  


  render() {


    return (



          <section className="auth-section">
          <div className="col form">
            <div className="inner">
              <h2>Enter Your <span className="text-primary">Email Address</span></h2>
              <form action="/password/email" method="POST">
              <input type="hidden" name="_token" value={csrf_token} />
                <div className="form-group">
                  <div className="label-container">
                    <label>Email Address</label>
                  </div>
                  <input type="email" name="email" placeholder="Email address" />
                </div>
                <div className="form-group">
                  <div className="has-splice bottom-right no-margin">
                    <input type="submit" defaultValue="Reset Password" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col image has-background-image">
            <div className="social-login-container">
              <div className="header">
                Login With
              </div>
              <div className="list">
                <ul className="unstyled">
                  <li>
                    <a href="#">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

  

      )
    }

  

}



