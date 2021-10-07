import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ToySearchCard(props) {
  const displayToySearchCard = (props) => {
    const { toyData } = props;

    if (toyData.length > 0) {
      console.log(props);
      return toyData.map((toyData, index) => {
        const handleClick_product_website = () => {
          if (toyData.product_website != "") {
            window.open(toyData.product_website, "_blank");
          }
        };

        console.log(toyData);
        return (
          <div>
            <Container>
              {/* Toy Search Card */}
              <Row className="m-2 p-2 card_Row">
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  className="flexCenter_center"
                >
                  <Image
                    src="./assets/images/original/TTT_logo_hiRes.png"
                    thumbnail
                    // fluid
                  />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Row className="flexCenter">
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Col className="p-0">
                        <h2 onClick={handleClick_product_website}>
                          {toyData.ToyName}
                        </h2>
                      </Col>
                      <Col className="p-0">
                        <b>by {toyData.company_name}</b>
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>{toyData.Long_Review}</p>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image src="./assets/icons/scoring_icons/report_card.png" />
                  {/* TT's Cumulative Research Score */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.ToyTipsRating}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: -39,
                      right: 30,
                      height: 28,
                    }}
                  />
                  {/* Testers' Fun Grade */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.Kids_Rating}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: -13,
                      right: 58,
                      height: 28,
                    }}
                  />
                  {/* Movement Skill Score */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.Motor_Movement}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: 33,
                      right: 82,
                      height: 20,
                    }}
                  />
                  {/* Thinking Skill Score */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.Thinking_Skills}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: 52,
                      right: 102,
                      height: 20,
                    }}
                  />
                  {/* Personality Skill Score */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.Character_Development}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: 71,
                      right: 122,
                      height: 20,
                    }}
                  />
                  {/* Social Interaction Skill Score */}
                  <img
                    src={`./assets/icons/scoring_icons/${toyData.Social_Interaction}.png`}
                    onError={(e) => {
                      e.target.src = `./assets/icons/scoring_icons/0.png`;
                    }}
                    style={{
                      position: "relative",
                      top: 90,
                      right: 142,
                      height: 20,
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
      });
    } else {
      console.log(props);
      console.log("No props loaded yet...");
      return <h3> Loading... </h3>;
    }
  };
  console.log(props);
  console.log("Calling displayToySearchCard(props) again...");
  return <> {displayToySearchCard(props)} </>;
}
