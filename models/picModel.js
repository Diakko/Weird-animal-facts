'use strict';
const promisePool = require('../database/db').promise();

const getPicture = async (id) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM wop_picture WHERE picture_id = ?', [ id ]);
        return rows[0];
    } catch (e) {
        console.error('error', e.message);
    }
};

module.exports = {
    getPicture,
}