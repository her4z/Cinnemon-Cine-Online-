const cors = require("cors");
const express = require("express");
const app = express();
//const indexRoutes = require("./routes/index"); // Previamente usado para tersting.
const tasksRoutes = require("./routes/tasks");
const usersRoutes = require("./routes/users");
const path = require("path");


//settings
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
//app.use(indexRoutes); // Previamente usado para testing
app.use("/api", tasksRoutes);
app.use("/api", usersRoutes);

// static files
app.use(express.static(path.join(__dirname, "dist")));

// start server

app.listen(app.get("port"), () => {
    console.log("Server on Port ", app.get("port") )
});