import React from 'react';

import ProjectTile from '../projectTile';
import {NextSectionButton} from '../buttons';

import connusBanner from '../../images/screenshots/connus-banner.png'
import jobMatchBanner from '../../images/screenshots/job-match-banner.png'
import ShareteveldeBanner from '../../images/screenshots/sharetevelde-banner.png'
import ShopTheDotBanner from '../../images/screenshots/shop-the-dot-banner.png'
import GithubIcon from '../../images/icons/github.svg';

const ProjectSection = () => {

    const goToContactSection = () => {
        window.location.href = '#contact';
    }

    return(
        <div className="project-section" id="projects">
            <div className="container">
                <h1>Mijn projecten.</h1>
                <ProjectTile
                    link="/connus"
                    img={connusBanner}
                    title="Connus"
                    phrase="Landingspagina voor <strong>Connus</strong>"
                    description="De landingspagina voor <strong>Connus</strong>: een app die bedrijven en influencers connecteert voor een optimale samenwerking."
                />
                <ProjectTile
                    link="/job-match"
                    img={jobMatchBanner}
                    title="Job-match"
                    phrase="Interactive story voor <strong>Infrabel</strong>"
                    description="Project via <strong>Open Summer of Code</strong> om awareness te creëren voor Infrabel en hun technische vacatures."
                />
                <ProjectTile
                    link="/shop-the-dot"
                    img={ShopTheDotBanner}
                    title="shop the dot"
                    phrase="Concept voor <strong>Creative Skills 21 </strong>"
                    description="Een creatief concept voor een duurzamere mindset bij jongeren voor het Erasmus+ project: <strong>Creative Skills 21</strong>"
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