import { Container, Row, Col } from "react-bootstrap";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="resume min-vh-100">
        <Container>
          <Row></Row>
          <Row>
            <h1 className="fw-bold text-center">My Resume</h1>
            <h3 className="fw-semibold text-center">Rafi Achmad Romolo</h3>
            <h5 className="fw-bold mt-3">Education</h5>
            <p className="fw-semibold mb-0 mt-1">
              Politeknik Elektronika Negeri Surabaya
            </p>
            <p className="mb-0">2019 - 2023</p>
            <p className="mb-0">D4 Teknik Komputer</p>
            <p className="mb-0">GPA: 3.57</p>
            <h5 className="fw-bold mt-3">Work Experiences</h5>
            <p className="fw-semibold mb-0 mt-1">PT. Kakatoo Digital Media</p>
            <p className="mb-0">January 2022 - April 2022</p>
            <p className="mb-0">Internship - Backend Developer</p>
            <h5 className="fw-bold mt-3">Organization Experiences</h5>
            <p className="fw-semibold mb-0 mt-1">
              Himpunan Mahasiswa Computer Engineering
            </p>
            <p className="mb-0">2020 - 2021</p>
            <p className="mb-0">
              Staff of Students Resource Development Department
            </p>
            <p className="fw-semibold mb-0 mt-1">EEPIS English Community</p>
            <p className="mb-0">2020 - 2022</p>
            <p className="mb-0">Committee Member</p>
            <h5 className="fw-bold mt-3">Courses and Certifications</h5>
            <p className="fw-semibold mb-0 mt-1">AI Mastery Program</p>
            <p className="mb-0">PT. Orbit Ventura Indonesia</p>
            <p className="mb-0">August 2022 - December 2022</p>
            <p className="fw-semibold mb-0 mt-1">
              Belajar Dasar Pemrograman Web
            </p>
            <p className="mb-0">Dicoding Indonesia</p>
            <p className="mb-0">April 2023</p>
            <p className="fw-semibold mb-0 mt-1">
              Belajar Analisis Data dengan Python
            </p>
            <p className="mb-0">Dicoding Indonesia</p>
            <p className="mb-0">October 2023</p>
            <h5 className="fw-bold mt-3">Skills</h5>
            <p className="mb-0">Hard Skill: HTML, CSS, ReactJS, Python, SQL</p>
            <p className="mb-0">Soft Skill: Public Speaking, Teamwork</p>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ResumePage;
