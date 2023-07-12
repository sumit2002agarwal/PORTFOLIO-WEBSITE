import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gn (1).svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/gn (2).svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
       
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/sumit-agarwal-2229b9156/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://github.com/sumit2002agarwal"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/agarwal_obviously/"><img src={navIcon3} alt="Icon" /></a>
              <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMGGnDsrZxvbnxrgszMFRNXJTvBBknjChtkpHHfhTpzKStGRFrLVNWLwHCMHgMgqNGQMQf"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Developed by Sumit Agarwal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
