const getClassics = 'SELECT * FROM classicalbums';
const getClassicsById = 'SELECT * FROM classicalbums WHERE id = $1';
const createClassics = 'INSERT INTO classicalbums (artist, album_title, year, genre) VALUES ($1, $2, $3, $4) RETURNING *';
const updateClassics = 'UPDATE classicalbums SET artist = $1, album_title = $2, year = $3, genre = $4 WHERE id = $5 RETURNING *';

module.exports = {
  getClassics,
  getClassicsById,
  createClassics,
  updateClassics,
};
