import React from "react";
import Layout from "components/layout"; // Import your layout component if you have one
import Team from "../sections/team.js"
import Values from "../sections/values.js"
import Contact from "../sections/contact.js"

const TeamPage = () => (
  <Layout>
    <Values/>
    <Team/>
    <Contact/>
  </Layout>
);

export default TeamPage;