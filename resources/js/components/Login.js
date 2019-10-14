import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: '',
      user_password: '',
      is_logged_in: false,
      user_id: 0,
      user_name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (

      <section className="auth-section">
        <div className="col form">
          <div className="inner">
            <h2>Are You Ready To <span className="text-primary">Duel</span>?</h2>
            <form action="/login" method="POST">
            <input type="hidden" name="_token" value={csrf_token} />
              <div className="form-group">
                <div className="label-container">
                  <label>Email Address</label>
                </div>
                <input type="email" name="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label>Password</label>
                  <span>
                    <a href="/password/reset">Forgot Password?</a>
                  </span>
                </div>
                <input name="password" type="password" />
              </div>
              <div className="form-group">
                <div className="has-splice bottom-right no-margin">
                  <input type="submit" defaultValue="Go Duel" className="btn btn-primary" />
                </div>
              </div>
            </form>
            <div className="register-cta">
              Don't have an account? <a href="/register" className="text-primary">Sign up</a>
            </div>
          </div>
          <div className="warning">
            Warning: You must be at a minimum of 18 years old or above to register and play with Duel &amp; a UK Resident
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
                  <a href="/auth/redirect/google">
                    <i className="fab fa-google" />
                  </a>
                </li>
                <li>
                  <a href="/auth/redirect/twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/auth/redirect/facebook">
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

    setUsername(e) {
    this.setState({ user_email: e.target.value });
  }

  setPassword(e) {
    this.setState({ user_password: e.target.value });
  }


  handleSubmit(event){
    

     const credentials = {
          email: this.state.user_email,
          password: this.state.user_password
        }


        /*axios.post('/login', credentials)
          .then(response => {
            
            this.setState({user_id: response.data.user.id});
            this.setState({is_logged_in: true});
            this.setState({user_name: response.data.user.name});

            
          })
          .catch(error => {
            console.log(error)
          })*/
      
 

  } 

}

