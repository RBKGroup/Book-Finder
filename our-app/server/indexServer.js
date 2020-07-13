const express = require("express");
let app = express();
var router = express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require("cors")
router.use(cors())

app.use(express.static(__dirname + '/../public'));

const db = require("../database/index.js");
const log = require("../database/login.js");
const reg = require("../database/regester");
let BooksModel = db.BooksModel;
let loginModel = log.loginModel;
let RegModel = reg.RegModel;
app.post("/book", (req, res) => {
    const { img, title, author, dateOfPublication } = req.body;
    let bookDocumentation = new BooksModel({ img, title, author, dateOfPublication });

    bookDocumentation.save().then(() =>
        res.status(201).send("saved"))
        .catch((err) => res.status(500).send(err + "err"))
});



app.get("/favorite", (req, res) => {
    BooksModel.find({})
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch((err) => {
            res.send(err);
        });
});
// app.post('/register', function (req, res, next) {

//     const { FirstName, lastName, Email, Password } = req.body;
//     let regDocumentation = new RegModel({ FirstName, lastName, Email, Password });

//     // regDocumentation.save(user, function (err, newUser) {
//     //     if (err) return next(err);
//     //     req.session.user = email;
//     //     return res.send('Logged In!');
//     // });
//     regDocumentation.save().then(() =>
//     res.status(201).send("saved"))
//     .catch((err) => res.status(500).send(err + "err"))
// });


app.post('/register', (req, res) => {

    const { FirstName, LastName, Email, Password } = req.body;
    let regDocumentation = new RegModel({ FirstName, LastName, Email, Password });

    regDocumentation.save().then(() =>
        res.status(201).send("saved"))
        .catch((err) => res.status(500).send(err + "err"))
});

// app.post('/login', function (req, res, next) {
//     var email = req.body.email;
//     var password = req.body.pass;

//     loginModel.findOne({Email: email, Password: password}, function(err, user) {
//        if(err) return next(err);
//        if(!user) return res.send('Not logged in!');

//        req.session.user = email;
//        return res.send('Logged In!');
//     });
//  });

app.get('/login/:Email/:Password', (req, res) => {

    const { Email, Password } = req.params;

    var email = req.body.Email;
    var password = req.body.Password;

    RegModel.find({ Email, Password })
        .then((result) => {
            if (result.length > 0) {
                res.send('Logged In!');
            }else{
                res.send('Not logged in!');
            }
            console.log(result);
        })
        .catch((err) => {
            res.send(err);
        });
});
var port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)});