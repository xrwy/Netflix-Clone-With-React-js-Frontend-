import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='site-footer'>
              <p className='footer-title'>Questions? Call 0850-390-7444</p>
              <div className='row-'>
                <div className='col-'>
                  <ul>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>Investor Relations</a></li>
                    <li><a href='/'>Terms of Use</a></li>
                    <li><a href='/'>Contact Us</a></li>
                  </ul>
                </div>
                <div className='col-'>
                  <ul>
                    <li><a href='/'>Help Center</a></li>
                    <li><a href='/'>Jobs</a></li>
                    <li><a href='/'>Privacy</a></li>
                    <li><a href='/'>Speed Test</a></li>
                  </ul>
                </div>
                <div className='col-'>
                  <ul>
                    <li><a href='/'>Account</a></li>
                    <li><a href='/'>Redeem Gift Cards</a></li>
                    <li><a href='/'>Cookie Preferences</a></li>
                    <li><a href='/'>Legal Notices</a></li>
                  </ul>
                </div>
                <div className='col-'>
                  <ul>
                    <li><a href='/'>Media Center</a></li>
                    <li><a href='/'>Ways to Watch</a></li>
                    <li><a href='/'>Corporate Information</a></li>
                    <li><a href='/'>Only on Netflix</a></li>
                  </ul>
                </div>
              </div>
              <div className='lang-selection'>
                <select>
                  <option value="englis">English</option>
                  <option value="turkish">Turkish</option>
                </select>
              </div>
              <p className="footer-country">Netflix Turkey</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
