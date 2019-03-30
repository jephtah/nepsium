import React, { Component } from 'react';
import '../../styles/team.css';
import cf from '../../assets/passport1.png';
import fo from '../../assets/passport2.png';
import ad from '../../assets/passport3.jpg';
import ch from '../../assets/passport4.jpeg';

class Team extends Component {
    state = {}
    render() {
        return (
            <div className="team" id="team">
                <div className="our-team">
                    <p className="title">Meet Our Team</p>
                    <div className="group">
                        <div className="person">
                            <div className="image">
                                <img src={ch} alt="" />
                                <div className="social">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ansh2709/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <p className="name">Anshur Agarwal</p>
                            <p>CFO</p>
                        </div>
                        <div className="person">
                            <div className="image">
                                <img src={fo} alt="" />
                                <div className="social">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nathanielluz"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <p className="name">Nathaniel Luz</p>
                            <p>Founder</p>
                        </div>

                        <div className="person">
                            <div className="image">
                                <img src={cf} alt="" />
                                <div className="social">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lucky-uwakwe-a66949b7"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <p className="name">Lucky Uwakwe</p>
                            <p>Advisor</p>
                        </div>

                        <div className="person">
                            <div className="image">
                                <img src={ad} alt="" />
                                <div className="social">
                                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/uchejephtah"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <p className="name">Jephtah Uche</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
                {/* <div className="advisory">
                    <p className="title">Advisory Board</p>
                    <div className="group">
                        <div className="person">
                            <div className="image">
                                <img src={cf} alt="" />
                                <div className="social">
                                    <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="http://www.plus.google.com"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                            </div>
                            <p className="name">Lucky Uwakwe</p>
                            <p>Co-Founder</p>
                        </div>
                        <div className="person">
                            <div className="image">
                                <img src={fo} alt="" />
                                <div className="social">
                                    <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="http://www.plus.google.com"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                            </div>
                            <p className="name">Nathaniel Luz</p>
                            <p>Founder</p>
                        </div>
                      
                        
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Team;