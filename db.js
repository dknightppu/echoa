const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    //user: "dknight",
    host: "localhost",
    //host: "dpg-cvu5goruibrs73eiqul0-a",
    password: "Orderofblue33!",
    //password: "rcoi5gEt84HYSMVObhjFH2KK0xUDki6o",
    database: "classics",
    //database: "classics_2ob6",
    port: 5432,
});

module.exports = pool;