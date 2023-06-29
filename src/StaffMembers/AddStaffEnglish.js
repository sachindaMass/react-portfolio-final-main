import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaffEnglish = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        englishHeading: "",
        englishContent: "",
        englishContentTwo: "",
    })
    const {
        englishHeading,
        englishContent,
        englishContentTwo
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/english", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add Staff English</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            english Heading
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff english Heading"
                            name="englishHeading"
                            value={englishHeading}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            english Content
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff english Content"
                            name="englishContent"
                            value={englishContent}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            english Content Two
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff english Content"
                            name="englishContentTwo"
                            value={englishContentTwo}
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

export default AddStaffEnglish;