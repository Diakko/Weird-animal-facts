'use strict';
const url = 'http://localhost:3000';
const addForm = document.querySelector('#addPictureForm');
const userLists = document.querySelectorAll('.add-owner');

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

// get users to form options
const getUsers = async () => {
    try {
        const response = await fetch(url + '/user');
        const users = await response.json();
        createUserOptions(users);
    }
    catch (e) {
        console.log(e.message);
    }
};
getUsers();

// create user options to <select>
const createUserOptions = (users) => {
    userLists.forEach((list) => {
        // clear user list
        list.innerHTML = '';
        users.forEach((user) => {
            // create options with DOM methods
            const option = document.createElement('option');
            option.value = user.user_id;
            option.innerHTML = user.name;
            option.classList.add('light-border');
            list.appendChild(option);
        });
    });
};