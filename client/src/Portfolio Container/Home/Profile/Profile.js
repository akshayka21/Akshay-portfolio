import React from 'react'
import Typical from 'react-typical'
import ScrollServices from '../../../utilities/ScrollService'
import '../Profile/Profile.css'


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="proflie-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href="https://github.com/akshayka21" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="https://bitbucket.org/akshayka21/" target="_blank"><i class="fab fa-bitbucket"></i></a>
                            <a href="https://twitter.com/akshayambarish2" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/akshayka21" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'm <span className="highlighted-text">Akshay K A </span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 🔴",
                                        1000,
                                        "Full stack Developer 💻",
                                        1000,
                                        "MERN Stack Dev 📱",
                                        1000,
                                        "React/React Native 🌐 ",
                                        1000,
                                        "PCB Design and Fabrication 😎",
                                        1000,

                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline ">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                            onClick={() => ScrollServices.scrollHandler.scrollToHireMe()}>Hire Me</button>
                        <a href="Akshay_CV.pdf" download="Akshay.pdf"><button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
