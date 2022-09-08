import React from "react";

import './Style.css';
import Nav from './Nav';
import { Card } from "@mui/material"
const About = () => {
  return (
    <>
      <Nav />
      <Card className="card">
        <h3 style={{ marginTop: "10px" }}>Pragraph................</h3>
      </Card>
    </>
  )
}
export default About;