import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditStaffAccountAndCommerce = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        accountHeading: "",
        accountContent: "",
        accountContentTwo:"",
    })
    const {
        accountHeading,
        accountContent,
        accountContentTwo
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://16.170.227.60:8080/accountingAndCommerce/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://16.170.227.60:8080/accountingAndCommerce/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Staff Account and Commerce</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                account Heading
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff account Heading"
                                name="accountHeading"
                                value={accountHeading}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                account Content
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff account Content"
                                name="accountContent"
                                value={accountContent}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                account Content two
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to staff account Content two"
                                name="accountContentTwo"
                                value={accountContentTwo}
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

export default EditStaffAccountAndCommerce;