import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightThemeforOthers } from './Themes';
import './styles.css';
import PowerButton from '../subComponents/PowerButton';
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

const Managment = () => {
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

  useEffect(() => {}, []);

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
        </Container1>
        <MiddleContainerBlue>
          <Management>
            <h2>
              Management
            </h2>
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
        </Container>
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
export default Managment;
