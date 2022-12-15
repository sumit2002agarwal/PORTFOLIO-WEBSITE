import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proimg" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={links} target="_blank" class="btn btn-primary btn-lg active"  role="button" aria-pressed="true">Github Repo</a>
        </div>
      </div>
    </Col>
  )
}
