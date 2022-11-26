var express = require("express");

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(express.static('node_modules'));

// Handling the get request
app.get("/", (req, res) => {
  res.redirect('landingPage.html');
});
 
// Starting the server on the 80 port
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});