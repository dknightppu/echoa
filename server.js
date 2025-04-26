const express = require("express");
const helmet = require("helmet");
const echoaRoutes = require("./src/echoa/routes");

const app = express();
const port = 8003;

app.use(express.json());
app.use(helmet());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Here are the 50 best albums of all time");
})

app.use("/api/v1/echoa", echoaRoutes);



app.listen(port, () => console.log('running on ${port}'));