import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';

const MainContainer = styled.div`
  // background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    // font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  text-decoration: none;
  z-index: 1;
  ${(props) => props.position}

  @media (max-width: 768px) {
    ${(props) => props.responsivePosition}
  }
`;

const LECS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  text-decoration: none;
  z-index: 1;
  ${(props) => props.position}

  @media (max-width: 768px) {
    ${(props) => props.responsivePosition}
  }
`;

const PAYMENT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  text-decoration: none;
  z-index: 1;
  ${(props) => props.position}

  @media (max-width: 768px) {
    ${(props) => props.responsivePosition}
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Button = styled.button`
  color: ${(props) => props.theme.text};
  position: absolute;
  text-decoration: none;
  z-index: 1;
  ${(props) => props.position}

  @media (max-width: 768px) {
    ${(props) => props.responsivePosition}
  }

  &:hover h2 {
    transform: perspective(1000px) rotateX(45deg);
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [showText, setShowText] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (showText) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [showText, controls]);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1500);
  }, []);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <div
          style={{
            position: 'absolute',
            top: click ? '85%' : '50%',
            left: click ? '92%' : '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 1s ease',
          }}
          onClick={handleClick}
        >
          {/* ... existing code */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={controls}
            style={{ textAlign: 'center' }}
          >
            ROYAL INSTITUTE EPSOM
            <br></br>
            Click Me
          </motion.h1>
        </div>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />
        <Contact target="_blank" href="mailto:info.royalepsom@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <Button
          as={NavLink}
          to="/courses"
          position="top: 15%; left: 30%; transform: translate(-50%, -50%);"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Courses
          </motion.h2>
        </Button>
        <WORK
          to="/time-table"
          position="top: 15%; left: 70%; transform: translate(-50%, -50%);"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Time Table
          </motion.h2>
        </WORK>
        <LECS
          to="/management"
          position="top: 50%; left: 90%; transform: translate(-50%, -50%);"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Our Staff
          </motion.h2>
        </LECS>
        <PAYMENT
          to="/payment-details"
          position="top: 50%; left: 10%; transform: translate(-50%, -50%);"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Fees
          </motion.h2>
        </PAYMENT>
        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About Us
            </motion.h2>
          </ABOUT>
          <SKILLS to="/intro-us">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Intro Us
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
