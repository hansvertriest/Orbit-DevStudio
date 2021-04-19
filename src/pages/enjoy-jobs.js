import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img0 from '../images/screenshots/ej-1.gif'
import img1 from '../images/screenshots/ej-2.png'
import img2 from '../images/screenshots/ej-3.png'
import img3 from '../images/screenshots/connus-3.png'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | Enjoy Jobs</title>
      <meta name="description" content="Datavisualisatie voor Vlugmoor UGent."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, datavisualisatie, data" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>Enjoy Jobs</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>Samen met <strong>Jens Deryckere</strong> designden en ontwikkelden we voor onze klant Enjoy Jobs, een makeover voor hun website. </p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>ReactJS, MapBox</p>
          <h3>Eigen inbreng</h3>
          <p>Vacature-, sollicitatie-, contact-pagina, ...</p>
         </div>

        <div className="col-12 col-md-6">
          <img src={img0}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img1}/>
        </div>

        <div className="col-12 col-md-6">
          <img src={img2}/>
        </div>
        
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
