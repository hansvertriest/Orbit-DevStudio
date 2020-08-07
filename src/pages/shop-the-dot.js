import React from "react"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div className="project-container">
    <div className="container">
      <h1>Mijn projecten</h1>
        <h2>shop the dot</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Introductie</h3>
          <p>Samen met enkele andere studenten van mijn klas werd ik geselecteerd om mee te doen aan een Erasmus+ project: Creative Skills 21. De bedoeling van dit project was om met een internationaal team op twee weken een concept te bedenken om jongeren op een positieve manier aan te zetten om meer duurzaam te leven.</p>
          <p>We wouden ons vooral toespitsen op Black Friday: een dag waar allerlei producten, die gemaakt zijn van natuurlijke grondstoffen, heftig afgepresid worden. Alsof de aarde en haar grondstoffen plots minder waard zijn. Daarom bedachten we Shop the Dot: een browser plugin die het toe laat om een deel van jouw korting te doneren aan een duurzaam doel. Bekijk zeker ons concept filmpje!</p>
        </div>
        <div className="col-12 col-md-6">
          <h3>Teamleden</h3>
          <p>Jana Bruggeman, Maarten Luyckx, Margot Serpentier, Jef Vermeire, Maarten Oste</p>
         </div>
        <div className="col-12 col-md-6"></div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
