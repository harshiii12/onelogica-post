import { useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState({});

    const setKey = (key, val) => {
        setData({ ...data, [key]: val });
    };

    return (
        <div className="container mt-5">
            <h3 className="mb-4">Add Job Post</h3>
            <form action="" method="post" encType="multipart/form-data" onSubmit={e => {
                e.preventDefault();
                console.log(e);
            }}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="position" className="form-label">Position</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Position"
                            name="position"
                            onChange={(e) => setKey("position", e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="joining" className="form-label">Joining Month</label>
                        <input
                            type="date"
                            className="form-control"
                            name="joining"
                            onChange={(e) => setKey("joining", e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="experience" className="form-label">Experience</label>
                        <select
                            name="experience"
                            className="form-select"
                            onChange={(e) => setKey("exp", e.target.value)}
                        >
                            <option value="">Select Experience</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="salary" className="form-label">Salary Value</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Salary Value"
                            name="salary"
                            onChange={(e) => setKey("salary", e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="salary_type" className="form-label">Salary Type</label>
                        <select
                            name="salary_type"
                            className="form-select"
                            onChange={(e) => setKey("salary_type", e.target.value)}
                        >
                            <option value="">Select Salary Type</option>
                            <option value="Negotiable">Negotiable</option>
                            <option value="Competitive">Competitive</option>
                            <option value="Hourly Rate">Hourly Rate</option>
                            <option value="Annual Salary">Annual Salary</option>
                            <option value="Monthly Salary">Monthly Salary</option>
                            <option value="Daily Rate">Daily Rate</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Commission">Commission</option>
                            <option value="Stipend">Stipend</option>
                            <option value="To be discussed">To be discussed</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="file" className="form-label">JD File</label>
                        <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile02"
                            onChange={(e) => setKey("file", e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="employment_type" className="form-label">Employment Type</label>
                        <select name="employment_type" className="form-select" onChange={(e) => setKey("employment_type", e.target.value)}>
                            <option value="">Select Employment Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Seasonal">Seasonal</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Internship">Internship</option>
                            <option value="At Will">At Will</option>
                            <option value="Contract">Contract</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Project-based">Project-based</option>
                            <option value="Zero Hour">Zero Hour</option>
                            <option value="Consultant">Consultant</option>
                            <option value="Co-op">Co-op</option>
                            <option value="Volunteer">Volunteer</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="mode" className="form-label">Work Mode</label>
                        <select name="mode" className="form-select" onChange={(e) => setKey("mode", e.target.value)}>
                            <option value="">Select Work Mode</option>
                            <option value="Remote">Remote</option>
                            <option value="In Office">In Office</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Flexible">Flexible</option>
                            <option value="On Site">On Site</option>
                            <option value="Telecommute">Telecommute</option>
                            <option value="Distributed">Distributed</option>
                            <option value="Virtual">Virtual</option>
                            <option value="Co-located">Co-located</option>
                            <option value="Office Optional">Office Optional</option>
                            <option value="Fully Remote">Fully Remote</option>
                            <option value="Work from Home">Work from Home</option>
                            <option value="Onsite with Flexible Hours">Onsite with Flexible Hours</option>
                            <option value="Rotational">Rotational (e.g., Rotating between Remote and Office)</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="qualifications" className="form-label">Qualifications</label>
                        <select name="qualifications" className="form-select" onChange={(e) => setKey("qualifications", e.target.value)}>
                            <option value="">Select Qualifications</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="skills" className="form-label">Skills</label>
                        <input type="text" className="form-control" placeholder="Enter Skills" onChange={(e) => setKey("skills", e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="candidates" className="form-label">No. of Candidates Required</label>
                        <input type="number" className="form-control" onChange={(e) => setKey("candidates", e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="interview_rounds" className="form-label">No. of Interview Rounds</label>
                        <input type="number" className="form-control" onChange={(e) => setKey("interview_rounds", e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" onChange={(e) => setKey("description", e.target.value)}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" placeholder="Enter Location" onChange={(e) => setKey("location", e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="responsibility" className="form-label">Add Responsibility of Duty</label>
                        <input type="text" className="form-control" placeholder="Enter Responsibility" onChange={(e) => setKey("responsibility", e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="requirement" className="form-label">Add Requirement</label>
                        <input type="text" className="form-control" placeholder="Enter Requirement" onChange={(e) => setKey("requirement", e.target.value)} />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={() => {
                        console.log(data);
                    }}
                >
                    Add Job Post
                </button>
            </form>
        </div>
    );
}

export default App;
