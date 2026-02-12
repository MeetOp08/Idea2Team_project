import React, { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import DataTable from "../../components/Admin/DataTable";
import ActionButton from "../../components/Admin/ActionButton";

import "./Reports.css"

const Reports = () => {
  const [reports, setReports] = useState([
    { user: "John Doe", reason: "Spam activity", date: "12 Feb 2026" },
    { user: "Jane Smith", reason: "Fake project", date: "10 Feb 2026" },
  ]);

  const handleBlock = (user) => {
    alert(`${user} has been blocked.`);
    setReports(reports.filter((r) => r.user !== user));
  };

  const columns = ["Reported User", "Reason", "Date", "Actions"];

  const data = reports.map((r) => [
    r.user,
    r.reason,
    r.date,
    <>
      <ActionButton label="Review" type="view" />
      <ActionButton label="Block" type="delete" onClick={() => handleBlock(r.user)} />
    </>,
  ]);

  return (
    <div>
      <PageHeader title="Reports & Complaints" />
      <div style={{ marginTop: "20px" }}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Reports;
