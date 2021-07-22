import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardLeft from "../components/CardLeft";

const About = (props) => {
  return (
    <div>
      {/* <CardLeft /> */}

      {/* About Toy Tips */}
      <Container>
        <Row className="m-2 p-2 card_Row">
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ background: "grey" }}
          >
            Picture of 'TTT' Mark of Excellence Here
          </Col>
          <Col xs={6} sm={8} md={8} lg={8} xl={8}>
            <h2>What is Toy Tips?</h2>
            <p>
              Toy Tips is the testing group for the 'TTT' mark of excellence. A
              'TTT' rating means that a toy exceeds our standards to deliver a
              fun play experience that also stimulates developmental learning
              skills. Our information is independent and conducted in an ethical
              and academic research manner. We do NOT accept toy entry fees or
              publish awards that are used for marketing purposes. Toy
              manufacturer or toy trade employees make no decision in our toy
              testing process.
              <br />
              <br />
              The involvement of thousands of children as official 'Toy Tips®
              Testers' throughout the year provide real in-market data. Our
              research survey methods are independent of manufacturer conflict
              of interest and personal opinion.
            </p>
          </Col>
        </Row>
        {/* ---About Our Research--- */}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2>Can you tell me a little more about the research process?</h2>
            <p>
              Celebrating 3 decades of research, our product reviews assist
              consumers in making appropriate purchases. Our advisory team is
              comprised of medical doctors, psychologists, teachers,
              occupational therapists and research analysts who facilitate our
              testing based on qualitative and quantitative research. We focus
              on the intellectual, social, physical, and individual character
              and personality development of the child.
            </p>
          </Col>
        </Row>
        {/* ---About Tested Toys--- */}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2>What do you do with toys that have been tested?</h2>
            <p>
              It is our strict policy that after toys are 'Toy Tips®' tested,
              they are donated to children through a variety of programs we have
              set in place with not-for-profit groups nationwide. To date, we
              service 32 groups. It is our way to assist those who need the toys
              more than us and make their playtime a little brighter.
            </p>
          </Col>
        </Row>
      </Container>
      <div>About Marianne</div>
    </div>
  );
};

export default About;
