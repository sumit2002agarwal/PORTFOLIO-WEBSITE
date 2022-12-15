import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';


export const Aboutme = () => {
 

  return (
    <section className="aboutme" id="abtme">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          
          <h1>{`A bit about me`} </h1>
                <br></br>
                  <p>I did my schooling from Gulmohur High School,Jamshedpur.Ever since school times I was a programming enthusiast .My interest lies in Web Development and Competitive Programming using C++.I am also a bit into machine learning.
                    <br></br><br></br>
                    In my leisure I play badminton and try my hands in making something delicious.I am a good orator who loves to take part in debates,declamations and elocutions.
                    <br></br><br></br>
                    I love to serve street animals and also a present volunteer of an NGO that serves street dogs.</p>
              
                 
           
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}
