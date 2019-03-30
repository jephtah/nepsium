import React, { Component } from 'react';
import "../../styles/presale.css";

class Presale extends Component {
    state = {}
    render() {
        return (
            <div className="presale">
                <div className="content">
                    <p className="title">ICO Pre Sale Starts Soon</p>
                    <div className="bar">
                        <div className="bar-top">
                            <div className="left-bar">
                                <div className="bonus">
                                    <p>Bonus</p>
                                    <p>Pre-sale <span>($3m Softcap)</span></p>
                                </div>
                                <div className="left"></div>
                            </div>
                            <div className="hard-cap"></div>
                        </div>
                        <div className="base">
                            <p>0 NEPT</p>
                            <p>$30m Hardcap</p>
                        </div>
                    </div>
                    <div className="below-bar">
                        <button>BUY TOKEN NOW</button>
                        <div className="currency">
                            <i className="fab fa-bitcoin"></i>
                            <div className="top-bottom">
                                <p>Accepted Only</p>
                            </div>
                            <i className="fab fa-ethereum"></i>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Presale;