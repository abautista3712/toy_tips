import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Search = (props) => {
  return (
    <div>
      {/* About Toy Tips */}
      <Container>
        <Row className="m-2 p-2 card_Row">
          <Col xs={6} sm={4} md={4} lg={4} xl={4} className="centerFlex">
            <img
              src="./assets/images/original/TTT_logo_hiRes.png"
              width="100%"
              alt="Toy Tips Trusted Mark of Excellence"
            />
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
            <h2>Can you tell me more about the research process?</h2>
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
            <h2 style={{ textAlign: "right" }}>
              What do you do with toys that have been tested?
            </h2>
            <p>
              It is our strict policy that after toys are 'Toy Tips®' tested,
              they are donated to children through a variety of programs we have
              set in place with not-for-profit groups nationwide. To date, we
              service 32 groups. It is our way to assist those who need the toys
              more than us and make their playtime a little brighter.
            </p>
          </Col>
        </Row>
        {/* ---About Our Founder--- */}
        <Row className="m-2 p-2 card_Row">
          <Col xs={6} sm={8} md={8} lg={8} xl={8}>
            <h2>Our Founder</h2>
            <p>
              Marianne M. Szymanski created Toy Tips and has been an active
              media personality for close to three decades!
              <br />
              <br />
              Appearing on Oprah, CNN, FOX and hundreds of television stations,
              she was a cast member on Good Morning America for eight years.
              Currently she is a regular guest on FOX News in Chicago offering
              viewers Toy Tips research results on the latest toys.
              <br />
              <br />
              Co-Author of Toy Tips: A Parent’s Essential Guide to Smart Toy
              Choices (Wiley/Jossey Bass), Marianne also teaches three
              entrepreneurship courses at the University of Southern California
              and is a writer of entrepreneurial case studies for Harvard
              Business Publishing.
            </p>
          </Col>
          <Col xs={6} sm={4} md={4} lg={4} xl={4} className="centerFlex">
            <img
              src="./assets/images/original/profilePic_Marianne.jpg"
              width="100%"
              alt="Marianne Profile Pic"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
