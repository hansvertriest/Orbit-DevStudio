import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img4 from '../images/screenshots/sharetevelde-4.png'
import img1 from '../images/screenshots/sharetevelde-1.png'
import img2 from '../images/screenshots/sharetevelde-2.png'
import img3 from '../images/screenshots/sharetevelde-3.png'
import img5 from '../images/screenshots/sharetevelde-5.png'

const IndexPage = () => (
  <Layout>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Orbit DevStudio | ShareTevelde</title>
    <meta name="description" content="Overwicht van mijn schoolopdracht: ShareTevelde"/>
    <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, sharetevelde" />
    <meta name="author" content="Hans Vertriest" />
  </Helmet>
    <div className="project-container">
    <div className="container">

    <a href="/#project">Terug naar overzicht</a>
      <a href="/#project">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
        <h2>ShareTevelde</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Introductie</h3>
          <p>Voor deze schoolopdracht konden we kiezen wat we wilden maken. Omdat onze creatieve campus op Artevelde vaak versierd is met de werken van de studenten, maar tijdens corona dit uiteraard niet meer kon, besloot ik een social medium te ontwikkelen waar studenten hun creatieve opdrachten konden op posten. Het platform laat het toe om feedback op de opdrachten uit te wisselen.</p>
        </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>Mongoose, React, Node, Express, git, Figma</p>
         </div>

        <div className="col-12">
          <img src={img1}/>
        </div>
        <div className="col-12">
          <img src={img2}/>
        </div>
        <div className="col-12">
          <img src={img3}/>
        </div>
        <div className="col-12">
          <img src={img4}/>
        </div>
        <div className="col-12">
          <img src={img5}/>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
