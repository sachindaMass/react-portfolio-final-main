import {Routes, Route, useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './components/Themes';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyles';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import SoundBar from './subComponents/SoundBar';
import PaymentDetails from './components/PaymentDetails';
import Management from './components/Managment';
import AdminNavbar from './layout/AdminNavbar';
import AddCourses from './courses/AddCourses';
import AddFees from './fees/AddFees';
import AddSATURDAY from "./TimeTable/AddSATURDAY";
import AddMONDAY from "./TimeTable/AddMONDAY";
import AddTUESDAY from "./TimeTable/AddTUESDAY";
import AddWEDNESDAY from "./TimeTable/AddWEDNESDAY";
import AddTHURSDAY from "./TimeTable/AddTHURSDAY";
import AddFRIDAY from "./TimeTable/AddFRIDAY";
import EditFees from "./fees/EditFees";
import EditFriday from "./TimeTable/EditFriday";
import EditMonday from "./TimeTable/EditMonday";
import EditSaturday from "./TimeTable/EditSaturday";
import EditTuesday from "./TimeTable/EditTuesday";
import EditWednesday from "./TimeTable/EditWednesday";
import EditThursday from "./TimeTable/EditThursday";

import AddCourseProofReading from "./courses/AddCourseProofReading";
import AddCourseEnglish from "./courses/AddCourseEnglish";
import AddCourseSpecailCourse from "./courses/AddCourseSpecailCourse";
import AddCourseStandard from "./courses/AddCourseStandard";
import AddCourseAcademic from "./courses/AddCourseAcademic";
import AddBusinessEnglish from "./courses/AddBusinessEnglish";
import AddCourseMiniEnglish from "./courses/AddCourseMiniEnglish";

import EditCourses from "./courses/EditCourses";
import EditCourseSpecailCourse from "./courses/EditCourseSpecailCourse";
import EditCourseEnglish from "./courses/EditCourseEnglish";
import EditCourseStandard from "./courses/EditCourseStandard";
import EditCourseAcademic from "./courses/EditCourseAcademic";
import EditBusinessEnglish from "./courses/EditBusinessEnglish";
import EditCourseMiniEnglish from "./courses/EditCourseMiniEnglish";
import EditCourseProofReading from "./courses/EditCourseProofReading";

import AddStaffManagment from "./StaffMembers/AddStaffManagment";
import AddStaffStaffMembers from "./StaffMembers/AddStaffStaffMembers";
import AddStaffMaths from "./StaffMembers/AddStaffMaths";
import AddStaffChemistry from "./StaffMembers/AddStaffChemistry";
import AddStaffBiology from "./StaffMembers/AddStaffBiology";
import AddStaffScience from "./StaffMembers/AddStaffScience";
import AddStaffEnglish from "./StaffMembers/AddStaffEnglish";
import AddStaffAccountAndCommerce from "./StaffMembers/AddStaffAccountAndCommerce";

import EditStaffManagement from "./StaffMembers/EditStaffManagement";
import EditStaffStaffMemebers from "./StaffMembers/EditStaffStaffMemebers";
import EditStaffMaths from "./StaffMembers/EditStaffMaths";
import EditStaffChemistry from "./StaffMembers/EditStaffChemistry";
import EditStaffBiology from "./StaffMembers/EditStaffBiology";
import EditStaffScience from "./StaffMembers/EditStaffScience";
import EditStaffEnglish from "./StaffMembers/EditStaffEnglish";
import EditStaffAccountAndCommerce from "./StaffMembers/EditStaffAccountAndCommerce";

import AddCourseEnglishCategory from "./courses/AddCourseEnglishCategory";
import AddCourseSpecialCourseCategory from "./courses/AddCourseSpecialCourseCategory";
import AddCourseStandardCategory from "./courses/AddCourseStandardCategory";
import AddCourseAcademicCategoryy from "./courses/AddCourseAcademicCategoryy";
import AddBusinessEnglishCategory from "./courses/AddBusinessEnglishCategory";
import AddCourseMiniEnglishCategory from "./courses/AddCourseMiniEnglishCategory";
import AddCourseProofReadingCategory from "./courses/AddCourseProofReadingCategory";

import ViewManagement from "./StaffMembers/ViewManagement";

import EditCourseEnglishCategory from "./courses/EditCourseEnglishCategory";
import EditCourseSpecialCourseCategory from "./courses/EditCourseSpecialCourseCategory";
import EditCourseStandardCategory from "./courses/EditCourseStandardCategory";
import EditCourseAcademicCategoryy from "./courses/EditCourseAcademicCategoryy";
import EditBusinessEnglishCategory from "./courses/EditBusinessEnglishCategory";
import EditCourseMiniEnglishCategory from "./courses/EditCourseMiniEnglishCategory";
import EditCourseProofReadingCategory from "./courses/EditCourseProofReadingCategory";
import LoginPage from "./LoginPage";
function App() {
    const location = useLocation();
    return (
        <>
            {/*<AdminNavbar/>*/}
            {/*<GlobalStyle/>*/}

            <ThemeProvider theme={lightTheme}>
                <SoundBar/>

                {/* For framer-motion animation on page change! */}
                {/* Changed prop from exitBefore to mode */}
                <AnimatePresence mode='wait'>
                    {/* Changed Switch to Routes */}

                    <Routes key={location.pathname} location={location}>
                        {/* Changed component to element */}

                        <Route path="/" element={<Main/>}/>
                        <Route path="/login-page" element={<LoginPage/>}/>

                        <Route path="/about" element={<AboutPage/>}/>

                        <Route path="/courses" element={<BlogPage/>}/>

                        {/*<Route path="/work" element={<WorkPage />} />*/}

                        <Route path="/intro-us" element={<MySkillsPage/>}/>
                        <Route path="/admin" element={<AdminNavbar/>}/>
                        <Route path="/management" element={<Management/>}/>
                        <Route path="/view-management" element={<ViewManagement/>}/>
                        <Route path="/time-table" element={<WorkPage/>}/>
                        <Route path="/payment-details" element={<PaymentDetails/>}/>

                        <Route path="/add-course" element={<AddCourses/>}/>
                        <Route path="/edit-courses/:id" element={<EditCourses/>}/>

                        <Route path="/add-course-english" element={<AddCourseEnglish/>}/>
                        <Route path="/edit-courses-english/:id" element={<EditCourseEnglish/>}/>

                        <Route path="/add-course-special-course-english" element={<AddCourseSpecailCourse/>}/>
                        <Route path="/edit-special-course/:id" element={<EditCourseSpecailCourse/>}/>

                        <Route path="/add-course-standard" element={<AddCourseStandard/>}/>
                        <Route path="/edit-standard-course/:id" element={<EditCourseStandard/>}/>

                        <Route path="/add-course-academic" element={<AddCourseAcademic/>}/>
                        <Route path="/edit-academic-course/:id" element={<EditCourseAcademic/>}/>

                        <Route path="/add-course-business" element={<AddBusinessEnglish/>}/>
                        <Route path="/edit-business-course/:id" element={<EditBusinessEnglish/>}/>

                        <Route path="/add-course-mini-English" element={<AddCourseMiniEnglish/>}/>
                        <Route path="/edit-mini-english-course/:id" element={<EditCourseMiniEnglish/>}/>

                        <Route path="/add-course-proofReading-course-english" element={<AddCourseProofReading/>}/>
                        <Route path="/edit-proofReading-course/:id" element={<EditCourseProofReading/>}/>

                        {/*-------------------------------------Categories-----------------------------------*/}

                        <Route path="/add-course-english-category" element={<AddCourseEnglishCategory/>}/>
                        <Route path="/edit-course-english-category/:id" element={<EditCourseEnglishCategory/>}/>

                        <Route path="/add-course-special-category" element={<AddCourseSpecialCourseCategory/>}/>
                        <Route path="/edit-course-special-category/:id" element={<EditCourseSpecialCourseCategory/>}/>

                        <Route path="/add-course-standard-category" element={<AddCourseStandardCategory/>}/>
                        <Route path="/edit-course-standard-category/:id" element={<EditCourseStandardCategory/>}/>

                        <Route path="/add-course-academic-category" element={<AddCourseAcademicCategoryy/>}/>
                        <Route path="/edit-course-academic-category/:id" element={<EditCourseAcademicCategoryy/>}/>

                        <Route path="/add-course-business-category" element={<AddBusinessEnglishCategory/>}/>
                        <Route path="/edit-course-business-category/:id" element={<EditBusinessEnglishCategory/>}/>

                        <Route path="/add-course-mini-english-category" element={<AddCourseMiniEnglishCategory/>}/>
                        <Route path="/edit-course-mini-english-category/:id" element={<EditCourseMiniEnglishCategory/>}/>

                        <Route path="/add-course-proofReading-category" element={<AddCourseProofReadingCategory/>}/>
                        <Route path="/edit-course-proofReading-category/:id" element={<EditCourseProofReadingCategory/>}/>


                        <Route path="/add-staff-management" element={<AddStaffManagment/>}/>
                        <Route path="/add-staff-members" element={<AddStaffStaffMembers/>}/>
                        <Route path="/add-staff-maths-and-physics" element={<AddStaffMaths/>}/>
                        <Route path="/add-staff-chemistry" element={<AddStaffChemistry/>}/>
                        <Route path="/add-staff-biology" element={<AddStaffBiology/>}/>
                        <Route path="/add-staff-science" element={<AddStaffScience/>}/>
                        <Route path="/add-staff-english" element={<AddStaffEnglish/>}/>
                        <Route path="/add-staff-account-and-commerce" element={<AddStaffAccountAndCommerce/>}/>

                        <Route path="/add-fees" element={<AddFees/>}/>

                        <Route path="/add-SATURDAY" element={<AddSATURDAY/>}/>
                        <Route path="/add-MONDAY" element={<AddMONDAY/>}/>
                        <Route path="/add-TUESDAY" element={<AddTUESDAY/>}/>
                        <Route path="/add-WEDNESDAY" element={<AddWEDNESDAY/>}/>
                        <Route path="/add-THURSDAY" element={<AddTHURSDAY/>}/>
                        <Route path="/add-FRIDAY" element={<AddFRIDAY/>}/>

                        <Route path="/edit-management/:id" element={<EditStaffManagement/>}/>
                        <Route path="/edit-staff-members/:id" element={<EditStaffStaffMemebers/>}/>
                        <Route path="/edit-staff-maths-and-physics/:id" element={<EditStaffMaths/>}/>
                        <Route path="/edit-staff-chemistry/:id" element={<EditStaffChemistry/>}/>
                        <Route path="/edit-staff-biology/:id" element={<EditStaffBiology/>}/>
                        <Route path="/edit-staff-science/:id" element={<EditStaffScience/>}/>
                        <Route path="/edit-staff-english/:id" element={<EditStaffEnglish/>}/>
                        <Route path="/edit-staff-account-and-commerce/:id" element={<EditStaffAccountAndCommerce/>}/>


                        <Route path="/edit-fees/:id" element={<EditFees/>}/>
                        <Route path="/edit-friday/:id" element={<EditFriday/>}/>
                        <Route path="/edit-course/:id" element={<EditFriday/>}/>
                        <Route path="/edit-monday/:id" element={<EditMonday/>}/>
                        <Route path="/edit-saturday/:id" element={<EditSaturday/>}/>
                        <Route path="/edit-tuesday/:id" element={<EditTuesday/>}/>
                        <Route path="/edit-wednesday/:id" element={<EditWednesday/>}/>
                        <Route path="/edit-thursday/:id" element={<EditThursday/>}/>
                        {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
                        <Route path="*" element={<Main/>}/>
                    </Routes>
                </AnimatePresence>
            </ThemeProvider>
        </>
    );
}

export default App;
