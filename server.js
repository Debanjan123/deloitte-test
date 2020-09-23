const express = require("express");
const path = require("path");
const app = express();
const compileSass = require("./config/compileSass");
app.use("/component", express.static(path.resolve(__dirname, "component")));
// app.use("/layout",
// express.static(path.resolve(__dirname, "frontend", "layout")));
var path1 = path.resolve(__dirname, "assets");
app.use("/assets", express.static(path1));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
require("./config/compileSass").compileSassLibs().catch(console.error);

require("./config/compileSass").compileSassMain().catch(console.error);

app.listen(process.env.PORT || 8000, () => console.log("starting port 8000"));
