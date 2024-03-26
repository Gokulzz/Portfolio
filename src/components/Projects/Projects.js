import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
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
              description="Currently, creating an ecommerce-app that allows user to see buy product online. Backend is written in C# using .net framework and MS SQL Server and front end using html, css , javascript."
              ghLink="https://github.com/Gokulzz/eCommerceApp"
              demoLink=""
            />
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
              title="Demo chat app"
              description="Made a simple backend for chat app using SignalR library in .net framework."
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
