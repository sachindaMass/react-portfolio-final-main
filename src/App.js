import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import SoundBar from './subComponents/SoundBar';
import AdminDashboard from './components/AdminDashboard';
import PaymentDetails from './components/PaymentDetails';
import Management from './components/Managment';

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode="wait">
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location}>
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/courses" element={<BlogPage />} />

            <Route path="/time-table" element={<WorkPage />} />

            <Route path="/intro-us" element={<MySkillsPage />} />

            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            <Route path="/payment-details" element={<PaymentDetails />} />

            <Route path="/management" element={<Management />} />
            <Route path="/admin" element={<Management />} />
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
