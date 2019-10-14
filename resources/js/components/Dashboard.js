import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Dashboard extends Component {
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



        <div>
        <section className="general-page-header has-background-image">
          <div className="container">
            <h1>Select A Game To <span className="text-primary">Duel</span></h1>
          </div>
        </section>
        <section className="dashboard-games-container">
          <div className="container">
            <div className="game-card has-background-image lol">
              <div className="overlay">
                <div className="header">
                  Choose Your <span className="text-primary">Server</span>
                </div>
                <ul className="unstyled">
                  <li>
                    Europe West (EUW)
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-card has-background-image fortnite">
              <div className="overlay">
                <div className="header">
                  Choose Your <span className="text-primary">Platform</span>
                </div>
                <ul className="unstyled">
                  <li>
                    Xbox One - Controller
                  </li>
                  <li>
                    Xbox One - Mouse &amp; Keyboard
                  </li>
                  <li>
                    Playstation 4 - Controller
                  </li>
                  <li>
                    Playstation 4 - Mouse &amp; Keyboard
                  </li>
                  <li>
                    PC
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-card has-background-image fifa">
              <div className="overlay">
                <div className="header">
                  Choose Your <span className="text-primary">Platform</span>
                </div>
                <ul className="unstyled">
                  <li>
                    Xbox One - Controller
                  </li>
                  <li>
                    Xbox One - Mouse &amp; Keyboard
                  </li>
                  <li>
                    Playstation 4 - Controller
                  </li>
                  <li>
                    Playstation 4 - Mouse &amp; Keyboard
                  </li>
                  <li>
                    PC
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-card has-background-image apex">
              <div className="overlay">
                <div className="header">
                  Choose Your <span className="text-primary">Platform</span>
                </div>
                <ul className="unstyled">
                  <li>
                    Xbox One - Controller
                  </li>
                  <li>
                    Xbox One - Mouse &amp; Keyboard
                  </li>
                  <li>
                    Playstation 4 - Controller
                  </li>
                  <li>
                    Playstation 4 - Mouse &amp; Keyboard
                  </li>
                  <li>
                    PC
                  </li>
                </ul>
              </div>
            </div>
            <div className="disclaimer-text">
              <p>Duel Gaming Limited is not associated in any way with Riot Games and league of legends, epic games and fortnite, EA and FIFA19 or Apex Legends</p>
            </div>
          </div>
        </section>
      </div>

  

      )
    }

  

}



