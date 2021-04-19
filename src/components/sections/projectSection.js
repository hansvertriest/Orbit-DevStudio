import React from 'react';

import ProjectTile from '../projectTile';
import {NextSectionButton} from '../buttons';

import connusBanner from '../../images/screenshots/connus-banner.png'
import jobMatchBanner from '../../images/screenshots/job-match-banner.png'
import ShareteveldeBanner from '../../images/screenshots/sharetevelde-banner.png'
import ShopTheDotBanner from '../../images/screenshots/shop-the-dot-banner.png'
import GithubIcon from '../../images/icons/github.svg';

import meteoriumBanner from '../../images/screenshots/meteorium-banner.png'
import ejBanner from '../../images/screenshots/ej-3.png'
import vlugmoorBanner from '../../images/screenshots/vlugmoor-banner.png'
import duckawayBanner from '../../images/screenshots/duckaway-banner.png'
import kidokBanner from '../../images/screenshots/kidok-banner.png'

const ProjectSection = () => {

    const goToContactSection = () => {
        window.location.href = '#contact';
    }

    return(
        <div className="project-section" id="projects">
            <div className="container">
                <h1>Mijn projecten.</h1>
                <ProjectTile
                    link="/meteorium"
                    img={meteoriumBanner}
                    title="Meteorium"
                    phrase="NASA datavisualisation"
                    description="Visualisation of shooting stars in our night-sky."
                />
                <ProjectTile
                    link="/duckaway"
                    img={duckawayBanner}
                    title="DuckAway"
                    phrase="Spread the duck!"
                    description="Social experiment om te kijken hoe ver onze eendjes de wereld in raken"
                />
                <ProjectTile
                    link="/kidok"
                    img={kidokBanner}
                    title="KidOk-kit"
                    phrase="Digitale opvolgfiches"
                    description="Leuke, interactieve fiches om de progressie van de kinderen in het Open Poortje op te volgen"
                />
                <ProjectTile
                    link="/vlugmoor"
                    img={vlugmoorBanner}
                    title="UGent Vlugmoor"
                    phrase="Maritieme datavisualisatie"
                    description="Datavisualisatie van het effect van externe krachten op aangemeerde schepen"
                />
                <ProjectTile
                    link="/enjoy-jobs"
                    img={ejBanner}
                    title="Enjoy Jobs"
                    phrase="Frontend voro Enjoy Jobs"
                    description="Makeover van de website voor een klant"
                />
                <ProjectTile
                    link="/sharetevelde"
                    img={ShareteveldeBanner}
                    title="ShareTevelde"
                    phrase="Feedback platform"
                    description="Tijdens corona is het moeilijker om feedback op je creatieve opdrachten te krijgen van je medestudenten. Daarom ontwikkelde ik dit platform."
                />
            </div>
            <div className = "container">
                <a className="more-on-github-container" target="blank" href="https://github.com/hansvertriest">
                    <img src={GithubIcon} />
                    <p>Meer op GitHub</p>
                </a>
            </div>
            <div className = "container">
                <NextSectionButton callback={goToContactSection} text="Contacteer me"/>
            </div>
        </div>
    );
}

export default ProjectSection;