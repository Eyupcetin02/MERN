const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const {database} = require("./config/database")
const authRouter = require("./routers/auth")
const postRouter = require("./routers/post.js")
const dotenv = require("dotenv");
dotenv.config();
database()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


const port = process.env.PORT || 5000;

app.use("/" , authRouter)
app.use("/" , postRouter)

app.listen(port, () => {
  console.log(`server running: http://localhost:5000`);
});
