import React from 'react';

import {NextSectionButton} from '../buttons';

import AboutMeBubbles from '../../images/ui/about-me-bubbles.svg';

const AboutMeSection = () => {

    const goToNextSection = () => {
        window.location.href = '#about-me';
    }
    
    return (
        <div id="about-me" className="about-me-section">

            <div className="container">
                <div className="next-section-button-container">
                    <NextSectionButton lightMode={true} callback={goToNextSection} text="Leer me kennen" />
                </div>
            <div className="row">
                <div class="side-bar-spacer col-4"></div>
                <div class="side-bar col-4">
                    <img src={AboutMeBubbles} />
                    <p>“Het creëren van ervaring die voor de gebruiker een ware meerwaarde zijn is voor mij waar het allemaal om draait.”</p>
                </div>
                <div class="about-me-text col-8">
                    <h1>Wie ben ik?</h1>
                    <h2>Hans Vertriest</h2>
                    <p>Ik ben een student aan de Artevelde hogeschool waar ik New Media Development studeer. </p>
                    <p>Ik ben altijd opzoek naar nieuwe manieren om mijn kennis en skills toe te passen buiten de schoolcontext. Daarom startte ik als student zelfstandige Orbit DevStudio: mijn bedrijf waar ik als freelancer  websites, webapplicaties en smartphone applicaties ontwikkel.</p>

                    <h2>Werk ervaring</h2>
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutMeSection;