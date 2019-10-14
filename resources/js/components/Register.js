import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
     user_name: '',
     email: '',
     password: '',
     confirm_password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (

      <section className="auth-section">
        <div className="col form">
          <div className="inner">
            <h2 style={{marginBottom: 0, fontSize: '62px'}}>Register To <span className="text-primary">Duel</span></h2>
            <span style={{display: 'block', marginBottom: '20px'}}>Sign up for free.</span>
            <form action="#" method="POST" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <div className="label-container">
                  <label>Username</label>
                </div>
                <input type="text"
                name="user_name"
                placeholder="Username"
                value={this.state.user_name}
                onChange={this.handleChange}/>
                
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label>Email Address</label>
                </div>
                <input type="email"
                name="email"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label>Password</label>
                </div>
                <input type="password"
                name="password"
                value={this.state.password}
               onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <div className="label-container">
                  <label>Confirm Password</label>
                </div>
                <input type="password"
                name="confirm_password"
                value={this.state.confirm_password}
                onChange={this.handleChange} />
              </div>
              <div className="custom-checkbox" style={{marginBottom: '15px'}}>
                <label style={{fontSize: '12px'}}>
                  By ticking this box you confirm that you have read and agree to our <a href="/terms-and-conditions">terms &amp; conditions</a>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="custom-checkbox" style={{marginBottom: '10px'}}>
                <label style={{fontSize: '12px'}}>
                  By ticking this box you confirm that you have read and agree to our <a href="/privacy-policy">privacy policy</a>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="form-group">
                <div className="has-splice bottom-right no-margin">
                  <input type="submit" defaultValue="Register" className="btn btn-primary" />
                </div>
              </div>
            </form>
            <div className="register-cta">
              Already have an account? <a href="/login" className="text-primary">Sign In</a>
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


  handleChange (evt) {
  
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleSubmit(event){
    
      event.preventDefault();


     const credentials = {
          user_name: this.state.user_name,
          email: this.state.email,
          password: this.state.password,
          _token: csrf_token
        }

        console.log(credentials);


        axios.post('/api/register', credentials)
          .then(response => {

            let status = response.data.status;

            if(status === 'success'){

              window.location = '/login';

            }else{

              // show errors - nothing in front end provided
            }
            
         

            
          })
          .catch(error => {
            console.log(error)
          })
      
 

  } 

}



