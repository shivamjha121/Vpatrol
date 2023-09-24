const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const User = require("./models/user");
db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

//add data to db
app.post("/createUser", async (req, res) => {
  let user_id = req.body.data.user_id;
  try {
    let data = await User.find({ user_id });
    if (!data.length) {
      await User.create({ ...req.body.data });
      res.json({ message: "User added to the database" });
      
    } else {
      await User.updateOne({ user_id }, { ...req.body.data });
      res.json({ message: "User data updated" });
    }
  } catch (error) {
    res.json({ error: "Failed to add user to the database" });
  }
});


//To show the data
app.get("/user", async (req, res) => {
  try {
    let data = await User.find();
    res.json({ data: data });
    // console.log(data)
  } catch (err) {
    res.json({ error: "Failed to get user" });
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
