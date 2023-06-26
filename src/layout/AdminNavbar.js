import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const AdminNavbar = () => {

    const [users, setUsers] = useState([])
    const [proof, setProof] = useState([])
    const [english, setEnglish] = useState([])
    const [specialCourse, setSpecialCourse] = useState([])
    const [standardCourse, setstandardCourse] = useState([])
    const [academicCourse, setAcademicCourse] = useState([])
    const [businessCourse, setBusinessCourse] = useState([])
    const [miniEnglishCourse, setminiEnglishCourse] = useState([])

    const [staffManagement, setstaffManagement] = useState([])

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
    }, []);

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

    const loadStaffManagement = async () => {
        const result = await axios.get("http://localhost:8080/management")
        setstaffManagement(result.data)
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
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <NavDropdown title="Add Course" id="addCourseDropdown">
                            <NavDropdown.Item as={Link} to="/add-course">
                                Add Course Details
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-english">
                                Add Course English
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-special-course-english">
                                Add Course Special Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-standard">
                                Add Course Standard Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-academic">
                                Add Course Academic Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-business">
                                Add Course Business Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-mini-English">
                                Add Course mini Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-course-proofReading-course-english">
                                Add Course proofreading Course
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Add Staff Members" id="addStaffDropDown">
                            <NavDropdown.Item as={Link} to="/add-staff-management">
                                Add Staff management
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-members">
                                Add Staff members
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-maths-and-physics">
                                Add Staff maths and physics
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-chemistry">
                                Add Staff chemistry
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-biology">
                                Add Staff biology
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-science">
                                Add Staff science
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-english">
                                Add Staff english
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-staff-account-and-commerce">
                                Add Staff account and commerce
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Time Table" id="timeTableDropdown">
                            <NavDropdown.Item as={Link} to="/add-SATURDAY">
                                Add SATURDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-MONDAY">
                                Add MONDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-TUESDAY">
                                Add TUESDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-WEDNESDAY">
                                Add WEDNESDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-THURSDAY">
                                Add THURSDAY Time Table
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/add-FRIDAY">
                                Add FRIDAY Time Table
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/add-fees">Add Fees Details</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <br/>
            <br/>
            {/*------------------------------- Course Details Table -------------------------------------*/}
            <div className='container'>
                <br/>
                <b>Course Details Table</b>
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
                                <th scope="col">english Lesson Category</th>
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
                                        <td>{englishs.englishLessonCategory}</td>
                                        <td>{englishs.englishSecondPara}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View
                                                English Course</Link>
                                            <Link className="btn btn-secondary mx-2"
                                                  to={`/edit-courses-english/${englishs.id}`}
                                            >Course English</Link>
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
                                <th scope="col">special Course Individual Category</th>
                                <th scope="col">special Course Individual First Para</th>
                                <th scope="col">special Course Individual Second Para</th>
                                <th scope="col">special Course Individual Second Category</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                specialCourse.map((specialCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{specialCourses.specialCourseIndividualCategory}</td>
                                        <td>{specialCourses.specialCourseIndividualFirstPara}</td>
                                        <td>{specialCourses.specailCourseIndividualSecondPara}</td>
                                        <td>{specialCourses.specailCourseIndividualSecondCategory}</td>
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
                                <th scope="col">standard Course English For First Category</th>
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
                                        <td>{standardCourses.standardCourseEnglishForFirstCategory}</td>
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
                                <th scope="col">academic English Second Lang First Category</th>
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
                                        <td>{academicCourses.academicEnglishSecondLangFirstCategory}</td>
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
                                <th scope="col">business English Second Lang First Category</th>
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
                                        <td>{businessCourses.businessEnglishSecondLangFirstCategory}</td>
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
                                <th scope="col">miniEnglishCategory</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                miniEnglishCourse.map((miniEnglishCourses, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{miniEnglishCourses.miniEnglishFirstPara}</td>
                                        <td>{miniEnglishCourses.miniEnglishCategory}</td>
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
                                <th scope="col">proof Reading First Category</th>
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
                                        <td>{proof.proofReadingFirstCategory}</td>
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
                                                Management</Link>
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