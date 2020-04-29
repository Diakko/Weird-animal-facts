'use strict';
const url = 'http://localhost:3000';
const addForm = document.querySelector('#addPictureForm');

// submit add pic form
addForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const fd = new FormData(addForm);
    const fetchOptions = {
        method: 'POST',
        body: fd,
    };
    const response = await fetch(url + '/pic', fetchOptions);
    const json = await response.json();
    console.log('add response', json);
});
