import React, { Component } from 'react';
import '../../styles/footer.css';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/nepsium/api/contact/index.php';
class Footer extends Component {
        state = {
            fullName: '',
            email: '',
            message: '',
            mailsent: false,
            error: null
        }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="footer">
                <div className="content">
                    <div className="join-team">
                        <p className="title">Join our team</p>
                        <p className="sub-title">We look forward to hearing from you</p>
                    </div>
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                        <div className="form">
                            <div className="inputs">
                                <input onChange={e => this.setState({fullName: e.target.value})} type="text" name="fullName" id="name" value={this.state.fullName} />
                                <input onChange={e => this.setState({email: e.target.value})} type="email" name="email" id="email" value={this.state.email} />
                            </div>
                            <textarea onChange={e => this.setState({message: e.target.value})} placeholder="Message" name="message" id="message" value={this.state.message}></textarea>
                        </div>
                        <button>Join</button>
                        <div>

                        </div>
                    </form>
                </div>
                <div className="base">
                    {/* <ul className="list">
                        <li className="title">Product</li>
                        <li><a href="index.html">Wallet</a></li>
                        <li><a href="index.html">Investors</a></li>
                        <li><a href="index.html">Free Schedule</a></li>
                        <li><a href="index.html">Terms & Privacy</a></li>
                        <li><a href="index.html">API References</a></li>
                        <li><a href="index.html">Help Desk</a></li>
                    </ul>
                    <ul className="list">
                        <li className="title">Company</li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Vision</a></li>
                        <li><a href="index.html">Features</a></li>
                        <li><a href="index.html">Teams</a></li>
                    </ul>
                    <ul className="list contact">
                        <li className="title">Contact</li>
                        <li><a href="index.html">Call Us</a></li>
                        <li><a href="index.html">Support</a></li>
                        <li className="btn">English</li>
                    </ul>
                    <div className="social">
                        <div>
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div>
                            <a href="http://www.medium.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-medium-m"></i>
                            </a>
                        </div>
                        <div>
                            <a href="http://www.telegram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-telegram-plane"></i>
                            </a>
                        </div>
                        <div>
                            <a href="http://www.reddit.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-reddit-alien"></i>
                            </a>
                        </div>
                    </div> */}
                    <p className="copyright">© Copyright 2019 Nepsium</p>
                    <div className="groupy">
                        <a href="http://www.google.com"><p className="link">Blog</p></a>
                        <a href="http://www.google.com"><p className="link">Whitepaper</p></a>
                    </div>
                    <div className="groupy">
                        <a href="http://www.google.com"><p className="link">Privacy Policy</p></a>
                        <a href="http://www.google.com"><p className="link">Contact</p></a>
                    </div>
                </div>
                {/* <p className="copyright">© Copyright 2019 Nepsium</p> */}
            </div>
        );
    }
}

export default Footer;