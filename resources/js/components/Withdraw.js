import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class Withdraw extends Component {
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
                <div className="value">{this.state.balance.toFixed(2)}</div>
              </div>
              <div className="inner">
                <div className="wallet-tab-header">
                  <div className="tabs">
                    <a href="/profile/wallet" className="has-splice top-left deposit">Deposit</a>
                    <a href="/profile/wallet/withdraw" className="has-splice top-right withdraw active">Withdraw</a>
                  </div>
                  <a href="/profile/payment-methods" className="edit-payment-methods">
                    <i className="fas fa-credit-card" />
                    Edit Payment Methods
                  </a>
                </div>
                <form method="POST" action="#">
                  <div className="row settings-fields">
                    <h3>Withdraw</h3>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Amount to Withdraw</label>
                      </div>
                      <input type="text" placeholder="£0.00" />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Select Payment Method</label>
                      </div>
                      <input type="text" placeholder="Select Payment Method" />
                    </div>
                    <div className="custom-checkbox">
                      <label>
                        By ticking here you accept our <a href="#">Terms &amp; Conditions</a> and acknowledge that there will be a fixed fee of £3.00 plus 2.5%
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="row submit">
                    <input type="submit" className="btn btn-primary" defaultValue="Withdraw Funds" />
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



