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

          // Renders all elements EXCEPT FOR Toy Report Card
          if (count === 6) {
            return (
              <div>
                <Container>
                  {/* Toy Search Card Container*/}
                  <Row className="m-2 p-2 card_Row">
                    {/* Toy Image */}
                    <Col
                      md={2}
                      lg={2}
                      xl={2}
                      className="d-none d-md-flex flexCenter_center"
                    >
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                      />
                    </Col>
                    {/* Toy Image - MOBILE*/}
                    <Col
                      xs={12}
                      sm={12}
                      className="d-flex d-md-none flexCenter_center"
                    >
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                        style={{ width: "65%" }}
                      />
                    </Col>

                    {/* Text Container */}
                    <Col>
                      {/* ROW 1: Toy Name */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <h2
                          // Commented out because most product websites are outdated/missing
                          // onClick={handleClick_product_website}
                          >
                            {searchedItems.ToyName}
                          </h2>
                        </Col>
                      </Row>
                      {/* ROW 2: Company Name */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>by {searchedItems.company_name}</b>
                        </Col>
                      </Row>
                      {/* ROW 3: Ages, Price */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>For Ages:</b> {searchedItems.AgeRange1}
                        </Col>
                        <Col className="p-0">
                          <b>Historical Price:</b> {searchedItems.Low_Price}
                        </Col>
                      </Row>
                      {/* ROW 4: Categories */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>{searchedItems.categories}</b>
                        </Col>
                      </Row>
                      {/* ROW 5: Manufacturer's Description */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Manufacturer's Description</b>
                          <ShowMoreText lines={3}>
                            <p>{searchedItems.mfg_desc}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                      {/* Row 6: Review */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Expert Review</b>
                          <ShowMoreText lines={3}>
                            <p>{searchedItems.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          } else {
            // Render All Elements INCLUDING Report Card
            return (
              <div>
                <Container>
                  {/* Toy Search Card Container */}
                  <Row className="m-2 p-2 card_Row">
                    {/* Toy Image */}
                    <Col
                      md={2}
                      lg={2}
                      xl={2}
                      className="d-none d-md-flex flexCenter_center"
                    >
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                      />
                    </Col>
                    {/* Toy Image - MOBILE */}
                    <Col
                      xs={6}
                      sm={6}
                      className="d-flex d-md-none flexCenter_center"
                    >
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                      />
                    </Col>
                    {/* Blank Report Card - MOBILE*/}
                    <Col
                      xs={6}
                      sm={6}
                      style={{
                        alignItems: "center",
                      }}
                      className="d-flex d-md-none"
                    >
                      <Image
                        src="./assets/icons/scoring_icons/report_card.png"
                        style={{ width: "100%" }}
                      />
                      <div className="scores_mobileTransform">
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
                            top: 37,
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
                            top: 56,
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
                            top: 75,
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
                            top: 94,
                            right: 142,
                            height: 20,
                          }}
                        />
                      </div>
                    </Col>
                    {/* Text Container */}
                    <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                      {/* ROW 1: Toy Name */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <h2
                          // Commented out because most product websites are outdated/missing
                          // onClick={handleClick_product_website}
                          >
                            {searchedItems.ToyName}
                          </h2>
                        </Col>
                      </Row>
                      {/* ROW 2: Company Name */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>by {searchedItems.company_name}</b>
                        </Col>
                      </Row>
                      {/* ROW 3: Ages, Price */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>For Ages:</b> {searchedItems.AgeRange1}
                        </Col>
                        <Col className="p-0">
                          <b>Historical Price:</b> {searchedItems.Low_Price}
                        </Col>
                      </Row>
                      {/* ROW 4: Categories */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>{searchedItems.categories}</b>
                        </Col>
                      </Row>
                      {/* ROW 5: Manufacturer's Description */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Manufacturer's Description</b>
                          <ShowMoreText lines={3}>
                            <p>{searchedItems.mfg_desc}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                      {/* ROW 6: Review */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Expert Review</b>
                          <ShowMoreText lines={3}>
                            <p>{searchedItems.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                    {/* Blank Report Card */}
                    <Col
                      md={3}
                      lg={3}
                      xl={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="d-none d-md-flex"
                    >
                      <Image
                        src="./assets/icons/scoring_icons/report_card.png"
                        style={{ width: "100%" }}
                      />
                      <div className="scores_mobileTransform">
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
                            top: 36,
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
                            top: 55,
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
                            top: 74,
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
                            top: 93,
                            right: 142,
                            height: 20,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          }
        }
      });
    } else {
      console.log("No props loaded yet...");
      return (
        <h3>Loading...</h3>
        // <img src={loading} alt="Loading..." />
      );
    }
  };
  console.log("Calling displayToySearchCard(props) again...");
  return <> {displayToySearchCard(props)} </>;
}
