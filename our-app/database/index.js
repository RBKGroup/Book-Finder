const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/booksDB", { useNewUrlParser: true })
  .then(() => {
    console.log(" The connecting is good :) ");
  })
  .catch((err) => {
    console.log(" Err when conecting To DataBase :( ", err);
  });

let booksSchema = mongoose.Schema({
  img: { type: String },
  title: { type: String },
  author: { type: String },
  dateOfPublication: { type: String },
});

// let loginSchema = mongoose.Schema({
//   username: { type: String },
//   password: { type: String },
// });

// let loginModel = mongoose.model("login", loginSchema);

let BooksModel = mongoose.model("books", booksSchema);
module.exports.BooksModel = BooksModel;
module.exports.loginModel = loginModel;

// let booksDoc = new BooksModel({
//     id: 1,
//     img: "https://red",
//     title: "red",
//     author: "Ahmed",
//     dataOfPublication: " 2020-07-03",
//     type: "history",
// });

// booksDoc.save((err) => {
//     if (err) {
//         console.log(" Error while save the book to DB", err);
//     } else {
//         console.log("The Book Saved <3");
//     }
// });
