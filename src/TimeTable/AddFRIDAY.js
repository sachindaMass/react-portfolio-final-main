import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddFriday = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        grade: "",
        subject: "",
        time: "",
    })
    const {
        grade,
        subject,
        time,
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/time-table/friday", user);
        navigate("/");
        window.location.reload();
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register FRIDAY Time Table</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                grade
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to grade"
                                name="grade"
                                value={grade}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                subject
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to subject"
                                name="subject"
                                value={subject}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                time
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to time"
                                name="time"
                                value={time}
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

export default AddFriday;