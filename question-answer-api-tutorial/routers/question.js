const express = require('express');
const {getAllQuestions} = require('../controllers/questionControllers');
const router = express.Router();

router.get('/', getAllQuestions);


module.exports = router;