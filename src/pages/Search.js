import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Search = (props) => {
  return (
    <div>
      {/* About Toy Tips */}
      <Container>
        <Row className="m-2 p-2 card_Row">
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="centerFlex"
            style={{ background: "grey" }}
          >
            Toy Image Here
            {/* <img
              src="/"
              width="100%"
              height="100%"
              alt="Toy Image"
              style={{ background: "grey" }}
            /> */}
          </Col>
          <Col xs={6} sm={8} md={8} lg={8} xl={8}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <h2>Product Name</h2>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3} className="centerFlexEnd">
                <p>Overall Rating: </p>
              </Col>
              <Col
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className="centerFlex"
                style={{ background: "grey" }}
              >
                {" "}
                Grade
              </Col>
            </Row>
            <Row>
              <Col>Company Name</Col>
            </Row>
            <Row>
              <Col>
                Review goes here
                <br />
                The involvement of thousands of children as official 'Toy Tips®
                Testers' throughout the year provide real in-market data. Our
                research survey methods are independent of manufacturer conflict
                of interest and personal opinion.
              </Col>
            </Row>
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
