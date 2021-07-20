import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardLeft from "../components/CardLeft";

const About = (props) => {
  return (
    <div>
      {/* <CardLeft /> */}

      {/* About Toy Tips */}
      <Container>
        <Row
          style={{
            borderRadius: "10px",
            background: "white",
          }}
          className="m-2 p-2"
        >
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ background: "grey" }}
          >
            Picture Here
          </Col>
          <Col xs={6} sm={8} md={8} lg={8} xl={8}>
            <h2>Question Goes Here</h2>
            <p>Answer Goes Here</p>
          </Col>
          {/* </Col> */}
        </Row>
      </Container>
      <div>About Our Research</div>
      <div>About Toy Tips Testers</div>
      <div>What do with tested toys?</div>
      <div>About Marianne</div>
    </div>
  );
};

export default About;
