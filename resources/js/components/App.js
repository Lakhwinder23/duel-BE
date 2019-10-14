 // resources/assets/js/components/App.js

    import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'
    import Header from './Header'
    import Footer from './Footer'
    import Login from './Login'
    import ResetPassword from './ResetPassword'
    import Register from './Register'
    import ProfileHeader from './ProfileHeader'
    import AccountSettings from './AccountSettings'
    import Wallet from './Wallet'
    import Withdraw from './Withdraw'
    import PaymentMethods from './PaymentMethods'
    import TransactionHistory from './TransactionHistory'
    import Notifications from './Notifications'
    import Gamertags from './Gamertags'
    import Dashboard from './Dashboard'

    class App extends Component {
      constructor(props) {
      super(props);
     
    }


      render () {

        console.log(window.location.pathname);
        return (
          <BrowserRouter>
            <div>
              {
                  window.location.pathname!=='/login' 
                  && window.location.pathname !== '/password/reset'
                  && window.location.pathname !== '/password/email' 
                  && window.location.pathname !== '/register'
                  && window.location.pathname !== '/profile/settings'
                  && window.location.pathname !== '/profile'
                  && window.location.pathname !== '/profile/wallet'
                  && window.location.pathname !== '/profile/wallet/withdraw'
                  && window.location.pathname !== '/profile/payment-methods'
                  && window.location.pathname !== '/profile/transaction-history'
                  && window.location.pathname !== '/profile/notifications'
                  && window.location.pathname !== '/profile/gamertags'
                   ? <Header/>:''
              }

              {

                window.location.pathname == '/profile/settings' ? <ProfileHeader />:''
              }

              {

                window.location.pathname == '/profile' ? <ProfileHeader />:''
              }
            
              {

                window.location.pathname == '/profile/wallet' ? <ProfileHeader />:''
              }
              {

                window.location.pathname == '/profile/wallet/withdraw' ? <ProfileHeader />:''
              }

              {

                window.location.pathname == '/profile/payment-methods' ? <ProfileHeader />:''
              }

              {

                window.location.pathname == '/profile/notifications' ? <ProfileHeader />:''
              }

              {

                window.location.pathname == '/profile/gamertags' ? <ProfileHeader />:''
              }

            </div>
            <Switch>
               
                <Route path='/login' component={Login} />
                <Route path='/password/reset' component={ResetPassword} />
                <Route path='/register' component={Register} />
                <Route path='/profile/settings' component={AccountSettings} />
                <Route path='/profile/wallet/withdraw' component={Withdraw} />
                <Route path='/profile/wallet' component={Wallet} />
                <Route path='/profile/payment-methods' component={PaymentMethods} />
                <Route path='/profile/transaction-history' component={TransactionHistory} />
                <Route path='/profile/notifications' component={Notifications} />
                <Route path='/profile/gamertags' component={Gamertags} />
                <Route path='/profile' component={AccountSettings} />
                <Route path='/dashboard' component={Dashboard} />
                
              </Switch>
            <div>
              {
                  window.location.pathname!=='/login' && window.location.pathname !== '/password/reset' && window.location.pathname !== '/password/email' && window.location.pathname !== '/register' ? <Footer/>:''
                 
              }
         
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))