import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dst.png";
import projImg2 from "../assets/img/wt.png";
import projImg3 from "../assets/img/pwb.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PAWS FOR YOU",
      description: "Paws4U is a non-profit organization dedicated to improving the lives of animals through rescue, rehabilitation, and adoption services. With a team of dedicated volunteers and staff, we work tirelessly to give every animal a second chance at a happy and fulfilling life.",
      imgUrl: projImg1,
      links:"https://github.com/sumit2002agarwal/Paws4You",
    },
    {
      title: "What's the Weather?",
      description: "Attendance management web app made to overcome the difficulties that students and teachers face in college. Integrated the Adzuna API  to fetch detailed job listings enhancing studentscaccess to diverse job opportunities",
      imgUrl: projImg2,
      links:"https://github.com/sumit2002agarwal/WebApp-2",
    },
    {
      title: "Personal Portfolio Website",
      description: "Reduce Your Bits is a web application built using React.js that demonstrates the use of Huffman encoding algorithm to improve efficiency in data storage. The webapp showcases the application of data structures and the greedy method to find the optimal encoding for characters, reducing the number of bits required to represent them.",
      imgUrl: projImg3,
      links:"https://github.com/sumit2002agarwal/Reduce-Your-Bits",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few projects that I made in the process of learning development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
