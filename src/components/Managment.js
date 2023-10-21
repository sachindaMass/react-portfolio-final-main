import React, {useEffect, useRef, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightThemeforOthers} from './Themes';
import './styles.css';
import PowerButton from '../subComponents/PowerButton';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import {motion} from 'framer-motion';
import AnchorComponent from '../subComponents/Anchor';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import {useParams} from "react-router-dom";
import axios from "axios";

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
    const [staffManagement, setstaffManagement] = useState([])
    const [staffMembers, setstaffMembers] = useState([])
    const [staffMaths, setstaffMaths] = useState([])
    const [staffChemistry, setstaffChemistry] = useState([])
    const [staffBiology, setstaffBiology] = useState([])
    const [staffScience, setstaffScience] = useState([])
    const [staffEnglish, setstaffEnglish] = useState([])
    const [staffAccount, setstaffAccount] = useState([])

    const [user, setUser] = useState({
        managementHeading: "",
        managementContent: "",
        staffMembersHeading: "",
        staffMenebersContent: "",
        mathsHeading: "",
        mathsContent: "",
        physicsContent:"",
        chemistryHeading: "",
        chemistyContent: "",
        chemistyContentTwo: "",
        bioHeading: "",
        bioContent: "",
        bioContentTwo:"",
        scienceHeading: "",
        scienceContent: "",
        scienceContentTwo:"",
        englishHeading: "",
        englishContent: "",
        englishContentTwo:"",
        accountHeading: "",
        accountContent: "",
        accountContentTwo:"",
    })
    const loadManagement = async () => {
        try {
            const response = await axios.get("http://16.170.227.60:8080/management");
            setstaffManagement(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const loadStaffMemebers = async () => {
        try {
            const response = await axios.get("http://16.170.227.60:8080/staffMembers");
            setstaffMembers(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const loadStaffMaths = async () => {
        const result = await axios.get("http://16.170.227.60:8080/mathsAndPhysic")
        setstaffMaths(result.data)
    }
    const loadStaffBiology = async () => {
        const result = await axios.get("http://16.170.227.60:8080/biology")
        setstaffBiology(result.data)
    }
    const loadStaffScience = async () => {
        const result = await axios.get("http://16.170.227.60:8080/science")
        setstaffScience(result.data)
    }
    const loadStaffEnglish = async () => {
        const result = await axios.get("http://16.170.227.60:8080/english")
        setstaffEnglish(result.data)
    }
    const loadStaffAccount = async () => {
        const result = await axios.get("http://16.170.227.60:8080/accountingAndCommerce")
        setstaffAccount(result.data)
    }

    const loadStaffChemistry = async () => {
        const result = await axios.get("http://16.170.227.60:8080/chemistry")
        setstaffChemistry(result.data)
    }
    const {id} = useParams();

    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        loadManagement();
        loadStaffMemebers();
        loadStaffMaths();
        loadStaffChemistry();
        loadStaffBiology();
        loadStaffScience();
        loadStaffEnglish();
        loadStaffAccount();


        const handleScroll = () => {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
            let diffP = (diff * 100) / (bodyHeight - windowSize);

            if (ref.current) {
                ref.current.style.transform = `translateY(${-diffP}%)`;
            }

            if (hiddenRef.current) {
                if (window.pageYOffset > 5) {
                    hiddenRef.current.style.display = 'none';
                } else {
                    hiddenRef.current.style.display = 'block';
                }
            }
        };

        // Make sure to check if ref.current and hiddenRef.current exist before accessing their properties
        if (ref.current && hiddenRef.current) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [id]);

    const numbers = 20; // Replace with your desired number of links

    return (
        <ThemeProvider theme={lightThemeforOthers}>
            <ContainerforAncor>
                <AnchorComponent number={numbers}/>
            </ContainerforAncor>
            <MainContainer>
                <Container1>
                    <LogoComponent theme="light"/>
                    <SocialIcons theme="light"/>
                    <PowerButton/>
                </Container1>
                <MiddleContainerBlue>
                    <Management>
                        <h2>
                            <u>{staffManagement.map((staffManagement, index) => (
                                <div key={index}>{staffManagement.managementHeading}</div>
                            ))}</u>
                        </h2>
                        <br></br>
                        <ParentElement
                            whileHover={{rotate: 360, scale: 1}}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <motion.p
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                {staffManagement.map((staffManagement, index) => (
                                    <div key={index}>{staffManagement.managementContent}</div>
                                ))}
                            </motion.p>

                        </ParentElement>
                        <br></br>
                    </Management>
                </MiddleContainerBlue>
                <MiddleContainerBlue>
                    <Management>
                        <h2>
                            <u>{staffMembers.map((staffMembers, index) => (
                                <div key={index}>{staffMembers.staffMembersHeading}</div>
                            ))}</u>
                        </h2>
                        <br></br>
                        <ParentElement
                            whileHover={{rotate: 360, scale: 1}}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <motion.p
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                {staffMembers.map((staffMembers, index) => (
                                <div key={index}>{staffMembers.staffMenebersContent}</div>
                                ))}
                            </motion.p>
                        </ParentElement>
                        <br></br>
                    </Management>
                </MiddleContainerBlue>
                <Management></Management>

                <Container>
                    {/* <h3>Maths & Physics</h3> */}
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <ul>
                                        {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                                        {staffMaths.map((staffMaths, index) => (
                                            <div key={index}>{staffMaths.mathsHeading}</div>
                                        ))}
                                    </ul>
                                </div>
                                <div class="flip-card-back">

                                    <ul>
                                        <li>{staffMaths.map((staffMaths, index) => (
                                            <div key={index}>{staffMaths.mathsContent}</div>
                                        ))}</li>
                                        <br></br>
                                        <li>{staffMaths.map((staffMaths, index) => (
                                            <div key={index}>{staffMaths.physicsContent}</div>
                                        ))}</li>
                                        {/*<li>Auckland university graduates</li>*/}
                                        <br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chemesitry */}
                    <br></br>
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                                    <p>{staffChemistry.map((staffChemistry, index) => (
                                        <div key={index}>{staffChemistry.chemistryHeading}</div>
                                    ))}</p>
                                </div>
                                <div class="flip-card-back">
                                    {/* <h3>Maths & Physics</h3> */}
                                    <ul>
                                        {/*<li>Chemical Engineer (PhD) Auckland Uni graduate</li>*/}
                                        <li>{staffChemistry.map((staffChemistry, index) => (
                                            <div key={index}>{staffChemistry.chemistyContent}</div>
                                        ))}</li>
                                        <br></br>
                                        {/*<li>Auckland Uni Medical Student</li>*/}
                                        <li>{staffChemistry.map((staffChemistry, index) => (
                                            <div key={index}>{staffChemistry.chemistyContentTwo}</div>
                                        ))}</li>
                                        <br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* Biology */}
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">

                                    {/*<p>Click to see Biology</p>*/}
                                    <p>{staffBiology.map((staffBiology, index) => (
                                        <div key={index}>{staffBiology.bioHeading}</div>
                                    ))}</p>
                                </div>
                                <div class="flip-card-back">

                                    <ul>
                                        {/*<li>Researcher (PhD)</li>*/}
                                        <li>{staffBiology.map((staffBiology, index) => (
                                            <div key={index}>{staffBiology.bioContent}</div>
                                        ))}</li>
                                        <br></br>
                                        {/*<li>Masters Student researching at Auckland University.</li>*/}
                                        <li>{staffBiology.map((staffBiology, index) => (
                                            <div key={index}>{staffBiology.bioContentTwo}</div>
                                        ))}</li>
                                        <br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    {/* Science */}
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    {/*<p>Click to see Science</p>*/}
                                    <p>{staffScience.map((staffScience, index) => (
                                        <div key={index}>{staffScience.scienceHeading}</div>
                                    ))}</p>
                                </div>
                                <div class="flip-card-back">

                                    <ul>
                                        {/*<li>Graduate Teacher</li>*/}
                                        <li>{staffScience.map((staffScience, index) => (
                                            <div key={index}>{staffScience.scienceContent}</div>
                                        ))}</li>
                                        <br></br>
                                        {/*<li>Over 20 years tutoring in Auckland</li>*/}
                                        <li>{staffScience.map((staffScience, index) => (
                                            <div key={index}>{staffScience.scienceContentTwo}</div>
                                        ))}</li>
                                        <br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* English */}
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">

                                    {/*<p>Click to see English</p>*/}
                                    <p>{staffEnglish.map((staffEnglish, index) => (
                                        <div key={index}>{staffEnglish.englishHeading}</div>
                                    ))}</p>
                                </div>
                                <div class="flip-card-back">
                                    {/* <h3>Maths & Physics</h3> */}
                                    <ul>
                                        {/*<li>*/}
                                        {/*    Experience in teaching English to people of all ages*/}
                                        {/*</li>*/}
                                        <li>
                                            {staffEnglish.map((staffEnglish, index) => (
                                                <div key={index}>{staffEnglish.englishContent}</div>
                                            ))}
                                        </li>
                                        <br></br>
                                        {/*<li>Accredited English tutors</li>*/}
                                        <li>{staffEnglish.map((staffEnglish, index) => (
                                            <div key={index}>{staffEnglish.englishContentTwo}</div>
                                        ))}</li>
                                        <br></br>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* Account */}
                    <div class="cards-container">
                        <div class="card-1 flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    {/* <li>Two Mechatronics Engineers</li>
                    <li>Auckland university graduates</li> */}
                                    {/*<p>Click to see Accounting & Commerce</p>*/}
                                    <p>{staffAccount.map((staffAccount, index) => (
                                        <div key={index}>{staffAccount.accountHeading}</div>
                                    ))}</p>
                                </div>

                                <div class="flip-card-back">

                                    <ul>
                                        {/*<li>University lecturer (PhD) Auckland Uni graduate</li>*/}
                                        <li>{staffAccount.map((staffAccount, index) => (
                                            <div key={index}>{staffAccount.accountContent}</div>
                                        ))}</li>
                                        <br></br>
                                        {/*<li>Experience tutor</li>*/}
                                        <li>{staffAccount.map((staffAccount, index) => (
                                            <div key={index}>{staffAccount.accountContentTwo}</div>
                                        ))}</li>
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
