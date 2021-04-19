import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img0 from '../images/screenshots/connus-banner.png'
import img1 from '../images/screenshots/connus-1.png'
import img2 from '../images/screenshots/connus-2.png'
import img3 from '../images/screenshots/connus-3.png'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | DuckAway</title>
      <meta name="description" content="Datavisualisatie voor Vlugmoor UGent."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, datavisualisatie, data" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>DuckAway</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>Maak kennis met onze eendjes! <strong>Jens Deryckere</strong> en ik verspreidden eerder dit jaar 40 eendjes over Oost- en West-Vlaanderen. <br/>Doel? Het tracken van hun reis doorheen de wereld. <br/>Aan de eendjes werd een QR-code gehangen. Wanneer iemand het eendje vindt en inscant, krijgt hij/zij meer informatie over de backstory en de reeds bezochte plaatsen van het eendje. Nu is het aan de vinder om de reis van het eendje verder te zetten en het te documentern met een leuke foto!</p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>ReactJS, MapBox, ExpressJS, MongoDB</p>
          <h3>Eigen inbreng</h3>
          <p>Backend, visualisatie op kaart</p>
          <p>Get to know <a target="_blank" href="https://www.duck-away.com/">our ducks and their journeys</a>!</p>
         </div>
        <div className="col-12 col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4h53ARJ2b4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
        <div className="col-12 col-md-6">
        </div>
        
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
