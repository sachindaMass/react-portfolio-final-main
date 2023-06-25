import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCourseEnglish = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        englishLessonFirstPara: "",
        englishLessonCategory: "",
        englishSecondPara: "",
    })
    const {
        englishLessonFirstPara,
        englishLessonCategory,
        englishSecondPara
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/englishLesson", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register English</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                english Lesson First Paragraph
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 1st box 1st Paragraph"
                                name="englishLessonFirstPara"
                                value={englishLessonFirstPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                english Lesson Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 2nd box english Lesson Category"
                                name="englishLessonCategory"
                                value={englishLessonCategory}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                english Second Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 2nd box english Second Para"
                                name="englishSecondPara"
                                value={englishSecondPara}
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

export default AddCourseEnglish;