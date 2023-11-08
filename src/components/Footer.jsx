import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">RafiRomolo</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              voluptatum eum voluptate recusandae corrupti? Facilis quaerat nemo
              rerum excepturi incidunt.
            </p>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="resume">Resume</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </Col>
          <Col>
            <h5 className="fw-bold">Find Me at:</h5>
            <div className="social">
              <a
                href="mailto:rafiromolo@gmail.com"
                className="text-decoration-none mb-1"
              >
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">rafiromolo@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/rafi-achmad-romolo/"
                className="text-decoration-none mb-1"
              >
                <i className="fa-brands fa-linkedin"></i>
                <p className="m-0">Rafi Achmad Romolo</p>
              </a>
              <a
                href="https://github.com/rafiromolo/PortRafi.git"
                className="text-decoration-none mb-1"
              >
                <i className="fa-brands fa-github"></i>
                <p className="m-0">Rafi Romolo</p>
              </a>
              <a
                href="https://www.instagram.com/rafiromolo/"
                className="text-decoration-none mb-1"
              >
                <i className="fa-brands fa-instagram"></i>
                <p className="m-0">rafiromolo</p>
              </a>
              <a
                href="https://twitter.com/RafiRomolo"
                className="text-decoration-none mb-1"
              >
                <i className="fa-brands fa-twitter"></i>
                <p className="m-0">RafiRomolo</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
