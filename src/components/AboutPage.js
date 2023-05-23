import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitlte from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';

import { motion } from 'framer-motion';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
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
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;
const Container = styled.div`
  //   max-width: 1000px;
  //   margin: 0 auto;
  padding: ${(props) => props.theme.pagePadding};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //   gap: 20px;
  position: relative;
`;

const ContainerForFees = styled.div`
  //   max-width: 1000px;
  //   margin: 0 auto;
  padding: ${(props) => props.theme.pagePadding};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  position: relative;
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
const AboutPage = () => {
  const handleFindRIE = () => {
    window.open('https://maps.google.com', '_blank');
  };
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
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
            <span style={{ color: 'green' }}>Royal Institute Epsom</span>{' '}
            <span style={{ color: 'yellow' }}>(RIE)</span>{' '}
            <span style={{ color: 'blue' }}>campus</span> is situated in the
            heart of Epsom in{' '}
            <span style={{ color: 'blue' }}>Auckland city</span>. Auckland is
            the largest and most vibrant city in{' '}
            <span style={{ color: 'blue' }}>New Zealand</span>. It offers a
            truly authentic <span style={{ color: 'red' }}>Kiwi</span> as well
            as <span style={{ color: 'blue' }}>international</span> experience.
            {/* <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links. */}
          </motion.p>
        </Main>
      </Box>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
              <span style={{ color: 'yellow' }}>RIE</span> staff help individual
              students to <span style={{ color: 'red' }}>realise</span> their{' '}
              <span style={{ color: 'orange' }}>potential</span>, using the
              education system with their support and{' '}
              <span style={{ color: 'green' }}>encouragement</span>. Further,
              Royal Institute Epsom’s programmes{' '}
              <span style={{ color: 'purple' }}>NCEA</span>,{' '}
              <span style={{ color: 'purple' }}>Cambridge</span>,{' '}
              <span style={{ color: 'purple' }}>English Language</span>, and{' '}
              <span style={{ color: 'purple' }}>IELTS</span> are well organised
              and focused on student’s expectations, which means students can
              finish their studies much comfortably, effectively, and earlier
              than the traditional timeframe. Obviously with{' '}
              <span style={{ color: 'blue' }}>good results</span>.
            </motion.p>
          </Main>
        </motion.p>
      </Box>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
              <span style={{ color: 'yellow' }}>RIE</span> class sizes are small
              and students will benefit from just like{' '}
              <span style={{ color: 'purple' }}>one-on-one tuition</span> and{' '}
              <span style={{ color: 'purple' }}>extra learning</span> support
              from <span style={{ color: 'yellow' }}>RIE</span>{' '}
              <span style={{ color: 'blue' }}>experienced</span>,{' '}
              <span style={{ color: 'blue' }}>qualified tutors</span>. From the
              outset, our friendly student support staff will guide and provide
              students with all the information students require about studying
              at the <span style={{ color: 'green' }}>Epsom Campus</span>.
            </motion.p>
          </Main>
        </motion.p>
      </Box>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
              <span style={{ color: 'yellow' }}>RIE</span> is located within
              walking <span style={{ color: 'blue' }}>distance</span> from most
              of the{' '}
              <span style={{ color: 'green' }}>
                prestigious high schools in Auckland
              </span>
              . Thus, students{' '}
              <span style={{ color: 'red' }}>
                need not to worry about transport
              </span>{' '}
              as they can{' '}
              <span style={{ color: 'green' }}>walk to RIE classes</span>. On
              the other hand, it makes students feel fresh and relaxed when they
              arrive at the class. It helps them to focus on their lessons.{' '}
              <span style={{ color: 'red' }}>Adult students</span> have the{' '}
              <span style={{ color: 'green' }}>
                advantage of easy access to trains and buses
              </span>{' '}
              who are coming after work.
            </motion.p>
          </Main>
        </motion.p>
      </Box>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
              In order to support{' '}
              <span style={{ color: 'blue' }}>individual</span> requirements,
              the <span style={{ color: 'green' }}>Auckland Campus</span> has a{' '}
              <span style={{ color: 'orange' }}>flexible</span>{' '}
              <span style={{ color: 'purple' }}>enrolling</span> system for{' '}
              <span style={{ color: 'red' }}>all</span>{' '}
              <span style={{ color: 'yellow' }}>students</span>.
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
        </motion.p>
      </Box>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
                We invite you to join{' '}
                <span style={{ color: 'yellow' }}>RIE</span> and make your{' '}
                <span style={{ color: 'blue' }}>educational</span> journey a{' '}
                <span style={{ color: 'green' }}>success</span>.
              </strong>
              <br></br>
              <br></br>

              <Container>
                <p style={{ color: 'red' }}>Visit Us,</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>Royal Institute Epsom,</li>
                  <li>13/17 Margot Street,</li>
                  <li>Epsom,</li>
                  <li>Auckland 1051</li>
                </ul>
                <p style={{ color: 'red' }}>Connect Us,</p>
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
              </Container>
            </motion.p>
          </Main>
        </motion.p>
      </Box>
      <ContainerForFees>
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
      </ContainerForFees>
      <BigTitlte text="Intro" top="10%" right="10%" />
    </ThemeProvider>
  );
};

export default AboutPage;
