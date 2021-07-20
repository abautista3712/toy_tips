import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CardLeft = () => {
  //   const handleClick_home = () => {
  //     window.open("/", "_blank");
  //   };
  //   const handleClick_TTT_playware = () => {
  //     window.open(
  //       "https://www.amazon.com/Im-Toy-Tester%C2%AE-Shirt-Shorts/dp/B000UFUXJI/ref=sr_1_2?keywords=im+a+toy+tester&qid=1557453165&s=gateway&sr=8-2",
  //       "_blank"
  //     );
  //   };

  return (
    <div>
      <Container>
        <Row
          style={{ background: "white", borderRadius: "10px" }}
          className="p-2"
        >
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ background: "grey" }}
            //   className="my-2"
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
      {/* <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default CardLeft;
