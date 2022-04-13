const express = require("express");
const cors = require("cors")
require("dotenv").config({ path: "../.env" });
const PORT = process.env.PORT || 8000;
const sequelize = require("./db");
const router = require('./routers/index')

const app = express();
app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use('/uploads/', express.static('./uploads/'))

const boost = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({force: true})
    app.listen(PORT, () => {
      console.log("server started on port 5000");
    });
  } catch (error) {
      console.log(error)
  }
};
 
boost()
 