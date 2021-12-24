const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const blog = {
    id: 1,
    title: "Blog title",
    description: "Blog Description",
  };
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
