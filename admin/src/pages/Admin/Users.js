import DataTable from "../../components/Admin/DataTable";
import PageHeader from "../../components/Admin/PageHeader";
import SearchBar from "../../components/Admin/SearchBar";

import "./User.css";

const Users = () => {
  const columns = ["Name", "Email", "Role"];
  const data = [
    ["John Doe", "john@mail.com", "Freelancer"],
    ["Jane Smith", "jane@mail.com", "Founder"],
  ];

  return (
    <>
      <PageHeader title="Manage Users" />
      <SearchBar placeholder="Search users..." />
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default Users;
