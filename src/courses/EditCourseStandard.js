import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourseStandard = () => {
    let navigate = useNavigate();

    const {id} = useParams();
    const [user, setUser] = useState({
        standardCourseEnglishFirstPara: "",
        standardCourseEnglushSecondPara: "",
        standardCourseEnglishThirdPara: "",
        standardCourseEnglishForFirstCategory:"",
    })
    const {
        standardCourseEnglishFirstPara,
        standardCourseEnglushSecondPara,
        standardCourseEnglishThirdPara,
        standardCourseEnglishFourthPara,
        standardCourseEnglishForFirstCategory
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/standardCourseEnglish/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/standardCourseEnglish/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Standard Course</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standard Course English First Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box 1st para"
                                name="standardCourseEnglishFirstPara"
                                value={standardCourseEnglishFirstPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standard Course English Second Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box 2nd para"
                                name="standardCourseEnglushSecondPara"
                                value={standardCourseEnglushSecondPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standardCourseEnglishThirdPara
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box 3rd para"
                                name="standardCourseEnglishThirdPara"
                                value={standardCourseEnglishThirdPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standard Course English Fourth Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box 2nd category"
                                name="standardCourseEnglishFourthPara"
                                value={standardCourseEnglishFourthPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                standard Course English For First Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 4th box 2nd category"
                                name="standardCourseEnglishForFirstCategory"
                                value={standardCourseEnglishForFirstCategory}
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

export default EditCourseStandard;