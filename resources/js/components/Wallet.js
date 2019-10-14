import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class Wallet extends Component {
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
            <div className="wallet">
              <div className="account-balance-container">
                <div className="label">Balance:</div>
                <div className="value">£{this.state.balance.toFixed(2)}</div>
              </div>
              <div className="inner">
                <div className="wallet-tab-header">
                  <div className="tabs">
                    <a href="/profile/wallet" className="has-splice top-left deposit active">Deposit</a>
                    <a href="/profile/wallet/withdraw" className="has-splice top-right withdraw">Withdraw</a>
                  </div>
                  <a href="/profile/payment-methods" className="edit-payment-methods">
                    <i className="fas fa-credit-card" />
                    Edit Payment Methods
                  </a>
                </div>
                <form method="POST" action="#">
                  <div className="row settings-fields">
                    <h3>Deposit</h3>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Amount to Deposit</label>
                      </div>
                      <input type="text" placeholder="£0.00" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Select Payment Method</label>
                      </div>
                      <input type="text" placeholder="Select Payment Method" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>CVC</label>
                      </div>
                      <input type="text" placeholder="CVC" />
                    </div>
                  </div>
                  <div className="row submit">
                    <input type="submit" className="btn btn-primary" defaultValue="Add Funds" />
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



