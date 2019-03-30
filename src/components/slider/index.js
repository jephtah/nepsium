import React, { Component } from 'react';
import '../../styles/slider.css';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
import mobile from '../../assets/mobile.png';

class Slider extends Component {
    state = {}
    render() {
        return (
            <div className="slider">
                <div className="slides">
                    <div className="slide">
                        <div className="content">
                            <div className="crypto">
                                <p className="jumbo">Multi-Crypto Wallet App</p>
                                <p className="text">The Nepsium app will be a multi crypto wallet
                                hosting multiple cryptocurrencies as well as the
                                nepsium token</p>
                                <div className="store">
                                    <img src={playstore} alt="" />
                                    <img src={appstore} alt="" />
                                </div>
                            </div>
                            <img className="image" src={mobile} alt="" />
                        </div>
                        <div className="track">
                            <div className="active"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;