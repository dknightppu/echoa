const pool = require('../../db');
const queries = require("./queries");

//Get All Data
const getClassics = async (req, res) => {
    try {
    const { filter } = req.query;  
      const result = await queries.getClassics(filter);
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
const getClassicsById = (req, res) => {
  const classicsid = parseInt(req.params.id);
  if(isNaN(classicsid)) {
    return res.status(400).json({error: "Invalid value format"});
  }
  console.log("Received ClassicsId");
  pool.query(queries.getClassicsById, [classicsid], (error, results)=> {
    if(error){
      console.error("Database Error", error);
      return res.status(500).json({error: "Acct Not Found"});
    }
    res.status(200).json(results.rows);
  });
}

//Post Add Information
const createClassics = (req, res) => {
const {artist,album_title,year,genre} = req.body;

pool.query(queries.createClassics, [artist,album_title,year,genre], (error, results)=> {
  if(error)throw error;
  res.status(201).json({ message: "Successfully added a new classic" });
});

};

//Put Modify Information
// Inside controller.js

const updateClassics = async (req, res) => {
  const { id } = req.params;
  const { artist, album_title, year, genre } = req.body;

  try {
    const result = await pool.query(
      'UPDATE classics SET artist = $1, album_title = $2, year = $3, genre = $4 WHERE id = $5 RETURNING *',
      [artist, album_title, year, genre, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Album not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
    getClassics,
    getClassicsById,
    createClassics,
    updateClassics,
};