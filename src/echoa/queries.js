const getClassics = "SELECT * FROM classicalbums";
const getClassicsById = "SELECT * FROM classicalbums WHERE id =$1";

module.exports = {
    getClassics,
    getClassicsById,
};