import React, {useEffect} from 'react';

import {NextSectionButton, PrimaryButton, SecondaryButton} from '../buttons';

import logo_empty from '../../images/logo_empty.svg';
import logo_text from '../../images/logo-text.png';
import memoji from '../../images/memojis/smile.png';

const Landing = () => {
    const animation = () => {
        const logoContainer = document.querySelector('#landing-logo');
        const logoText = document.querySelector('#landing-logo .landing-logo__text');
        const logoEmpty = document.querySelector('#landing-logo .landing-logo__empty ');
        const logoDot = document.querySelector('#landing-logo .landing-logo__red-dot ');
        const logoDotImage = document.querySelector('#landing-logo .landing-logo__red-dot img');
        const landingTextContainer = document.querySelector('.landing-text');
        const contactMeButton = document.querySelector('#landing-contact-me');
        const projectButton = document.querySelector('#landing-projects');

        setTimeout(() => {
            logoText.style.opacity = 0;
        }, 1300);

        setTimeout(() => {
            // logoDot.style.right = `${Number(logoDot.style.right.replace('px', '')) - (185)}px`;
            logoDot.style.top = '90px';
            logoDot.style.transform = "scale(11)";
            logoDotImage.style.opacity = 1;
            console.log()
        }, 1800);

        setTimeout(() => {
            landingTextContainer.style.opacity = 1;
            landingTextContainer.style.right = 0;
        }, 2500);

        setTimeout(() => {
            contactMeButton.style.opacity = 1;
            contactMeButton.style.top = 0;
        }, 3300);
        setTimeout(() => {
            projectButton.style.opacity = 1;
            projectButton.style.top = 0;
        }, 3700);
    }

    const animationSmall = () => {
        const logoContainer = document.querySelector('.landing-logo-sm');
        const logoText = document.querySelector('#landing-logo-sm .landing-logo__text');
        const logoEmpty = document.querySelector('#landing-logo-sm .landing-logo__empty ');
        const logoDot = document.querySelector('#landing-logo-sm .landing-logo__red-dot ');
        const logoDotImage = document.querySelector('#landing-logo-sm .landing-logo__red-dot img');
        const landingTextContainer = document.querySelector('.landing-text');
        const contactMeButton = document.querySelector('#landing-contact-me');
        const projectButton = document.querySelector('#landing-projects');

        setTimeout(() => {
            logoText.style.opacity = 0;
        }, 800);

        setTimeout(() => {
            logoContainer.style.right = "15%";
            logoDot.style.top = '90px';
            logoDot.style.transform = "scale(12)";
            logoDotImage.style.opacity = 1;
            console.log()
        }, 1200);

        setTimeout(() => {
            landingTextContainer.style.opacity = 1;
            landingTextContainer.style.right = 0;
        }, 1900);

        setTimeout(() => {
            contactMeButton.style.opacity = 1;
            contactMeButton.style.top = 0;
        }, 2700);
        setTimeout(() => {
            projectButton.style.opacity = 1;
            projectButton.style.top = 0;
        }, 3100);
    }

    useEffect(() => {
        if (window.innerWidth >= 768) {
            animation(); 
        } else {
            console.log('sm');
            animationSmall();
        }
    });

    const goToNextSection = () => {
        window.location.href = '#vision';
    }

    const goToContact = () => {
        console.log('ddd');
        window.location.href = '#contact';
    }

    const goToProjects = () => {
        window.location.href = '#projects';
    }

    return (
        <div className="landing">
            <div className="container">
            <div className="row">
                <div className="logo-container col-lg col-12">
                    <div id="landing-logo" className="landing-logo  d-none d-md-block">
                        <div className="landing-logo__red-dot"><img src={memoji}/></div>
                        <img className="landing-logo__empty" src={logo_empty}/>
                        <img className="landing-logo__text" src={logo_text}/>
                    </div>
                    <div id="landing-logo-sm" className="landing-logo-sm d-block d-md-none">
                        <div className="landing-logo__red-dot"><img src={memoji}/></div>
                        <img className="landing-logo__empty" src={logo_empty}/>
                        <img className="landing-logo__text" src={logo_text}/>
                    </div>
                </div>
                
                <div className="landing-left-placeholder d-none d-md-block"></div>
                <div className="landing-left-placeholder-sm d-md-none"></div>
                <div className="landing-text col-lg col-12">
                    <h1 className=""><span>Hallo,</span> mijn naam is <strong>Hans Vertriest</strong></h1>
                    {/* <h1 className="d-sm-none">Hallo,<br/> mijn naam is <strong>Hans Vertriest</strong></h1> */}
                    <h2>Full-stack developer</h2>
                    <p>Als student New Media Development volg ik de opleiding tot full-stack developer.</p>
                    <p>Daarnaast startte ik als student zelfstandige het bedrijf Orbit DevStudio, waar ik als freelancer websites en webapplicaties ontwikkel.</p>
                    <div className="landing-text__button-group d-flex d-md-block ">
                        {/* <button id="landing-contact-me" className="primary-button">Contacteer me</button> */}
                        <PrimaryButton action={goToContact} id="landing-contact-me" text="Contacteer me"/>
                        {/* <button id="landing-projects" className="secondary-button">Mijn projecten</button> */}
                        <SecondaryButton action={goToProjects} id="landing-projects" text="Mijn projecten"/>
                    </div>
                </div>
            </div>
            <div className="next-section-button-container d-none d-sm-block">
                <NextSectionButton callback={goToNextSection} text="Ontdek mijn visie" />
            </div>
            </div>
        </div>
    );
};

export default Landing;