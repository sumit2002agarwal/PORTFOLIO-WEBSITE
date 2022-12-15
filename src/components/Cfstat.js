import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import swal from 'sweetalert';

import axios from "axios";



export const Cfstat = () => {

  const [handle, sethandle] = useState("sumit_ag2002");
  const [users, setusers] = useState([{}]);

  useEffect(() => {
    fetchdetails();
  }, []);
  const handleSubmit = event => {
    event.preventDefault();
   
  };
  
  const fetchdetails = () => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => {
        setusers(res.data.result[0]);
       
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          swal("No such id exists","Please try again", "error");
        }
      });
  };
  
  return (
    
            <section className="contact" id="connect">
            
              <Container>
                <Row className="align-items-center">
                  <Col size={12} md={6} className="cfcards">
                 
                    <Card style={{ width: '20rem' }}>
            <Card.Img variant="top"  src={users.titlePhoto} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item className="capitalize">Name: {users.firstName} {users.lastName}</ListGroup.Item>
              <ListGroup.Item className="capitalize">Current Rank: {users.rank}</ListGroup.Item>
              <ListGroup.Item className="capitalize">Current Rank: {users.maxRank}</ListGroup.Item>
              <ListGroup.Item>Rating: {users.rating}</ListGroup.Item>
              <ListGroup.Item>Highest Rating: {users.maxRating}</ListGroup.Item>
            </ListGroup>
            
          </Card>
                 
                  
            
          </Col>
          <Col size={12} md={4}>
          
                <h2>Know Your CF STATS!!!</h2>
                <form onSubmit={handleSubmit}>
                  
                      <input type="text"  placeholder="Enter your cf id" onChange={(e) => {
                  sethandle(e.target.value);
                }} />
                   
                      <button type="submit"  onClick={fetchdetails}>Submit</button>
                  
                    
                 
                </form>
             
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
