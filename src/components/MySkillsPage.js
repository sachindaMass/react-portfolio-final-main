// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { lightTheme } from './Themes';
// import { Design } from './AllSvgs';

// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitlte from '../subComponents/BigTitlte';
// import { motion } from 'framer-motion';
// import Me from '../assets/Images/About-Me.jpg';

// const PageContainer = styled.div`
//   margin-top: 30px;
//   margin-left: 20px;
//   margin-right: 20px;
//   margin-bottom: 20px;
// `;

// // Create the styled components
// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: ${(props) => props.theme.pagePadding};
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   position: relative;
// `;

// const ContainerForBlue = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: ${(props) => props.theme.pagePadding};
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//   position: relative;
// `;

// const ContainerForFees = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: ${(props) => props.theme.pagePadding};
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: 20px;
//   position: relative;
// `;

// const Box = styled.div`
//   //   background-color: #f2f2f2;
//   padding: 20px;
//   //   border-radius: 4px;
//   justify-content: space-evenly;
//   align-items: center;
//   position: relative;
//   overflow: hidden;

//   .pic {
//     position: relative;
//     bottom: 0;
//     left: 50%;
//     transform: translate(-50%, 0%);
//     width: 75%;
//     height: auto;
//   }
// `;

// const Main = styled.div`
//   color: ${(props) => props.theme.text};
//   //   background-color: ${(props) => props.theme.body};
//   z-index: 3;
//   line-height: 1.5;
//   cursor: pointer;
//   font-family: 'Ubuntu Mono', monospace;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   &:hover {
//     color: ${(props) => props.theme.body};
//     background-color: ${(props) => props.theme.text};
//   }
// `;
// const Title = styled.h2`
//   justify-content: center;
//   align-items: center;
//   font-size: calc(1em + 1vw);
//   ${Main}:hover & {
//     & > * {
//       fill: ${(props) => props.theme.body};
//     }
//   }
//   & > *:first-child {
//     margin-right: 1rem;
//   }
// `;
// const Description = styled.div`
//   color: ${(props) => props.theme.text};
//   font-size: calc(0.4em + 1vw);
//   padding: 0.5rem 0;
//   ${Main}:hover & {
//     color: ${(props) => props.theme.body};
//   }
//   strong {
//     margin-bottom: 1rem;
//     text-transform: uppercase;
//   }
//   ul,
//   p {
//     margin-left: 2rem;
//   }
// `;
// const SpecialBox = styled(Box)`
//   background-color: lightblue;
//   color: white;
//   flex-basis: 100%;

//   max-width: 1000px;
//   margin: 0 auto;
//   padding: ${(props) => props.theme.pagePadding};
//   display: grid;
//   gap: 20px;
//   position: relative;

//   padding: 20px;
//   justify-content: space-evenly;
//   align-items: center;
//   overflow: hidden;
//   margin-bottom: 20px;
//   margin-right: 20px;
// `;
// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const TableHeader = styled.th`
//   border: 1px solid #000;
//   padding: 8px;
//   text-align: left;
// `;

// const TableRow = styled.tr`
//   &:nth-of-type(even) {
//     background-color: #f2f2f2;
//   }
// `;

// const TableCell = styled.td`
//   border: 1px solid #000;
//   padding: 8px;
// `;
// const FooterContainer = styled.div`
//   background-color: lightblue;
//   padding: 10px;
//   color: white;
//   text-align: center;
// `;

// const MySkillsPage = () => {
//   return (
//     <PageContainer>
//       <ThemeProvider theme={lightTheme}>
//         <Container>
//           <LogoComponent theme="light" />
//           <SocialIcons theme="light" />
//           <PowerButton />
//           {/* <ParticleComponent theme="light" /> */}
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Mission
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Royal Institute Epson (RIE) is a New Zealand government
//                   registered academic institute. Its mission is to “Assist
//                   students in the very best way to achieve their academic
//                   goals”.
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Vision
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   RIE is driven to provide excellent educational opportunities
//                   that are responsive to the needs of our students and empower
//                   them to meet and exceed challenges as active participants in
//                   shaping the future of our world.
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Goals
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>
//                       <b>Student Success: </b> Meeting student needs by creating
//                       an educational environment
//                     </li>
//                     <li>
//                       <b>Excellence: </b> Maintaining a high standard of
//                       integrity and performance
//                     </li>
//                     <li>
//                       <b>Collaboration: </b> Seeking input from all sources and
//                       respective industries.
//                     </li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Does every student learn the
//                 same way?
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Some students pick up the material quickly that the teachers
//                   are teaching, and others do not. Some students may need extra
//                   help after school, but sometimes parents’ don’t recognise that
//                   their child needs help. Actually for the students who fall a
//                   little behind or have trouble in a subject need someone to
//                   help them to come up to the expected standard.
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Tutoring is for enrichment and
//                 it's all about improvement, growth, and gaining more confidence!
//                 same way?
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Therefore, tutoring is very important in the world of
//                   academics, and certainly, there is no shame that your child
//                   may need one. No matter what subject your child needs help,
//                   whether it is Math, Science, or English, someone needs to help
//                   your child. Because not every child has the greatest capacity
//                   for all subjects. Often there are times that a child starts to
//                   learn something new in school, that they simply cannot
//                   understand it. They tend not to do the homework because they
//                   cannot figure it out. Parents often can’t help when it comes
//                   to certain subjects, so where do you turn?
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Adult learning same way?
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Adult education gives mature learners the chance to increase
//                   their knowledge, develop new skills and gain helpful
//                   qualifications and credentials. It also improves the career
//                   prospects available to them. RIE welcomes adult students to
//                   Workplace English, IELTS and General English classes.
//                 </motion.p>
//               </Description>
//             </Main>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 2 }}
//             >
//               <img className="pic" src={Me} alt="Profile Pic" />
//             </motion.div>
//           </Box>
//         </Container>
//         <SpecialBox>
//           <Main>
//             <Title>
//               <Design width={20} height={20} /> Management
//             </Title>
//             <Description>
//               <motion.p
//                 initial={{ scale: 0 }}
//                 animate={{ rotate: 360, scale: 1 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 260,
//                   damping: 20,
//                 }}
//               >
//                 RIE is managed by a qualified and experienced team. Director,
//                 Dr. Sydney Fernando worked as a Senior Advisor in the Ministry
//                 of Agriculture and Forestry in Wellington, NZ, and later joined
//                 the education sector in Auckland. He managed Educational
//                 Institutes over 13 years in Auckland and worked as a Director of
//                 Studies, Associate Principal, and as a General Manager. Thus,
//                 understand the NZ education system and experience in managing
//                 them. Further, well experienced in the NZ professional pathways.
//                 Teachers are also professionals from respective subject areas
//                 and bring the experience and current world challenges to the
//                 classroom with their own experience. In order to guide students
//                 better, parents and students are encouraged to discuss their
//                 academic pathways and subjects with tutors.
//               </motion.p>
//             </Description>
//           </Main>
//         </SpecialBox>
//         <SpecialBox>
//           <Main>
//             <Title>
//               <Design width={20} height={20} /> Some of Our Staff Members
//             </Title>
//             <Description>
//               <motion.p
//                 initial={{ scale: 0 }}
//                 animate={{ rotate: 360, scale: 1 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 260,
//                   damping: 20,
//                 }}
//               >
//                 RIE recruit professionals with teaching experience in respective
//                 subject areas. Professionals like Gayan, James, Devaki, Chintha,
//                 Milidu, Sarath, Navidu, Panchali, and others make your learning,
//                 exam practice perfect. They know where you are heading, they
//                 have gone through the same path you are just entering.
//               </motion.p>
//             </Description>
//           </Main>
//         </SpecialBox>
//         <ContainerForBlue>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Maths & Physics
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>Two Mechatronics Engineers</li>
//                     <li>Auckland university graduates</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Chemistry
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>Chemical Engineer (PhD) Auckland Uni graduate</li>
//                     <li>Auckland Uni Medical Student</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Biology
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>Researcher (PhD)</li>
//                     <li>Masters Student researching at Auckland University.</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Science
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>Graduate Teacher</li>
//                     <li>Over 20 years tutoring in Auckland</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> English
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>
//                       Experience in teaching English to people of all ages
//                     </li>
//                     <li>Accredited English tutors</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//           <SpecialBox>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Accounting & Commerce
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>University lecturer (PhD) Auckland Uni graduate</li>
//                     <li>Experience tutor</li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </SpecialBox>
//         </ContainerForBlue>
//         <ContainerForFees>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Fees
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Need to pay fees monthly, so please pay at the beginning of
//                   the month to the RIE account. All payments are through bank
//                   transfer only, if you need any assistance please talk to the
//                   management at any time.
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//         </ContainerForFees>
//         <Container>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Bank Details
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <ul>
//                     <li>
//                       <strong>Bank: </strong> ANZ
//                     </li>
//                     <li>
//                       <strong>Account Name:</strong> Royal Institute
//                     </li>
//                     <li>
//                       <strong>Account number:</strong> 01-0815-0128371-00
//                     </li>
//                   </ul>
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Details to be added in the
//                 bank payment
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   <Table>
//                     <thead>
//                       <TableRow>
//                         <TableHeader>Particulars</TableHeader>
//                         <TableHeader>Code</TableHeader>
//                         <TableHeader>Reference</TableHeader>
//                       </TableRow>
//                     </thead>
//                     <tbody>
//                       <TableRow>
//                         <TableCell>Students’ first name</TableCell>
//                         <TableCell>Class e.g., NCEA L1</TableCell>
//                         <TableCell>Paying month e.g., January</TableCell>
//                       </TableRow>
//                     </tbody>
//                   </Table>
//                 </motion.p>
//               </Description>
//             </Main>
//           </Box>
//         </Container>
//         <ContainerForFees>
//           <Box>
//             <Main>
//               <Title>
//                 <Design width={20} height={20} /> Complaints and suggestions
//                 payment
//               </Title>
//               <Description>
//                 <motion.p
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 20,
//                   }}
//                 >
//                   Please forward your complaints and suggestions to the
//                   Director, these will be highly confidential.
//                   <br></br>
//                   Sydney Fernando JP, Ph.D. (USA), Post Dip Com. (UK), BSc Ag.
//                   Honours (SL)
//                   <br></br>
//                   <a
//                     href="https://tutoring.support/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Visit Tutoring Support
//                   </a>
//                   <br></br>
//                   <a
//                     href="https://www.facebook.com/Royal-Institute-Epsom-100135454846284/?modal=admin_todo_tour"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Visit Royal Institute Epsom on Facebook
//                   </a>
//                 </motion.p>
//               </Description>
//             </Main>
//             {/* <BigTitle text="About Us" top="10%" left="5%" /> */}
//           </Box>
//           <FooterContainer>
//             <p>
//               All rights reserved by Royal Institute Epsom. Web Development by{' '}
//               <a
//                 href="https://github.com/sachindaMass"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 OneBinduwa
//               </a>
//             </p>
//           </FooterContainer>
//         </ContainerForFees>
//         <BigTitlte text="About Us" top="10%" right="10%" />
//       </ThemeProvider>
//     </PageContainer>
//   );
// };

// export default MySkillsPage;

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
