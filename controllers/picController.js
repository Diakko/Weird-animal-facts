'use strict';
const picModel = require('../models/picModel');

const {validationResult} = require('express-validator');

const pic_list_get = async (req, res) => {
    const pics = await picModel.getAllPics();
    res.json(pics);
};

const pic_get = async (req, res) => {
    console.log('pic id parameter', req.params);
    const pic = await picModel.getpic(req.params.id);
    res.json(pic);
};

const pic_post = async (req, res) => {
    console.log('pic_post', req.body, req.file);
    let errors = validationResult(req);

    if(!req.file.mimetype.includes('image')){
        errors = [{msg: 'ei ole kuva'}];
    }
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    const params = {
        title: req.body.title,
        description: req.body.description,
        filename: req.file.filename,
    };
    try {
        const pic = await picModel.insertPic(params);
        console.log('inserted', pic);
        res.send(`added cat: ${pic.insertId}`);
    } catch (e) {
        console.error('problem with pic_post in picController', e);
        res.status(500).send(`database insert error: ${e.message}`);
    }
};

const pic_put = async (req, res) => {
    console.log('pic_put', req.body);

    const upPic = await picModel.updatepic(req.body);
    console.log('cat_put result from db', upPic);
    res.status(204).send();
};

const pic_delete = async (req, res) => {
    console.log('pic_delete', req.params);
    const delPic = await picModel.deletePic(req.params.id);
    console.log('pic_delete result from db', delPic);
    res.json({ deleted: 'OK'});
};

module.exports = {
    pic_list_get,
    pic_get,
    pic_post,
    pic_put,
    pic_delete,
};