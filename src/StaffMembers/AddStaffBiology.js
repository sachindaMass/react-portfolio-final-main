import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaffBiology = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        bioHeading: "",
        bioContent: "",
        bioContentTwo:"",
    })
    const {
        bioHeading,
        bioContent,
        bioContentTwo
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://16.170.227.60:8080/biology", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Staff Biology</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                bio Heading
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff bio Heading"
                                name="bioHeading"
                                value={bioHeading}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                bio Content
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff bio Content"
                                name="bioContent"
                                value={bioContent}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                bio Content two
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff bio Content two"
                                name="bioContentTwo"
                                value={bioContentTwo}
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

export default AddStaffBiology;