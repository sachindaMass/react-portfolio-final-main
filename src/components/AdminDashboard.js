import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';

const AdminDashboard = () => {
    const [name, setName] = useState("");

    return (
        <form>
            <br/>
            <b>Courses Edit</b>
            <br/>
            <br/>
            <label>Following are the other courses we advertised this year:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>English lessons for students aged 16+..
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Special Courses for Individual Students:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Standard Courses for General English
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Academic English for second language learners (ESL)
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Business English for second language learners (ESL)
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Mini English Courses
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            {/*------------------------------------Time Table----------------------------------*/}
            <b>Time Table</b>
            <br/>
            <br/>
            <b>SATURDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>MONDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>TUESDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>WEDNESDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>THURSDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>FRIDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <b>SATURDAY</b>
            <br/>
            <br/>
            <label>Proofreading and Editing assistance for your writing
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            {/*--------------------------------FEES-----------------------------------------*/}
            <b>FEES</b>
            <br/>
            <br/>
            <label>Need to pay fees monthly
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Bank Details
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>Details to be added in the bank payment
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            {/*--------------------------Our Staff---------------------------------------------*/}
            <br/>
            <br/>
            <b>Our Staff</b>
            <br/>
            <br/>
            <label>Management
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Some of Our Staff Members
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>maths and Physics
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Chemistry
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Biology
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Science
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>English
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>Accounting and Commerce
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>
        </form>
    );
};
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AdminDashboard/>);
export default AdminDashboard;
