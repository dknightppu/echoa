const express = require("express");
const echoaRoutes = require("./src/echoa/routes");

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Here are the 50 best albums of all time");
})

app.use("/api/v1/echoa", echoaRoutes);

//API Route
app.use("/api/v1/echoa", async (req, res) => {
try {
    const result = await pool.query('SELECT * FROM classicalbums');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching classicalbums:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log('running on ${port}'));