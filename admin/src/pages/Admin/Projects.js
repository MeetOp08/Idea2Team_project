import React, { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import SearchBar from "../../components/Admin/SearchBar";
import DataTable from "../../components/Admin/DataTable";
import ActionButton from "../../components/Admin/ActionButton";


const Projects = () => {
  const [projects, setProjects] = useState([
    { title: "AI Chatbot App", founder: "Rahul Mehta", status: "Active" },
    { title: "E-commerce Website", founder: "Priya Shah", status: "Completed" },
  ]);

  const [search, setSearch] = useState("");

  const handleRemove = (title) => {
    setProjects(projects.filter((p) => p.title !== title));
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const columns = ["Project Title", "Founder", "Status", "Actions"];

  const data = filteredProjects.map((p) => [
    p.title,
    p.founder,
    p.status,
    <>
      <ActionButton label="View" type="view" />
      <ActionButton label="Remove" type="delete" onClick={() => handleRemove(p.title)} />
    </>,
  ]);

  return (
    <div>
      <PageHeader title="Manage Projects" />
      <SearchBar placeholder="Search projects..." onChange={(e) => setSearch(e.target.value)} />
      <div style={{ marginTop: "20px" }}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Projects;
