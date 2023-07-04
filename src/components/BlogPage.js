import React, {useRef, useEffect, useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
  line-height: 1.2;
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

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    padding: 1rem; /* Adjust padding for smaller screens */
    font-size: calc(0.5rem + 1vw); /* Adjust font size for smaller screens */
  }

  @media (max-width: 576px) {
    width: 95%; /* Adjust width for even smaller screens */
    padding: 0.5rem; /* Adjust padding for even smaller screens */
    font-size: calc(0.7rem + 1vw); /* Adjust font size for even smaller screens */
  }
`;

const Main1 = styled.div`
  border: none;
  color: black; /* Set font color as white */
  padding: 2rem;
  width: 80%; /* Set width to a percentage value for responsiveness */
  max-width: 800px; /* Set a max-width for larger screens */
  height: auto;
  line-height: 1.2;
  display: flex;
  //flex-direction: column;
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
  const { id } = useParams();
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [proof, setProof] = useState([]);
  const [proofCategory, setProofCategory] = useState([]);
  const [english, setEnglish] = useState([]);
  const [englishCategory, setEnglishCategory] = useState([]);
  const [specialCourse, setSpecialCourse] = useState([]);
  const [specialCourseCategory, setSpecialCourseCategory] = useState([]);
  const [standardCourse, setstandardCourse] = useState([]);
  const [standardCourseCategory, setstandardCourseCategory] = useState([]);
  const [academicCourse, setAcademicCourse] = useState([]);
  const [academicCourseCategory, setAcademicCourseCategory] = useState([]);
  const [businessCourse, setBusinessCourse] = useState([]);
  const [businessCourseCategory, setBusinessCourseCategory] = useState([]);
  const [miniEnglishCourse, setminiEnglishCourse] = useState([]);
  const [miniEnglishCourseCategory, setminiEnglishCourseCategory] = useState([]);

  useEffect(() => {
    loadUsers();

    loadProofReading();
    loadEnglish();
    loadSpecialCourse();
    loadStandardCourse();
    loadAcademicCourse();
    loadBusinessCourse();
    loadMiniEnglishCourse();

    loadProofReadingCategory();
    loadEnglishCategory();
    loadSpecialCourseCategory();
    loadStandardCourseCategory();
    loadAcademicCourseCategory();
    loadBusinessCourseCategory();
    loadMiniEnglishCateory();

    axios.get(`/courses/{id}`)
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/englishLesson/{id}`)
        .then(response => {
          setEnglish(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/englishLesson/category/{id}`)
        .then(response => {
          setEnglishCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/specialCourseIndvidual/{id}`)
        .then(response => {
          setSpecialCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/specialCourseIndvidual/category/{id}`)
        .then(response => {
          setSpecialCourseCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/standardCourseEnglish/{id}`)
        .then(response => {
          setstandardCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/standardCourseEnglish/category/{id}`)
        .then(response => {
          setstandardCourseCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/academicEnglishSecondLang/{id}`)
        .then(response => {
          setAcademicCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/academicEnglishSecondLang/category/{id}`)
        .then(response => {
          setAcademicCourseCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/businessEnglishSecondLang/{id}`)
        .then(response => {
          setBusinessCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/businessEnglishSecondLang/category/{id}`)
        .then(response => {
          setBusinessCourseCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/miniEnglish/{id}`)
        .then(response => {
          setminiEnglishCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/miniEnglish/category/{id}`)
        .then(response => {
          setminiEnglishCourseCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/proofReading/{id}`)
        .then(response => {
          setProof(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });

    axios.get(`/proofReading/category/{id}`)
        .then(response => {
          setProofCategory(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });


    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      if (ref.current) {
        ref.current.style.transform = `translateY(${-diffP}%)`;
      }

      if (window.pageYOffset > 5) {
        if (hiddenRef.current) {
          hiddenRef.current.style.display = 'none';
        }
      } else {
        if (hiddenRef.current) {
          hiddenRef.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // -----------------------------Course-------------------------------
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/courses")
    setUsers(result.data)
  }

  const loadProofReadingCategory = async () => {
    const result = await axios.get("http://localhost:8080/proofReading/category")
    setProofCategory(result.data)
  }

  const loadEnglishCategory = async () => {
    const result = await axios.get("http://localhost:8080/englishLesson/category")
    setEnglishCategory(result.data)
  }

  const loadSpecialCourseCategory = async () => {
    const result = await axios.get("http://localhost:8080/specialCourseIndvidual/category")
    setSpecialCourseCategory(result.data)
  }

  const loadStandardCourseCategory = async () => {
    const result = await axios.get("http://localhost:8080/standardCourseEnglish/category")
    setstandardCourseCategory(result.data)
  }

  const loadAcademicCourseCategory = async () => {
    const result = await axios.get("http://localhost:8080/academicEnglishSecondLang/category")
    setAcademicCourseCategory(result.data)
  }

  const loadBusinessCourseCategory = async () => {
    const result = await axios.get("http://localhost:8080/businessEnglishSecondLang/category")
    setBusinessCourseCategory(result.data)
  }

  const loadMiniEnglishCateory = async () => {
    const result = await axios.get("http://localhost:8080/miniEnglish/category")
    setminiEnglishCourseCategory(result.data)
  }

  const loadProofReading = async () => {
    const result = await axios.get("http://localhost:8080/proofReading")
    setProof(result.data)
  }

  const loadEnglish = async () => {
    const result = await axios.get("http://localhost:8080/englishLesson")
    setEnglish(result.data)
  }

  const loadSpecialCourse = async () => {
    const result = await axios.get("http://localhost:8080/specialCourseIndvidual")
    setSpecialCourse(result.data)
  }

  const loadAcademicCourse = async () => {
    const result = await axios.get("http://localhost:8080/academicEnglishSecondLang")
    setAcademicCourse(result.data)
  }

  const loadStandardCourse = async () => {
    const result = await axios.get("http://localhost:8080/standardCourseEnglish")
    setstandardCourse(result.data)
  }

  const loadBusinessCourse = async () => {
    const result = await axios.get("http://localhost:8080/businessEnglishSecondLang")
    setBusinessCourse(result.data)
  }

  const loadMiniEnglishCourse = async () => {
    const result = await axios.get("http://localhost:8080/miniEnglish")
    setminiEnglishCourse(result.data)
  }

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
        {/*------------------------------1st Box---------------------------*/}
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
              {users.map((item, index) => (
                  item.otherCourses
              ))}
              <br></br>
              <br></br>
              {users.map((item, index) => (
                  item.otherCoursesSecondPara
              ))}
              <br></br>
            </motion.p>
          </Main>
        </Box>
        {/*------------------------------2nd Box---------------------------*/}
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

                <b>
                  <center>{users.map((item, index) => (
                      item.englishLessons
                  ))}</center>
                </b>
              <br/>
                {/*English lessons for students aged 16+ are available for{' '}*/}
                {english.map((item, index) => (
                    item.englishLessonFirstPara
                ))}
                {/*{' '}*/}
                <ul>
                    <li>
                        <span
                            style={{ textDecoration: 'underline double', color: 'blue' }}
                        >
                  General English
                            {/*{englishCategory.map((item, index) => (*/}
                            {/*    item.englishCategory*/}
                            {/*))}*/}
                </span>
                    </li>
                    <li>
                        <span
                            style={{
                                textDecoration: 'underline double',
                                color: '#db35c2',
                            }}
                        >
                  Academic English
                            {/*{englishCategory.map((item, index) => (*/}
                            {/*    item.englishCategory*/}
                            {/*))}*/}
                </span>
                    </li>
                    <li>
                        <span
                            style={{
                                textDecoration: 'underline double',
                                color: '##7e2de0',
                            }}
                        >
                  Business English
                            {/*{englishCategory.map((item, index) => (*/}
                            {/*    item.englishCategory*/}
                            {/*))}*/}
                </span>
                    </li>
                </ul>

                {/*,{' '}*/}

                {/*, and{' '}*/}


              <br></br>
              {/*<br></br>*/}
              {/*There are lessons available for all levels: beginner through to*/}
              {/*advanced.*/}
                {english.map((item, index) => (
                    item.englishSecondPara
                ))}
              <br></br>
            </motion.p>
          </Main>
        </Box>
        {/*-----------------------------3rd Box---------------------------*/}
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
              <b>
                <center> {users.map((item, index) => (
                    item.specialCourses
                ))}</center>
              </b>
              <br></br>
              <br></br>
              <ul>
                <li>
                    {/*General, Academic or Business English.*/}
                    {specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategoryOne
                    ))}
                </li>
                <li>
                  {/*Preparation for*/}
                    {/*<strong>TOEIC, TOEFL, IELTS</strong> */}
                    {/*and*/}
                    {' '}
                  {/*<strong> CAE</strong>*/}
                    <strong>{specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategoryTwo
                    ))}</strong>
                </li>
              </ul>
              <br></br>
              {/*Courses for individual students are offered at all levels:*/}
              {/*beginner – advanced.*/}
                {specialCourse.map((item, index) => (
                    item.specialCourseIndividualFirstPara
                ))}
              <br></br>
              {/*They are designed to meet the student’s specific English language*/}
              {/*needs.*/}
                {specialCourse.map((item, index) => (
                    item.specailCourseIndividualSecondPara
                ))}
              <br></br>
              <br></br>
              <ul>
                <li>
                  {/*A free 1-hr assessment is provided before the course begins to*/}
                  {/*determine these needs.*/}
                    {specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategoryThree
                    ))}
                </li>
                <br></br>
                <li>
                  {/*A minimum of four 1.5 hour lessons is necessary to provide the*/}
                  {/*opportunity for noticeable achievement.*/}
                    {specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategoryFour
                    ))}
                </li>
                <br></br>
                <li>
                  {/*The student can determine how often lessons are taken, but a*/}
                  {/*minimum of one lesson per week is necessary for success.*/}
                    {specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategoryFive
                    ))}
                </li>
                <br></br>
                <li>
                    {/*The student can choose when to begin the course.*/}
                    {specialCourseCategory.map((item, index) => (
                        item.specialIndividualCategorySix
                    ))}
                </li>
              </ul>
            </motion.p>
          </Main1>
        </Box>
        {/*-----------------------------4th Box---------------------------*/}
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
                <br/>
                <b>
                  <center> {users.map((item, index) => (
                      item.strandardCoursesForEnglish
                  ))}</center>
                </b>
                <br></br>
                {/*The maximum number of students in a class is 4.*/}
                {standardCourse.map((item, index) => (
                    item.standardCourseEnglishFirstPara
                ))}
                <br></br>
                <br></br>
                {/*All courses comprise listening, speaking, reading and writing*/}
                {/*skills, as well as grammar and punctuation, vocabulary and*/}
                {/*spelling.*/}
                {standardCourse.map((item, index) => (
                    item.standardCourseEnglushSecondPara
                ))}
                <br></br>
                <br></br>
                {/*The standard courses each have 4 lessons of 1.5 hours. The*/}
                {/*lessons are held once a week.*/}
                {standardCourse.map((item, index) => (
                    item.standardCourseEnglishThirdPara
                ))}
                <br></br>
                <br></br>
                {/*Prior to acceptance into a course the student will have a free*/}
                {/*1–hour assessment with the teacher to determine the most useful*/}
                {/*course for the student.*/}
                {standardCourse.map((item, index) => (
                    item.standardCourseEnglishFourthPara
                ))}
                <br></br>
                <br></br>

                <strong>
                  <ul>
                    <li>
                        General English Elementary Level 1.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        General English Elementary Level 2.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        General English Elementary Level 3.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        General English Intermediate Level 1.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        General English Intermediate Level 2.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        General English Intermediate Level 3.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                        Preparation the General IELTS Examination.
                        {/*{standardCourseCategory.map((item, index) => (*/}
                        {/*    item.standardCategory*/}
                        {/*))}*/}
                    </li>
                    <br></br>
                    <li>
                      Preparation for the Cambridge Certificate of Advanced
                      English (CAE) Exam.
                      {/*  {standardCourseCategory.map((item, index) => (*/}
                      {/*      item.standardCategory*/}
                      {/*  ))}*/}
                    </li>
                    <br></br>
                  </ul>
                </strong>
            </motion.p>
          </Main1>
        </Box>
        {/*-----------------------------5th Box---------------------------*/}
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
                  {users.map((item, index) => (
                      item.academicEnglishCourses
                  ))}
                </center>
              </b>
              <br></br>
              Exam preparation classes for students wanting to enrol for
              universities, polytechnics or other advanced studies.
              {/*  {academicCourse.map((item, index) => (*/}
              {/*      item.academicEnglishSecondLangFirstPara*/}
              {/*  ))}*/}
              <br></br>
              <br></br>
              Each course has four 1.5 hour lessons held once weekly
              {/*  {academicCourse.map((item, index) => (*/}
              {/*      item.academicEnglishSecondLangSecondPara*/}
              {/*  ))}*/}
              <br></br>
              <br></br>
              <strong>
                <ul>
                  <li>
                      Academic IELTS Writing
                      {/*{academicCourseCategory.map((item, index) => (*/}
                      {/*    item.academicCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      Academic IELTS Reading
                      {/*{academicCourseCategory.map((item, index) => (*/}
                      {/*    item.academicCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      Academic IELTS listening
                      {/*{academicCourseCategory.map((item, index) => (*/}
                      {/*    item.academicCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      Academic IELTS speaking
                      {/*{academicCourseCategory.map((item, index) => (*/}
                      {/*    item.academicCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                </ul>
              </strong>
            </motion.p>
          </Main>
        </Box>
        {/*-----------------------------6th Box---------------------------*/}
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
                  {users.map((item, index) => (
                      item.bussinesEnglishCourses
                  ))}
                </center>
              </b>
              <br></br>
              <br></br>
              {/*Exam preparation for the TOEIC test.*/}
                {businessCourse.map((item, index) => (
                    item.businessEnglishSecondLangFirstPara
                ))}
              <br></br>
              <br></br>
              {/*Each course has four 1.5 hour lessons held once weekly.*/}
                {businessCourse.map((item, index) => (
                    item.businessEnglishSecondLangSecondPara
                ))}
              <br></br>
              <br></br>
              <strong>
                <ul>
                  <li>
                      TOEIC business English writing
                      {/*{businessCourseCategory.map((item, index) => (*/}
                      {/*    item.businessCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      TOEIC business English reading
                      {/*{businessCourseCategory.map((item, index) => (*/}
                      {/*    item.businessCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      TOEIC business English listening
                      {/*{businessCourseCategory.map((item, index) => (*/}
                      {/*    item.businessCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                  <li>
                      TOEIC business English speaking
                      {/*{businessCourseCategory.map((item, index) => (*/}
                      {/*    item.businessCategory*/}
                      {/*))}*/}
                  </li>
                  <br></br>
                </ul>
              </strong>
            </motion.p>
          </Main>
        </Box>
        {/*-----------------------------7th Box---------------------------*/}
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
                <center>{users.map((item, index) => (
                    item.miniEnglishCourses
                ))}</center>
              </b>
              <br></br>
              <br></br>
              {/*Each course has four 1-hour lessons, at least one lesson a week.*/}
                {miniEnglishCourse.map((item, index) => (
                    item.miniEnglishFirstPara
                ))}
              <br></br>
              <br></br>
              <ul>
                <li>
                    1. Improve your English listening skills.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    2. Improve your English Pronunciation.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    3. Write an academic report.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    4. Give an academic presentation.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    5. Write your CV.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    6. Practise for a job interview.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    7. Give a business presentation.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    8. Write business letters and emails.
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    9. Write a business report
                    {/*{miniEnglishCourseCategory.map((item, index) => (*/}
                    {/*    item.miniEnglishCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
              </ul>
            </motion.p>
          </Main>
        </Box>
        {/*-----------------------------8th Box---------------------------*/}
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
                  {users.map((item, index) => (
                      item.proofReadingAndEditing
                  ))}
                </center>
              </b>
              <br></br>
              <br></br>
              {/*Services are available for:*/}
                {proof.map((item, index) => (
                    item.proofReadingFirstPara
                ))}
              <br></br>
              <br></br>
              <ul>
                <li>
                  1. Personal writings such as memoirs or creative writing.
                  {/*  {proofCategory.map((item, index) => (*/}
                  {/*      item.proofReadingCategory*/}
                  {/*  ))}*/}
                </li>
                <br></br>
                <li>
                    2. Business letters and reports.
                    {/*{proofCategory.map((item, index) => (*/}
                    {/*    item.proofReadingCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    3. Academic dissertations and theses.
                    {/*{proofCategory.map((item, index) => (*/}
                    {/*    item.proofReadingCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
                <li>
                    4. Papers for academic publications.
                    {/*{proofCategory.map((item, index) => (*/}
                    {/*    item.proofReadingCategory*/}
                    {/*))}*/}
                </li>
                <br></br>
              </ul>
              <br></br>
              {/*Note: All the teachers are well qualified and experienced Kiwi*/}
              {/*teachers who have been teaching all the above subjects for many*/}
              {/*years.*/}
                {proof.map((item, index) => (
                    item.proofReadingSecondPara
                ))}
              <br></br>
              <br></br>
              {/*All the classes are conducted online. So we can work with you to*/}
              {/*find a suitable time based on your convenience.*/}
                {proof.map((item, index) => (
                    item.proofReadingThridPara
                ))}
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
