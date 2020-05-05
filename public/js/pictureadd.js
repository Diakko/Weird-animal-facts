'use strict';
const url = 'http://localhost:3000';
const addForm = document.querySelector('#addPictureForm');
const userLists = document.querySelectorAll('.add-owner');
const loginWrapper = document.querySelector('.login-wrapper');
const logoutWrapper = document.querySelector('.navi-logout-wrapper');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');
const userInfo = document.querySelector('.user-info');
const logOut = document.querySelector('#log-out');

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
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/user', options);
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

// login
loginForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(loginForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url + '/auth/login', fetchOptions);
    const json = await response.json();
    console.log('login response', json);
    if (!json.user) {
        alert(json.message);
    } else {
        // save token
        sessionStorage.setItem('token', json.token);
        // show/hide forms + cats
        loginWrapper.style.display = 'none';
        logoutWrapper.style.display = 'block';
        userInfo.innerHTML = `Hello ${json.user.name}`;
    }
});

// logout
logOut.addEventListener('click', async (evt) => {
    evt.preventDefault();
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/auth/logout', options);
        const json = await response.json();
        console.log(json);
        // remove token
        sessionStorage.removeItem('token');
        alert('You have logged out');
        // show/hide forms + cats
        loginWrapper.style.display = 'flex';
        logOut.style.display = 'none';
    }
    catch (e) {
        console.log(e.message);
    }
});

// submit register form
addUserForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(addUserForm);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url + '/auth/register', fetchOptions);
    const json = await response.json();
    console.log('user add response', json);
    // save token
    sessionStorage.setItem('token', json.token);
    loginWrapper.style.display = 'none';
    logoutWrapper.style.display = 'block';
    logOut.style.display = 'block';
});

if (sessionStorage.getItem('token')) {
}