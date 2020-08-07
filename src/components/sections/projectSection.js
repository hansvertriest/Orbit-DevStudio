import React from 'react';

import ProjectTile from '../projectTile';

import connusBanner from '../../images/screenshots/connus-banner.png'
import jobMatchBanner from '../../images/screenshots/job-match-banner.png'
import ShareteveldeBanner from '../../images/screenshots/sharetevelde-banner.png'
import ShopTheDotBanner from '../../images/screenshots/shop-the-dot-banner.png'

const ProjectSection = () => {
    return(
        <div className="project-section">
            <div className="container">
                <h1>Mijn projecten.</h1>
                <ProjectTile
                    img={connusBanner}
                    title="Connus"
                    phrase="Landingspagina voor <strong>Connus</strong>"
                    description="De landingspagina voor <strong>Connus</strong>: een app die bedrijven en influencer connecteert voor een optimale samenwerking."
                />
                <ProjectTile
                    img={jobMatchBanner}
                    title="Job-match"
                    phrase="Interactive story voor <strong>Infrabel</strong>"
                    description="Project via <strong>Open Summer of Code</strong> om awareness te creëeren voor Infrabel en hun technische vacatures."
                />
                <ProjectTile
                    img={ShopTheDotBanner}
                    title="shop the dot"
                    phrase="Landingspagina voor <strong>Connus</strong>"
                    description="Een creatief concept voor een duurzamere mindset bij jongeren voor het Erasmus + project: <strong>Creative Skills 21</strong>"
                />
                <ProjectTile
                    img={ShareteveldeBanner}
                    title="ShareTevelde"
                    phrase="Landingspagina voor <strong>Connus</strong>"
                    description="De landingspagina voor <strong>Connus</strong>: een app die bedrijven en influencer connecteert voor een optimale samenwerking."
                />
            </div>
        </div>
    );
}

export default ProjectSection;