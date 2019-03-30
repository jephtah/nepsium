import React, { Component } from 'react';
import xchange from '../../assets/1.1.png';
import card from '../../assets/1.2.png';
import pay from '../../assets/1.3.png';
import "../../styles/infogrid.css";

class InfoGrid extends Component {
    state = {}
    render() {
        return (
            <div className="info-grid">
                <div className="content">
                    <div className="info-left">
                        <div className="info">
                            <p className="title">Nepsium Exchange</p>
                            <p>Nepsium exchange includes a two-part system which
                            includes:</p>
                            <ul>
                                <li>A Crypto-Fiat Exchange Market Swap: Trade your
                                    crypto to supported fiat and send to your local bank account
                                    or mobile money number.
                                </li>
                                <li>
                                    An instant crypto-crypto exchange via changelly/shapeshift
                                </li>
                            </ul>
                        </div>
                        <div className="image">
                            <img src={xchange} alt="" />
                        </div>

                    </div>

                    <div className="info-right">
                        <div className="image">
                            <img src={card} alt="" />
                        </div>
                        <div className="info">
                            <p className="title">Nepsium Voucher</p>
                            <p>The NepsiumVoucher is a voucher that is easily convertible to crypto on
                                 the Nepsium platform. It allows access to major cryptocurrencies and local fiat at 
                                 locations/ stores around you.</p>
                        </div>
                    </div>

                    <div className="info-left">
                        <div className="info">
                            <p className="title">Nepsium Pay</p>
                            <p>NepsiumPay provides instant Crypto-Fiat settlement to merchant's local bank
                                account/ mobile money number. Nepsium Pay will consist of an app, web version
                                and api for integration on merchants' website.</p>

                        </div>
                        <div className="image">
                            <img src={pay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoGrid;