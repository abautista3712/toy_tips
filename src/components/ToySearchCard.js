import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import { LoremIpsum } from "react-lorem-ipsum";

const ToySearchCard = (props) => {
  return (
    <div>
      <Container>
        {/* Toy Search Card */}
        <Row className="m-2 p-2 card_Row">
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="flexCenter_center">
            <Image src="./assets/icons/default_icons/toys.png" fluid />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Row className="flexCenter">
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Col className="p-0">
                  <h2>Product Name</h2>
                </Col>
                <Col className="p-0">Company Name</Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <LoremIpsum p={1} />
              </Col>
            </Row>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="flexCenter_center">
            <Image src="./assets/icons/scoring_icons/report_card.png" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToySearchCard;
