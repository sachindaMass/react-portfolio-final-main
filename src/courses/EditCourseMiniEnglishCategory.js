import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourseMiniEnglishCategory = () => {
    let navigate = useNavigate();

    const {id} = useParams();
    const [user, setUser] = useState({
        miniEnglishCategory: "",
    })
    const {
        miniEnglishCategory,
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://16.170.227.60:8080/miniEnglish/category/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://16.170.227.60:8080/miniEnglish/category/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Mini English Course Category</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                mini English Category
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="miniEnglishCategory"
                                value={miniEnglishCategory}
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

export default EditCourseMiniEnglishCategory;