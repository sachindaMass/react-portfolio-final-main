import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourseSpecialCourseCategory = () => {
    let navigate = useNavigate();

    const {id} = useParams();
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
    useEffect(() => {
        loadUser();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/specialCourseIndvidual/category/${id}`, user);
        window.location.reload();
        navigate("/");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/specialCourseIndvidual/category/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Special Course Category</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Individual Category One
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 1st Paragraph"
                                name="specialIndividualCategoryOne"
                                value={specialIndividualCategoryOne}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                special Individual Category Two
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 3rd Paragraph"
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
                                placeholder="Enter data to 3rd box 3rd Paragraph"
                                name="specialIndividualCategoryThree"
                                value={specialIndividualCategoryThree}
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
                                placeholder="Enter data to 3rd box 3rd Paragraph"
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
                                placeholder="Enter data to 3rd box 3rd Paragraph"
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
                                placeholder="Enter data to 3rd box 3rd Paragraph"
                                name="specialIndividualCategoryFive"
                                value={specialIndividualCategoryFive}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                specialIndividualCategorySix
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to 3rd box 3rd Paragraph"
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

export default EditCourseSpecialCourseCategory;