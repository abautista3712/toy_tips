import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import InfiniteScroll from "react-infinite-scroll-component";

const ToySearchCard = (props) => {
  // useState hooks for initialization of data
  const [isInitialized, setIsInitialized] = useState(false);
  const [toyData_array, setToyData_array] = useState([{}]);
  const [toyData_fullArr, setToyData_fullArr] = useState([{}]);

  // useState hooks for InfiniteScroll
  const [current, setCurrent] = useState([{}]);
  const [hasMore, setHasMore] = useState(true);

  // useState hooks for styling
  const [count, setCount] = useState({
    prev: 0,
    next: 15,
  });
  const [min_windowHeight, setMin_windowHeight] = useState(0);

  // useState hooks for search and filtering data
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // useEffect hook to handle filtering entire toyData payload by search term
  useEffect(() => {
    // Compare search and toy data object. Only return data that includes search
    let searchedItems = toyData_fullArr.map((toyData_object, index) => {
      if (toyData_object.ToyName) {
        if (
          toyData_object.ToyName.toLowerCase().includes(search.toLowerCase())
        ) {
          return toyData_object;
        }
      }
    });

    // Alphabetize and remove undefined index items
    let filtered = searchedItems
      .sort((a, b) => {
        if (a.ToyName < b.ToyName) {
          return -1;
        }
        if (a.ToyName > b.ToyName) {
          return 1;
        }
        return 0;
      })
      .filter((x) => {
        return x !== undefined;
      });

    if (filtered.length) {
      setFilteredData(filtered);
    }
  }, [searchTerm]);

  // Wait until filteredData state has been updated to setIsInitialized(false)
  useEffect(() => {
    setIsInitialized(false);
  }, [filteredData]);

  // Wait for isInitialized to be false before calling initializeDataFetch()
  useEffect(() => {
    initializeDataFetch();
  }, [isInitialized]);

  console.log(props);

  // Destructing toyData and search props
  const { toyData, search, filter } = props;

  // Recursively call initializeDataFetch until props are loaded into component. Save props into toyData_array and current states.
  const initializeDataFetch = () => {
    if (toyData.length > 0 && isInitialized == false) {
      let objectEntries = toyData;
      if (filteredData.length) {
        objectEntries = filteredData;
      }

      // Convert object to array for InfiniteScroll
      let toyData_array = Object.entries(objectEntries).map(
        (toyData_object, index) => {
          // Calculate 'blank' to check if entire report card should be hidden. Per client, if all scores are blank (i.e., blank === 6) hide report card.
          let blank = 0;
          if (
            (toyData_object[1].ToyTipsRating < 2) |
            (toyData_object[1].ToyTipsRating > 5) |
            (toyData_object[1].ToyTipsRating == undefined)
          ) {
            blank++;
          }
          if (
            (toyData_object[1].Kids_Rating < 2) |
            (toyData_object[1].Kids_Rating > 5) |
            (toyData_object[1].Kids_Rating == undefined)
          ) {
            blank++;
          }
          if (
            (toyData_object[1].Motor_Movement < 2) |
            (toyData_object[1].Motor_Movement > 5) |
            (toyData_object[1].Motor_Movement == undefined)
          ) {
            blank++;
          }
          if (
            (toyData_object[1].Thinking_Skills < 2) |
            (toyData_object[1].Thinking_Skills > 5) |
            (toyData_object[1].Thinking_Skills == undefined)
          ) {
            blank++;
          }
          if (
            (toyData_object[1].Character_Development < 2) |
            (toyData_object[1].Character_Development > 5) |
            (toyData_object[1].Character_Development == undefined)
          ) {
            blank++;
          }
          if (
            (toyData_object[1].Social_Interaction < 2) |
            (toyData_object[1].Social_Interaction > 5) |
            (toyData_object[1].Social_Interaction == undefined)
          ) {
            blank++;
          }

          // Initialize variables to handle styling during report card omission
          let handleDisplay_RC = "flex";
          let handleNoRC_imgSpacing = 6;
          let handleNoRC_RCSpacing = 3;
          let handleNoRC_RCSpacing_mobile = 6;
          let handleNoRC_textSpacing = 7;
          let handleNoRC_toyImgSize = "100%";

          // Element style will change if blank === 6
          if (blank == 6) {
            handleDisplay_RC = "none";
            handleNoRC_imgSpacing = 12;
            handleNoRC_RCSpacing = 0;
            handleNoRC_RCSpacing_mobile = 0;
            handleNoRC_textSpacing = 10;
            handleNoRC_toyImgSize = "65%";
          }
          // Add key and values to toyData_object
          toyData_object[1].handleDisplay_RC = handleDisplay_RC;
          toyData_object[1].handleNoRC_imgSpacing = handleNoRC_imgSpacing;
          toyData_object[1].handleNoRC_RCSpacing = handleNoRC_RCSpacing;
          toyData_object[1].handleNoRC_RCSpacing_mobile =
            handleNoRC_RCSpacing_mobile;
          toyData_object[1].handleNoRC_textSpacing = handleNoRC_textSpacing;
          toyData_object[1].handleNoRC_toyImgSize = handleNoRC_toyImgSize;

          // Return object containing data from database plus handleDisplay_RC
          return toyData_object[1];
        }
      );

      // Set toyData_array state
      setToyData_array(toyData_array);

      // Set toyData_fullArr state
      if (toyData_fullArr.length == 1) {
        setToyData_fullArr(toyData_array);
      }

      // Set current state to code-split data payload for InfiniteScroll
      setCurrent(toyData_array.slice((count.prev = 0), (count.next = 15)));

      // Styling adjustments for window height
      // Adjust min loading height for InfiniteScroll
      if (window.screen.availHeight != window.screen.height) {
        window.screen.availHeight < window.screen.height
          ? setMin_windowHeight(Math.floor(window.screen.availHeight - 185))
          : setMin_windowHeight(Math.floor(window.screen.height - 185));
      } else {
        setMin_windowHeight(Math.floor(window.screen.availHeight - 185));
      }

      // Adjust min loading height for InfiniteScroll - MOBILE
      if ((window.screen.availWidth <= 540) | (window.screen.width <= 540)) {
        if (window.screen.availHeight != window.screen.height) {
          window.screen.availHeight < window.screen.height
            ? setMin_windowHeight(Math.floor(window.screen.availHeight - 175))
            : setMin_windowHeight(Math.floor(window.screen.height - 175));
        } else {
          setMin_windowHeight(Math.floor(window.screen.availHeight - 175));
        }
      }

      // Adjust min loading height for InfiniteScroll - Laptop L
      if ((window.screen.availWidth >= 1024) | (window.screen.width >= 1024)) {
        if (window.screen.availHeight != window.screen.height) {
          window.screen.availHeight < window.screen.height
            ? setMin_windowHeight(Math.floor(window.screen.availHeight - 178))
            : setMin_windowHeight(Math.floor(window.screen.height - 178));
        } else {
          setMin_windowHeight(Math.floor(window.screen.availHeight - 178));
        }
      }
      setIsInitialized(true);
      console.log("---Data successfully initialized---");
      console.log(props);
      // window.scrollTo(0, 0);

      if (toyData_array) {
        return toyData_array;
      }
    } else {
      console.log("No props loaded yet...");
    }
  };

  // Recursively call initializeDataFetch()
  if (isInitialized == false) {
    return <>{initializeDataFetch()}</>;
  }

  // Set searchTerm state to search prop
  setTimeout(() => {
    setSearchTerm(search);
  }, 100);

  // Function used to get more data for InfiniteScroll
  const getMoreData = () => {
    console.log("getMoreData has been called");
    if (current.length === toyData_array.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(toyData_array.slice(count.prev + 15, count.next + 15))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 15,
      next: prevState.next + 15,
    }));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={current.length}
        hasMore={hasMore}
        next={getMoreData}
        height={min_windowHeight}
        loader={
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading more toys...
          </h4>
        }
        style={{ margin: 0, padding: 0, width: "100%", overflowX: "hidden" }}
      >
        <div>
          {current &&
            current.map((toyData, index) => (
              <div>
                <Container>
                  {/* Toy Search Card Container */}
                  <Row className="m-3 p-2 card_Row box_Shadow">
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
                      xs={toyData.handleNoRC_imgSpacing}
                      sm={toyData.handleNoRC_imgSpacing}
                      className="d-flex d-md-none flexCenter_center"
                    >
                      <Image
                        src="./assets/images/original/TTT_logo_hiRes.png"
                        thumbnail
                        style={{ width: toyData.handleNoRC_toyImgSize }}
                      />
                    </Col>
                    {/* Blank Report Card - MOBILE*/}
                    <Col
                      xs={toyData.handleNoRC_RCSpacing_mobile}
                      sm={toyData.handleNoRC_RCSpacing_mobile}
                      className="d-flex d-md-none"
                      style={{
                        alignItems: "center",
                        display: toyData.handleDisplay_RC,
                      }}
                    >
                      <Image
                        src="./assets/icons/scoring_icons/report_card.png"
                        style={{
                          width: "100%",
                          display: toyData.handleDisplay_RC,
                        }}
                      />
                      <div className="scores_mobileTransform">
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
                            display: toyData.handleDisplay_RC,
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
                            display: toyData.handleDisplay_RC,
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
                            top: 37,
                            right: 82,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 56,
                            right: 102,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 75,
                            right: 122,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 94,
                            right: 142,
                            height: 20,
                            display: toyData.handleDisplay_RC,
                          }}
                        />
                      </div>
                    </Col>

                    {/* Text Container */}
                    <Col
                      xs={12}
                      sm={12}
                      md={toyData.handleNoRC_textSpacing}
                      lg={toyData.handleNoRC_textSpacing}
                      xl={toyData.handleNoRC_textSpacing}
                    >
                      {/* ROW 1: Toy Name */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <h2
                            className="d-none d-md-flex m-0 font-weight-bold"
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                          >
                            {toyData.ToyName}
                          </h2>
                          {/* MOBILE */}
                          <h4
                            className="d-flex d-md-none flexCenter_center_textAlign m-0 font-weight-bold"
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                          >
                            {toyData.ToyName}
                          </h4>
                        </Col>
                      </Row>
                      {/* ROW 2: Company Name */}
                      <Row className="flexCenter">
                        <Col className="d-none d-md-flex p-0 mb-2">
                          by {toyData.company_name}
                        </Col>
                        {/* MOBILE */}
                        <Col className="d-flex d-md-none flexCenter_center_textAlign mb-2">
                          by {toyData.company_name}
                        </Col>
                      </Row>
                      {/* ROW 3: Ages, Price */}
                      <Row className="flexCenter">
                        <Col className="d-none d-md-flex p-0">
                          <b className="age_price_margin">For Ages: </b>
                          {toyData.AgeRange1}
                        </Col>
                        <Col className="d-none d-md-flex p-0">
                          <b className="age_price_margin">Price: </b>
                          {toyData.Low_Price}
                        </Col>
                        {/* MOBILE */}
                        <Col className="d-flex d-md-none flexCenter_center">
                          <b className="age_price_margin">For Ages: </b>
                          {toyData.AgeRange1}
                        </Col>
                        <Col className="d-flex d-md-none flexCenter_center_textAlign">
                          <b className="age_price_margin">Price: </b>
                          {toyData.Low_Price}
                        </Col>
                      </Row>
                      {/* ROW 4: Categories */}
                      <Row className="flexCenter mb-2">
                        <Col
                          className="d-none d-md-flex p-0"
                          style={{ fontSize: "small" }}
                        >
                          {toyData.categories}
                        </Col>
                        {/* MOBILE */}
                        <Col
                          className="d-flex d-md-none flexCenter_center_textAlign"
                          style={{ fontSize: "small" }}
                        >
                          {toyData.categories}
                        </Col>
                      </Row>
                      {/* ROW 5: Manufacturer's Description */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Manufacturer's Description</b>
                          <ShowMoreText lines={3}>
                            <p>{toyData.mfg_desc}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                      {/* ROW 6: Review */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Expert Review</b>
                          <ShowMoreText lines={3}>
                            <p>{toyData.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                    {/* Blank Report Card */}
                    <Col
                      md={toyData.handleNoRC_RCSpacing}
                      lg={toyData.handleNoRC_RCSpacing}
                      xl={toyData.handleNoRC_RCSpacing}
                      className="d-none d-md-flex"
                      style={{
                        alignItems: "center",
                        display: toyData.handleDisplay_RC,
                      }}
                    >
                      <Image
                        src="./assets/icons/scoring_icons/report_card.png"
                        style={{
                          width: "100%",
                          display: toyData.handleDisplay_RC,
                        }}
                      />
                      <div className="scores_mobileTransform">
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
                            display: toyData.handleDisplay_RC,
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
                            display: toyData.handleDisplay_RC,
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
                            top: 36,
                            right: 82,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 55,
                            right: 102,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 74,
                            right: 122,
                            height: 20,
                            display: toyData.handleDisplay_RC,
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
                            top: 93,
                            right: 142,
                            height: 20,
                            display: toyData.handleDisplay_RC,
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ToySearchCard;
