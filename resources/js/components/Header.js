import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      playing_since: '',
      profile_picture: '',
      balance: 0
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

      
       <React.Fragment>
       
            <header>
          <div className="container">
            <div className="col logo-container">
              <a href="/">
                <img src="/img/logo.png" />
              </a>
            </div>
            <div className="col navigation-container">
              <nav>
                <ul className="unstyled inline">
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Start a Match</a>
                    <img src="/img/icons/chevron-down-red.png" />
                  </li>
                  <li>
                    <a href="#">Leaderboards</a>
                  </li>
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col notifications-container">
              <i className="fas fa-bell" />
            </div>
            <div className="col user-details-container">
              <i className="fas fa-user-circle" />
              <a href="/profile/settings">{this.state.user_name}</a>
              <img src="/img/icons/chevron-down-red.png" />
            </div>
            <div className="col wallet-container">
              Wallet: £{this.state.balance.toFixed(2)}
              <a href="/profile/wallet"><img src="/img/icons/plus-icon.png" /></a>
            </div>
          </div>
        </header>
        <section>
          <div className="container">
            <div className="dropdown-options" style={{position: 'initial', maxWidth: '330px', marginBottom: '60px', transform: 'unset'}}>
              <ul className="unstyled">
                <li>FIFA 20</li>
                <li>Apex Legends</li>
                <li className="has-splice bottom-right">Fortnite</li>
              </ul>
            </div>
            <div className="match-types-sub-menu-container has-splice bottom-right">
              <ul className="unstyled parent">
                <li className="duel">
                  <a href="#">Duel</a>
                  <ul className="unstyled child">
                    <li className="league">
                      <a href="#">Leage Of Legends</a>
                    </li>
                    <li className="fortnite">
                      <a href="#">Fortnite</a>
                      <ul className="unstyled grandchild">
                        <li>
                          <a href="#">Xbox One <i className="fas fa-gamepad" /></a>
                        </li>
                        <li>
                          <a href="#">Xbox One <i className="fas fa-keyboard" /></a>
                        </li>
                        <li>
                          <a href="#">Playstation 4 <i className="fas fa-gamepad" /></a>
                        </li>
                        <li>
                          <a href="#">Playstation 4 <i className="fas fa-keyboard" /></a>
                        </li>
                        <li>
                          <a href="#">PC</a>
                        </li>
                      </ul>
                    </li>
                    <li className="apex">
                      <a href="#">Apex Legends</a>
                    </li>
                    <li className="fifa">
                      <a href="#">Fifa</a>
                    </li>
                  </ul>
                </li>
                <li className="match-making">
                  <a href="#">Matchmaking</a>
                </li>
                <li className="tournaments">
                  <a href="#">Tournaments</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      
        </React.Fragment>

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















