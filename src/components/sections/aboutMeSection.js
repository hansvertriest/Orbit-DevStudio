import React from 'react';

import {NextSectionButton} from '../buttons';
import WorkListItem from '../workListItem';

import AboutMeBubbles from '../../images/ui/about-me-bubbles.svg';

const AboutMeSection = () => {

    const goToThisSection = () => {
        window.location.href = '#about-me';
    }

    const goToNextSection = () => {
        window.location.href = '#projects';
    }
    
    return (
        <div  className="about-me-section">

            <div id="about-me" className="container">
                <div className="next-section-button-container d-none d-sm-block">
                    <NextSectionButton lightMode={true} callback={goToThisSection} text="Leer me kennen" />
                </div>
            <div className="row">
                <div class="side-bar-spacer col-12 col-sm-4"></div>
                <div class="side-bar d-none d-sm-block col-4">
                    <img src={AboutMeBubbles} />
                    <p className="about-me-quote">“Het creëren van ervaring die voor de gebruiker een ware meerwaarde zijn is voor mij waar het allemaal om draait.”</p>
                </div>
                <div class="about-me-text col-12 col-sm-8">
                    <h1>Wie ben ik?</h1>
                    <h2>Hans Vertriest</h2>
                    <p>Ik ben een student aan de Artevelde hogeschool waar ik New Media Development studeer. </p>
                    <p>Ik ben altijd opzoek naar nieuwe manieren om mijn kennis en skills toe te passen buiten de schoolcontext. Daarom startte ik als student zelfstandige Orbit DevStudio: mijn bedrijf waar ik als freelancer  websites, webapplicaties en smartphone applicaties ontwikkel.</p>

                    <h2>Werk ervaring</h2>
                    <ul className="work-list">
                        <WorkListItem>
                            <p><strong>Vrijwilliger (hoofd-)animator</strong> - Speelplein Spelemee (2015 - 2018)</p>
                        </WorkListItem>
                        <WorkListItem>
                            <p><strong>Kassier medewerker</strong> - c&a Dendermonde (2018 - 2019)</p>
                        </WorkListItem>
                        <WorkListItem>
                            <p><strong>Open Summer of Code</strong> - Open Knowledge Belgium (juli 2020)</p>
                        </WorkListItem>
                    </ul>
                </div>

                <div class="side-bar--sm d-sm-none col-12">
                    <img src={AboutMeBubbles} />
                    <p className="about-me-quote">“Het creëren van ervaring die voor de gebruiker een ware meerwaarde zijn is voor mij waar het allemaal om draait.”</p>
                </div>
            </div>

            <div className="next-section-button-container-bottom d-none d-sm-block">
                <NextSectionButton lightMode={true} callback={goToNextSection} text="Mijn projecten" />
            </div>
            </div>
        </div>
    );
}

export default AboutMeSection;