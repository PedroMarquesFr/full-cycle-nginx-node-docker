const express = require("express");
var random = require("random-name");
const { createConnection } = require("mysql");

const PORT = 3000;
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
};

app.get("/", (req, res) => {
  const connection = createConnection(config);
  const sqlInsert = `INSERT INTO people(name) values ('${random.first()}')`;
  const sql = "SELECT * FROM people";

  connection.query("CREATE DATABASE nodedb", (err, result) => {
    connection.query("USE nodedb", (err, result) => {
      connection.query(
        "CREATE TABLE  people(id int not null auto_increment, name varchar(255), primary key(id))",
        (err, result) => {
          connection.query(sqlInsert);
          connection.query(sql, function (err, result, fields) {
            const namesList = result.reduce((lists, row) => {
              return lists + `<li>${row.name.toString()}</li>`;
            }, "");
            connection.end();
            res.send(`<h1>Full Cycle Rocks!</h1> <ul>${namesList}</ul>`);
          });
        }
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
