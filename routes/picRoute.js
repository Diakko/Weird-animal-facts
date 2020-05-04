'use strict';
// picRoute
const express = require('express');
const router = express.Router();
const {body, check} = require('express-validator');
const multer = require('multer');
const upload = multer({dest: './uploads/', fileFilter});
const picController = require('../controllers/picController');

function fileFilter (req, file, cb) {
    console.log('filefilter', file);
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To reject this file pass `false`, like so:
    if (!file.mimetype.includes('image')) {
        return cb(null, false, new Error('I don\'t have a clue!'));
    } else {
        // To accept the file pass `true`, like so:
        cb(null, true);
    }

};

router.get('/', picController.pic_list_get);

router.get('/:id', picController.pic_get);

router.post('/hack', (req, res) => {
    res.send(req.body.search);
});

router.post('/',
    upload.single('pic'),
    [
        body('title', 'No empty titles allowed').isLength({min: 1}),
        body('description', 'No empty descriptions allowed, max 160').isLength({min: 1, max: 220}),
        body('user', 'Must choose user').isLength({min: 1})
    ], (req, res) => {
        console.log('tiedosto: ', req.file);
        picController.pic_post(req, res);
    });

router.put('/', [
    body('title', 'cannot be empty').isEmpty({min: 1}),
    body('description', 'cannot be empty').isNumeric().isLength({min: 1, max: 220}),
    body('user', 'must be number').isNumeric().isLength({min: 1}),
], picController.pic_put);

router.delete('/:id', picController.pic_delete);

module.exports = router;