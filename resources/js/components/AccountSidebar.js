import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AccountSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {


    };



  }

  





 
  


  render() {

    const path = window.location.pathname;
    return (

        <div className="tabs">
            <ul className="unstyled">
              <li className={path === '/profile/settings' ? 'active' : '' }>
                <a href="/profile/settings">
                  <i className="fas fa-user-circle" />
                  Settings
                </a>
              </li>
              <li className={path === '/profile/wallet' ? 'active' : '' }>
                <a href="/profile/wallet">
                  <i className="fas fa-pound-sign" />
                  Wallet
                </a>
              </li>
              <li className={path === '/profile/payment-methods' ? 'active' : '' }>
                <a href="/profile/payment-methods">
                  <i className="fas fa-credit-card" />
                  Payment Methods
                </a>
              </li>
              <li className={path === '/profile/transaction-history' ? 'active' : '' }>
                <a href="/profile/transaction-history">
                  <i className="fas fa-search" />
                  Transaction History
                </a>
              </li>
              <li className={path === '/profile/notifications' ? 'active' : '' }>
                <a href="/profile/notifications">
                  <i className="far fa-comment-alt" />
                  Notifications
                </a>
              </li>
              <li className={path === '/profile/gamertags' ? 'active' : '' }>
                <a href="/profile/gamertags">
                  <i className="fas fa-gamepad" />
                  Gamertags
                </a>
              </li>
              <li className={path === '/profile/account-controls' ? 'active' : '' }>
                <a href="/profile/account-controls">
                  <i className="fas fa-briefcase" />
                  Account Controls
                </a>
              </li>
              <li>
                <a href="/logout">
                  <i className="fas fa-sign-out-alt"></i>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
  

      )
    }

  

}



