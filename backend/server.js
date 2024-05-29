const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParsar = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParsar());
app.use(router);

dbConnect();

app.use("/storage", express.static("storage"));
app.use(errorHandler);

// app.get("/", (req, res) => res.json({ msg: "Hello World!s" }));
app.listen(PORT, console.log(`Backend is running on port:${PORT}`));
