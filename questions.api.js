"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) { 
    pool
        .query("select * from questions order by random() limit 10")
        .then(result => res.json(result.rows));
}


router.get("/question", (req, res) =>  {
    selectAll(res);
}); 

module.exports = router;
