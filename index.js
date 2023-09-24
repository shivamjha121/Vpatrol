const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const db=require('./db')
const user =require('./models/user')
db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/createUser",async (req, res) => {
  console.log(req.body);
//   res.send("gopal jha ");
    try {
      await user.create({
        data: {
          user_id: req.body.user_id,
          user_name: req.body.user_name,
          back_accounts: req.body.back_accounts,
          id: req.body.id,
          name: req.body.name,
          accounts: {
            bank: req.body.bank,
            branch: req.body.branch,
            address: req.body.address,
            city: req.body.city,
            district: req.body.district,
            state: req.body.state,
            bank_code: req.body.bank_code,
            weather: {
              temp: req.body.temp,
              humidity: req.body.humidity,
            },
          },
        },
      });

      res.status(201).json({ message: "User added to the database" });
    } catch (error) {
      console.error("Error adding user to the database:", error);
      res.status(500).json({ error: "Failed to add user to the database" });
    }
});

app.listen(port, () => console.log(`http://localhost:${port}`));