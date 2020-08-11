import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | Connus</title>
      <meta name="description" content="Overzicht van het shop the dot project voor Creative Skill 21."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, job match, job-match, creative skill 21" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
    <a href="/#project">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
        <h2>shop the dot</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Introductie</h3>
          <p>Samen met enkele andere studenten van mijn klas werd ik geselecteerd om mee te doen aan een Erasmus+ project: Creative Skills 21. De bedoeling van dit project was om met een internationaal team op twee weken een concept te bedenken om jongeren op een positieve manier aan te zetten om meer duurzaam te leven.</p>
          <p>We wilden ons vooral toespitsen op Black Friday: een dag waar allerlei producten, die gemaakt zijn van natuurlijke grondstoffen, sterk afgeprijsd worden. Alsof de aarde en haar grondstoffen plots minder waard zijn. Daarom bedachten we shop the dot: een browser plugin die toe laat om een deel van jouw korting te doneren aan een duurzaam doel. Bekijk zeker ons concept filmpje!</p>
        </div>
        <div className="col-12 col-md-6">
          <h3>Teamleden</h3>
          <p>Jana Bruggeman, Maarten Luyckx, Margot Serpentier, Jef Vermeire, Maarten Oste</p>
         </div>
        <div className="col-12">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GisDUe-j50g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
