import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

import { Landing, VisionSection, AboutMeSection, ProjectSection, ContactSection } from '../components/sections';


const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio</title>
      <meta name="description" content="Homepage of Orbit DevStudio: a freelance web developer named Hans Vertriest."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <Landing />
    <VisionSection />
    <AboutMeSection />
    <ProjectSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
