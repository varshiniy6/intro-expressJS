const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
  console.log(response);
});
app.listen(3000);

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today Date is ${date}`);
});
