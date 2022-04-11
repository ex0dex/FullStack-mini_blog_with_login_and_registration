const express = require("express");
require("dotenv").config({ path: "../.env" });
const PORT = process.env.PORT || 8000;
const sequelize = require("./db");
const router = require('./routers/index')

const app = express();
app.use(express.json())
app.use('/api', router)

const boost = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({force: false})
    app.listen(PORT, () => {
      console.log("server started on port 5000");
    });
  } catch (error) {
      console.log(error)
  }
};
 
boost()
 