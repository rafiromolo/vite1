import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { catProjects } from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">Hello, World!</h1>
              <p className="mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti in nisi maxime vitae. Excepturi, perferendis.
              </p>
              <button className="btn btn-lg rounded-3 mb-xs-0 mb-2">
                See my projects
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="proyek w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">My Projects List</h1>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {catProjects.map((proyek) => {
              return (
                <Col key={proyek.id}>
                  <img src={proyek.image} alt="unsplash.com" className="mb-3" />
                  <h5 className="text-center mb-4 px-6">{proyek.title}</h5>
                  <div className="butcontainer">
                    <div className="center">
                      <Button className="btn">{proyek.see}</Button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <div className="center">
                <button className="btn-viewall">View All My Projects</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
