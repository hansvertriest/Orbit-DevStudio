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
      <title>Orbit DevStudio | KidOk-kit</title>
      <meta name="description" content="Datavisualisatie voor Vlugmoor UGent."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, datavisualisatie, data" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>KidOk-kit</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>Open Poortje is een opvang voor kinderen die om eender welke reden thuis niet meer terecht kunnen. Zij gebruiken de KidOk-kit: een papieren bundel fiches die worden ingevuld samen met het kind om zijn/haar proces in Open Poortje op te volgen. Onze briefing was het ontwikkelen van een digitale versie van de KidOk-kit met een focus op animatie en interactiviteit. Design door Marthe Bulcke, Stijn Stevens en Jeroen Vervaeck. Animatie door Stijn Stevens. Front-end door Jeroen Vervaeck, Jérôme Laroy en Hans Vertriest. Backend door Hans Vertriest.</p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>ReactJS, Express, Mongoose, MongoDB</p>
          <h3>Eigen inbreng</h3>
          <p>Backend en integratie ervan in de frontend</p>
         </div>
        <div className="col-12 col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sr36fT4X8Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
        </div>
        
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
