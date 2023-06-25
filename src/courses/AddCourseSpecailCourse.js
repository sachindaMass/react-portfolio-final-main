import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCourseSpecailCourse = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        specialCourseIndividualCategory: "",
        specialCourseIndividualFirstPara: "",
        specailCourseIndividualSecondPara: "",

    })
    const {
        specialCourseIndividualCategory,
        specialCourseIndividualFirstPara,
        specailCourseIndividualSecondPara,
        specailCourseIndividualSecondCategory
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/specialCourseIndvidual", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Special Course</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Course Individual Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 1st category"
                                name="specialCourseIndividualCategory"
                                value={specialCourseIndividualCategory}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Course Individual First Paragraph
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 1st Paragraph"
                                name="specialCourseIndividualFirstPara"
                                value={specialCourseIndividualFirstPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Course Individual Second Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 3rd Paragraph"
                                name="specailCourseIndividualSecondPara"
                                value={specailCourseIndividualSecondPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Course Individual Second Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 3rd second category"
                                name="specailCourseIndividualSecondCategory"
                                value={specailCourseIndividualSecondCategory}
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

export default AddCourseSpecailCourse;