import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Landing, VisionSection, AboutMeSection, ProjectSection } from '../components/sections';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <VisionSection />
    <AboutMeSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
