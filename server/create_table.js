const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "idea2team",
});

const query = `CREATE TABLE IF NOT EXISTS idea2team.invitations (
  id int(11) NOT NULL AUTO_INCREMENT,
  project_id int(11) NOT NULL,
  freelancer_id int(11) NOT NULL,
  founder_id int(11) NOT NULL,
  status enum('pending','accepted','rejected') DEFAULT 'pending',
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (id),
  UNIQUE KEY unique_invite (project_id,freelancer_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;

db.query(query, (err) => {
    if (err) console.error(err);
    else console.log("Table 'invitations' successfully created!");
    process.exit();
});
