// import React, { useEffect, useRef } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { DarkTheme } from './Themes';
// import { motion } from 'framer-motion';

// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';

// import { Work } from '../data/WorkData';
// import Card from '../subComponents/Card';
// import { YinYang } from './AllSvgs';
// import BigTitlte from '../subComponents/BigTitlte';

// const Box = styled.div`
//   background-color: ${(props) => props.theme.body};

//   height: 400vh;
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;

//   color: white;
// `;
// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80px;
//   z-index: 1;
// `;

// // Framer-motion Configuration
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     },
//   },
// };

// const WorkPage = () => {
//   const ref = useRef(null);
//   const yinyang = useRef(null);

//   useEffect(() => {
//     let element = ref.current;

//     const rotate = () => {
//       element.style.transform = `translateX(${-window.pageYOffset}px)`;

//       return (yinyang.current.style.transform =
//         'rotate(' + -window.pageYOffset + 'deg)');
//     };

//     window.addEventListener('scroll', rotate);
//     return () => {
//       window.removeEventListener('scroll', rotate);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={DarkTheme}>
//       <Box>
//         <LogoComponent theme="dark" />
//         <SocialIcons theme="dark" />
//         <PowerButton />

//         <Main ref={ref} variants={container} initial="hidden" animate="show">
//           {Work.map((d) => (
//             <Card key={d.id} data={d} />
//           ))}
//         </Main>
//         <Rotate ref={yinyang}>
//           <YinYang width={80} height={80} fill={DarkTheme.text} />
//         </Rotate>

//         <BigTitlte text="Time Tables" top="10%" right="20%" />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default WorkPage;

import React, { useRef, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import AnchorComponent from '../subComponents/Anchor';
import astronaut from '../assets/Images/spaceman.png';

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
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
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

const TimetableTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
`;

const WorkPage = () => {
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
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                <tr>
                  <td>Year 9</td>
                  <td>Science</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 9</td>
                  <td>Maths</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                <tr>
                  <td>Year 9</td>
                  <td>English</td>
                  <td>12.00 - 01.00 PM</td>
                </tr>
                <tr>
                  <td>Year 10</td>
                  <td>English</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 10</td>
                  <td>Science</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                <tr>
                  <td>Year 10</td>
                  <td>Maths</td>
                  <td>12.00 - 01.00 PM</td>
                </tr>
                <tr>
                  <td>Year 6</td>
                  <td>Maths</td>
                  <td>01.15 - 02.15 PM</td>
                </tr>
                <tr>
                  <td>Year 6</td>
                  <td>English</td>
                  <td>02.30 - 03.30 PM</td>
                </tr>
                <tr>
                  <td>Year 7</td>
                  <td>English</td>
                  <td>01.15 - 02.15 PM</td>
                </tr>
                <tr>
                  <td>Year 7</td>
                  <td>Maths</td>
                  <td>03.00 - 04.00 PM</td>
                </tr>
              </tbody>
            </TimetableTable>
          </Main>
          {/* </motion.p> */}
        </Box>
        <Box>
          {/* <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton /> */}
          {/* <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman> */}

          <Main>
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </TimetableTable>
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
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </TimetableTable>
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
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Existing rows */}
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                {/* ... other existing rows ... */}
                {/* Wednesday timetable */}
                <tr>
                  <td>Year 7</td>
                  <td>Science</td>
                  <td>06.00 - 07.00 PM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>Science</td>
                  <td>07.15 - 08.15 PM</td>
                </tr>
                <tr>
                  <td>Year 11</td>
                  <td>Maths</td>
                  <td>06.00 - 07.00 PM</td>
                </tr>
                <tr>
                  <td>Year 11</td>
                  <td>Chemistry NCEA</td>
                  <td>07:15 - 08:15 PM</td>
                </tr>
                <tr>
                  <td>Year 12</td>
                  <td>English NCEA</td>
                  <td>06.00 - 07.00 PM</td>
                </tr>
                <tr>
                  <td>Year 12</td>
                  <td>Economics NCEA</td>
                  <td>07.15 - 08.15 AM</td>
                </tr>
                <tr>
                  <td>Year 13</td>
                  <td>Calculus NCEA</td>
                  <td>06.00 - 07.00 PM</td>
                </tr>
              </tbody>
            </TimetableTable>
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
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Existing rows */}
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                {/* ... other existing rows ... */}
                {/* Thursday timetable */}
                <tr>
                  <td>Year 11</td>
                  <td>English</td>
                  <td>06:00 - 7.00 PM</td>
                </tr>
                <tr>
                  <td>Year 11</td>
                  <td>Economics</td>
                  <td>07.15 - 08.15 AM</td>
                </tr>
                <tr>
                  <td>Year 13</td>
                  <td>Chemistry NCEA</td>
                  <td>06:00 - 7:00 PM</td>
                </tr>
                <tr>
                  <td>Year 12</td>
                  <td>Maths AS (Cambridge)</td>
                  <td>06.00 - 07.00 PM</td>
                </tr>
              </tbody>
            </TimetableTable>
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
            <TimetableTable>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Existing rows */}
                <tr>
                  <td>Year 8</td>
                  <td>Maths</td>
                  <td>09.30 - 10.30 AM</td>
                </tr>
                <tr>
                  <td>Year 8</td>
                  <td>English</td>
                  <td>10.45 - 11.45 AM</td>
                </tr>
                {/* ... other existing rows ... */}
                {/* Friday timetable */}
                <tr>
                  <td>Year 4&5</td>
                  <td>English</td>
                  <td>05:30 - 06:30 PM</td>
                </tr>
                <tr>
                  <td>Year 11</td>
                  <td>Accounting</td>
                  <td>05:15 - 06:15 PM</td>
                </tr>
                <tr>
                  <td>Year 13</td>
                  <td>Accounting</td>
                  <td>05:45 - 06:45 PM</td>
                </tr>
                <tr>
                  <td>Year 12</td>
                  <td>AS Accounting</td>
                  <td>07.30 - 08.30 PM</td>
                </tr>
                <tr>
                  <td>Year 12</td>
                  <td>Accounting NCEA</td>
                  <td>08.00 - 09.00 PM</td>
                </tr>
              </tbody>
            </TimetableTable>
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
        <BigTitle text="Tables" top="5%" right="5%" />
      </MainContainer>
    </ThemeProvider>
  );
};
export default WorkPage;
