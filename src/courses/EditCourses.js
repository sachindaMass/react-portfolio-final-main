import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourses = () => {
    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        otherCourses: "",
        otherCoursesSecondPara:"",
        englishLessons: "",
        specialCourses: "",
        strandardCoursesForEnglish: "",
        academicEnglishCourses: "",
        bussinesEnglishCourses: "",
        miniEnglishCourses: "",
        proofReadingAndEditing: "",
    })

    const {
        otherCourses,
        otherCoursesSecondPara,
        englishLessons,
        specialCourses,
        strandardCoursesForEnglish,
        academicEnglishCourses,
        bussinesEnglishCourses,
        miniEnglishCourses,
        proofReadingAndEditing
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/courses/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/courses/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Course heading</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Other Courses
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 1st box 1st Paragraph"
                                name="otherCourses"
                                value={otherCourses}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                other Courses SecondPara
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 1st box second Paragraph"
                                name="otherCoursesSecondPara"
                                value={otherCoursesSecondPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                english Lessons
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 2nd box"
                                name="englishLessons"
                                value={englishLessons}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Courses
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box"
                                name="specialCourses"
                                value={specialCourses}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standard Courses For English
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box"
                                name="strandardCoursesForEnglish"
                                value={strandardCoursesForEnglish}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                academic English Courses
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box"
                                name="academicEnglishCourses"
                                value={academicEnglishCourses}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                businessEnglishCourses
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 6th box"
                                name="bussinesEnglishCourses"
                                value={bussinesEnglishCourses}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                mini English Courses
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 7th box"
                                name="miniEnglishCourses"
                                value={miniEnglishCourses}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                proof Reading And Editing
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 8th box"
                                name="proofReadingAndEditing"
                                value={proofReadingAndEditing}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default EditCourses;