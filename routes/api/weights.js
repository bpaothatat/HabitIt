const { response } = require('express');
const express = require('express');
const router = express.Router();
const Weights = require('../../models/Weights');

router.get('/', (request, response) => {
    Weights.find()
        .then(weights => response.json(weights))
        .catch(err => response.status(404).json({ noweightfound: "No weights found."} ));
});

module.exports = router;
