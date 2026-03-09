import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import '../../styles/BrowseProject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BrowseProjects = () => {

const [projects, setProjects] = useState([]);
const navigate = useNavigate();


/* ===============================
   FETCH PROJECTS
================================ */

useEffect(() => {

axios.get("http://localhost:1337/api/projects")

.then(res => {
console.log(res.data);
setProjects(res.data.data);
})

.catch(err => console.log(err));

}, []);

/* ===============================
   APPLY PROJECT
================================ */

const handleApply = (id) => {

navigate(`/apply-project/${id}`);

};



return (

<DashboardLayout role="freelancer">

{/* PAGE HEADER */}

<div className="page-header">
<div>
<h1>🔍 Browse Projects</h1>
<p>Discover projects that match your skills and interests.</p>
</div>
</div>


{/* SEARCH BAR */}

<div className="filter-bar">
<SearchBar
placeholder="Search projects by title, skill, or company..."
style={{ flex: 1 }}
/>
</div>


{/* PROJECT GRID */}

<div className="project-grid">

{projects.length === 0 ? (

<p>No projects available.</p>

) : (

projects.map((val) => (

<div className="project-card" key={val.project_id}>

{/* TITLE */}

<h3>{val.title}</h3>


{/* DESCRIPTION */}

<p className="project-desc">
{val.description}
</p>


{/* DETAILS */}

<div className="project-details-container">

<div className="project-detail-item">
<strong>Founder:</strong>
<span className="project-detail-value">
{val.founder_name}
</span>
</div>


{/* SKILLS */}

<div className="project-detail-item align-start">

<strong>Skills:</strong>

<div className="project-skills-list">

{val.required_skills?.split(',').map((skill, i) => (

<span
key={i}
className="project-skill-tag"
>

{skill.trim()}

</span>

))}

</div>

</div>


{/* BUDGET + DURATION */}

<div className="project-details-grid">

<div className="project-detail-item">

<strong>Budget:</strong>

<span className="project-detail-value">
₹{val.budget_min} - ₹{val.budget_max}
</span>

</div>


<div className="project-detail-item">

<strong>Duration:</strong>

<span className="project-detail-value">
{val.duration_weeks} weeks
</span>

</div>

</div>


{/* STATUS */}

<div className="project-detail-item margin-top">

<strong>Status:</strong>

<span
className={`project-status-tag ${
val.status?.toLowerCase() === 'open'
? 'open'
: 'other'
}`}
>

{val.status || 'Active'}

</span>

</div>

</div>


{/* ACTION BUTTONS */}

<div className="project-card-actions">


<Button
variant="primary"
className="project-action-btn apply"
onClick={() => handleApply(val.project_id)}
>

Apply Now

</Button>

</div>

</div>

))

)}

</div>

</DashboardLayout>

);

};

export default BrowseProjects;