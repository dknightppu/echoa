const getClassics = "select * from classicalbums";
const getClassicsById = "select * from classicalbums where accountId =$1";
const createClassics = "insert into classicalbums(artist,album_title,year,genre) VALUES($1,$2,$3,$4)";
const updateClassics ="update classicalbums set name = $1, album_title = $2, year =$3, genre =$4 where classicsId =$5";

module.exports = {
    getClassics,
    getClassicsById,
    createClassics,
    updateClassics,
};