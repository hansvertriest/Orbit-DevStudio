import React from 'react';

import {SecondaryButton} from '../buttons';

import contactBubbles from '../../images/ui/contact-bubbles.svg';
import githubIconLight from '../../images/icons/github-light.svg';
import linkedinIconLight from '../../images/icons/linkedin-light.svg';

const ContactSection = () => {

    const action = () => {
        window.location.href = 'mailto:yes@orbitdevstudio.com';
    }

    return (
        <div className="contact-section" id="contact">
            <div className="container contact-section__container d-none d-lg-flex">
                <div className="text-container">
                    <div className="text-container__bg"></div>
                    <div className="text-container__text">
                        <h1>Let's create something amazing together.</h1>
                        <div>
                        <p>yes@orbitdevstudio.com</p>
                        <SecondaryButton lightMode={true} action={action} id="landing-projects" text="Stuur een email"/>
                        </div>
                        <div className="icon-container">
                            <p>OF</p>
                            <div className="icon-group">
                                <a href="https://github.com/hansvertriest" target="blank"><img src={githubIconLight}/></a>
                                <a href="https://be.linkedin.com/in/hans-vertriest-a57763174" target="blank"><img src={linkedinIconLight}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="contact-bubbles" src={contactBubbles} />
            </div>
            <div className="container contact-section__container-sm d-block d-lg-none">
                    <div className="container__bg"></div>
                <div className="text-container">
                    <div className="text-container__text">
                        <h1>Let's create something amazing together.</h1>
                        <div>
                        <p>yes@orbitdevstudio.com</p>
                        <SecondaryButton lightMode={true} action={action} id="landing-projects" text="Stuur een email"/>
                        </div>
                        <div className="icon-container">
                            <p>OF</p>
                            <div className="icon-group">
                                <a href="https://github.com/hansvertriest" target="blank"><img src={githubIconLight}/></a>
                                <a href="https://be.linkedin.com/in/hans-vertriest-a57763174" target="blank"><img src={linkedinIconLight}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="contact-bubbles d-none d-lg-block" src={contactBubbles} />
            </div>
        </div>
    );
}

export default ContactSection;