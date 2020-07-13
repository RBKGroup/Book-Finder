const express = require("express");
let app = express();
// var router = express.Router();
const cors = require("cors");

var bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

const db = require("../database");
let BooksModel = db.BooksModel;

app.post("/book", (req, res) => {
  const { img, title, author, dateOfPublication } = req.body;
  let bookDocumentation = new BooksModel({
    img,
    title,
    author,
    dateOfPublication,
  });
  bookDocumentation
    .save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
});

// app.post("/registers", (req, res) => {
//   const userinfo = ({ firstName, lastName, email, password } = req.body);
//   db.findOne({
//     email: req.body.email,
//   })
//     .then((user) => {
//       if (!user) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           userinfo.password = hash;
//           db.create(userinfo)
//             .then((user) => {
//               res.json({ status: user.email + "Registered!" });
//             })
//             .catch((err) => {
//               res.send("error: " + err);
//             });
//         });
//       } else {
//         res.json({ error: "User already exists" });
//       }
//     })
//     .catch((err) => {
//       res.send("error: " + err);
//     });
// });

// app.get("/favorite", (req, res) => {
//   BooksModel.find({})
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// app.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// app.post("/login", function (req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   username.findOne({ username: username, password: password }, function (
//     err,
//     user
//   ) {
//     if (err) {
//       console.log(err);
//       return res.status(500).send();
//     }
//     // if (!user) {
//     //   return res.status(404).send();
//     // }
//     return res.status(200).send();
//   });
// });
// app.get("/register", function (req, res) {
//   res.render("");
// });

// app.post("/register", function (req, res) {
//   var username = req.body.username;
//   var password = req.body.password;
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;

//   var newuser = new db();
//   newuser.username = username;
//   newuser.password = password;
//   newuser.firstname = firstname;
//   newuser.lastname = lastname;
//   newuser
//     .save()
//     .then(() => res.status(201).send("saved!!"))
//     .catch((err) => res.status(500).send(err + "err"));
// });

var port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


