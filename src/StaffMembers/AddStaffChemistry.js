import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaffChemistry = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        chemistryHeading: "",
        chemistyContent: "",
        chemistyContentTwo:"",
    })
    const {
        chemistryHeading,
        chemistyContent,
        chemistyContentTwo
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://16.170.227.60:8080/chemistry", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Staff Chemistry</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Chemistry Heading
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff chemistry Heading"
                                name="chemistryHeading"
                                value={chemistryHeading}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Chemistry Content
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff chemistry Content"
                                name="chemistyContent"
                                value={chemistyContent}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Chemistry Content two
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff chemistry Content two"
                                name="chemistyContentTwo"
                                value={chemistyContentTwo}
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

export default AddStaffChemistry;