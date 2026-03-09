import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Button from "../../components/common/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../styles/ApplyProject.css";

const ApplyProject = () => {

const { id } = useParams();

const [projects, setProjects] = useState({});
const [proposal, setProposal] = useState("");
const [budget, setBudget] = useState("");
const [duration, setDuration] = useState("");


/* FETCH PROJECT */

useEffect(() => {

axios.get(`http://localhost:1337/api/editproject/${id}`)

.then(res => {
setProjects(res.data.data);
})

.catch(err => console.log(err));

}, [id]);


/* SUBMIT APPLICATION */

const handleSubmit = () => {

const user = JSON.parse(localStorage.getItem("user"));

const freelancer_id = user.user_id;

axios.post("http://localhost:1337/api/apply-project", {

project_id: id,
freelancer_id,
proposal,
budget,
duration

})
.then(() => {

alert("Application submitted successfully");

})
.catch(err => console.log(err));

};


return (

<DashboardLayout role="freelancer">

<div className="page-header">
<div>
<h1>Apply for Project</h1>
<p>Submit your proposal to the founder</p>
</div>
</div>


<div className="apply-container">


{/* PROJECT DETAILS */}

<div className="apply-project-info">

<h3>Project Details</h3>

<div className="project-info-grid">

<div className="info-item">
<span className="info-label">Project</span>
<span className="info-value">{projects.title}</span>
</div>

<div className="info-item">
<span className="info-label">Category</span>
<span className="info-value">{projects .category}</span>
</div>

<div className="info-item">
<span className="info-label">Budget</span>
<span className="info-value">
₹{projects.budget_min} - ₹{projects.budget_max}
</span>
</div>

<div className="info-item">
<span className="info-label">Duration</span>
<span className="info-value">
{projects.duration_weeks} weeks
</span>
</div>

</div>

</div>


{/* APPLY FORM */}

<div className="apply-form">

<div className="form-group">

<label>Your Proposal</label>

<textarea
className="form-input textarea"
placeholder="Explain why you are the best fit for this project..."
value={proposal}
onChange={(e)=>setProposal(e.target.value)}
/>

</div>


<div className="form-grid">

<div className="form-group">

<label>Your Expected Budget</label>

<input
className="form-input"
type="number"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
placeholder="Enter your price"
/>

</div>

</div>


<div className="apply-actions">

<Button variant="secondary">
Cancel
</Button>

<Button
variant="primary"
onClick={handleSubmit}
>
Submit Application
</Button>

</div>

</div>

</div>

</DashboardLayout>

);

};

export default ApplyProject;