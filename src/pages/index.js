import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import SecOne from "../components/secOne"
// import SecTwo from "../components/secTwo"
import SecThree from "../components/secThree"
import SecFour from "../components/secFour"
import SecFive from "../components/secFive"
// import SecSix from "../components/secSix"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <SecOne />
    {/* <SecTwo /> */}
    <SecThree />
    <SecFour />
    <SecFive />
    {/* <SecSix /> */}
  </Layout>
)

export default IndexPage
