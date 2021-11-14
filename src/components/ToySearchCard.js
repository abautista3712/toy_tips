import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import faker from "faker";
import InfiniteScroll from "react-infinite-scroll-component";

const ToySearchCard = (props) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [toyData_array, setToyData_array] = useState([{}]);
  const [current, setCurrent] = useState([{}]);
  const [min_windowHeight, setMin_windowHeight] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState({
    prev: 0,
    next: 15,
  });

  const { toyData, search } = props;

  // Recursively call initializeDataFetch until props are loaded into component. Save props into dataPayload state.
  const initializeDataFetch = () => {
    if (toyData.length > 0) {
      if (isInitialized == false) {
        setIsInitialized(true);

        // Convert object to array for InfiniteScroll
        const toyData_array = Object.entries(toyData).map(
          (toyData_object, index) => {
            return toyData_object[1];
          }
        );

        // Set states for toyData_array and current
        setToyData_array(toyData_array);
        setCurrent(toyData_array.slice(count.prev, count.next));

        // Adjust min loading height for InfiniteScroll
        if (window.screen.availHeight != window.screen.height) {
          window.screen.availHeight < window.screen.height
            ? setMin_windowHeight(Math.floor(window.screen.availHeight * 0.73))
            : setMin_windowHeight(Math.floor(window.screen.height * 0.73));
        } else {
          setMin_windowHeight(Math.floor(window.screen.availHeight * 0.73));
        }

        // Adjust min loading height for InfiniteScroll - MOBILE
        if ((window.screen.availWidth <= 490) | (window.screen.width <= 490)) {
          if (window.screen.availHeight != window.screen.height) {
            window.screen.availHeight < window.screen.height
              ? setMin_windowHeight(
                  Math.floor(window.screen.availHeight * 0.65)
                )
              : setMin_windowHeight(Math.floor(window.screen.height * 0.65));
          } else {
            setMin_windowHeight(Math.floor(window.screen.availHeight * 0.65));
          }
        }

        console.log("Data successfully initialized");
      }
      if (toyData_array) {
        return toyData_array;
      }
    } else {
      console.log("No props loaded yet...");
    }
  };
  if (isInitialized == false) {
    console.log("Calling initializeDataFetch(props)...");
    return <>{initializeDataFetch()}</>;
  }

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
        loader={<h4>Loading...</h4>}
      >
        <div>
          {current &&
            current.map((toyData, index) => (
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
                            className="d-none d-md-flex"
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                          >
                            {toyData.ToyName}
                          </h2>
                          {/* MOBILE */}
                          <h4
                            className="d-flex d-md-none flexCenter_center_textAlign"
                            // Commented out because most product websites are outdated/missing
                            // onClick={handleClick_product_website}
                          >
                            {toyData.ToyName}
                          </h4>
                        </Col>
                      </Row>
                      {/* ROW 2: Company Name */}
                      <Row className="flexCenter">
                        <Col className="d-none d-md-flex p-0">
                          by {toyData.company_name}
                        </Col>
                        {/* MOBILE */}
                        <Col className="d-flex d-md-none flexCenter_center_textAlign">
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
                      <Row className="flexCenter">
                        <Col
                          className="d-none d-md-flex p-0"
                          style={{ fontSize: "small" }}
                        >
                          <b>{toyData.categories}</b>
                        </Col>
                        {/* MOBILE */}
                        <Col
                          className="d-flex d-md-none flexCenter_center_textAlign"
                          style={{ fontSize: "small" }}
                        >
                          <b>{toyData.categories}</b>
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
                      {/* Row 6: Review */}
                      <Row className="flexCenter">
                        <Col className="p-0">
                          <b>Expert Review</b>
                          <ShowMoreText lines={3}>
                            <p>{toyData.Long_Review}</p>
                          </ShowMoreText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );

  // return dataPayload.map((toyData, index) => {
  //   // Search facilitated by converting Object to array then using .inclues().
  //   const asArray = Object.entries(toyData);
  //   if (asArray[0][1].toLowerCase().includes(search.toString().toLowerCase())) {
  //     const filtered = asArray;
  //     const searchedItems = Object.fromEntries(filtered);

  // return (
  //   <div>
  //     {/* <InfiniteScroll
  //       dataLength={toyData.length}
  //       next={initializeDataFetch(props)}
  //       hasMore={false}
  //       height={400}
  //     > */}
  //     <div>
  //       <Container>
  //         {/* Toy Search Card Container*/}
  //         <Row className="m-2 p-2 card_Row">
  //           {/* Toy Image */}
  //           <Col
  //             md={2}
  //             lg={2}
  //             xl={2}
  //             className="d-none d-md-flex flexCenter_center"
  //           >
  //             <Image
  //               src="./assets/images/original/TTT_logo_hiRes.png"
  //               thumbnail
  //             />
  //           </Col>
  //           {/* Toy Image - MOBILE*/}
  //           <Col
  //             xs={12}
  //             sm={12}
  //             className="d-flex d-md-none flexCenter_center"
  //           >
  //             <Image
  //               src="./assets/images/original/TTT_logo_hiRes.png"
  //               thumbnail
  //               style={{ width: "65%" }}
  //             />
  //           </Col>

  //           {/* Text Container */}
  //           <Col>
  //             {/* ROW 1: Toy Name */}
  //             <Row className="flexCenter">
  //               <Col className="p-0">
  //                 <h2
  //                   className="d-none d-md-flex"
  //                   // Commented out because most product websites are outdated/missing
  //                   // onClick={handleClick_product_website}
  //                 >
  //                   {toyData.ToyName}
  //                 </h2>
  //                 {/* MOBILE */}
  //                 <h4
  //                   className="d-flex d-md-none flexCenter_center_textAlign"
  //                   // Commented out because most product websites are outdated/missing
  //                   // onClick={handleClick_product_website}
  //                 >
  //                   {toyData.ToyName}
  //                 </h4>
  //               </Col>
  //             </Row>
  //             {/* ROW 2: Company Name */}
  //             <Row className="flexCenter">
  //               <Col className="d-none d-md-flex p-0">
  //                 by {toyData.company_name}
  //               </Col>
  //               {/* MOBILE */}
  //               <Col className="d-flex d-md-none flexCenter_center_textAlign">
  //                 by {toyData.company_name}
  //               </Col>
  //             </Row>
  //             {/* ROW 3: Ages, Price */}
  //             <Row className="flexCenter">
  //               <Col className="d-none d-md-flex p-0">
  //                 <b className="age_price_margin">For Ages: </b>
  //                 {toyData.AgeRange1}
  //               </Col>
  //               <Col className="d-none d-md-flex p-0">
  //                 <b className="age_price_margin">Price: </b>
  //                 {toyData.Low_Price}
  //               </Col>
  //               {/* MOBILE */}
  //               <Col className="d-flex d-md-none flexCenter_center">
  //                 <b className="age_price_margin">For Ages: </b>
  //                 {toyData.AgeRange1}
  //               </Col>
  //               <Col className="d-flex d-md-none flexCenter_center_textAlign">
  //                 <b className="age_price_margin">Price: </b>
  //                 {toyData.Low_Price}
  //               </Col>
  //             </Row>
  //             {/* ROW 4: Categories */}
  //             <Row className="flexCenter">
  //               <Col
  //                 className="d-none d-md-flex p-0"
  //                 style={{ fontSize: "small" }}
  //               >
  //                 <b>{toyData.categories}</b>
  //               </Col>
  //               {/* MOBILE */}
  //               <Col
  //                 className="d-flex d-md-none flexCenter_center_textAlign"
  //                 style={{ fontSize: "small" }}
  //               >
  //                 <b>{toyData.categories}</b>
  //               </Col>
  //             </Row>
  //             {/* ROW 5: Manufacturer's Description */}
  //             <Row className="flexCenter">
  //               <Col className="p-0">
  //                 <b>Manufacturer's Description</b>
  //                 <ShowMoreText lines={3}>
  //                   <p>{toyData.mfg_desc}</p>
  //                 </ShowMoreText>
  //               </Col>
  //             </Row>
  //             {/* Row 6: Review */}
  //             <Row className="flexCenter">
  //               <Col className="p-0">
  //                 <b>Expert Review</b>
  //                 <ShowMoreText lines={3}>
  //                   <p>{toyData.Long_Review}</p>
  //                 </ShowMoreText>
  //               </Col>
  //             </Row>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //     {/* </InfiniteScroll> */}
  //   </div>
  // );
  //   }
  // });
};

// // Search facilitated by converting Object to array then using .inclues().
// const asArray = Object.entries(toyData);
// if (asArray[0][1].toLowerCase().includes(search.toString().toLowerCase())) {
//   const filtered = asArray;
//   const searchedItems = Object.fromEntries(filtered);

//   // Count is used to check if entire report card should be hidden. Per client, if all scores are blank (i.e., count === 6) hide report card.
//   let count = 0;
//   if (
//     (searchedItems.ToyTipsRating <= 2) |
//     (searchedItems.ToyTipsRating >= 5) |
//     (searchedItems.ToyTipsRating == undefined)
//   ) {
//     count++;
//   }
//   if (
//     (searchedItems.Kids_Rating <= 2) |
//     (searchedItems.Kids_Rating >= 5) |
//     (searchedItems.Kids_Rating == undefined)
//   ) {
//     count++;
//   }
//   if (
//     (searchedItems.Motor_Movement <= 2) |
//     (searchedItems.Motor_Movement >= 5) |
//     (searchedItems.Motor_Movement == undefined)
//   ) {
//     count++;
//   }
//   if (
//     (searchedItems.Thinking_Skills <= 2) |
//     (searchedItems.Thinking_Skills >= 5) |
//     (searchedItems.Thinking_Skills == undefined)
//   ) {
//     count++;
//   }
//   if (
//     (searchedItems.Character_Development <= 2) |
//     (searchedItems.Character_Development >= 5) |
//     (searchedItems.Character_Development == undefined)
//   ) {
//     count++;
//   }
//   if (
//     (searchedItems.Social_Interaction <= 2) |
//     (searchedItems.Social_Interaction >= 5) |
//     (searchedItems.Social_Interaction == undefined)
//   ) {
//     count++;
//   }

//   // Renders all elements EXCEPT FOR Toy Report Card
//   if (count === 6) {
//     return (
//       // <InfiniteScroll
//       //   dataLength={toyData.length}
//       //   next={initializeDataFetch(props)}
//       //   hasMore={true}
//       //   loading={<h3>Loading but from Infinte Scroll now</h3>}
//       // >
//       <div>
//         <Container>
//           {/* Toy Search Card Container*/}
//           <Row className="m-2 p-2 card_Row">
//             {/* Toy Image */}
//             <Col
//               md={2}
//               lg={2}
//               xl={2}
//               className="d-none d-md-flex flexCenter_center"
//             >
//               <Image
//                 src="./assets/images/original/TTT_logo_hiRes.png"
//                 thumbnail
//               />
//             </Col>
//             {/* Toy Image - MOBILE*/}
//             <Col xs={12} sm={12} className="d-flex d-md-none flexCenter_center">
//               <Image
//                 src="./assets/images/original/TTT_logo_hiRes.png"
//                 thumbnail
//                 style={{ width: "65%" }}
//               />
//             </Col>

//             {/* Text Container */}
//             <Col>
//               {/* ROW 1: Toy Name */}
//               <Row className="flexCenter">
//                 <Col className="p-0">
//                   <h2
//                     className="d-none d-md-flex"
//                     // Commented out because most product websites are outdated/missing
//                     // onClick={handleClick_product_website}
//                   >
//                     {searchedItems.ToyName}
//                   </h2>
//                   {/* MOBILE */}
//                   <h4
//                     className="d-flex d-md-none flexCenter_center_textAlign"
//                     // Commented out because most product websites are outdated/missing
//                     // onClick={handleClick_product_website}
//                   >
//                     {searchedItems.ToyName}
//                   </h4>
//                 </Col>
//               </Row>
//               {/* ROW 2: Company Name */}
//               <Row className="flexCenter">
//                 <Col className="d-none d-md-flex p-0">
//                   by {searchedItems.company_name}
//                 </Col>
//                 {/* MOBILE */}
//                 <Col className="d-flex d-md-none flexCenter_center_textAlign">
//                   by {searchedItems.company_name}
//                 </Col>
//               </Row>
//               {/* ROW 3: Ages, Price */}
//               <Row className="flexCenter">
//                 <Col className="d-none d-md-flex p-0">
//                   <b className="age_price_margin">For Ages: </b>
//                   {searchedItems.AgeRange1}
//                 </Col>
//                 <Col className="d-none d-md-flex p-0">
//                   <b className="age_price_margin">Price: </b>
//                   {searchedItems.Low_Price}
//                 </Col>
//                 {/* MOBILE */}
//                 <Col className="d-flex d-md-none flexCenter_center">
//                   <b className="age_price_margin">For Ages: </b>
//                   {searchedItems.AgeRange1}
//                 </Col>
//                 <Col className="d-flex d-md-none flexCenter_center_textAlign">
//                   <b className="age_price_margin">Price: </b>
//                   {searchedItems.Low_Price}
//                 </Col>
//               </Row>
//               {/* ROW 4: Categories */}
//               <Row className="flexCenter">
//                 <Col
//                   className="d-none d-md-flex p-0"
//                   style={{ fontSize: "small" }}
//                 >
//                   <b>{searchedItems.categories}</b>
//                 </Col>
//                 {/* MOBILE */}
//                 <Col
//                   className="d-flex d-md-none flexCenter_center_textAlign"
//                   style={{ fontSize: "small" }}
//                 >
//                   <b>{searchedItems.categories}</b>
//                 </Col>
//               </Row>
//               {/* ROW 5: Manufacturer's Description */}
//               <Row className="flexCenter">
//                 <Col className="p-0">
//                   <b>Manufacturer's Description</b>
//                   <ShowMoreText lines={3}>
//                     <p>{searchedItems.mfg_desc}</p>
//                   </ShowMoreText>
//                 </Col>
//               </Row>
//               {/* Row 6: Review */}
//               <Row className="flexCenter">
//                 <Col className="p-0">
//                   <b>Expert Review</b>
//                   <ShowMoreText lines={3}>
//                     <p>{searchedItems.Long_Review}</p>
//                   </ShowMoreText>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       // </InfiniteScroll>
//     );
//   } else {
//     // Render All Elements INCLUDING Report Card
//     return (
//       <InfiniteScroll
//         dataLength={toyData.length}
//         next={initializeDataFetch(props)}
//         hasMore={true}
//         loading={<h3>Loading but from Infinte Scroll now</h3>}
//       >
//         <div>
//           <Container>
//             {/* Toy Search Card Container */}
//             <Row className="m-2 p-2 card_Row">
//               {/* Toy Image */}
//               <Col
//                 md={2}
//                 lg={2}
//                 xl={2}
//                 className="d-none d-md-flex flexCenter_center"
//               >
//                 <Image
//                   src="./assets/images/original/TTT_logo_hiRes.png"
//                   thumbnail
//                 />
//               </Col>
//               {/* Toy Image - MOBILE */}
//               <Col xs={6} sm={6} className="d-flex d-md-none flexCenter_center">
//                 <Image
//                   src="./assets/images/original/TTT_logo_hiRes.png"
//                   thumbnail
//                 />
//               </Col>
//               {/* Blank Report Card - MOBILE*/}
//               <Col
//                 xs={6}
//                 sm={6}
//                 style={{
//                   alignItems: "center",
//                 }}
//                 className="d-flex d-md-none"
//               >
//                 <Image
//                   src="./assets/icons/scoring_icons/report_card.png"
//                   style={{ width: "100%" }}
//                 />
//                 <div className="scores_mobileTransform">
//                   {/* TT's Cumulative Research Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.ToyTipsRating}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: -39,
//                       right: 30,
//                       height: 28,
//                     }}
//                   />
//                   {/* Testers' Fun Grade */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Kids_Rating}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: -13,
//                       right: 58,
//                       height: 28,
//                     }}
//                   />
//                   {/* Movement Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Motor_Movement}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 37,
//                       right: 82,
//                       height: 20,
//                     }}
//                   />
//                   {/* Thinking Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Thinking_Skills}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 56,
//                       right: 102,
//                       height: 20,
//                     }}
//                   />
//                   {/* Personality Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Character_Development}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 75,
//                       right: 122,
//                       height: 20,
//                     }}
//                   />
//                   {/* Social Interaction Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Social_Interaction}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 94,
//                       right: 142,
//                       height: 20,
//                     }}
//                   />
//                 </div>
//               </Col>
//               {/* Text Container */}
//               <Col xs={12} sm={12} md={7} lg={7} xl={7}>
//                 {/* ROW 1: Toy Name */}
//                 <Row className="flexCenter">
//                   <Col className="p-0">
//                     <h2
//                       className="d-none d-md-flex"
//                       // Commented out because most product websites are outdated/missing
//                       // onClick={handleClick_product_website}
//                     >
//                       {searchedItems.ToyName}
//                     </h2>
//                     {/* MOBILE */}
//                     <h4
//                       className="d-flex d-md-none flexCenter_center_textAlign"
//                       // Commented out because most product websites are outdated/missing
//                       // onClick={handleClick_product_website}
//                     >
//                       {searchedItems.ToyName}
//                     </h4>
//                   </Col>
//                 </Row>
//                 {/* ROW 2: Company Name */}
//                 <Row className="flexCenter">
//                   <Col className="d-none d-md-flex p-0">
//                     by {searchedItems.company_name}
//                   </Col>
//                   {/* MOBILE */}
//                   <Col className="d-flex d-md-none flexCenter_center_textAlign">
//                     by {searchedItems.company_name}
//                   </Col>
//                 </Row>
//                 {/* ROW 3: Ages, Price */}
//                 <Row className="flexCenter">
//                   <Col className="d-none d-md-flex p-0">
//                     <b className="age_price_margin">For Ages: </b>
//                     {searchedItems.AgeRange1}
//                   </Col>
//                   <Col className="d-none d-md-flex p-0">
//                     <b className="age_price_margin">Price: </b>
//                     {searchedItems.Low_Price}
//                   </Col>
//                   {/* MOBILE */}
//                   <Col className="d-flex d-md-none flexCenter_center">
//                     <b className="age_price_margin">For Ages: </b>
//                     {searchedItems.AgeRange1}
//                   </Col>
//                   <Col className="d-flex d-md-none flexCenter_center_textAlign">
//                     <b className="age_price_margin">Price: </b>
//                     {searchedItems.Low_Price}
//                   </Col>
//                 </Row>
//                 {/* ROW 4: Categories */}
//                 <Row className="flexCenter">
//                   <Col
//                     className="d-none d-md-flex p-0"
//                     style={{ fontSize: "small" }}
//                   >
//                     <b>{searchedItems.categories}</b>
//                   </Col>
//                   {/* MOBILE */}
//                   <Col
//                     className="d-flex d-md-none flexCenter_center_textAlign"
//                     style={{ fontSize: "small" }}
//                   >
//                     <b>{searchedItems.categories}</b>
//                   </Col>
//                 </Row>
//                 {/* ROW 5: Manufacturer's Description */}
//                 <Row className="flexCenter">
//                   <Col className="p-0">
//                     <b>Manufacturer's Description</b>
//                     <ShowMoreText lines={3}>
//                       <p>{searchedItems.mfg_desc}</p>
//                     </ShowMoreText>
//                   </Col>
//                 </Row>
//                 {/* ROW 6: Review */}
//                 <Row className="flexCenter">
//                   <Col className="p-0">
//                     <b>Expert Review</b>
//                     <ShowMoreText lines={3}>
//                       <p>{searchedItems.Long_Review}</p>
//                     </ShowMoreText>
//                   </Col>
//                 </Row>
//               </Col>
//               {/* Blank Report Card */}
//               <Col
//                 md={3}
//                 lg={3}
//                 xl={3}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//                 className="d-none d-md-flex"
//               >
//                 <Image
//                   src="./assets/icons/scoring_icons/report_card.png"
//                   style={{ width: "100%" }}
//                 />
//                 <div className="scores_mobileTransform">
//                   {/* TT's Cumulative Research Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.ToyTipsRating}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: -39,
//                       right: 30,
//                       height: 28,
//                     }}
//                   />
//                   {/* Testers' Fun Grade */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Kids_Rating}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: -13,
//                       right: 58,
//                       height: 28,
//                     }}
//                   />
//                   {/* Movement Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Motor_Movement}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 36,
//                       right: 82,
//                       height: 20,
//                     }}
//                   />
//                   {/* Thinking Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Thinking_Skills}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 55,
//                       right: 102,
//                       height: 20,
//                     }}
//                   />
//                   {/* Personality Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Character_Development}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 74,
//                       right: 122,
//                       height: 20,
//                     }}
//                   />
//                   {/* Social Interaction Skill Score */}
//                   <img
//                     src={`./assets/icons/scoring_icons/${searchedItems.Social_Interaction}.png`}
//                     onError={(e) => {
//                       e.target.src = `./assets/icons/scoring_icons/0.png`;
//                     }}
//                     style={{
//                       position: "relative",
//                       top: 93,
//                       right: 142,
//                       height: 20,
//                     }}
//                   />
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </InfiniteScroll>
//     );
//   }
// }
// // }});
// //   } else {
// //     console.log("No props loaded yet...");
// //     // return (
// //     //   <h3>Loading...</h3>
// //     //   // <img src={loading} alt="Loading..." />
// //     // );
// //   }
// // };
// //   console.log("Calling initializeDataFetch(props) again...");
// //   return <> {initializeDataFetch(props)} </>;
// // }

export default ToySearchCard;
