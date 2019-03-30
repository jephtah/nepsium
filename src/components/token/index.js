import React, { Component } from 'react';
import icons from '../../assets/token.png';
import "../../styles/token.css";


class Token extends Component {
    state = {}
    render() {
        return (
            <div className="token">
                <div className="content">
                    <div className="left">
                        <p className="title">Nepsium Token</p>
                        <p className="text">Nepsium (NEPT) is an ERC20 token on the ethereum
                        blockchain. A limit of 100 million NEPT will be
                        created, and 65% of the total supply will be allocated
                        for ICO. Any unsold tokens after ICO will be burnt.</p>
                    </div>
                    <div className="right">
                        <img className="image" src={icons} alt="" />
                    </div>
                </div>
                <div className="distro">
                    <p className="title">Token Distribution</p>
                    <div className="tile">
                        <p className="title">Token</p>
                        <div className="chart">
                            <div className="between">
                                <div className="flex-o">
                                    <p className="green">Initial Investors</p>
                                    <p className="blue">Team & Advisors</p>
                                    <p className="orange">ICO Token Series</p>
                                </div>
                                <div>
                                    <p className="purple">Exchange Listing Liquidity</p>
                                </div>
                            </div>
                            <div className="flex-o btns">
                                <div className="green-15">15%</div>
                                <div className="blue-12">12%</div>
                                <div className="orange-65">65%</div>
                                <div className="light-green-5">5%</div>
                                <div className="purple-3">3%</div>
                            </div>
                            <div className="end">
                                <p className="mr5 light-green">Airdrop and Bounty</p>
                            </div>
                        </div>
                    </div>
                    <div className="tile">
                        <p className="title">ICO Funds</p>
                        <div className="chart">
                            <div className="flex-o">
                                <p className="green">Marketing</p>
                                <p className="brown">Liquidity</p>
                                <p className="orange">Research</p>
                                <p className="pink">Infrastructure</p>
                            </div>
                            <div className="flex-o btns">
                                <div className="green-25">25%</div>
                                <div className="brown-25">25%</div>
                                <div className="orange-15">15%</div>
                                <div className="pink-15">15%</div>
                                <div className="dark-green-10">10%</div>
                                <div className="purple-10">10%</div>
                                {/* <div className="purple-3">3%</div>
                                <div className="gray-2">2%</div> */}
                            </div>
                            <div className="end">
                                <p className="dark-green">Legal and operations</p>
                                <p className="purple">Team</p>
                                {/* <p className="purple">Accounting and Legal Fees</p>
                                <p className="gray">Office Upkeep</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Token;