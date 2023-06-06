import React, { useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { lightThemeforOthers } from './Themes';
import './styles.css';
import FallingTextAnimation from './FallingTextAnimation';
import RacingTextAnimation from './RacingTextAnimation';
import PowerButton from '../subComponents/PowerButton';
import He from '../assets/Images/About-Me.jpg';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Row = styled.div`
  background-color: lightblue;
  padding: 1rem;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  background-color: lightblue;
`;
const AdultLearning = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  background-color: lightblue;
`;

const Tutoring = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  background-color: lightblue;
`;

const Importance = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  background-color: lightblue;
`;

const MiddleContainerBlue = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  background-color: lightblue;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Management = styled.p`
  margin-bottom: 1rem;
  background-color: lightblue;
`;
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightblue;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    justify-content: center;
  }

  th {
    background-color: lightgray;
  }
  background-color: lightblue;
`;
const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const FooterContainer = styled.div`
  background-color: lightblue;
  padding: 10px;
  color: white;
  text-align: center;
`;

// Animation keyframes
const popupAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  animation: ${popupAnimation} 0.5s forwards;
`;

const LeftColumn = styled.div`
  width: 30%;
`;


const AboutPage = () => {
  useEffect(() => {
    const text =
      'Royal Institute Epson (RIE) is a New Zealand government registered academic institute. Its mission is to “Assist students in the very best way to achieve their academic goals”.';
    const typingSpeed = 40; // Adjust typing speed (in milliseconds) here
    const element = document.getElementById('autoTypingText');

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    typeWriter();
  }, []);

  return (
    <ThemeProvider theme={lightThemeforOthers}>
      <MainContainer>
        <Container>
          <PowerButton />
          <LeftColumn>
            <Image className="pic" src={He} alt="Profile Pic" />
          </LeftColumn>
          <div className="container">
            {/* <Rows> */}
            <div className="row">
              <Row>
                {/* Content for the first row */}
                <br></br>
                <br></br>
                <h2>Mission</h2>
                <br></br>
                <br></br>
                <span style={{ color: 'red' }}>
                  <p id="autoTypingText"></p>
                </span>
              </Row>
            </div>
            <div className="row">
              <Row>
                {/* Content for the second row */}
                <h2>Vision</h2>
                <br></br>
                <br></br>
                <span style={{ color: 'orange', fontWeight: 'bold' }}>
                  <FallingTextAnimation />
                </span>
              </Row>
            </div>
            <div className="row">
              <Row>
                {/* Content for the third row */}
                <h2>Goals</h2>
                <br></br>
                <br></br>
                <span style={{ color: 'green' }}>
                  <RacingTextAnimation />
                </span>
              </Row>
            </div>
            {/* </Rows> */}
          </div>
        </Container>

        <SecondContainer>
          <AdultLearning>
            <h2>Adult Learning</h2>
            <br></br>
            <br></br>
            <p>
              Adult education gives mature learners the chance to increase their
              knowledge, develop new skills, and gain helpful qualifications and
              credentials. It also improves the career prospects available to
              them. RIE welcomes adult students to Workplace English, IELTS, and
              General English classes.
            </p>
            <br></br>
            <br></br>
          </AdultLearning>
          <Tutoring>
            <h2>Tutoring</h2>
            <br></br>
            <br></br>
            <p>
              Tutoring is for enrichment and it's all about improvement, growth,
              and gaining more confidence! Therefore, tutoring is very important
              in the world of academics, and certainly, there is no shame that
              your child may need one. No matter what subject your child needs
              help with, whether it is Math, Science, or English, someone needs
              to help your child. Because not every child has the greatest
              capacity for all subjects. Often there are times that a child
              starts to learn something new in school that they simply cannot
              understand. They tend not to do the homework because they cannot
              figure it out. Parents often can’t help when it comes to certain
              subjects, so where do you turn?
            </p>
            <br></br>
            <br></br>
          </Tutoring>
          <Importance>
            <h2>Importance</h2>
            <br></br>
            <br></br>
            <p>
              Some students pick up the material quickly that the teachers are
              teaching, and others do not. Some students may need extra help
              after school, but sometimes parents don’t recognize that their
              child needs help. Actually, for the students who fall a little
              behind or have trouble in a subject, they need someone to help
              them to come up to the expected standard.
            </p>
            <br></br>
            <br></br>
          </Importance>
        </SecondContainer>
        <MiddleContainerBlue>
          <Management>
            <h2>Managment</h2>
            <br></br>
            <br></br>
            <p>
              RIE is managed by a qualified and experienced team. Director, Dr.
              Sydney Fernando worked as a Senior Advisor in the Ministry of
              Agriculture and Forestry in Wellington, NZ, and later joined the
              education sector in Auckland. He managed Educational Institutes
              over 13 years in Auckland and worked as a Director of Studies,
              Associate Principal, and as a General Manager. Thus, understand
              the NZ education system and experience in managing them. Further,
              well experienced in the NZ professional pathways. Teachers are
              also professionals from respective subject areas and bring the
              experience and current world challenges to the classroom with
              their own experience. In order to guide students better, parents
              and students are encouraged to discuss their academic pathways and
              subjects with tutors.
            </p>
            <br></br>
            <br></br>
          </Management>
        </MiddleContainerBlue>
        <MiddleContainerBlue>
          <Management>
            <h2>Some of Our Staff Members</h2>
            <br></br>
            <br></br>
            <p>
              RIE recruit professionals with teaching experience in respective
              subject areas. Professionals like Gayan, James, Devaki, Chintha,
              Milidu, Sarath, Navidu, Panchali, and others make your learning,
              exam practice perfect. They know where you are heading, they have
              gone through the same path you are just entering.
            </p>
            <br></br>
            <br></br>
          </Management>
        </MiddleContainerBlue>
        <Management></Management>

        <Container>
          <Row>
            <h2>Maths & Physics</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Two Mechatronics Engineers</li>
              <li>Auckland university graduates</li>
            </ul>
          </Row>
          <Row>
            <h2>Chemistry</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Chemical Engineer (PhD) Auckland Uni graduate</li>
              <li>Auckland Uni Medical Student</li>
            </ul>
          </Row>
          <Row>
            <h2>Biology</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Researcher (PhD)</li>
              <li>Masters Student researching at Auckland University.</li>
            </ul>
          </Row>
          <Row>
            <h2>Science</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Graduate Teacher</li>
              <li>Over 20 years tutoring in Auckland</li>
            </ul>
          </Row>
          <Row>
            <h2>English</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Experience in teaching English to people of all ages</li>
              <li>Accredited English tutors</li>
            </ul>
          </Row>
          <Row>
            <h2>Accounting & Commerce</h2>
            <br></br>
            <br></br>
            <ul>
              <li>University lecturer (PhD) Auckland Uni graduate</li>
              <li>Experience tutor</li>
            </ul>
          </Row>
        </Container>
        <SecondContainer>
          <AdultLearning>
            <h2>Fees</h2>
            <br></br>
            <br></br>
            <p>
              Need to pay fees monthly, so please pay at the beginning of the
              month to the RIE account. All payments are through bank transfer
              only, if you need any assistance please talk to the management at
              any time.
            </p>
            <br></br>
            <br></br>
          </AdultLearning>
          <Tutoring>
            <h2>Bank Details</h2>
            <br></br>
            <br></br>
            <p>Bank: ANZ Account</p>
            <p> Name: Royal Institute</p>
            <p> Account number: 01-0815-0128371-00</p>
            <br></br>
            <br></br>
          </Tutoring>
          <Importance>
            <h2>Details to be added in the bank payment</h2>
            <br></br>
            <br></br>
            <TableContainer>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Code</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students' first name</td>
                    <td>Class e.g., NCEA L1</td>
                    <td>Paying month e.g., January</td>
                  </tr>
                  {/* Add more rows if needed */}
                </tbody>
              </StyledTable>
            </TableContainer>
          </Importance>
        </SecondContainer>
        <SecondContainer>
          <AdultLearning>
            <h2>Complaints and suggestions</h2>
            <br></br>
            <br></br>
            <p>
              Please forward your complaints and suggestions to the Director,
              these will be highly confidential.
            </p>
            <br></br>
            <br></br>
            <p>
              Sydney Fernando JP, Ph.D. (USA), Post Dip Com. (UK), BSc Ag.
              Honours (SL)
            </p>
            <br></br>
            <br></br>
            <p>
              <a
                href="https://tutoring.support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tutoring.support/
              </a>
              <br></br>
              <br></br>
              <p>
                <a
                  href="https://www.facebook.com/Royal-Institute-Epsom-100135454846284/?modal=admin_todo_tour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FB:
                  https://www.facebook.com/Royal-Institute-Epsom-100135454846284/?modal=admin_todo_tour
                </a>
              </p>
            </p>
          </AdultLearning>
        </SecondContainer>
        <FooterContainer>
          <p>
            All rights reserved by Royal Institute Epsom. Web Development by{' '}
            <a
              href="https://github.com/sachindaMass"
              target="_blank"
              rel="noopener noreferrer"
            >
              OneBinduwa
            </a>
          </p>
        </FooterContainer>
      </MainContainer>
    </ThemeProvider>
  );
};
export default AboutPage;
