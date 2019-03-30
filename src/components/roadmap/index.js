import React, { Component } from 'react';
import "../../styles/roadmap.css";

class Roadmap extends Component {
    state = {}
    render() {
        return (
            <div className="roadmap" id="roadmap">
                <div className="content">
                    <div className="top">
                        <p className="title">Road Map</p>
                        {/* <small>Our milestones are going forwards rapidly to achieve that</small> */}
                    </div>
                    <div className="cut">
                        <div className="road">
                            <i className="fas fa-angle-left"></i>
                            <div className="left-edge"></div>
                            <div className="map first">
                                <p className="label">Technical & Legal works begin</p>
                                <div className="circle">
                                    <div className="point"></div>
                                </div>
                                <p className="date">June 2018</p>
                            </div>
                            <div className="line"></div>
                            <div className="map">
                                <p className="date">September 2018</p>
                                <div className="circle">
                                    <div className="point"></div>
                                </div>
                                <p className="label">Alpha Crypto Blockchain</p>
                            </div>
                            <div className="line"></div>
                            <div className="map">
                                <p className="label">ICO Begins</p>
                                <div className="circle">
                                    <div className="point"></div>
                                </div>
                                <p className="date">December 2018</p>
                            </div>
                            <div className="line"></div>
                            <div className="map">
                                <p className="date">January 2019</p>
                                <div className="circle">
                                    <div className="point"></div>
                                </div>
                                <p className="label">Full Public crypto chain starts</p>
                            </div>
                            <div className="line"></div>
                            <div className="map">
                                <p className="label">Development Begins</p>
                                <div className="circle">
                                    <div className="point"></div>
                                </div>
                                <p className="date">March 2019</p>
                            </div>
                            <div className="right-edge"></div>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Roadmap;