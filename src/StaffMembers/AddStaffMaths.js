import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStaffMaths = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        mathsHeading: "",
        mathsContent: "",
        physicsContent:"",
    })
    const {
        mathsHeading,
        mathsContent,
        physicsContent
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://16.170.227.60:8080/mathsAndPhysic", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add Staff Maths and Physics</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            maths Heading
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff maths Heading"
                            name="mathsHeading"
                            value={mathsHeading}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            maths Content
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff maths Content"
                            name="mathsContent"
                            value={mathsContent}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Second Content
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter data to staff second Content"
                            name="physicsContent"
                            value={physicsContent}
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

export default AddStaffMaths;