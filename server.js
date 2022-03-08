const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const cors = require('cors');


//app.use(cors());
//app.use(express.json());

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: 3308,
//   database: 'leelespa'
// });

// connection.connect(function (err) {
//   (err) ? console.log(err) : console.log(connection);
// });

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "haiau.vinh1987@gmail.com",
    pass: "Bach1604@@",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const msg = req.body.msg;
  const mail = {
    from: email,
    to: "haiau.vinh1987@gmail.com",
    subject: "Contact Form Submission from "+name,
    html: `<p>Name: ${name} </p>
           <p>Email: ${email}</p>
           <p>Phone: ${mobile}</p>
           <p>Message: ${msg}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "OK" });
    }
  });
});
app.listen(4000, () => console.log('App listening on port 4000'));
