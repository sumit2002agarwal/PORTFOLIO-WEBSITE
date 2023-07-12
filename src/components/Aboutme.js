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
                <p>I am a third-year student at the Birla Institute of Technology, Mesra, majoring in Computer Science and Engineering with current CGPA as 9.47 uptil 4th sem.</p>
                <br></br>
                  <p>I did my schooling from Gulmohur High School,Jamshedpur.Ever since school times I was a programming enthusiast .I have a strong command of Web Development with the MERN stack. I also have sound knowledge of data structures and algorithms and am interested in Competitive Programming.
                    <br></br><br></br>
                    I love to serve street animals and also a present volunteer of an NGO that serves street dogs.</p>
                    <br></br>
                    <h4 >Some of my ACHIEVEMENTS:</h4>
                    <br></br>
                   <p> • Ranked Specialist  at Codeforces
                    <br></br>
                    • Secured 4th position out of 80+ teams  in House of Hackers(Hackathon)
                    organized by the Indian Institute of Information Technology, Ranchi.
                    <br></br>
                    • Secured global rank 73  in Codechef February Lunchtime-2022
                    <br></br>
                    • Secured global rank 149  in Codechef Starters 72 Div-3
                    <br></br>
                    • Ranked 1297 out of 15K  in Codeforces Div-2 873
                    <br></br>
                    • Received Academic Achievement Award Jharkhand govt.  (Secured 2nd
                    position in city in ICSE-2019)</p>
                    <br></br>

              
                 
           
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}
