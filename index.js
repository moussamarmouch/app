const express = require("express");
const app = express();
const db = require('./db')

app.get('/', async (req, res) => {
  try {
      const result = await db.pool.query("SELECT * FROM studenten");
      res.send(result);
  } catch (err) {
      throw err;
  }
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
