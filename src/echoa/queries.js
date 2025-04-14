const pool = require('../../db');

const getClassics = async (filter) => {
    let query;
    let params = [];

    if (filter) {
        query = "SELECT * FROM classicalbums WHERE column_name = $1";
        params.push(filter);
      } else {
        query = "SELECT * FROM classicalbums";
      }
      
      return pool.query(query, params);
    };

const createClassics = (data) => {
    const query = 'INSERT INTO clasicalbums (artist) VALUES ($1::varchar) RETURNING *';
    return pool.query(query, [data.artist]);
  };

  const updateClassics = (id, data) => {
    const query = `
      UPDATE classicalbums
      SET artist = $1::varchar,
          album_title = $2::varchar
      WHERE id = $3::int
      RETURNING *;
    `;
    return pool.query(query, [data.artist, data.album_title, id]);
  };

module.exports = {
    getClassics,
    createClassics,
    updateClassics,
};