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

const Importance = styled(motion.div)`
  width: 100%;

  @media (min-width: 768px) {
    width: 70.3%;
  }
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
  text-align: center;

  @media (max-width: 768px) {
    /* Styles for screens with a maximum width of 768px or smaller */
    padding: 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    /* Styles for screens with a maximum width of 480px or smaller */
    padding: 15px;
    font-size: 12px;
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

const PaymentDetails = () => {
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
        {/* Fees */}
        <Container1>
          <Importance>
            <center>
              <h2>
                <u>Fees</u>
              </h2>
            </center>
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
                <center>
                  Need to pay fees monthly, so please pay at the beginning of
                  the month to the RIE account. All payments are through bank
                  transfer only, if you need any assistance please talk to the
                  management at any time.
                </center>
              </motion.p>
            </ParentElement>
            <br></br>
          </Importance>
        </Container1>
        {/* Bank Details */}
        <Container1>
          <Importance>
            <center>
              <h2>
                <u>Bank Details</u>
              </h2>
            </center>
            <br></br>
            <center>
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
            </center>
            <center>
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
            </center>
            <center>
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
            </center>

            <br></br>
          </Importance>
        </Container1>
        {/* bank payment */}
        <Container1>
          <Importance>
            <center>
              <h2>
                <u>Details to be added in the bank payment</u>
              </h2>
            </center>
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
        </Container1>
        {/* Footer */}
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

export default PaymentDetails;
