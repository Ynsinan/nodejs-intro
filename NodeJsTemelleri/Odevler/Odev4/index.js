const fs = require("fs");

fs.writeFile(
  "employee.json",
  `{"name":"Employee 1 Name","salary":2000}`,
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
    console.log("New Employe Done");
    console.log(data);
  }
);

fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya okundu");
});

fs.appendFile(
  "employee.json",
  `\n ,{"name":"Employee 2 Name","salary":3000}`,
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("Veri güncellendi");
  }
);

fs.unlink("employee.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya silindi");
});
