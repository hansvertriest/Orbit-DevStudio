import React, { useEffect } from 'react';

import {SecondaryButton} from '../components/buttons'; 

const ProjectTile = (props) => {
    // useEffect(() => {
    //     // set square dimensions
    //     const element = document.querySelector(`#project-tile-${props.title.split(' ').join('-')}`);
    //     element.style.height = `${element.offsetWidth}px`;
    //     console.log(element.innerHeight)
    // })
    
    return(
        <div id={`project-tile-${props.title.split(' ').join('-')}`} className="project-tile" >
            {/* <div className="project-tile__img" ></div> */}
            <img src={props.img} className="project-tile__img"/>
            <div className="project-tile__filter"></div>
            <div className="project-tile__container">
                <p className="project-tile-container__title">{props.title}</p>
                <p className="project-tile-container__phrase" dangerouslySetInnerHTML={{__html: props.phrase}}></p>
                <p className="project-tile-container__description" dangerouslySetInnerHTML={{__html: props.description}}></p>
                <SecondaryButton text="Lees meer"/>
            </div>
        </div>
    );
}

export default ProjectTile;