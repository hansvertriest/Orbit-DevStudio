import React from "react"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div className="project-container">
    <div className="container">
      <h1>Mijn projecten</h1>
        <h2>ShareTevelde</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Introductie</h3>
          <p>Voor deze schoolopdracht konden we kiezen wat we wouden maken. Omdat onze creatieve campus op Artevelde vaak versierd is met de werken van de studenten, maar tijdens corona dit uiteraard niet meer kon, besloot ik een social medium te maken waar studenten hun creatieve opdrachten op konden posten en vervolgens feedback op konden krijgen.</p>
        </div>
        <div className="col-12 col-md-6">
          <h3>Technologies</h3>
          <p>Mongoose, React, Node, Express</p>
         </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
