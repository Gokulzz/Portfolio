import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Jobsite from "../../Assets/Projects/Jobsite.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-CommerceApp"
              description="Created an ecommerce-app that allows user to see buy product online. Backend is written in C# using .net framework and MS SQL Server and front end using html, css , javascript.
              I have used Stripe API for payment testing purpose, have also incorporated rabbit mq for message queuing service in successful order placement. "
              ghLink="https://github.com/Gokulzz/eCommerceApp"
              demoLink=""
            />
          </Col>
          <Col md={4}  className="project-card"
          imgPath={Jobsite}
          isBlog={false}
          title="Job Recommendation Site"
          description="The app will scrap job from multiple online jobsite and add it to the database and based on the user-profile(
          User skills, resume, prefereneces(job-tiltle, location) jobs will be recommended.
          Tech stack: Backend: .net, python(for calculating relevance score of each jobs to specific user, I also plan to train model with the 
          scraped job data and user profile to make the recommendation service better) Frontend: React,Database:
          SQL Server"
          ghLink="https://github.com/Gokulzz/AI_JobRecommendation"
          demoLink=""
          >

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Meme App"
              description="Allows authenticated  user to add new templates and registered user to download memes "
              ghLink="https://github.com/Gokulzz/MemeApp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Doctor appointment"
              description="Made an web app that allows registered user to make an appointment with doctor based on the availabilty.
              User will also be able to add their medical report and view their scheduled appointment 
              Tech stack: MongoDB, Express, ReactJs, NodeJs"
              
              ghLink="https://github.com/Gokulzz/DemoChatApp"
              demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
