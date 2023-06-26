import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourseAcademic = () => {
    let navigate = useNavigate();

    const {id} = useParams();
    const [user, setUser] = useState({
        academicEnglishSecondLangFirstPara: "",
        academicEnglishSecondLangSecondPara: "",
        academicEnglishSecondLangFirstCategory: "",
    })
    const {
        academicEnglishSecondLangFirstPara,
        academicEnglishSecondLangSecondPara,
        academicEnglishSecondLangFirstCategory
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/academicEnglishSecondLang/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/academicEnglishSecondLang/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Academic Course</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                academic English Second Lang First Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 1st para"
                                name="academicEnglishSecondLangFirstPara"
                                value={academicEnglishSecondLangFirstPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                academic English Second Lang Second Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 2nd para"
                                name="academicEnglishSecondLangSecondPara"
                                value={academicEnglishSecondLangSecondPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                academic English Second Lang First Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 2nd para"
                                name="academicEnglishSecondLangFirstCategory"
                                value={academicEnglishSecondLangFirstCategory}
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

export default EditCourseAcademic;