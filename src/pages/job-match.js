import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img1 from '../images/screenshots/job-match-1.png'
import img2 from '../images/screenshots/job-match-2.png'
import img3 from '../images/screenshots/job-match-3.png'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | Job Match</title>
      <meta name="description" content="Overzicht van het Job-match project voor Infrabel."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, job match, job-match" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <h1>Mijn projecten</h1>
        <h2>Job-match</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Introductie</h3>
          <p>Dankbaar kan ik zeggen dat ik heb mogen meedoen aan Open Summer of Code 2020, een initiatief van Open Knowledge Belgium die studenten te werk stelt voor echte klanten.</p>
          <p>Het project waar ik aan meewerkte was in opdracht van Infrabel. Zij wouden graag een leuke ervaring creëeren om meer awareness te brengen voor Infrabel maar ook voor hun technische vacatures. Met deze briefing gingen we aan de slag en begonnen we te conceptualiseren. </p>
          <p>Het resultaat is een interactief verhaal waar de speler kan beslissen hoe het plot zich ontplooid. Het verhaal geeft meer informatie over Infrabel en daagt de speler uit met verschillende problemen. Op deze manier krijgt de speler een zicht op welke uitdagingen de technische medewerkers van Infrabel elke dag te wachten staan.</p>
          <p>Meer informatie: <a href="https://osoc20.github.io/job-match/">https://osoc20.github.io/job-match/</a></p>
          <p>Speel het prototype: <a href="https://osoc20.github.io/job-match/story.html">https://osoc20.github.io/job-match/story.html</a></p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologies</h3>
          <p>HTML, CSS, JaveScript, Twine, twee2, Foundation, Git, GitHub</p>

          <h3>Partners</h3>
          <p>Marie Devos (Designer), Lucas Janssens (Conceptual Designer), Jesse Vandenkerckove (Full-stack Developer), Niels Dewelde (Coach)</p>
         </div>
         <div className="col-12 col-md-6">
          <img src={img1}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img2}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img3}/>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
