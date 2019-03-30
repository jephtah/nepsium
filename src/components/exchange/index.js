import React, { Component } from 'react';
import api from '../../assets/1.png';
import ease from '../../assets/2.png';
import dev from '../../assets/3.png';
import perf from '../../assets/4.png';
import fin from '../../assets/5.png';
import sec from '../../assets/6.png';
import "../../styles/exchange.css";

class Exchange extends Component {
    render() {
        return (
            <div className="exchange">
                <div className="content">
                    <div className="top">
                        <p className="title">Nepsium Exchange</p>
                        <small>Features</small>
                    </div>

                    <div className="features">
                        <div className="line">
                            <div className="feature">
                                <img src={api} alt="" />
                                <p>Advanced APIs</p>
                            </div>

                            <div className="feature">
                                <img src={ease} alt="" />
                                <p>Ease of Usage</p>
                            </div>

                            <div className="feature">
                                <img src={dev} alt="" />
                                <p>Device Support</p>
                            </div>
                        </div>

                        <div className="line">
                            <div className="feature">
                                <img src={perf} alt="" />
                                <p>Efficiency and Performance</p>
                            </div>

                            <div className="feature">
                                <img src={fin} alt="" />
                                <p>Financial Integration</p>
                            </div>

                            <div className="feature">
                                <img src={sec} alt="" />
                                <p>Prioritized Security</p>
                            </div>
                        </div>

                        <div className="mobile">
                            <div className="feature">
                                <img src={api} alt="" />
                                <p>Advanced APIs</p>
                            </div>

                            <div className="feature">
                                <img src={ease} alt="" />
                                <p>Ease of Usage</p>
                            </div>
                        </div>

                        <div className="mobile">
                            <div className="feature">
                                <img src={dev} alt="" />
                                <p>Device Support</p>
                            </div>

                            <div className="feature">
                                <img src={perf} alt="" />
                                <p>Efficiency and Performance</p>
                            </div>
                        </div>

                        <div className="mobile">
                            <div className="feature">
                                <img src={fin} alt="" />
                                <p>Financial Integration</p>
                            </div>

                            <div className="feature">
                                <img src={sec} alt="" />
                                <p>Prioritized Security</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Exchange;