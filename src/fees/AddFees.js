import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddFees = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        fees: "",
        bank: "",
        bankName: "",
        accountNumber: "",
        particular: "",
        code: "",
        reference: "",
    })
    const {
        fees,
        bank,
        bankName,
        accountNumber,
        particular,
        code,
        reference
    } = user
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://16.170.227.60:8080/fees", user);
        window.location.reload();
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Fees</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                fees
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to fees box"
                                name="fees"
                                value={fees}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                bank
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to bank"
                                name="bank"
                                value={bank}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                bank Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to bank Name"
                                name="bankName"
                                value={bankName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                account Number
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to account Number"
                                name="accountNumber"
                                value={accountNumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                particular
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to particular"
                                name="particular"
                                value={particular}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                code
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to code"
                                name="code"
                                value={code}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                reference
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter data to reference"
                                name="reference"
                                value={reference}
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

export default AddFees;