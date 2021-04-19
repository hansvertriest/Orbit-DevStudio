import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img0 from '../images/screenshots/meteorium-0.gif'
import img1 from '../images/screenshots/connus-1.png'
import img2 from '../images/screenshots/connus-2.png'
import img3 from '../images/screenshots/connus-3.png'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | Meteorium</title>
      <meta name="description" content="Datavisualisatie voor Vlugmoor UGent."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, datavisualisatie, data" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>Meteorium</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>Als bachelorproef wou ik vooral mijn interesse voor de ruimte en datavisualisatie combineren. Daarom ontwikkelde ik een 3D visualisatie van vallende sterren boven onze aarde. De data is afkomstig vanuit het CAMS-project. Met deze applicatie wou ik vooral laten zien dat wetenschappelijke visualisaties ook perfect <strong>esthetisch aantrekkelijk</strong> en <strong>gebruiksvriendelijk</strong> kunnen zijn. De applicatie is momenteel nog onder ontwikkeling maar ving reeds hoge ogen onder de sterrenkunde gemeenschap in Vlaanderen, voor zowel educatieve als recreatieve doeleinden.</p>
          </div>

        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>ReactJS, Typescript, THREE.js, d3.js, Flask, Pandas</p>
          <p>Make sure to visit the <a target="_blank" href="https://meteorium.netlify.app/">the meteorium</a>!</p>

        </div>
        <div className="col-12 col-md-12">
          <img src={img0}/>
        </div>
        
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
