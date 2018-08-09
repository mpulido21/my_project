const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/improvement", (req, res) => {
  salesForce.query(`SELECT Id, Comment__c, Type__c, Count__c, Tiny_Improvements_User__r.Name FROM Improvement__c`).then((data) => {
    res.json(data.records.map(record => record._fields))
  });
});

app.get("/api/filter/:id", (req, res) => {
  console.log(req.params);
  console.log("I'm Hit")
  // salesForce.query(`SELECT id, Comment__c, Type__c, Count__c, Tiny_Improvements_User__r.Name FROM Improvement__c WHERE Tiny_Improvements_User__r.Name = 'Mark'`).then((data) => {
  salesForce.query(`SELECT id, Comment__c, Type__c, Count__c, Tiny_Improvements_User__r.Name FROM Improvement__c WHERE Tiny_Improvements_User__r.Name = '` + req.params.id + `'`).then((data) => {
    res.json(data.records.map(record => record._fields))
    // console.log(data.records.map(record => record._fields))
  });
});

app.get("/api/users", (req, res) => {
  salesForce.query(`SELECT id, Name FROM Tiny_Improvements_User__c`).then((data) => {
    // return all of the fields from the object Tiny_Improvements_User__c in SalesForce
    res.json(data.records.map(record => record._fields))
  });
});

app.post("/api/improvement", (req, res) => {
  salesForce.createImprovements(req.body).then(() => {
    res.json({ success: true })
    // console.log("I'm hit")
  });
})

app.listen(PORT, function () {
  console.log(`We are connected 🌎 on PORT ${PORT}`);
});
