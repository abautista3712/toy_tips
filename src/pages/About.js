import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = (props) => {
  return (
    <div>
      <Container>
        {/* ---FAQs--- */}
        <Row>
          <Col className="mt-3">
            <h1>Frequently Asked Questions</h1>
          </Col>
        </Row>
        {/* FAQ: About Toy Tips */}
        <Row className="m-2 p-2 card_Row">
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="flexCenter_flexEnd"
          >
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
        {/* FAQ: About Our Research*/}
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
        {/* FAQ: About How to Submit Product for Review*/}
        {/* <Row className="m-2 p-2 card_Row">
          <Col>
            <h2 style={{ textAlign: "right" }}>
              How do I submit a product for review?
            </h2>
            <p>
              Manufacturers may fill out an application on toytips.com. All
              information is required to process a request. Consumers can not
              submit toys but may encourage manufacturers to if they are
              interested in our review. If you would like us to consider a
              product for testing and are interested in our review, please email
              us at request@toytips.com.
            </p>
          </Col>
        </Row> */}
        {/* FAQ: About Tested Toys*/}
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
        {/* ---Rating System--- */}
        <Row>
          <Col className="mt-3">
            <h1>Our Rating System</h1>
          </Col>
        </Row>
        {/* Rating System: What Our Scores Mean*/}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2>How do you come up with your scoring?</h2>
            <p>
              Our Toy Report Cards include basic information about the toy and
              all the research we have found out. Factual information includes
              the the manufacturer and website, average retail price, toy image
              and suggested starting age. A snapshot review describing what the
              product does and what a child can learn by playing with it is
              written based on our review. You will notice this is very straight
              forward as we do NOT use adjectives so our reviews stay objective.
              The scores of A through C- indicate how strong a particiular skill
              is used during play. A score of A indicates the highest score and
              a score of C- is the lowest. Any toy that scored less than a C- in
              any of the 4 skill categories (movement, thinking, personality and
              social interaction) does not pass and will not appear on
              toytips.com. Our testing methods are strict and for a toy to be
              listed on toytips.com means it must surpass our strict standards
              of durability, ease of use, sensibility and value to the consumer.
              All 4 skills are met with a rating of C- or above. However, keep
              in mind not all toys utilize the same skills so do not use this as
              a key to evaluate the toy overall. The Toy Tips rating score is a
              bettter indication of this. Click on any skill for a complete
              explanation of what that skill means. Not every toy can stimulate
              each skill. So, C- does not necessarily indicate that the score is
              bad, just below average for that particualr skill.
            </p>
          </Col>
        </Row>
        {/* Rating System: Cumulative Research Score*/}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2 style={{ textAlign: "right" }}>
              What is Toy Tips® Cumulative Research Score?
            </h2>
            <p>
              This score is a combination of our researchers' observation of
              enjoyment and development skills. Each researcher uses an original
              survey written by psychologists so results are accurate,
              independent and academic. The total score is weighted and
              calculated into an A through C- rating scale and Toy Tips only
              reports on toys with these ratings. These observations are
              independent of the testers rating score which is determined by the
              children who actually test the toys.
            </p>
          </Col>
        </Row>
        {/* Rating System: Testers' 'Fun' Score*/}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2>How about the Testers' Fun Score?</h2>
            <p>
              This 'Fun' rating score is solely based on subjective evaluations
              and interviews with the actual children testing the toy. The
              children "score" each toy on a rating scale of A through C-. We do
              not publish toys if they rate below this score. If a toy does not
              score high on the fun scale, there is a reasonably good chance a
              child will not learn from the play experience. These scores are
              reported by the thousands of children we test toys with. NOTE: The
              fun score for toys in the infant and toddler category are based on
              our researcher's observation since the children are too young to
              speak. Also note that the researchers and kids opinions and
              observations differ quite a bit. Don't be surprised if a
              researcher reports a high score and kids may not like it as much.
              Researchers look for educational and skill-based learning value.
              Kids mostly just look for fun!
            </p>
          </Col>
        </Row>
        {/* Rating System: Skill Scores*/}
        <Row className="m-2 p-2 card_Row">
          <Col>
            <h2 style={{ textAlign: "right" }}>
              Can you tell me more about Toy Tips® Skill Scores?
            </h2>
            <h4>Movement</h4>
            <p>
              These skills can be fine motor skills, gross motor skills or both.
              Fine motor skills prepare children for coloring, buttoning,
              zippering, and other daily tasks. Using the fingers to hold, pinch
              and move help indicate success for basic developmental learning
              skills. Gross motor skills are using large muscle groups while
              throwing, running, crawling and climbing and are needed for a
              sense of balance and muscle tone. These are needed for
              deveopmental growth and reaching milestones.
            </p>
            <h4>Thinking</h4>
            <p>
              Intellectual thinking skills encourage imagination, concentration
              and creativity. Using the mind fosters deductive reasoning, logic
              and cognitive development.
            </p>
            <h4>Personality</h4>
            <p>
              Skills that facilitate a child to do their best, share, work with
              others and to be responsible are important to overall growth and
              help to shape whoe your child becomes. Honesty, integrity, telling
              the truth and doing the right thing all contribute to teaching
              children needed skills for later in life.
            </p>
            <h4>Social Interaction</h4>
            <p>
              Promoting interaction with other children and family members or
              encouraging a child to voice an opinion enhances participation,
              group activties, team-building and seeking new friendships.Whether
              a child interacts through speech or movement, this score
              incorporates how a toy can foster participation and action with
              another playmate, parent or caregiver.
            </p>
          </Col>
        </Row>
        {/* ---Meet the Team--- */}
        <Row>
          <Col className="mt-3">
            <h1>Meet the Team</h1>
          </Col>
        </Row>
        {/* About Our Founder*/}
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
              <br />
              <br />
              Questions? Comments?
              <br />
              marianne@toytips.com
            </p>
          </Col>
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className="flexCenter_flexEnd"
          >
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

export default About;
