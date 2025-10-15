import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-section">
        <div className="container">
          <div className="left">
            <h1>facebook</h1>
            <h2 className='des'>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="right">
            <div className="login-box">
              <input type="text" placeholder="Email address or phone number" />
              <input type="password" placeholder="Password" />
              <button className="login-button">Log in</button>
              <a href="#">Forgotten password?</a>
              <hr />
              <button className="create-button">Create new account</button>
            </div>
            <p className="create-page">Create a Page for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <div className="languages">
            <a href="#">English (UK)</a> <a href="#">বাংলা</a> <a href="#">অসমীয়া</a> <a href="#">हिन्दी</a> <a href="#">नेपाली</a>
            <a href="#">Bahasa Indonesia</a> <a href="#">العربية</a> <a href="#">中文(简体)</a> <a href="#">Bahasa Melayu</a>
            <a href="#">Español</a> <a href="#">Português (Brasil)</a>
            <button>+</button>
          </div><hr />
          <div className="info-links">
            <a href="#">Sign Up</a> <a href="#">Log in</a> <a href="#">Messenger</a> <a href="#">Facebook Lite</a> <a href="#">Video</a>
            <a href="#">Places</a> <a href="#">Games</a> <a href="#">Marketplace</a> <a href="#">Meta Pay</a> <a href="#">Meta Store</a>
            <a href="#">Meta Quest</a> <a href="#">Meta AI</a> <a href="#">Instagram</a> <a href="#">Threads</a> <a href="#">Fundraisers</a>
            <a href="#">Services</a> <a href="#">Voting Information Centre</a> <a href="#">Privacy Policy</a> <a href="#">Privacy Centre</a>
            <a href="#">Groups</a> <a href="#">About</a> <a href="#">Create ad</a> <a href="#">Create Page</a> <a href="#">Developers</a>
            <a href="#">Careers</a> <a href="#">Cookies</a> <a href="#">AdChoices</a> <a href="#">Terms</a> <a href="#">Help</a>
            <a href="#">Contact uploading and non-users</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Meta © 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
