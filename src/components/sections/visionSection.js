import React from 'react';

import bubblesRight from '../../images/ui/bubbles-right.svg';
import bubblesRightSmall from '../../images/ui/bubbles-right-sm.svg';

const VisionSection = () => {

    return(
        <div className="vision-section" id="vision">

            <img className="bubbles-right d-none d-lg-block" src={bubblesRight} />
            <div className="container">

            <img className="bubbles-right-sm d-block d-lg-none" src={bubblesRightSmall} />
            <div className="row">
                <div className="col-12 col-md-8">

                    <h1>Mijn visie.</h1>
                    <h2>De kern</h2>
                    <p>De naam Orbit devStudio en het logo verwijzen naar de baan van de planeten rond de zon. Op dezelfde manier als de zon staat voor mij de klant en op zijn beurt ook de eindgebruiker centraal. Het draait om uw noden en verwachtingen, die ik als developer altijd zo goed mogelijk tracht in te lossen.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <h2>Uitdaging</h2>
                    <p>Als student weet en kan ik nog niet alles. Maar ik ben altijd bereid om nieuwe uitdagingen aan te gaan en nieuwe technologieën te leren. Helemaal up-to-date met de laatste ontwikkelingen vinden we samen de beste oplossing voor uw noden.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h2>Samenwerking</h2>
                    <p>Jouw project bij Orbit devStudio is een project dat we samen doen. Door een goede communicatie en regelmatige feedbackmomenten zorgen we ervoor dat het eindresultaat perfect is afgestemd op wat u als klant voor ogen ziet.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default VisionSection;