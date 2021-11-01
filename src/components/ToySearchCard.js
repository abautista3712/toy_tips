import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";

export default function ToySearchCard(props) {
  const displayToySearchCard = (props) => {
    const { toyData, search } = props;

    if (toyData.length > 0) {
      return toyData.map((toyData, index) => {
        // const handleClick_product_website = () => {
        //   if (toyData.product_website != "") {
        //     window.open(toyData.product_website, "_blank");
        //   }
        // };

        const asArray = Object.entries(toyData);
        if (
          asArray[0][1].toLowerCase().includes(search.toString().toLowerCase())
        ) {
          const filtered = asArray;
          const searchedItems = Object.fromEntries(filtered);

          // Count is used to check if entire report card should be hidden. Per client, if all scores are blank (i.e., count === 6) hide report card.
          let count = 0;
          if (
            (searchedItems.ToyTipsRating <= 2) |
            (searchedItems.ToyTipsRating >= 5) |
            (searchedItems.ToyTipsRating == undefined)
          ) {
            count++;
          }
          if (
            (searchedItems.Kids_Rating <= 2) |
            (searchedItems.Kids_Rating >= 5) |
            (searchedItems.Kids_Rating == undefined)
          ) {
            count++;
          }
          if (
            (searchedItems.Motor_Movement <= 2) |
            (searchedItems.Motor_Movement >= 5) |
            (searchedItems.Motor_Movement == undefined)
          ) {
            count++;
          }
          if (
            (searchedItems.Thinking_Skills <= 2) |
            (searchedItems.Thinking_Skills >= 5) |
            (searchedItems.Thinking_Skills == undefined)
          ) {
            count++;
          }
          if (
            (searchedItems.Character_Development <= 2) |
            (searchedItems.Character_Development >= 5) |
            (searchedItems.Character_Development == undefined)
          ) {
            count++;
          }
          if (
            (searchedItems.Social_Interaction <= 2) |
            (searchedItems.Social_Interaction >= 5) |
            (searchedItems.Social_Interaction == undefined)
          ) {
            count++;
          }

          // Renders all elements except for Toy Report Card and Scores
          if (count === 6) {
            return (
              <div>
                <Container>
                  {/* Toy Search Card */}
                  <Row className="m-2 p-2 card_Row">
                    <Col
                      xs={2}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      className="flexCenter_center"
                    >
                      {/* Toy Image */}
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                        // fluid
                      />
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                      <Row className="flexCenter">
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                          <Col className="p-0">
                            {/* Toy Name */}
                            <h2
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                            >
                              {searchedItems.ToyName}
                            </h2>
                          </Col>
                          <Col className="p-0">
                            {/* Company Name */}
                            <b>by {searchedItems.company_name}</b>
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {/* Long Review */}
                          <ShowMoreText lines={5}>
                            <p>{searchedItems.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                    {/* Spacer for where Toy Report Card would be */}
                    {/* <Col
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      style={{ display: "flex", alignItems: "center" }}
                    ></Col> */}
                  </Row>
                </Container>
              </div>
            );
          } else {
            // Render All Elements
            return (
              <div>
                <Container>
                  {/* Toy Search Card */}
                  <Row className="m-2 p-2 card_Row">
                    <Col
                      xs={2}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      className="flexCenter_center"
                    >
                      {/* Toy Image */}
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                        // fluid
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Row className="flexCenter">
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                          <Col className="p-0">
                            {/* Toy Name */}
                            <h2
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                            >
                              {searchedItems.ToyName}
                            </h2>
                          </Col>
                          <Col className="p-0">
                            {/* Company Name */}
                            <b>by {searchedItems.company_name}</b>
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {/* Review */}
                          <ShowMoreText lines={5}>
                            <p>{searchedItems.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xs={2}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {/* Blank Report Card */}
                      <Image src="./assets/icons/scoring_icons/report_card.png" />
                      {/* TT's Cumulative Research Score */}
                      <img
                        src={`./assets/icons/scoring_icons/${searchedItems.ToyTipsRating}.png`}
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
                        src={`./assets/icons/scoring_icons/${searchedItems.Kids_Rating}.png`}
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
                        src={`./assets/icons/scoring_icons/${searchedItems.Motor_Movement}.png`}
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
                        src={`./assets/icons/scoring_icons/${searchedItems.Thinking_Skills}.png`}
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
                        src={`./assets/icons/scoring_icons/${searchedItems.Character_Development}.png`}
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
                        src={`./assets/icons/scoring_icons/${searchedItems.Social_Interaction}.png`}
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
          }
        }
      });
    } else {
      // console.log(props);
      console.log("No props loaded yet...");
      return (
        <h3>Loading...</h3>
        // <img
        //   src={require(`./assets/gifs/loading_boucyBall.gif`)}
        //   alt="Loading..."
        // />
      );
    }
  };
  // console.log(props);
  console.log("Calling displayToySearchCard(props) again...");
  return <> {displayToySearchCard(props)} </>;
}
