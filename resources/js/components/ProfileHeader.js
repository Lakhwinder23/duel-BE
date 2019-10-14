import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      playing_since: '',
      profile_picture: '',
    };

    //this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){

     axios.get('/user/current')
          .then(response => {

              let username = response.data.name;
              this.setState({ user_name: username });

              let ps = response.data.playing_since;

              this.setState({ playing_since: ps });

              let profile_picture = response.data.profile_picture;

              this.setState({ profile_picture: '/storage/avatar/'+profile_picture })

            
          })
          .catch(error => {
            console.log(error)
          })

  }


  render() {
    return (

      
         <section className="account-header has-background-image">
          <div className="container">
            <div className="avatar-container">
              <img src={this.state.profile_picture} />
            </div>
            <div className="title-container">
              <h1>{this.state.user_name}</h1>
            </div>
            <div className="meta-actions-container">
              <div className="custom-label-value-container">
                <div className="label-container primary has-splice bottom-left">
                  Playing Since:
                </div>
                <div className="action-container has-splice bottom-right">
                  {this.state.playing_since}
                </div>
              </div>
              <div className="custom-label-value-container edit">
                <div className="label-container has-splice bottom-left">
                  Edit Settings
                </div>
                <div className="action-container has-splice bottom-right">
                  <i className="fas fa-cog" />
                </div>
              </div>
            </div>
          </div>
        </section>

      )
    }


  handleChange (evt) {
  
  //  this.setState({ [evt.target.name]: evt.target.value });
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



