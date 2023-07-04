import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourseProofReading = () => {
    let navigate = useNavigate();

    const {id} = useParams();
    const [user, setUser] = useState({
        proofReadingFirstPara: "",
        proofReadingSecondPara: "",
        proofReadingThridPara: "",
    })
    const {
        proofReadingFirstPara,
        proofReadingSecondPara,
        proofReadingThridPara
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/proofReading/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/proofReading/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit ProofReading Course</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                academic English Second Lang First Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 1st para"
                                name="proofReadingFirstPara"
                                value={proofReadingFirstPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                proof Reading SecondPara
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 1st para"
                                name="proofReadingSecondPara"
                                value={proofReadingSecondPara}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                proof Reading Third Para
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 5th box 1st para"
                                name="proofReadingThridPara"
                                value={proofReadingThridPara}
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

export default EditCourseProofReading;