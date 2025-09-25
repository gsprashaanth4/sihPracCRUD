const express = require("express");
const cors = require('cors');
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());

app.use(express.json())

const db = require("./models");

// logic behind Routers 
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
