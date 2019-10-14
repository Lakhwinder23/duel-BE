import React from 'react'
import { Link } from 'react-router-dom'

    const Footer = () => (
       <React.Fragment>
        <footer>
          <div className="container">
            <div className="col">
              <img src="/img/logo.png" className="footer-logo" />
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitch" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <nav>
                <ul className="unstyled">
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Duel</a>
                  </li>
                  <li>
                    <a href="#">Fortnite</a>
                  </li>
                  <li>
                    <a href="#">Apex Legends</a>
                  </li>
                  <li>
                    <a href="#">FIFA</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col">
              <nav>
                <ul className="unstyled">
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col">
              <nav>
                <ul className="unstyled">
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Wallet</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
        <div className="copyright-container">
          <div className="container">
            <div>
              <span>Copyright © Duel Gaming Limited 2019.</span>
              <span>Duel Gaming Limited is licensed and regulated by the Gambling Commision. <a href="http://www.licensestatus.co.uk">http://www.licensestatus.co.uk</a></span>
            </div>
            <div>
              Web Design By <a href="https://kijo.co">KIJO Creative</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

export default Footer
