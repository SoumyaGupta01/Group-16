import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Reviews from "../components/Reviews"
import Email from "../components/Email"
import Knowus from "../components/Knowus"
import Stat from "../components/Stat"
const IndexPage = () => (
   <Layout>
    <Hero />
    <Reviews/>
    <Knowus/>
     <Stat/>
    <Email/>
   </Layout>
)

export default IndexPage