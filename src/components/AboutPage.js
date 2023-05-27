import React, { useRef, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { lightThemeforOthers } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import AnchorComponent from '../subComponents/Anchor';
import astronaut from '../assets/Images/spaceman.png';

import { motion } from 'framer-motion';

import BigTitle from '../subComponents/BigTitlte';

// const Box = styled.div`
//   background-color: ${(props) => props.theme.body};
//   width: 100vw;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
// `;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 50%;
    height: auto;
  }
`;
const Main = styled.div`
  border: none;
  color: black; /* Set font color as white */
  padding: 2rem;
  width: 80%; /* Set width to a percentage value for responsiveness */
  max-width: 800px; /* Set a max-width for larger screens */
  height: auto;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8rem + 1vw);
  backdrop-filter: blur(50px);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold; /* Set font style as bold */
`;

const Button = styled(motion.button)`
  background-color: orange;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
`;
const FooterContainer = styled.div`
  background-color: lightblue;
  padding: 10px;
  color: white;
  text-align: center;
`;
const MainContainer = styled(motion.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
// const Container = styled.div`
//   background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
//   width: 100%;
//   height: auto;

//   position: relative;
//   padding-bottom: 5rem;
// `;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

// ------------------------------------------------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfilePic = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
`;

const Rows = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 66.6%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const Row = styled.div`
  background-color: #f2f2f2;
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
`;
const AdultLearning = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
`;

const Tutoring = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
`;

const Importance = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.3%;
  }
`;
const Box = styled.div`
  flex-basis: 100%;
  margin: 0.5rem;
  height: 100px;
  background-color: lightblue;

  @media (min-width: 576px) {
    flex-basis: calc(50% - 1rem);
  }

  @media (min-width: 768px) {
    flex-basis: calc(33.33% - 1rem);
  }
`;
const ThirdContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-wrap: wrap;
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
const MiddleContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  background-color: white;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Management = styled.p`
  margin-bottom: 1rem;
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

  const numbers = 10; // Replace with your desired number of links

  return (
    <ThemeProvider theme={lightThemeforOthers}>
      <Container>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ProfilePic>
          {/* Profile picture goes here */}
          <img src="profile-pic.jpg" alt="Profile" />
        </ProfilePic>
        <Rows>
          <Row>
            {/* Content for the first row */}
            <h2>Mission</h2>
            <p>
              Royal Institute Epson (RIE) is a New Zealand government registered
              academic institute. Its mission is to “Assist students in the very
              best way to achieve their academic goals”.
            </p>
          </Row>
          <Row>
            {/* Content for the second row */}
            <h2>Vision</h2>
            <p>
              RIE is driven to provide excellent educational opportunities that
              are responsive to the needs of our students and empower them to
              meet and exceed challenges as active participants in shaping the
              future of our world.
            </p>
          </Row>
          <Row>
            {/* Content for the third row */}
            <h2>Goals</h2>
            <ul>
              <li>
                Student Success: Meeting student needs by creating an
                educational environment
              </li>
              <li>
                Excellence: Maintaining a high standard of integrity and
                performance
              </li>
              <li>
                Collaboration: Seeking input from all sources and respective
                industries.
              </li>
            </ul>
          </Row>
        </Rows>
      </Container>
      <SecondContainer>
        <AdultLearning>
          <h2>Adult Learning</h2>
          <p>
            Adult education gives mature learners the chance to increase their
            knowledge, develop new skills, and gain helpful qualifications and
            credentials. It also improves the career prospects available to
            them. RIE welcomes adult students to Workplace English, IELTS, and
            General English classes.
          </p>
        </AdultLearning>
        <Tutoring>
          <h2>Tutoring</h2>
          <p>
            Tutoring is for enrichment and it's all about improvement, growth,
            and gaining more confidence! Therefore, tutoring is very important
            in the world of academics, and certainly, there is no shame that
            your child may need one. No matter what subject your child needs
            help with, whether it is Math, Science, or English, someone needs to
            help your child. Because not every child has the greatest capacity
            for all subjects. Often there are times that a child starts to learn
            something new in school that they simply cannot understand. They
            tend not to do the homework because they cannot figure it out.
            Parents often can’t help when it comes to certain subjects, so where
            do you turn?
          </p>
        </Tutoring>
        <Importance>
          <h2>Importance</h2>
          <p>
            Some students pick up the material quickly that the teachers are
            teaching, and others do not. Some students may need extra help after
            school, but sometimes parents don’t recognize that their child needs
            help. Actually, for the students who fall a little behind or have
            trouble in a subject, they need someone to help them to come up to
            the expected standard.
          </p>
        </Importance>
      </SecondContainer>
      <MiddleContainerBlue>
        <Management>
          <h2>Managment</h2>
          <p>
            RIE is managed by a qualified and experienced team. Director, Dr.
            Sydney Fernando worked as a Senior Advisor in the Ministry of
            Agriculture and Forestry in Wellington, NZ, and later joined the
            education sector in Auckland. He managed Educational Institutes over
            13 years in Auckland and worked as a Director of Studies, Associate
            Principal, and as a General Manager. Thus, understand the NZ
            education system and experience in managing them. Further, well
            experienced in the NZ professional pathways. Teachers are also
            professionals from respective subject areas and bring the experience
            and current world challenges to the classroom with their own
            experience. In order to guide students better, parents and students
            are encouraged to discuss their academic pathways and subjects with
            tutors.
          </p>
        </Management>
      </MiddleContainerBlue>
      <MiddleContainerBlue>
        <Management>
          <h2>Some of Our Staff Members</h2>
          <p>
            RIE recruit professionals with teaching experience in respective
            subject areas. Professionals like Gayan, James, Devaki, Chintha,
            Milidu, Sarath, Navidu, Panchali, and others make your learning,
            exam practice perfect. They know where you are heading, they have
            gone through the same path you are just entering.
          </p>
        </Management>
      </MiddleContainerBlue>
      <MiddleContainer></MiddleContainer>
      <ThirdContainer>
        <Box>Maths & Physics</Box>
        <Box>Chemistry</Box>
        <Box>Biology</Box>
        <Box>Science</Box>
        <Box>English</Box>
        <Box>Accounting & Commerce</Box>
      </ThirdContainer>
      <MiddleContainer></MiddleContainer>
      <MiddleContainer>
        <Management></Management>
      </MiddleContainer>
    </ThemeProvider>
  );
};
export default AboutPage;
