import React, { Component } from 'react';
import '../../styles/faq.css';

class Faq extends Component {

    constructor(props) {
        super(props)
        this.toggleHidden = this.toggleHidden.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
        this.toggleHiding = this.toggleHiding.bind(this);
        this.toggleHid = this.toggleHid.bind(this);
        this.state = {
            whyNepsium: false,
            NepsiumNotable: false,
            NepsiumGoals: false,
            NepsiumToken: false
        }
    }

    toggleHidden() {
        this.setState((prevState) => {
            return {
                whyNepsium: !prevState.whyNepsium
            }
        });
    }

    toggleHide() {
        this.setState((prevState) => {
            return {
                NepsiumNotable: !prevState.NepsiumNotable
            }
        })
    }

    toggleHiding() {
        this.setState((prevState) => {
            return {
                NepsiumGoals: !prevState.NepsiumGoals
            }
        })
    }

    toggleHid() {
        this.setState((prevState) => {
            return {
                NepsiumToken: !prevState.NepsiumToken
            }
        })
    }



    render() {
        return (
            <div className="faq">
                <div className="content">
                    <p className="title">Frequently Asked Questions</p>
                    <div className="questions">
                        <div className="question" onClick={this.toggleHidden}>
                            <p className="que" >
                                Why Nepsium? {!this.state.whyNepsium ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                            </p>
                            {this.state.whyNepsium && (
                                <p className="ans">
                                    Nepsium seeks to cover the untapped and undertapped crypto markets in Africa, 
                                    by building an exchange to cover several African countries, a crypto-fiat POS, 
                                    NepsiumVoucher would see a crypto voucher being purchased offline, 
                                    the pin can be redeemed on the Nepsium platform.
                                </p>
                            )}
                        </div>
                        <div className="question" onClick={this.toggleHide}>
                            <p className="que" >
                                What are Nepsium notable features? {!this.state.NepsiumNotable ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                            </p>
                            {this.state.NepsiumNotable && (
                                <p className="ans">
                                <ul>
                                    <li>Easy to use application<br /></li>
                                    <li>Security, Speed and low fees<br /></li>
                                    <li>Efficiency</li>
                                </ul>
                                </p>
                            )}
                        </div>
                        <div className="question" onClick={this.toggleHiding}>
                            <p className="que">
                                What are the major goals of Nepsium? {!this.state.NepsiumGoals ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                            </p>
                            {this.state.NepsiumGoals && (
                                <p className="ans">
                                    <ul>
                                        <li>Breaking the crypto-adoption barrier by buiding the required infrastructure</li>
                                        <li>Making crypto easy to use</li>
                                    </ul>
                                </p>
                            )}
                        </div>
                        <div className="question" onClick={this.toggleHid}>
                            <p className="que">
                                What is Nepsium token(NEPT)? {!this.state.NepsiumToken ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                            </p>
                            {this.state.NepsiumToken && (
                                <p className="ans">
                                    Native token of the nepsium ecosystem. Users pay a 50% fee when paying with the NEPT across all Nepsium Platforms
                                </p>
                            )}
                        </div>
                    </div>
                    <p className="all-questions">View all Questions <i className="fas fa-angle-right"></i></p>
                    <div className="subscribe">
                        <p className="title">Subscribe</p>
                        <p>Never miss any of our news and updates</p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;