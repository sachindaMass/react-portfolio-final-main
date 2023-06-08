import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
  text-align: center;

  @media (max-width: 768px) {
    /* Styles for screens with a maximum width of 768px or smaller */
    padding: 20px;
    font-size: 14px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    /* Styles for screens with a maximum width of 480px or smaller */
    padding: 15px;
    font-size: 12px;
    width: 100%;
    height: auto;
  }
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
      </MainContainer>
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
    </ThemeProvider>
  );
};
export default AboutPage;
