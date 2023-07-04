import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCourseSpecialCourseCategory = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        specialIndividualCategoryOne: "",
        specialIndividualCategoryTwo: "",
        specialIndividualCategoryThree: "",
        specialIndividualCategoryFour: "",
        specialIndividualCategoryFive: "",
        specialIndividualCategorySix: "",
    })
    const {
        specialIndividualCategoryOne,
        specialIndividualCategoryTwo,
        specialIndividualCategoryThree,
        specialIndividualCategoryFour,
        specialIndividualCategoryFive,
        specialIndividualCategorySix,
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/specialCourseIndvidual/category", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Special Course Category</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Special Individual Category One
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 1st category"
                                name="specialIndividualCategoryOne"
                                value={specialIndividualCategoryOne}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Special Individual Category Two
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="specialIndividualCategoryTwo"
                                value={specialIndividualCategoryTwo}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Individual Category Three
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="specialIndividualCategoryThree"
                                value={specialIndividualCategoryThree}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Individual Category Four
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="specialIndividualCategoryFour"
                                value={specialIndividualCategoryFour}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Individual Category Five
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="specialIndividualCategoryFive"
                                value={specialIndividualCategoryFive}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                specialI Individual Category Six
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data"
                                name="specialIndividualCategorySix"
                                value={specialIndividualCategorySix}
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

export default AddCourseSpecialCourseCategory;