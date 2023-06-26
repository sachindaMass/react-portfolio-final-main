import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaffStaffMembers = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        staffMembersHeading: "",
        staffMenebersContent: "",
    })
    const {
        staffMembersHeading,
        staffMenebersContent
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/staffMembers", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Staff Members</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                staff Members Heading
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff members heading"
                                name="staffMembersHeading"
                                value={staffMembersHeading}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                staff Memebers Content
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff members content"
                                name="staffMenebersContent"
                                value={staffMenebersContent}
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

export default AddStaffStaffMembers;