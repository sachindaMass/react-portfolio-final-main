import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Navbar = () => {

    const [users, setUsers] = useState([])
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
    }, []);

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Admin Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/add-course" className="btn btn-outline-light">Add Course Details</Link>
                    <Link to="/add-fees" className="btn btn-outline-light">Add Fees Details</Link>
                    <Link to="/add-SATURDAY" className="btn btn-outline-light">Add SATURDAY Time Table</Link>
                    <Link to="/add-MONDAY" className="btn btn-outline-light">Add MONDAY Time Table</Link>
                    <Link to="/add-TUESDAY" className="btn btn-outline-light">Add TUESDAY Time Table</Link>
                    <Link to="/add-WEDNESDAY" className="btn btn-outline-light">Add WEDNESDAY Time Table</Link>
                    <Link to="/add-THURSDAY" className="btn btn-outline-light">Add THURSDAY Time Table</Link>
                    <Link to="/add-FRIDAY" className="btn btn-outline-light">Add FRIDAY Time Table</Link>
                    {/*<button className="btn btn-outline-light">Add Time Table Details</button>*/}

                </div>
            </nav>
            <br/>
            <br/>
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
                                        <td>{user.englishLessons}</td>
                                        <td>{user.specialCourses}</td>
                                        <td>{user.strandardCoursesForEnglish}</td>
                                        <td>{user.academicEnglishCourses}</td>
                                        <td>{user.bussinesEnglishCourses}</td>
                                        <td>{user.miniEnglishCourses}</td>
                                        <td>{user.proofReadingAndEditing}</td>
                                        <td>
                                            <Link to="/courses" className="btn btn-primary mx-2">View Courses</Link>
                                            <button className="btn btn-secondary mx-2">Edit Course</button>
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

export default Navbar;