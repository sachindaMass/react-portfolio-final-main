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
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(50px);
  // background-color: lightblue;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  // font-weight: bold; /* Set font style as bold */
`;

const Main1 = styled.div`
  border: none;
  color: black; /* Set font color as white */
  padding: 2rem;
  width: 80%; /* Set width to a percentage value for responsiveness */
  max-width: 800px; /* Set a max-width for larger screens */
  height: auto;
  line-height: 1, 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(50px);
  // background-color: lightblue;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  // font-weight: bold; /* Set font style as bold */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  /* Add any additional styles for the left column */
`;

const RightColumn = styled.div`
  flex: 1;
  /* Add any additional styles for the right column */
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

const BlogPage = () => {
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

  const numbers = 20; // Replace with your desired number of links

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
        </Container>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
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
              Following are the other courses we advertised this year:
              <br></br>
              <br></br>
              We are now starting the following courses, and please send us your
              expression of interest. We will get back to you with more details:
              <br></br>
            </motion.p>
          </Main>
        </Box>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
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
              <u>
                English lessons for students aged 16+ are available for{' '}
                <span
                  style={{ textDecoration: 'underline double', color: 'blue' }}
                >
                  General English
                </span>
                ,{' '}
                <span
                  style={{
                    textDecoration: 'underline double',
                    color: '#db35c2',
                  }}
                >
                  Academic English
                </span>
                , and{' '}
                <span
                  style={{
                    textDecoration: 'underline double',
                    color: '##7e2de0',
                  }}
                >
                  Business English
                </span>
              </u>
              <br></br>
              <br></br>
              There are lessons available for all levels: beginner through to
              advanced.
              <br></br>
            </motion.p>
          </Main>
        </Box>
        <Box>
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
              <b>
                <center> Special Courses for Individual Students:</center>
              </b>
              <br></br>
              <br></br>
              <ul>
                <li>General, Academic or Business English.</li>
                <li>
                  Preparation for <strong>TOEIC, TOEFL, IELTS</strong> and{' '}
                  <strong> CAE</strong>
                </li>
              </ul>
              <br></br>
              Courses for individual students are offered at all levels:
              beginner – advanced.
              <br></br>
              They are designed to meet the student’s specific English language
              needs.
              <br></br>
              <br></br>
              <ul>
                <li>
                  A free 1-hr assessment is provided before the course begins to
                  determine these needs.
                </li>
                <br></br>
                <li>
                  A minimum of four 1.5 hour lessons is necessary to provide the
                  opportunity for noticeable achievement.
                </li>
                <br></br>
                <li>
                  The student can determine how often lessons are taken, but a
                  minimum of one lesson per week is necessary for success.
                </li>
                <br></br>
                <li> The student can choose when to begin the course.</li>
              </ul>
            </motion.p>
          </Main>
        </Box>
        <Box>
          <Main1>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <LeftColumn>
                <b>
                  <center> Standard Courses for General English</center>
                </b>
                <br></br>
                <br></br>
                The maximum number of students in a class is 4.
                <br></br>
                <br></br>
                All courses comprise listening, speaking, reading and writing
                skills, as well as grammar and punctuation, vocabulary and
                spelling.
                <br></br>
                <br></br>
                The standard courses each have 4 lessons of 1.5 hours. The
                lessons are held once a week.
                <br></br>
                <br></br>
                Prior to acceptance into a course the student will have a free
                1–hour assessment with the teacher to determine the most useful
                course for the student.
                <br></br>
                <br></br>
              </LeftColumn>
              <RightColumn>
                <strong>
                  <ul>
                    <li>General English Elementary Level 1</li>
                    <br></br>
                    <li>General English Elementary Level 2</li>
                    <br></br>
                    <li>General English Elementary Level 3</li>
                    <br></br>
                    <li>General English Intermediate Level 1</li>
                    <br></br>
                    <li>General English Intermediate Level 2</li>
                    <br></br>
                    <li>General English Intermediate Level 3</li>
                    <br></br>
                    <li>Preparation the General IELTS Examination</li>
                    <br></br>
                    <li>
                      Preparation for the Cambridge Certificate of Advanced
                      English (CAE) Exam
                    </li>
                    <br></br>
                  </ul>
                </strong>
              </RightColumn>
            </motion.p>
          </Main1>
        </Box>
        <Box>
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
              <b>
                <center>
                  Academic English for second language learners (ESL)
                </center>
              </b>
              <br></br>
              <br></br>
              Exam preparation classes for students wanting to enrol for
              universities, polytechnics or other advanced studies.
              <br></br>
              <br></br>
              Each course has four 1.5 hour lessons held once weekly
              <br></br>
              <br></br>
              <strong>
                <ul>
                  <li>Academic IELTS Writing</li>
                  <br></br>
                  <li>Academic IELTS Reading</li>
                  <br></br>
                  <li>Academic IELTS listening</li>
                  <br></br>
                  <li>Academic IELTS speaking</li>
                  <br></br>
                </ul>
              </strong>
            </motion.p>
          </Main>
        </Box>
        <Box>
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
              <b>
                <center>
                  Business English for second language learners (ESL)
                </center>
              </b>
              <br></br>
              <br></br>
              xam preparation for the TOEIC test.
              <br></br>
              <br></br>
              Each course has four 1.5 hour lessons held once weekly.
              <br></br>
              <br></br>
              <strong>
                <ul>
                  <li>TOEIC business English writing</li>
                  <br></br>
                  <li>TOEIC business English reading</li>
                  <br></br>
                  <li>TOEIC business English listening</li>
                  <br></br>
                  <li>TOEIC business English speaking</li>
                  <br></br>
                </ul>
              </strong>
            </motion.p>
          </Main>
        </Box>
        <Box>
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
              <b>
                <center>Mini English Courses</center>
              </b>
              <br></br>
              <br></br>
              Each course has four 1-hour lessons, at least one lesson a week.
              <br></br>
              <br></br>
              <ul>
                <li>1. Improve your English listening skills.</li>
                <br></br>
                <li>2. Improve your English Pronunciation.</li>
                <br></br>
                <li>3. Write an academic report.</li>
                <br></br>
                <li>4. Give an academic presentation.</li>
                <br></br>
                <li>5. Write your CV.</li>
                <br></br>
                <li>6. Practise for a job interview.</li>
                <br></br>
                <li>7. Give a business presentation.</li>
                <br></br>
                <li>8. Write business letters and emails.</li>
                <br></br>
                <li>9. Write a business report</li>
                <br></br>
              </ul>
            </motion.p>
          </Main>
        </Box>
        <Box>
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
              <b>
                <center>
                  Proofreading and Editing assistance for your writing
                </center>
              </b>
              <br></br>
              <br></br>
              Services are available for:
              <br></br>
              <br></br>
              <ul>
                <li>
                  1. Personal writings such as memoirs or creative writing.
                </li>
                <br></br>
                <li>2. Business letters and reports.</li>
                <br></br>
                <li>3. Academic dissertations and theses.</li>
                <br></br>
                <li>4. Papers for academic publications.</li>
                <br></br>
              </ul>
              <br></br>
              Note: All the teachers are well qualified and experienced Kiwi
              teachers who have been teaching all the above subjects for many
              years.
              <br></br>
              <br></br>
              All the classes are conducted online. So we can work with you to
              find a suitable time based on your convenience.
            </motion.p>
          </Main>
        </Box>
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
        <BigTitle text="Courses" top="10%" right="10%" />
      </MainContainer>
    </ThemeProvider>
  );
};
export default BlogPage;
