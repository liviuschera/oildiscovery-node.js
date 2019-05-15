const express = require('express');
const router = express.Router();

router.get("/", (req, res, next)=>{
   res.send('<h1>Root page</h2>');
});

module.exports = router;
