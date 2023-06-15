import React, { useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import AnchorComponent from '../subComponents/Anchor';

import { motion } from 'framer-motion';

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;
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

const MySkillsPage = () => {
  const handleFindRIE = () => {
    window.open('https://maps.google.com', '_blank');
  };
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
    <ThemeProvider theme={lightTheme}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <AnchorComponent number={numbers} />
          {/* <BigTitle text="Courses" top="5rem" left="5rem" /> */}
        </Container>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}
          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              The Royal Institute Epsom (RIE) campus is situated in the heart of
              Epsom in Auckland city. Auckland is the largest and most vibrant
              city in New Zealand. It offers a truly authentic Kiwi as well as
              international experience.
            </motion.p>
          </Main>
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}
          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              RIE staff help individual students to realise their potential,
              using the education system with their support and encouragement.
              Further, Royal Institute Epsom’s programmes NCEA, Cambridge,
              English Language, and IELTS are well organised and focused on
              student’s expectations, which means students can finish their
              studies much comfortably, effectively, and earlier than the
              traditional timeframe. Obviously with good results.
            </motion.p>
          </Main>
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}

          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              RIE class sizes are small and students will benefit from just like
              one-on-one tuition and extra learning support from RIE
              experienced, qualified tutors. From the outset, our friendly
              student support staff will guide and provide students with all the
              information students require about studying at the Epsom Campus.
            </motion.p>
          </Main>
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}

          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              RIE is located within walking distance from most of the
              prestigious high schools in Auckland. Thus, students need not to
              worry about transport as they can walk to RIE classes. On the
              other hand, it makes students feel fresh and relaxed when they
              arrive at the class. It helps them to focus on their lessons.
              Adult students have the advantage of easy access to trains and
              busses who are coming after work.
            </motion.p>
          </Main>
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}

          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              In order to support individual requirements, the Auckland Campus
              has a flexible enrolling system for all students.
              <br />
              <br />
              <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleFindRIE}
              >
                Find RIE in Google Maps
              </Button>
            </motion.p>
          </Main>
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}

          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <strong>
                We invite you to join RIE and make your educational journey a
                success.
              </strong>

              {/* <Container> */}

              <p>Visit Us,</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Royal Institute Epsom,</li>
                <li>13/17 Margot Street,</li>
                <li>Epsom,</li>
                <li>Auckland 1051</li>
              </ul>
              <p>Connect Us,</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                  Phone: <a href="tel:+642102445166">+64 21 02445166</a>
                </li>
                <li>
                  Phone: <a href="tel:+6499639936">+64 9 963 9936</a>
                </li>
                <li>
                  Fax: <a href="fax:+6499639936">+64 9 963 9936</a>
                </li>
                <li>
                  Email:{' '}
                  <a href="mailto:info.royalepsom@gmail.com">
                    info.royalepsom@gmail.com
                  </a>
                </li>
              </ul>
              {/* </Container> */}
            </motion.p>
          </Main>
        </Box>
        {/* <ContainerForFees> */}
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
        {/* </ContainerForFees> */}
        <BigTitle text="Intro" top="10%" right="10%" />
      </MainContainer>
    </ThemeProvider>
  );
};
export default MySkillsPage;
