const pool = require('../../db');
const queries = require("./queries");

//Get All Data
const getclassics = async (req, res) => {
    try {
    const { filter } = req.query;  
      const result = await queries.getClassics(filter);
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

//Add Data
const createClassics = async (req, res) => {
    try {
      const data = req.body;
      const result = await queries.createClassics(data);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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
    createClassics,
    updateClassics,
};