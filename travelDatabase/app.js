const express = require("express");
const app = express();
const port = process.env.PORT || 9700;
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const DB =
  "mongodb+srv://mongouser:mongo12345@cluster0.brh2h.mongodb.net/travelappDB?retryWrites=true&w=majority";
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db;

app.get("/", (req, res) => {
  res.send("Hi from travel DB");
});

app.get("/travel/:id", (req, res) => {
  var id = req.params.id;
  db.collection("traveldetail")
    .find({ _id: id })
    .toArray((err, result) => {
      res.send(result);
    });
});
app.get("/filter", (req, res) => {
  db.collection("entertainFilter")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});
app.get("/location", (req, res) => {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});
app.get("/traveltype", (req, res) => {
  db.collection("traveltype")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});

app.get("/traveldetail", (req, res) => {
  var condition = {};
  if (req.query.traveltype && req.query.category) {
    condition = {
      $and: [
        { traveltype: req.query.traveltype },
        { "filter.category": req.query.category },
      ],
    };
  } else if (req.query.traveltype) {
    condition = { traveltype: req.query.traveltype };
  } else if (req.query.category) {
    condition = { "filter.category": req.query.category };
  }
  db.collection("traveldetail")
    .find(condition)
    .toArray((err, result) => {
      res.send(result);
    });
});

app.get("/booking", (req, res) => {
  db.collection("booking")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});

app.post("/placeBooking", (req, res) => {
  db.collection("booking").insert(req.body, (err, result) => {
    if (err) throw err;
    res.send("data added");
  });
});

MongoClient.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, connection) => {
    if (err) console.log(err);
    db = connection.db("travelappDB");
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
