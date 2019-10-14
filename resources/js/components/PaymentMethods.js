import axios from 'axios'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountSidebar from './AccountSidebar'; 

export default class PaymentMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
    methods: []

    };


    this.handleMethodChange = this.handleMethodChange.bind(this)
    this.handleMethodSubmission = this.handleMethodSubmission.bind(this)
    this.removePaymentMethod = this.removePaymentMethod.bind(this)



  }

  removePaymentMethod(index){

    console.log(index);
  }

  handleMethodChange (evt) {
  
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleMethodSubmission(evt){

    evt.preventDefault();

      const new_data = {
          method_name: this.state.method_name,
          card_number: this.state.card_number,
          cardholder_name: this.state.cardholder_name,
          expiry_date: this.state.expiry_date,
         
         // _token: csrf_token
        }

        console.log(new_data);

         axios.post("/profile/payment-methods/add", new_data, { 
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

     axios.get('/user/payment-methods')
          .then(res => {

                const methods = res.data.methods;
                console.log(methods);
        this.setState({methods});
          this.getData();
            
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
            <div className="payment-methods">
              <div className="inner">
                <form method="POST" action="#">
                  <div className="row settings-fields">
                    <h2>Add A <span className="text-primary">Card</span></h2>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Payment Method Name <small>For your ref</small></label>
                      </div>
                      <input type="text" name="method_name" placeholder="e.g. Main Credit Card" onChange={this.handleMethodChange} value={this.state.method_name || ''} />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Card Number</label>
                      </div>
                      <input type="password" name="card_number" placeholder="Card Number" onChange={this.handleMethodChange} value={this.state.card_number || ''} />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Cardholder Name</label>
                      </div>
                      <input type="text" name="cardholder_name" placeholder="Cardholder Name" onChange={this.handleMethodChange} value={this.state.cardholder_name || ''} />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>Expiry Date</label>
                      </div>
                      <input type="text" name="expiry_date" placeholder="Expiry Date" onChange={this.handleMethodChange} value={this.state.expiry_date || ''} />
                    </div>
                    <div className="form-group">
                      <div className="label-container">
                        <label>CVC</label>
                      </div>
                      <input type="number" name="cvc" placeholder="CVC" onChange={this.handleMethodChange} value={this.state.cvc || ''} />
                    </div>
                    <input type="submit" onClick={this.handleMethodSubmission} className="btn btn-primary" defaultValue="Save Card" />
                  </div>
                </form>
                <div className="row saved-cards">
                  <h2>Saved <span className="text-primary">Cards</span></h2>
                  <div className="saved-cards-table">
                    <div className="header">
                      <div>Card Ending</div>
                      <div>Payment Method Name</div>
                      <div />
                    </div>
                    <div className="body">

                     {this.state.methods.map(method =>
                      <div className="row" key={method.id}>
                       <div>•••• •••• ••••&nbsp;{method.card_ending}</div>
                       <div>{method.method_name}</div>
                       <div>
                          <button key={method.id} onClick={this.removePaymentMethod.bind(this, method.id)}>
                            <i className="fas fa-credit-card" />
                            Remove Card
                          </button>
                        </div>
                       </div>
                       )}
                     

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  

      )
    }

  

}



