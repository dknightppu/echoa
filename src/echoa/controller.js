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

//Add Data
const createClassics = (req, res) => {
const {artist,album_title,year,genre} = req.body;

pool.query(queries.createClassics, [artist,album_title,year,genre], (error, results)=> {
  if(error)throw error;
  res.status(200).json(results.rows);
});

};

// Update Data
const updateClassics = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await queries.updateClassics(id, data);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    getClassics,
    getClassicsById,
    createClassics,
    updateClassics,
};