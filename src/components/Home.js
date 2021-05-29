import { Col, Row, Card } from "react-bootstrap";

export default function Home(props) {
  return (
    <section>
      <div className="blueContainer">
        <Row>
          <Col lg={4}>Image</Col>
          <Col lg={8}>
            <p>
              Online Indian Journal of Peace and Conflict Resolution is a novel
              initiative to study, examine and analyse the multifarious methods,
              mechanisms and theories of conflict resolution in the resolution
              of various types of conflicts and thereby collate successful
              models and practices.
            </p>
            <button className="buttonMore">Learn More</button>
          </Col>
        </Row>
      </div>
      <div className="content mt-4">
        <Row>
          <Col lg={9}></Col>
          <Col lg={3}>
            <Row>
              <Card className="exploreCard">
                <Card.Title>Explore More</Card.Title>
                <Card.Body>
                  <h5>Philosophy</h5>
                  <h5>Philosophy</h5>
                  <h5>Philosophy</h5>
                  <h5>Philosophy</h5>
                  <h5>Philosophy</h5>
                  <h5>Philosophy</h5>
                </Card.Body>
              </Card>
            </Row>
            <Row></Row>
            <Row>
              <Card className="interestCard">
                <Card.Title>
                  <h1>Interested in seeing your article in this space?</h1>
                </Card.Title>
                <Card.Body>
                  <p>
                    Submit a draft of your article and we’ll get back to you!
                  </p>
                  <button className="submitBtn mt-4">Submit Article</button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
