import React, {useEffect, useRef, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme} from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import AnchorComponent from '../subComponents/Anchor';

import {motion} from 'framer-motion';

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import BigTitle from '../subComponents/BigTitlte';
import axios from "axios";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
// const float = keyframes`
//   0% {
//     transform: translateY(-10px)
//   }
//   50% {
//     transform: translateY(15px) translateX(15px)
//   }
//   100% {
//     transform: translateY(-10px)
//   }
//
// `;

const Main = styled.div`
  border: none;
  color: black;
  padding: 2rem;
  width: 80%;
  max-width: 800px;
  height: auto;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.4rem + 1vw);
  backdrop-filter: blur(50px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    font-size: calc(0.6rem + 1vw);
  }

  @media (max-width: 576px) {
    width: 95%;
    padding: 0.5rem;
    font-size: calc(0.5rem + 1vw);
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
    hidden: {opacity: 0},
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
  text-align: center; /* Center align the table content */

  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
`;

const TableHeading = styled.th`
  font-size: 1.5rem; /* Increase font size for the table heading */
  padding: 1rem; /* Add some padding for the table heading */
`;

const WorkPage = () => {

    const [timeTableSaturday, setSaturday] = useState([])
    const [timeTableMonday, setMonday] = useState([])
    const [timeTableTuesday, setTuesday] = useState([])
    const [timeTableWednesday, setWednesday] = useState([])
    const [timeTableThursday, setThursday] = useState([])
    const [timeTableFriday, setFriday] = useState([])

    const loadSaturday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/saturday")
        setSaturday(result.data)
    }
    const loadMonday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/monday")
        setMonday(result.data)
    }
    const loadTuesday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/tuesday")
        setTuesday(result.data)
    }
    const loadWednesday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/wednesday")
        setWednesday(result.data)
    }
    const loadThursday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/thursday")
        setThursday(result.data)
    }
    const loadFriday = async () => {
        const result = await axios.get("http://16.170.227.60:8080/time-table/friday")
        setFriday(result.data)
    }

    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        loadSaturday();
        loadMonday();
        loadTuesday();
        loadWednesday();
        loadThursday();
        loadFriday();

        axios.get('/time-table/saturday/{id}')
            .then(response => {
                setSaturday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

        axios.get('/time-table/monday/{id}')
            .then(response => {
                setMonday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

        axios.get('/time-table/tuesday/{id}')
            .then(response => {
                setTuesday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

        axios.get('/time-table/wednesday/{id}')
            .then(response => {
                setWednesday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

        axios.get('/time-table/thursday/{id}')
            .then(response => {
                setThursday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

        axios.get('/time-table/friday/{id}')
            .then(response => {
                setFriday(response.data);
            })
            .catch(error => {
                console.error('Error fetching timetable data', error)
            });

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
                    transition: {duration: 0.5},
                }}
            >
                <Container>
                    <AnchorComponent number={numbers}/>
                    {/* <BigTitle text="Courses" top="5rem" left="5rem" /> */}
                </Container>
                <br/>
                <br/>
                {/*---------------------------SATURDAY TIMETABLE--------------------------*/}
                <Box>
                    <LogoComponent theme="light"/>
                    <SocialIcons theme="light"/>
                    <PowerButton/>
                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">SATURDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {timeTableSaturday.map((item, index) => (
                                <tr style={{backgroundColor: '#72cc8c'}}>
                                    {/*<td>Year 8</td>*/}
                                    {/*<td>Maths</td>*/}
                                    {/*<td>09.30 - 10.30 AM</td>*/}
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                            </tbody>
                        </TimetableTable>
                    </Main>

                </Box>
                {/*---------------------------Monday TIMETABLE--------------------------*/}
                <Box>
                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">MONDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {timeTableMonday.map((item, index) => (
                                <tr style={{backgroundColor: '#6a82bd'}}>
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                            {/* Add more rows here */}
                            </tbody>
                        </TimetableTable>
                    </Main>
                </Box>
                {/*---------------------------TUESDAY TIMETABLE--------------------------*/}
                <Box>
                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">TUESDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {timeTableTuesday.map((item, index) => (
                                <tr style={{backgroundColor: '#ad6874'}}>
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                            {/* Add more rows here */}
                            </tbody>
                        </TimetableTable>
                    </Main>
                </Box>
                {/*---------------------------WEDNESDAY TIMETABLE--------------------------*/}
                <Box>
                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">WEDNESDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Existing rows */}
                            {timeTableWednesday.map((item, index) => (
                                <tr style={{backgroundColor: '#b8a2fa'}}>
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                            </tbody>
                        </TimetableTable>
                    </Main>
                </Box>
                {/*---------------------------THURSDAY TIMETABLE--------------------------*/}
                <Box>
                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">THURSDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Existing rows */}
                            {timeTableThursday.map((item, index) => (
                                <tr style={{backgroundColor: '#eb7bed'}}>
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                            {/*</tr>*/}
                            </tbody>
                        </TimetableTable>
                    </Main>
                </Box>
                {/*---------------------------FRIDAY TIMETABLE--------------------------*/}
                <Box>

                    <Main>
                        <TimetableTable>
                            <thead>
                            <tr style={{backgroundColor: '#9ebae8'}}>
                                <TableHeading colSpan="3">FRIDAY TIMETABLE</TableHeading>
                            </tr>
                            <tr style={{backgroundColor: '#bbbd6a'}}>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Existing rows */}
                            {timeTableFriday.map((item, index) => (
                                <tr style={{backgroundColor: '#cccccc'}}>
                                    <td>{item.grade}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
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
                <BigTitle text="Tables" top="5%" right="5%"/>
            </MainContainer>
        </ThemeProvider>
    );
};
export default WorkPage;
