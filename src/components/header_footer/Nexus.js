import React, { Component } from 'react';
import img from '../../assets/bg.jpg'
import "../../styles/nexus.css"

class Nexus extends Component {
    render() {
        return (
            <div className="nexus">
                <div className="content">
                    <div className="image">
                        <img src={img} alt="Nepsium the nexus" />
                    </div>
                    <div className="text">
                        <div className="middle">
                            <p className="bigger">Adoption the cause,</p>
                            <p className="biggest">Nepsium the nexus</p>
                            <p className="big">Crypto adoption with Nepsium</p>
                            <div className="btns">
                                <button>Download White Paper</button>
                                <button>Register for ICO</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Nexus;