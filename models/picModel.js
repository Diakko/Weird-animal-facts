'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllPics = async () => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM wop_pictures');
        return rows;
    } catch (e) {
        console.error('error', e.message);
    }
};

const getPic = async (id) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM wop_pictures WHERE pic_id = ?', [ id ]);
        return rows[0];
    }catch (e) {
        console.error('error', e.message);
    }
};

const insertPic = async (pic) => {
    try {
        console.log('insert pic?', pic);
        const [rows] = await promisePool.query('INSERT INTO wop_pictures (title, description, filename, user) VALUES (?, ?, ?, ?)',
            [ pic.title, pic.description, pic.filename, pic.user]);
        return rows;
    } catch (e){
        console.error('error', e.message);
    }
};
const updatePic = async (pic) => {
    try {
        console.log('insert pic?', pic);
        const [rows] = await promisePool.query('UPDATE wop_pictures SET title = ?, description = ?, user = ? WHERE wop_pic.pic_id = ?',
            [ pic.title, pic.description, pic.user, pic.id ]);
        return rows;
    } catch (e) {
        console.error('updatePic model crash', e.message);
    }
};

const deletePic = async (id) => {
    try {
        console.log('delete pic', id);
        const [rows] = await promisePool.query('DELETE FROM wop_pictures WHERE wop_pic.pic_id = ?', [ id ]);
        console.log('deleted?', rows);
        return rows;
    } catch (e) {
        console.error('deletePic model', e.message);
    }
};

module.exports = {
    getAllPics,
    getPic,
    insertPic,
    deletePic,
    updatePic,
};