import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import { LoremIpsum } from "react-lorem-ipsum";

const ToySearchCard = (props) => {
  return (
    <div>
      <Container>
        {/* Toy Search Card */}
        <Row className="m-2 p-2 card_Row">
          <Col xs={6} sm={4} md={4} lg={4} xl={4} className="flexCenter_center">
            <Image src="./assets/icons/default_icons/toys.png" fluid />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Row className="flexCenter">
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Col className="p-0">
                  <h2>Product Name</h2>
                </Col>
                <Col className="p-0">Company Name</Col>
              </Col>
              <Col
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className="flexCenter_flexEnd"
              >
                Overall Rating:
              </Col>
              <Col
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className="flexCenter_center"
                style={{ background: "grey" }}
              >
                Grade
              </Col>
            </Row>
            <Row>
              <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                <LoremIpsum p={1} />
              </Col>
              <Col className="flexCenter_center" style={{ background: "grey" }}>
                Toy Report Card
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToySearchCard;
