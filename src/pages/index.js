import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Landing, VisionSection, AboutMeSection } from '../components/sections';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <VisionSection />
    <AboutMeSection />
  </Layout>
)

export default IndexPage
