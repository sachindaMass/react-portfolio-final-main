import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const AdminNavbar = () => {

    const [users, setUsers] = useState([])
    const [proof, setProof] = useState([])
    const [proofCategory, setProofCategory] = useState([])
    const [english, setEnglish] = useState([])
    const [englishCategory, setEnglishCategory] = useState([])
    const [specialCourse, setSpecialCourse] = useState([])
    const [specialCourseCategory, setSpecialCourseCategory] = useState([])
    const [standardCourse, setstandardCourse] = useState([])
    const [standardCourseCategory, setstandardCourseCategory] = useState([])
    const [academicCourse, setAcademicCourse] = useState([])
    const [academicCourseCategory, setAcademicCourseCategory] = useState([])
    const [businessCourse, setBusinessCourse] = useState([])
    const [businessCourseCategory, setBusinessCourseCategory] = useState([])
    const [miniEnglishCourse, setminiEnglishCourse] = useState([])
    const [miniEnglishCourseCategory, setminiEnglishCourseCategory] = useState([])

    const [staffManagement, setstaffManagement] = useState([])
    const [staffMembers, setstaffMembers] = useState([])
    const [staffMaths, setstaffMaths] = useState([])
    const [staffChemistry, setstaffChemistry] = useState([])
    const [staffBiology, setstaffBiology] = useState([])
    const [staffScience, setstaffScience] = useState([])
    const [staffEnglish, setstaffEnglish] = useState([])
    const [staffAccount, setstaffAccount] = useState([])

    const [fees, setFees] = useState([])

    const [timeTableSaturday, setSaturday] = useState([])
    const [timeTableMonday, setMonday] = useState([])
    const [timeTableTuesday, setTuesday] = useState([])
    const [timeTableWednesday, setWednesday] = useState([])
    const [timeTableThursday, setThursday] = useState([])
    const [timeTableFriday, setFriday] = useState([])

    const [isDeleted, setIsDeleted] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();

        loadFees();

        loadSaturday();
        loadMonday();
        loadTuesday();
        loadWednesday();
        loadThursday();
        loadFriday();

        loadProofReading();
        loadEnglish();
        loadSpecialCourse();
        loadStandardCourse();
        loadAcademicCourse();
        loadBusinessCourse();
        loadMiniEnglishCourse();


        loadStaffManagement();
        loadStaffMemebers();
        loadStaffMaths();
        loadStaffChemistry();
        loadStaffBiology();
        loadStaffScience();
        loadStaffEnglish();
        loadStaffAccount();

        loadProofReadingCategory();
        loadEnglishCategory();
        loadSpecialCourseCategory();
        loadStandardCourseCategory();
        loadAcademicCourseCategory();
        loadBusinessCourseCategory();
        loadMiniEnglishCateory();
    }, []);

    // -----------------------------Course-------------------------------
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
// ------------------------Staff-------------------------------------
    const loadStaffManagement = async () => {
        const result = await axios.get("http://localhost:8080/management")
        setstaffManagement(result.data)
    }

    const loadStaffMemebers = async () => {
        const result = await axios.get("http://localhost:8080/staffMembers")
        setstaffMembers(result.data)
    }
    const loadStaffMaths = async () => {
        const result = await axios.get("http://localhost:8080/mathsAndPhysic")
        setstaffMaths(result.data)
    }
    const loadStaffChemistry = async () => {
        const result = await axios.get("http://localhost:8080/chemistry")
        setstaffChemistry(result.data)
    }
    const loadStaffBiology = async () => {
        const result = await axios.get("http://localhost:8080/biology")
        setstaffBiology(result.data)
    }
    const loadStaffScience = async () => {
        const result = await axios.get("http://localhost:8080/science")
        setstaffScience(result.data)
    }
    const loadStaffEnglish = async () => {
        const result = await axios.get("http://localhost:8080/english")
        setstaffEnglish(result.data)
    }
    const loadStaffAccount = async () => {
        const result = await axios.get("http://localhost:8080/accountingAndCommerce")
        setstaffAccount(result.data)
    }

    const deleteEnglsih = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/englishLesson/${id}`)
                loadEnglish()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadEnglish()
            }
        }
    }
    const deleteEnglsihCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/englishLesson/category/${id}`)
                loadEnglishCategory()
            } catch (error) {
                console.error('Error deleting english category:', error);
                loadEnglishCategory()
            }
        }
    }

    const deleteSpecialCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/specialCourseIndvidual/${id}`)
                loadSpecialCourse()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadSpecialCourse()
            }
        }
    }
    const deleteSpecialCourseCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/specialCourseIndvidual/category/${id}`)
                loadSpecialCourseCategory()
            } catch (error) {
                console.error('Error deleting special category:', error);
                loadSpecialCourseCategory()
            }
        }
    }

    const deleteStandardCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/standardCourseEnglish/${id}`)
                loadStandardCourse()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStandardCourse()
            }
        }
    }
    const deleteStandardCourseCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/standardCourseEnglish/category/${id}`)
                loadStandardCourseCategory()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStandardCourseCategory()
            }
        }
    }

    const deleteAcademicCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/academicEnglishSecondLang/${id}`)
                loadAcademicCourse()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadAcademicCourse()
            }
        }
    }
    const deleteAcademicCourseCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/academicEnglishSecondLang/category/${id}`)
                loadAcademicCourseCategory()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadAcademicCourseCategory()
            }
        }
    }

    const deleteBusinessCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/businessEnglishSecondLang/${id}`)
                loadBusinessCourse()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadBusinessCourse()
            }
        }
    }
    const deleteBusinessCourseCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/businessEnglishSecondLang/category/${id}`)
                loadBusinessCourseCategory()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadBusinessCourseCategory()
            }
        }
    }

    const deleteMiniEnglishCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/miniEnglish/${id}`)
                loadMiniEnglishCourse()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadMiniEnglishCourse()
            }
        }
    }
    const deleteMiniEnglishCourseCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/miniEnglish/category/${id}`)
                loadMiniEnglishCateory()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadMiniEnglishCateory()
            }
        }
    }

    const deleteProofReading = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/proofReading/${id}`)
                loadProofReading()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadProofReading()
            }
        }
    }
    const deleteProofReadingCategory = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/proofReading/category/${id}`)
                loadProofReading()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadProofReading()
            }
        }
    }

    const deleteStaffManagement = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/management/${id}`)
                loadStaffManagement()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffManagement()
            }
        }
    }
    const deleteStaffMembers = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/staffMembers/${id}`)
                loadStaffMemebers()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffMemebers()
            }
        }
    }
    const deleteStaffMaths = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/mathsAndPhysic/${id}`)
                loadStaffMemebers()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffMemebers()
            }
        }
    }
    const deleteStaffChemistry = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/chemistry/${id}`)
                loadStaffChemistry()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffChemistry()
            }
        }
    }
    const deleteStaffBiology = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/biology/${id}`)
                loadStaffBiology()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffBiology()
            }
        }
    }
    const deleteStaffScience = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/science/${id}`)
                loadStaffScience()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffScience()
            }
        }
    }
    const deleteStaffEnglish = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/english/${id}`)
                loadStaffEnglish()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffEnglish()
            }
        }
    }
    const deleteStaffAccount = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/accountingAndCommerce/${id}`)
                loadStaffAccount()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadStaffAccount()
            }
        }
    }

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/courses")
        setUsers(result.data)
    }

    const deleteCourse = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/courses/${id}`)
                loadUsers()
            } catch (error) {
                console.error('Error deleting course:', error);
                loadUsers()
            }
        }
    }

    const loadFees = async () => {
        const result = await axios.get("http://localhost:8080/fees")
        setFees(result.data)
    }

    const deleteFees = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/fees/${id}`)
                loadFees()
            } catch (error) {
                console.error('Error deleting fees:', error);
                loadFees()
            }
        }

    }
    const loadSaturday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/saturday")
        setSaturday(result.data)
    }

    const deleteSaturday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/saturday/${id}`)
                loadSaturday()
            } catch (error) {
                console.error('Error deleting saturday:', error);
                loadSaturday()
            }
        }

    }
    const loadMonday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/monday")
        setMonday(result.data)
    }

    const deleteMonday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/monday/${id}`)
                loadMonday()
            } catch (error) {
                console.error('Error deleting monday:', error);
                loadMonday()
            }
        }
    }

    const loadTuesday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/tuesday")
        setTuesday(result.data)
    }

    const deleteTuesday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/tuesday/${id}`)
                loadTuesday()
            } catch (error) {
                console.error('Error deleting tuesday:', error);
                loadTuesday()
            }
        }
    }
    const loadWednesday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/wednesday")
        setWednesday(result.data)
    }

    const deleteWednesday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/wednesday/${id}`)
                loadWednesday()
            } catch (error) {
                console.error('Error deleting wednesday:', error);
                loadWednesday()
            }
        }
    }
    const loadThursday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/thursday")
        setThursday(result.data)
    }

    const deleteThursday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/thursday/${id}`)
                loadThursday()
            } catch (error) {
                console.error('Error deleting thursday:', error);
                loadThursday()
            }
        }
    }
    const loadFriday = async () => {
        const result = await axios.get("http://localhost:8080/time-table/friday")
        setFriday(result.data)
    }
    const deleteFriday = async (id) => {
        const confirmed = window.confirm('Are you sure want to delete this field?');
        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/time-table/friday/${id}`)
                loadFriday()
            } catch (error) {
                console.error('Error deleting friday:', error);
                loadFriday()
            }
        }

    }
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
                <Link className="navbar-brand" to="#">&nbsp;&nbsp;&nbsp;&nbsp;Admin</Link>
                <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <NavDropdown title="&nbsp;&nbsp;&nbsp;&nbsp;Add Course" id="addCourseDropdown">
                            <NavDropdown.Item as={Link} to="/add-course">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Headers Details
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-english">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course English
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-english-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course English Category*/}
                            {/*</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/add-course-special-course-english">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Special Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-special-category">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Special Course Category
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-standard">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Standard Course
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-standard-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course Standard Course Category*/}
                            {/*</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/add-course-academic">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Academic Course
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-academic-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course Academic Course Category*/}
                            {/*</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/add-course-business">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course Business Course
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-business-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course Business Course Category*/}
                            {/*</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/add-course-mini-English">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course mini Course
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-mini-english-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course mini Course Category*/}
                            {/*</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/add-course-proofReading-course-english">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Course proofreading Course
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/add-course-proofReading-category">*/}
                            {/*    &nbsp;&nbsp;&nbsp;&nbsp;Add Course proofreading Course Category*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                        <NavDropdown title="&nbsp;&nbsp;&nbsp;&nbsp;Add Staff Members" id="addStaffDropDown">
                            <NavDropdown.Item as={Link} to="/add-staff-management">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff management
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-members">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff members
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-maths-and-physics">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff maths and physics
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-chemistry">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff chemistry
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-biology">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff biology
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-science">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff science
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-english">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff english
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-account-and-commerce">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add Staff account and commerce
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="&nbsp;&nbsp;&nbsp;&nbsp;Time Table" id="timeTableDropdown">
                            <NavDropdown.Item as={Link} to="/add-SATURDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add SATURDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-MONDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add MONDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-TUESDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add TUESDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-WEDNESDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add WEDNESDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-THURSDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add THURSDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-FRIDAY">
                                &nbsp;&nbsp;&nbsp;&nbsp;Add FRIDAY Time Table
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/add-fees">&nbsp;&nbsp;&nbsp;&nbsp;Add Fees Details</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Link className="navbar-brand" to="/">&nbsp;&nbsp;&nbsp;&nbsp;Log Out</Link>
            </Navbar>

            <br/>
            <br/>
            {/*------------------------------- Course Details Table -------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Course Details Headers Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">other Courses</th>
                                <th scope="col">other Courses SecondPara</th>
                                <th scope="col">english Lessons</th>
                                <th scope="col">special Courses</th>
                                <th scope="col">standard Courses For English</th>
                                <th scope="col">academic English Courses</th>
                                <th scope="col">business English Courses</th>
                                <th scope="col">mini English Courses</th>
                                <th scope="col">proof Reading And Editing</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{user.otherCourses}</td>
                                        <td>{user.otherCoursesSecondPara}</td>
                                        <td>{user.englishLessons}</td>
                                        <td>{user.specialCourses}</td>
                                        <td>{user.strandardCoursesForEnglish}</td>
                                        <td>{user.academicEnglishCourses}</td>
                                        <td>{user.bussinesEnglishCourses}</td>
                                        <td>{user.miniEnglishCourses}</td>
                                        <td>{user.proofReadingAndEditing}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View Courses</Link>
                                            {/*<button className="btn btn-secondary mx-2">Edit Course</button>*/}
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-courses/${user.id}`}
                                            >Edit Course</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Course deleted successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteCourse(user.id)}
                                                >
                                                    Delete Course
                                                </button>
                                            )}
                                        </td>

                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*---------------------------------- Course Details For English ---------------------------------*/}
            <div className='container'>
                <br/>
                <b>Course English lesson for aged 16+ Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">english Lesson First Para</th>
                                <th scope="col">english Second Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                english.map((englishs, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{englishs.englishLessonFirstPara}</td>
                                        <td>{englishs.englishSecondPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                English Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-courses-english/${englishs.id}`}
                                            >Edit Course English</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">English Course deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteEnglsih(english.id)}
                                                >
                                                    Delete ProofReading
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*---------------------------------- Course Details For English Category ---------------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>Course English lesson for aged 16+ Category Table </b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">englishCategory</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    englishCategory.map((englishCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{englishCategory.englishCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    English Course Category</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-english-category/${englishCategory.id}`}*/}
            {/*                                >Edit Course English Category</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">English Course deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteEnglsihCategory(englishCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete Course English Category*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*----------------------------------- Course Details For Special -----------------------------------*/}
            <div className='container'>
                <br/>
                <b>Course Details For Special Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">special Course Individual First Para</th>
                                <th scope="col">special Course Individual Second Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                specialCourse.map((specialCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{specialCourses.specialCourseIndividualFirstPara}</td>
                                        <td>{specialCourses.specailCourseIndividualSecondPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Special Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-special-course/${specialCourses.id}`}
                                            >Edit Special Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Special Course deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteSpecialCourse(specialCourses.id)}
                                                >
                                                    Delete Special Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*---------------------------------- Course Details For Special Category ---------------------------------*/}
            <div className='container'>
                <br/>
                <b>Course Details For Special Category Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Special Individual Category One</th>
                                <th scope="col">Special Individual Category Two</th>
                                <th scope="col">Special Individual Category Three</th>
                                <th scope="col">Special Individual Category Four</th>
                                <th scope="col">Special Individual Category Six</th>
                                <th scope="col">Special Individual Category </th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                specialCourseCategory.map((specialCourseCategory, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{specialCourseCategory.specialIndividualCategoryOne}</td>
                                        <td>{specialCourseCategory.specialIndividualCategoryTwo}</td>
                                        <td>{specialCourseCategory.specialIndividualCategoryThree}</td>
                                        <td>{specialCourseCategory.specialIndividualCategoryFour}</td>
                                        <td>{specialCourseCategory.specialIndividualCategoryFive}</td>
                                        <td>{specialCourseCategory.specialIndividualCategoryFive}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Special Course Category</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-course-special-category/${specialCourseCategory.id}`}
                                            >Edit Special Courses Category</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Special Course deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteSpecialCourseCategory(specialCourseCategory.id)}
                                                >
                                                    Delete Special Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*------------------------------------ Course Details For Standard Courses --------------------------*/}
            <div className='container'>
                <br/>
                <b>Standard Courses for General English Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">standard Course English First Para</th>
                                <th scope="col">standard Course English Second Para</th>
                                <th scope="col">standard Course English Third Para</th>
                                <th scope="col">standard Course English Fourth Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                standardCourse.map((standardCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{standardCourses.standardCourseEnglishFirstPara}</td>
                                        <td>{standardCourses.standardCourseEnglushSecondPara}</td>
                                        <td>{standardCourses.standardCourseEnglishThirdPara}</td>
                                        <td>{standardCourses.standardCourseEnglishFourthPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Standard Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-standard-course/${standardCourses.id}`}
                                            >Edit Standard Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Standard Course deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStandardCourse(standardCourses.id)}
                                                >
                                                    Delete Standard Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*------------------------------------ Course Details For Standard Courses category --------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>Standard Courses for General English Category Table</b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">Standard Category</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    standardCourseCategory.map((standardCourseCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{standardCourseCategory.standardCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    Standard Course Category</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-standard-category/${standardCourseCategory.id}`}*/}
            {/*                                >Edit Standard Courses</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">Standard Course deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteStandardCourseCategory(standardCourseCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete Standard Course*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*----------------------------------------- Course Details for Academic Course --------------------------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Academic Course for General English Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">academic English Second Lang First Para</th>
                                <th scope="col">academic English Second Lang Second Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                academicCourse.map((academicCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{academicCourses.academicEnglishSecondLangFirstPara}</td>
                                        <td>{academicCourses.academicEnglishSecondLangSecondPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Academic Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-academic-course/${academicCourses.id}`}
                                            >Edit Academic Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Academic deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteAcademicCourse(academicCourses.id)}
                                                >
                                                    Delete Academic Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*----------------------------------------- Course Details for Academic Category Course --------------------------------------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>Academic Course for General English Category Table</b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">Academic Category</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    academicCourseCategory.map((academicCourseCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{academicCourseCategory.academicCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    Academic Course</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-academic-category/${academicCourseCategory.id}`}*/}
            {/*                                >Edit Academic Courses</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">Academic deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteAcademicCourseCategory(academicCourseCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete Academic Course*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*--------------------------------------------- Course Details for business Course -----------------------------------*/}
            <div className='container'>
                <br/>
                <b>business Course for business English Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">business English Second Lang First Para</th>
                                <th scope="col">business English Second Lang Second Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                businessCourse.map((businessCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{businessCourses.businessEnglishSecondLangFirstPara}</td>
                                        <td>{businessCourses.businessEnglishSecondLangSecondPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Business Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-business-course/${businessCourses.id}`}
                                            >Edit Business Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Business deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteBusinessCourse(businessCourses.id)}
                                                >
                                                    Delete Business Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*--------------------------------------------- Course Details for business Category Course -----------------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>business Course for business English Table</b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">Business Category</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    businessCourseCategory.map((businessCourseCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{businessCourseCategory.businessCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    Business Course</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-business-category/${businessCourseCategory.id}`}*/}
            {/*                                >Edit Business Courses</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">Business deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteBusinessCourseCategory(businessCourseCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete Business Course*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*-------------------------------------------- Course Details For Mini English Course-------------------------*/}
            <div className='container'>
                <br/>
                <b>Mini English Courses For mini English Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">mini English First Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                miniEnglishCourse.map((miniEnglishCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{miniEnglishCourses.miniEnglishFirstPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                Mini English Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-mini-english-course/${miniEnglishCourses.id}`}
                                            >Edit Mini English Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Mini English deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteMiniEnglishCourse(miniEnglishCourses.id)}
                                                >
                                                    Delete Mini English Course
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*-------------------------------------------- Course Details For Mini English Category-------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>Mini English Courses Category For mini English Table</b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">Mini English Category</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    miniEnglishCourseCategory.map((miniEnglishCourseCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{miniEnglishCourseCategory.miniEnglishCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    Mini English Course</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-mini-english-category/${miniEnglishCourseCategory.id}`}*/}
            {/*                                >Edit Mini English Courses</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">Mini English deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteMiniEnglishCourseCategory(miniEnglishCourseCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete Mini English Course*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*------------------------------------- Course Details For Proof Reading -----------------------------*/}
            <div className='container'>
                <br/>
                <b>Course ProofReading Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">proof Reading FirstPara</th>
                                <th scope="col">proof Reading SecondPara</th>
                                <th scope="col">proof Reading Third Para</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                proof.map((proof, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{proof.proofReadingFirstPara}</td>
                                        <td>{proof.proofReadingSecondPara}</td>
                                        <td>{proof.proofReadingThridPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                ProofReading</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-proofReading-course/${proof.id}`}
                                            >Edit ProofReading Courses</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">ProofReading deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteProofReading(proof.id)}
                                                >
                                                    Delete ProofReading
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*------------------------------------- Course Details For Proof Reading Category -----------------------------*/}
            {/*<div className='container'>*/}
            {/*    <br/>*/}
            {/*    <b>Course ProofReading Category Table</b>*/}
            {/*    <div className='py-4'>*/}
            {/*        <div className='table-responsive'>*/}
            {/*            <table className="table border shadow">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th scope="col">#</th>*/}
            {/*                    <th scope="col">Proof Reading Category</th>*/}
            {/*                    <th scope="col">Action</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                {*/}
            {/*                    proofCategory.map((proofCategory, index) => (*/}
            {/*                        <tr>*/}
            {/*                            <th scope="row" key={index}>{index + 1}</th>*/}
            {/*                            <td>{proofCategory.proofReadingCategory}</td>*/}
            {/*                            <td>*/}
            {/*                                <Link to="/courses" className="btn btn-primary mx-2">View*/}
            {/*                                    ProofReading</Link>*/}
            {/*                                <Link className="btn btn-secondary mx-2"*/}
            {/*                                      to={`/edit-course-proofReading-category/${proofCategory.id}`}*/}
            {/*                                >Edit ProofReading Courses</Link>*/}
            {/*                                {isDeleted ? (*/}
            {/*                                    <div className="alert alert-success">ProofReading deleted*/}
            {/*                                        successfully!</div>*/}
            {/*                                ) : (*/}
            {/*                                    <button*/}
            {/*                                        className="btn btn-danger mx-2"*/}
            {/*                                        onClick={() => deleteProofReadingCategory(proofCategory.id)}*/}
            {/*                                    >*/}
            {/*                                        Delete ProofReading*/}
            {/*                                    </button>*/}
            {/*                                )}*/}
            {/*                            </td>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
            {/*----------------------------------- staff Management ----------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Management Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">management Heading</th>
                                <th scope="col">management Content</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffManagement.map((staffManagements, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffManagements.managementHeading}</td>
                                        <td>{staffManagements.managementContent}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-management/${staffManagements.id}`}
                                            >Edit Staff Management</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Staff Management deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffManagement(staffManagements.id)}
                                                >
                                                    Delete Staff Management
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*---------------------------------------- staffStaffMembers-----------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Members Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">staff Members Heading</th>
                                <th scope="col">staff Members Content</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffMembers.map((staffMember, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffMember.staffMembersHeading}</td>
                                        <td>{staffMember.staffMenebersContent}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-members/${staffMember.id}`}
                                            >Edit Staff Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Staff Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffMembers(staffMember.id)}
                                                >
                                                    Delete Staff Members
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*------------------------------------------ StaffMaths -------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Maths Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">maths And Physics Heading</th>
                                <th scope="col">maths And Physics Content</th>
                                <th scope="col">maths And Physics Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffMaths.map((staffMath, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffMath.mathsHeading}</td>
                                        <td>{staffMath.mathsContent}</td>
                                        <td>{staffMath.physicsContent}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-maths-and-physics/${staffMath.id}`}
                                            >Edit Maths And physic Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Maths Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffMaths(staffMath.id)}
                                                >
                                                    Delete Staff Maths
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*-----------------------------------------StaffChemistry----------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Chemistry Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">chemistry Heading</th>
                                <th scope="col">chemisty Content</th>
                                <th scope="col">chemisty Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffChemistry.map((staffChemistrys, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffChemistrys.chemistryHeading}</td>
                                        <td>{staffChemistrys.chemistryHeading}</td>
                                        <td>{staffChemistrys.chemistyContentTwo}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-chemistry/${staffChemistrys.id}`}
                                            >Edit Chemistry Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Chemistry Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffChemistry(staffChemistrys.id)}
                                                >
                                                    Delete Staff Chemistry
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*----------------------------------------StaffBiology------------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Biology Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">bio Heading</th>
                                <th scope="col">bio Content</th>
                                <th scope="col">bio Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffBiology.map((staffBiologys, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffBiologys.bioHeading}</td>
                                        <td>{staffBiologys.bioContent}</td>
                                        <td>{staffBiologys.bioContentTwo}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-biology/${staffBiologys.id}`}
                                            >Edit Biology Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Biology Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffBiology(staffBiologys.id)}
                                                >
                                                    Delete Staff Biology
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*-------------------------------------------StaffScience------------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Science Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">science Heading</th>
                                <th scope="col">science Content</th>
                                <th scope="col">science Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffScience.map((staffSciences, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffSciences.scienceHeading}</td>
                                        <td>{staffSciences.scienceContent}</td>
                                        <td>{staffSciences.scienceContentTwo}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-science/${staffSciences.id}`}
                                            >Edit Science Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Science Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffScience(staffSciences.id)}
                                                >
                                                    Delete Staff Biology
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*-------------------------------------------------StaffEnglish----------------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff English Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">english Heading</th>
                                <th scope="col">english Content</th>
                                <th scope="col">english Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffEnglish.map((staffEnglish, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffEnglish.englishHeading}</td>
                                        <td>{staffEnglish.englishContent}</td>
                                        <td>{staffEnglish.englishContentTwo}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-english/${staffEnglish.id}`}
                                            >Edit English Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">English Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffEnglish(staffEnglish.id)}
                                                >
                                                    Delete Staff English
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*----------------------------------------------staffAccountAndCommerce--------------------------*/}
            <div className='container'>
                <br/>
                <b>Staff Account And Commerce Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">account Heading</th>
                                <th scope="col">account Content</th>
                                <th scope="col">account Content Two</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                staffAccount.map((staffAccounts, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{staffAccounts.accountHeading}</td>
                                        <td>{staffAccounts.accountContent}</td>
                                        <td>{staffAccounts.accountContentTwo}</td>
                                        <td>
                                            <Link to="/management" className="btn btn-primary mx-2">View
                                                Our Staff</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-staff-account-and-commerce/${staffAccounts.id}`}
                                            >Edit Account and Commerce Members</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Account and Commerce Members deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteStaffAccount(staffAccounts.id)}
                                                >
                                                    Delete Staff Account and Commerce
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*-------------------------------------------- Fees Table ------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Fees Table</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">fees</th>
                                <th scope="col">bank</th>
                                <th scope="col">bankName</th>
                                <th scope="col">accountNumber</th>
                                <th scope="col">particular</th>
                                <th scope="col">code</th>
                                <th scope="col">reference</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                fees.map((fee, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{fee.fees}</td>
                                        <td>{fee.bank}</td>
                                        <td>{fee.bankName}</td>
                                        <td>{fee.accountNumber}</td>
                                        <td>{fee.particular}</td>
                                        <td>{fee.code}</td>
                                        <td>{fee.reference}</td>
                                        <td>
                                            <Link to="/payment-details" className="btn btn-primary mx-2">View
                                                Fees</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-fees/${fee.id}`}
                                            >Edit Fees</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Fee deleted successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteFees(fee.id)}
                                                >
                                                    Delete Fees
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            {/*------------------------------ SATURDAY -----------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>SATURDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableSaturday.map((saturday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{saturday.grade}</td>
                                        <td>{saturday.subject}</td>
                                        <td>{saturday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View SATURDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-saturday/${saturday.id}`}
                                            >Edit Saturday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Saturday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteSaturday(saturday.id)}
                                                >
                                                    Delete Saturday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*------------------------------ MONDAY -----------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>MONDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableMonday.map((monday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{monday.grade}</td>
                                        <td>{monday.subject}</td>
                                        <td>{monday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View MONDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-monday/${monday.id}`}
                                            >Edit Monday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Monday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteMonday(monday.id)}
                                                >
                                                    Delete Monday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*----------------------------------- TUESDAY -----------------------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>TUESDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableTuesday.map((tuesday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{tuesday.grade}</td>
                                        <td>{tuesday.subject}</td>
                                        <td>{tuesday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View TUESDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-tuesday/${tuesday.id}`}
                                            >Edit Tuesday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Tuesday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteTuesday(tuesday.id)}
                                                >
                                                    Delete Tuesday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*--------------------------------- WEDNESDAY -------------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>WEDNESDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableWednesday.map((Wednesday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{Wednesday.grade}</td>
                                        <td>{Wednesday.subject}</td>
                                        <td>{Wednesday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View
                                                WEDNESDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-wednesday/${Wednesday.id}`}
                                            >Edit Wednesday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Wednesday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteWednesday(Wednesday.id)}
                                                >
                                                    Delete Wednesday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*----------------------------- THURSDAY ----------------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>THURSDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableThursday.map((thursday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{thursday.grade}</td>
                                        <td>{thursday.subject}</td>
                                        <td>{thursday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View THURSDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-thursday/${thursday.id}`}
                                            >Edit Thursday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Thursday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteThursday(thursday.id)}
                                                >
                                                    Delete Thursday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*---------------------------------- FRIDAY ----------------------------------------*/}
            <br/>
            <br/>
            <div className='container'>
                <br/>
                <b>FRIDAY TIMETABLE</b>
                <div className='py-4'>
                    <div className='table-responsive'>
                        <table className="table border shadow">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">grade</th>
                                <th scope="col">subject</th>
                                <th scope="col">time</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                timeTableFriday.map((friday, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{friday.grade}</td>
                                        <td>{friday.subject}</td>
                                        <td>{friday.time}</td>
                                        <td>
                                            <Link to="/time-table" className="btn btn-primary mx-2">View FRIDAY</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-friday/${friday.id}`}
                                            >Edit Friday</Link>
                                            {isDeleted ? (
                                                <div className="alert alert-success">Friday deleted
                                                    successfully!</div>
                                            ) : (
                                                <button
                                                    className="btn btn-danger mx-2"
                                                    onClick={() => deleteFriday(friday.id)}
                                                >
                                                    Delete Friday
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;