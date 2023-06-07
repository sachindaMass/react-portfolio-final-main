import React, { useEffect, useRef } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { lightThemeforOthers } from './Themes';
import './styles.css';
import FallingTextAnimation from './FallingTextAnimation';
import RacingTextAnimation from './RacingTextAnimation';
import PowerButton from '../subComponents/PowerButton';
import He from '../assets/Images/About-Me.jpg';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import { motion } from 'framer-motion';
import AnchorComponent from '../subComponents/Anchor';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold;
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  justify-content: center;
  padding: 2rem;
  text-align: justify;

  @media (min-width: 768px) {
    lex-direction: column; /* Change flex-direction to column */
    align-items: center; /* Center the content horizontally */
  }
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold;
  font-size: calc(0.5rem + 1vw);
  line-height: 1.8;
  justify-content: center;
  padding: 2rem;
  text-align: justify;
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: none;
  }
  50% {
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;
  }
  100% {
    text-shadow: none;
  }
`;

const Row = styled.div`
  padding: 1rem;
  backdrop-filter: blur(50px);
`;
const Row1 = styled.div`
  padding: 1rem;
  backdrop-filter: blur(50px);
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  // background-color: lightblue;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold;
  font-size: calc(0.5rem + 1vw);
  line-height: 2;
  justify-content: center;
  padding: 3rem;
  text-align: center;
`;

const FirstLetter = styled.span`
  float: left;
  font-size: 2em;
  line-height: 0.6;
  margin-right: 0.1em;
`;
const GlowingText = styled.span`
  position: relative;

  &:hover::after {
    animation: ${glowAnimation} 1s infinite;
  }
`;
const AdultLearning = styled(motion.div)`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  // background-color: lightblue;
  backdrop-filter: blur(50px);
`;

const Tutoring = styled(motion.div)`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  // background-color: lightblue;
  backdrop-filter: blur(50px);
`;

const Importance = styled(motion.div)`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
  // background-color: lightblue;
  backdrop-filter: blur(50px);
`;

const MiddleContainerBlue = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  // background-color: lightblue;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold;
  font-size: calc(0.5rem + 1vw);
  line-height: 2;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const Management = styled.p`
  margin-bottom: 1rem;
  // background-color: lightblue;
  backdrop-filter: blur(50px);
`;
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  // background-color: lightblue;
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
  // background-color: lightblue;
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
const popupAnimation = {
  from: {
    scale: 0,
  },
  to: {
    scale: 1,
  },
};

// Styled components
const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const LeftColumn = styled.div`
  width: 30%;
`;

const ParentElement = styled.div`
  /* Add your styling for the parent element here */
`;

const ContainerforAncor = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 0rem;
`;

const AboutPage = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const numbers = 20; // Replace with your desired number of links

  return (
    <ThemeProvider theme={lightThemeforOthers}>
      <ContainerforAncor>
        <AnchorComponent number={numbers} />
      </ContainerforAncor>
      <MainContainer>
        <Container1>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <LeftColumn>
            <br></br>
            <br></br>
            {/* <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2, // Adjust the duration as per your preference
                ease: 'easeInOut', // Use a smooth easing function
              }}
            >
              <Image className="pic" src={He} alt="Profile Pic"></Image>
            </motion.img> */}
            <Image
              src={He}
              alt="Profile Pic"
              initial="from"
              animate="to"
              variants={popupAnimation}
              transition={{
                duration: 1.0, // Adjust the duration as per your preference
              }}
            />
          </LeftColumn>
          <div className="container">
            {/* <Rows> */}
            <div className="row">
              <Row1>
                {/* Content for the first row */}
                <br></br>
                <br></br>
                <h2>Mission</h2>
                <br></br>
                {/* <br></br> */}
                <span style={{ color: 'red' }}>
                  <p id="autoTypingText"></p>
                </span>
              </Row1>
            </div>
            <div className="row">
              <Row1>
                {/* Content for the second row */}
                <h2>Vision</h2>
                <br></br>
                {/* <br></br> */}
                <span style={{ color: 'purple', fontWeight: 'bold' }}>
                  <FallingTextAnimation />
                </span>
              </Row1>
            </div>
            <div className="row">
              <Row1>
                {/* Content for the third row */}
                <h2>Goals</h2>
                <br></br>
                {/* <br></br> */}
                <span style={{ color: 'green' }}>
                  <RacingTextAnimation />
                </span>
              </Row1>
            </div>
            {/* </Rows> */}
          </div>
        </Container1>

        <SecondContainer>
          <AdultLearning>
            <h2>
              <u>Adult Learning</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <FirstLetter>A</FirstLetter>dult education gives more mature
                learners the chance to increase their knowledge, develop new
                skills, and gain helpful qualifications and credentials. It also
                improves the career prospects available to them. RIE welcomes
                adult students to Workplace English, IELTS, and General English
                classes.
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </AdultLearning>
          <Tutoring>
            <h2>
              <u>Tutoring</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <FirstLetter>T</FirstLetter>utoring is for enrichment and it's
                all about improvement, growth, and gaining more confidence!
                Therefore, tutoring is very important in the world of academics,
                and certainly, there is no shame that your child may need one.
                No matter what subject your child needs help with, whether it is
                Math, Science, or English, someone needs to help your child.
                Because not every child has the greatest capacity for all
                subjects. Often there are times that a child starts to learn
                something new in school that they simply cannot understand. They
                tend not to do the homework because they cannot figure it out.
                Parents often can’t help when it comes to certain subjects, so
                where do you turn?
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </Tutoring>
          <Importance>
            <h2>
              <u>Importance</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <FirstLetter>S</FirstLetter>ome students pick up the material
                quickly that the teachers are teaching, and others do not. Some
                students may need extra help after school, but sometimes parents
                don’t recognize that their child needs help. Actually, for the
                students who fall a little behind or have trouble in a subject,
                they need someone to help them to come up to the expected
                standard.
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </Importance>
        </SecondContainer>
        <MiddleContainerBlue>
          <Management>
            <h2>
              <u>Managment</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                RIE is managed by a qualified and experienced team. Director,
                Dr. Sydney Fernando worked as a Senior Advisor in the Ministry
                of Agriculture and Forestry in Wellington, NZ, and later joined
                the education sector in Auckland. He managed Educational
                Institutes over 13 years in Auckland and worked as a Director of
                Studies, Associate Principal, and as a General Manager. Thus,
                understand the NZ education system and experience in managing
                them. Further, well experienced in the NZ professional pathways.
                Teachers are also professionals from respective subject areas
                and bring the experience and current world challenges to the
                classroom with their own experience. In order to guide students
                better, parents and students are encouraged to discuss their
                academic pathways and subjects with tutors.
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </Management>
        </MiddleContainerBlue>
        <MiddleContainerBlue>
          <Management>
            <h2>
              <u>Some of Our Staff Members</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                RIE recruit professionals with teaching experience in respective
                subject areas. Professionals like Gayan, James, Devaki, Chintha,
                Milidu, Sarath, Navidu, Panchali, and others make your learning,
                exam practice perfect. They know where you are heading, they
                have gone through the same path you are just entering.
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </Management>
        </MiddleContainerBlue>
        <Management></Management>

        <Container>
          {/* <Row> */}
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <ul>
                    {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                    <p>Click to see Maths & Physics</p>
                  </ul>
                </div>
                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>Two Mechatronics Engineers</li>
                    <br></br>
                    <li>Auckland university graduates</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                  <p>Click to see Chemistry</p>
                </div>
                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>Chemical Engineer (PhD) Auckland Uni graduate</li>
                    <br></br>
                    <li>Auckland Uni Medical Student</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                  <p>Click to see Biology</p>
                </div>
                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>Researcher (PhD)</li>
                    <br></br>
                    <li>Masters Student researching at Auckland University.</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                  <p>Click to see Science</p>
                </div>
                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>Graduate Teacher</li>
                    <br></br>
                    <li>Over 20 years tutoring in Auckland</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                  <p>Click to see English</p>
                </div>
                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>
                      Experience in teaching English to people of all ages
                    </li>
                    <br></br>
                    <li>Accredited English tutors</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="cards-container">
            <div class="card-1 flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                  <p>Click to see Accounting & Commerce</p>
                </div>

                <div class="flip-card-back">
                  {/* <h3>Maths & Physics</h3> */}
                  <ul>
                    <li>University lecturer (PhD) Auckland Uni graduate</li>
                    <br></br>
                    <li>Experience tutor</li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          {/* <h2>Maths & Physics</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Two Mechatronics Engineers</li>
              <li>Auckland university graduates</li>
            </ul> */}
          {/* </Row> */}
          {/* <Row>
            <h2>Chemistry</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Chemical Engineer (PhD) Auckland Uni graduate</li>
              <li>Auckland Uni Medical Student</li>
            </ul>
          </Row> */}
          {/* <Row>
            <h2>Biology</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Researcher (PhD)</li>
              <li>Masters Student researching at Auckland University.</li>
            </ul>
          </Row> */}
          {/* <Row>
            <h2>Science</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Graduate Teacher</li>
              <li>Over 20 years tutoring in Auckland</li>
            </ul>
          </Row> */}
          {/* <Row>
            <h2>English</h2>
            <br></br>
            <br></br>
            <ul>
              <li>Experience in teaching English to people of all ages</li>
              <li>Accredited English tutors</li>
            </ul>
          </Row> */}
          {/* <Row>
            <h2>Accounting & Commerce</h2>
            <br></br>
            <br></br>
            <ul>
              <li>University lecturer (PhD) Auckland Uni graduate</li>
              <li>Experience tutor</li>
            </ul>
          </Row> */}
        </Container>
        <SecondContainer>
          <AdultLearning>
            <h2>
              <u>Fees</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                Need to pay fees monthly, so please pay at the beginning of the
                month to the RIE account. All payments are through bank transfer
                only, if you need any assistance please talk to the management
                at any time.
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </AdultLearning>
          <Tutoring>
            <h2>
              <u>Bank Details</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                Bank: ANZ Account
              </motion.p>
            </ParentElement>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {' '}
                Name: Royal Institute
              </motion.p>
            </ParentElement>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {' '}
                Account number: 01-0815-0128371-00
              </motion.p>
            </ParentElement>
            <br></br>
            <br></br>
          </Tutoring>
          <Importance>
            <h2>
              <u>Details to be added in the bank payment</u>
            </h2>
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
            <h2>
              <u>Complaints and suggestions</u>
            </h2>
            <br></br>
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                Please forward your complaints and suggestions to the Director,
                these will be highly confidential.
              </motion.p>
            </ParentElement>
            {/* <br></br> */}
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                Sydney Fernando JP, Ph.D. (USA), Post Dip Com. (UK), BSc Ag.
                Honours (SL)
              </motion.p>
            </ParentElement>
            {/* <br></br> */}
            <br></br>
            <ParentElement
              whileHover={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
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
              </motion.p>
            </ParentElement>
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
