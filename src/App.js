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
// import WorkPage from './components/WorkPage';
import Navbar from './layout/Navbar';
import AddCourses from './courses/AddCourses';
import AddFees from './fees/AddFees';
import AddSATURDAY from "./TimeTable/AddSATURDAY";
import AddMONDAY from "./TimeTable/AddMONDAY";
import AddTUESDAY from "./TimeTable/AddTUESDAY";
import AddWEDNESDAY from "./TimeTable/AddWEDNESDAY";
import AddTHURSDAY from "./TimeTable/AddTHURSDAY";
import AddFRIDAY from "./TimeTable/AddFRIDAY";

function App() {
    const location = useLocation();
    return (
        <>
            <GlobalStyle />
            <Navbar />

            <ThemeProvider theme={lightTheme}>
                <SoundBar />

                {/* For framer-motion animation on page change! */}
                {/* Changed prop from exitBefore to mode */}
                <AnimatePresence mode='wait'>
                    {/* Changed Switch to Routes */}

                    <Routes key={location.pathname} location={location} >
                        {/* Changed component to element */}

                        <Route path="/" element={<Main />} />

                        <Route path="/about" element={<AboutPage />} />

                        <Route path="/courses" element={<BlogPage />} />

                        {/*<Route path="/work" element={<WorkPage />} />*/}

                        <Route path="/intro-us" element={<MySkillsPage />} />
                        <Route path="/admin" element={<Navbar />} />
                        <Route path="/management" element={<Management />} />
                        <Route path="/time-table" element={<WorkPage />} />
                        <Route path="/payment-details" element={<PaymentDetails />} />
                        <Route path="/add-course" element={<AddCourses />} />
                        <Route path="/add-fees" element={<AddFees />} />
                        <Route path="/add-SATURDAY" element={<AddSATURDAY />} />
                        <Route path="/add-MONDAY" element={<AddMONDAY />} />
                        <Route path="/add-TUESDAY" element={<AddTUESDAY />} />
                        <Route path="/add-WEDNESDAY" element={<AddWEDNESDAY />} />
                        <Route path="/add-THURSDAY" element={<AddTHURSDAY />} />
                        <Route path="/add-FRIDAY" element={<AddFRIDAY />} />
                        {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
                        <Route path="*" element={<Main />} />
                    </Routes>
                </AnimatePresence>
            </ThemeProvider>
        </>
    );
}

export default App;
