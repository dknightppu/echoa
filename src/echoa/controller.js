const pool = require('../../db');
const queries = require("./queries");

//Get All Data
const getClassics =(req, res) => {
    pool.query(queries.getClassics, (error, results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//Get Classics by ID

//Get Data by Param
//Add new Data by Param
//Modify Data by Param

module.exports = {
    getClassics,
};