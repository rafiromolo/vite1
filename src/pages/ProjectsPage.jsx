import { Container, Row, Col, Button, Pagination } from "react-bootstrap";
import { allProjects } from "../data/index";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="proyek min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Proyek</h1>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          {allProjects.map((proyek) => {
            return (
              <Row key={proyek.id} className="katalog shadow rounded mb-4 pb-0">
                <Col xs={3}>
                  <img
                    src={proyek.image}
                    alt="unsplash.com"
                    className="w-100 mb-2 mt-2"
                  />
                </Col>
                <Col>
                  <h5 className="mt-2">{proyek.title}</h5>
                  <p>{proyek.description}</p>
                  <p className="cat">{proyek.category}</p>
                  <div className="butcontainer mb-2">
                    <div className="center">
                      <Button className="btn">{proyek.see}</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{9}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsPage;
