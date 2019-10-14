import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show_errors: false,
      error_text: '',
      user_name: '',
      email_address: '',
      password: '',
      confirm_password: '',
      first_name: '',
      last_name: '',
      address_line_1: '',
      town: '',
      country: '',
      postcode: '',
      playing_since: '',
      profile_picture: '',
      file:null,
      selectedFile: null

    };

    this.onClickHandler = this.onClickHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.handleAccountChange = this.handleAccountChange.bind(this)
    this.handleAccountSubmission = this.handleAccountSubmission.bind(this)
    this.toggle_errors = this.toggle_errors.bind(this)

  }

  toggle_errors(bool_value){

    this.setState({show_errors: bool_value });


  }

    handleAccountChange (evt) {
  
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleAccountSubmission(evt){

    evt.preventDefault();

      const new_data = {
          user_name: this.state.user_name,
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address_line_1: this.state.address_line_1,
          town: this.state.town,
          country: this.state.country,
          postcode: this.state.postcode,
         // _token: csrf_token
        }

        console.log(new_data);

         axios.post("/profile/save", new_data, { 
              // receive two    parameter endpoint url ,form data
          })
         .then(response => response.data)
         .catch(error => {
          if (error.response) {
          console.log(error.response.data.errors);
  
        }
 });
  }


  getData(){

     axios.get('/user/current')
          .then(response => {

              let username = response.data.name;
              this.setState({ user_name: username });

              let ps = response.data.playing_since;

              this.setState({ playing_since: ps });

              let profile_picture = response.data.profile_picture;

              let first_name = response.data.first_name;
              let last_name = response.data.last_name;
              let address_line_1 = response.data.address_line_1;
              let town = response.data.town;
              let country = response.data.country;
              let postcode = response.data.postcode;
              if (profile_picture) {
              this.setState({ profile_picture: '/storage/avatar/'+profile_picture })
              }
              if(first_name){
              this.setState({ first_name: first_name })
              }
              if(last_name){
              this.setState({ last_name: last_name })
              }
              if(address_line_1){
              this.setState({ address_line_1: address_line_1 })
              }
              if(town){
              this.setState({ town: town })
              }
              if(country){
              this.setState({ country: country })
              }
              if(postcode){
              this.setState({ postcode: postcode })
              }

            
          })
          .catch(error => {
            console.log(error)
          })


  }

  componentDidMount(){
    this.getData();

  }



 
onClickHandler(event){
  event.preventDefault();
   const data = new FormData()
   data.append('file', this.state.selectedFile)
   axios.post("/profile/avatar/upload", data, { 
      // receive two    parameter endpoint url ,form data
  })
.then(res => { // then print response status
    console.log(res.data.status)
    console.log(res.data.url)
    let new_profile_url = res.data.url
    this.setState({ profile_picture: new_profile_url })
 })
}
  


  render() {


  


    return (

      <React.Fragment>

      
        <section className="account-management-section">
          <div className="container">
            <AccountSidebar />
            <div className="content">
              <div className="settings">
                <div className="inner">
                  <div className="row header">
                    <h2><span className="text-primary">Account</span> Settings</h2>
                  </div>
                  <div className="row avatar">
                    <div className="image">
                      <img src={this.state.profile_picture} />
                      <div className="cancel">
                        <i className="fas fa-times" />
                      </div>
                    </div>
                    <div className="upload">
                    <form onSubmit={this.handleFileUpload}>
                    <input type="file"  onChange={this.onChangeHandler} />
                      <button className="btn btn-primary" onClick={this.onClickHandler}>Upload Profile Picture</button>
                      <span>Accepted Files: .JPEG, .JPG, .PNG</span>
                      <span>Reccomended Size: 200px x 200px</span>
                      </form>
                    </div>
                  </div>
                  <div className="row date-of-birth">
                    <div className="label">Date Of Birth: </div>
                    <div className="value">05/02/1993</div>
                  </div>


                  <form method="POST" action="#">

                    <div className="errors">{this.state.error_text}</div>

                    <div className="row settings-fields">
                      <div className="form-group">
                        <div className="label-container">
                          <label>Username</label>
                        </div>
                        <input type="text" name="user_name" placeholder="Username" onChange={this.handleAccountChange} value={this.state.user_name || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Email Address</label>
                        </div>
                        <input type="email" name="email" placeholder="Email address" onChange={this.handleAccountChange} value={this.state.email || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Password</label>
                        </div>
                        <input name="password" type="password" onChange={this.handleAccountChange} value={this.state.password || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Confirm Password</label>
                        </div>
                        <input name="confirm_password" type="password"  onChange={this.handleAccountChange} value={this.state.confirm_password || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>First Name</label>
                        </div>
                        <input name="first_name" type="text" onChange={this.handleAccountChange} placeholder="First Name" value={this.state.first_name || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Last Name</label>
                        </div>
                        <input name="last_name" type="text" onChange={this.handleAccountChange} placeholder="Last Name" value={this.state.last_name || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Address Line 1</label>
                        </div>
                        <input name="address_line_1" type="text" onChange={this.handleAccountChange} placeholder="Address Line 1" value={this.state.address_line_1 || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Town / City</label>
                        </div>
                        <input name="town" type="text" onChange={this.handleAccountChange} placeholder="Town / City" value={this.state.town || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Country</label>
                        </div>
                        <input name="country" type="text" onChange={this.handleAccountChange} placeholder="Country" value={this.state.country || ''} />
                      </div>
                      <div className="form-group">
                        <div className="label-container">
                          <label>Postcode</label>
                        </div>
                        <input name="postcode" type="text" onChange={this.handleAccountChange} placeholder="Postcode" value={this.state.postcode || ''} />
                      </div>
                    </div>
                    <div className="row submit">
                      <input onClick={this.handleAccountSubmission} type="submit" className="btn btn-primary" defaultValue="Save Account Settings" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>

      )
    }

   onChangeHandler(event){
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }



  handleSubmit(event){
    
    //  event.preventDefault();


     const credentials = {
        //  user_name: this.state.user_name,
        //  email: this.state.email,
        //  password: this.state.password,
          _token: csrf_token
        }

        console.log(credentials);


        /*axios.post('/api/register', credentials)
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
      
        */

  } 

}



