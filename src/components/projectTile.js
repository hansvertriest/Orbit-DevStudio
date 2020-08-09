import React, { useEffect } from 'react';

import {SecondaryButton} from '../components/buttons'; 

const ProjectTile = (props) => {
    const action = () => {
        window.location.href = props.link;
    }
    
    return(
        <div id={`project-tile-${props.title.split(' ').join('-')}`} className="project-tile" >
            <img src={props.img} className="project-tile__img"/>
            <div className="project-tile__filter"></div>
            <div className="project-tile__container">
                <p className="project-tile-container__title">{props.title}</p>
                <p className="project-tile-container__phrase" dangerouslySetInnerHTML={{__html: props.phrase}}></p>
                <p className="project-tile-container__description" dangerouslySetInnerHTML={{__html: props.description}}></p>
                <SecondaryButton action={action} text="Lees meer"/>
            </div>
        </div>
    );
}

export default ProjectTile;