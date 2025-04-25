const getClassics = "SELECT * FROM classics";
const getClassicsById = "SELECT * FROM classics WHERE id = $1";
const createClassics = "INSERT INTO classics (artist, album_title, year, genre) VALUES ($1, $2, $3, $4)";
const updateClassics = "UPDATE classics SET artist = $1, album_title = $2, year = $3, genre = $4 WHERE id = $5";

module.exports = {
  getClassics,
  getClassicsById,
  createClassics,
  updateClassics,
};
