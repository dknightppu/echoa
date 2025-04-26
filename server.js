const express = require("express");
const helmet  = require("helmet");
const cors    = require("cors");
const https   = require("https");
const fs      = require("fs");
const echoaRoutes = require("./src/echoa/routes");

const app  = express();
const port = process.env.PORT || 8003;

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
  res.send("Here are the 50 best albums of all time");
});
app.use("/api/v1/echoa", echoaRoutes);

// Load your cert & key
const options = {
  key:  fs.readFileSync("./certs/key.pem"),
  cert: fs.readFileSync("./certs/cert.pem"),
};

https.createServer(options, app)
     .listen(port, () => {
       console.log(`HTTPS server running on port ${port}`);
     });
