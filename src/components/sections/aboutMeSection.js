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
                <div className="side-bar-spacer col-12 col-sm-4"></div>
                <div className="side-bar d-none d-sm-block col-4">
                    <img src={AboutMeBubbles} />
                    <p className="about-me-quote">“Ervaringen creëren die voor de gebruiker een ware meerwaarde zijn, is voor mij waar het allemaal om draait.”</p>
                </div>
                <div className="about-me-text col-12 col-sm-8">
                    <h1>Wie ben ik?</h1>
                    <h2>Hans Vertriest</h2>
                    <p>Ik ben student aan de Artevelde Hogeschool Gent waar ik New Media Development studeer. </p>
                    <p>Ik ben altijd op zoek naar nieuwe manieren om mijn kennis en skills toe te passen, ook buiten de schoolcontext. Daarom startte ik als student zelfstandige Orbit DevStudio: mijn bedrijfje waar ik als freelancer websites en webapplicaties ontwikkel.</p>

                    <h2>Werkervaring</h2>
                    <ul className="work-list">
                        <WorkListItem>
                            <p><strong>Internship</strong> - Bothrs Ghent (ongoing)</p>
                        </WorkListItem>
                        <WorkListItem>
                            <p><strong>Open Summer of Code</strong> - Open Knowledge Belgium (juli 2020)</p>
                        </WorkListItem>
                        <WorkListItem>
                            <p><strong>Kassier</strong> - c&a, Dendermonde (2018 - 2019)</p>
                        </WorkListItem>
                        <WorkListItem>
                            <p><strong>Vrijwilliger (hoofd-)animator</strong> - Speelplein Spelemee, Buggenhout (2015 - 2018)</p>
                        </WorkListItem>
                    </ul>
                </div>

                <div className="side-bar--sm d-sm-none col-12">
                    <img src={AboutMeBubbles} />
                    <p className="about-me-quote">“Ervaringen creëren die voor de gebruiker een ware meerwaarde zijn", is voor mij waar het allemaal om draait.</p>
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