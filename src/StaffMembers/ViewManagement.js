import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ViewManagement = () => {
    const [staffManagement, setstaffManagement] = useState([])
    const [user, setUser] = useState({
        managementHeading: "",
        managementContent: "",
    })

    const {
        managementHeading,
        managementContent
    } = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const {id} = useParams();

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        try {
            const response = await axios.get("http://16.170.227.60:8080/management");
            setstaffManagement(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">View Staff Management</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of staff id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>managementHeading:</b>
                                    {staffManagement.map((staffManagement, index) => (
                                        <div key={index}>{staffManagement.managementHeading}</div>
                                    ))}
                                </li>
                                <li className="list-group-item">
                                    <b>managementContent:</b>
                                    {staffManagement.map((staffManagement, index) => (
                                        <div key={index}>{staffManagement.managementContent}</div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        BAck to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewManagement;