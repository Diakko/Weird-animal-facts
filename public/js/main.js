'use strict';
const url = 'http://localhost:3000';


const loginWrapper = document.querySelector('.login-wrapper');
const logoutWrapper = document.querySelector('.navi-logout-wrapper');
const ul = document.querySelector('#picturecards');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');
const userInfo = document.querySelector('.user-info');
const logOut = document.querySelector('#log-out');



const createPicCards = (pics) => {
    // Clear ul
    ul.innerHTML = '';
    pics.forEach((pic) => {
        const img = document.createElement('img');
        img.src = url + '/' + pic.filename;
        img.alt = pic.name;
        img.classList.add('resp');

        /*// open large image when clicking image *TBD*
        img.addEventListener('click', () => {
            modalImage.src = url + '/' + pic.filename;
            imageModal.alt = pic.name;
            imageModal.classList.toggle('hide');
            try {
                const coords = JSON.parse(pic.coords);
                // console.log(coords);
                addMarker(coords);
            }
            catch (e) {
            }*/

        const figure = document.createElement('figure').appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerHTML = pic.title;

        const p1 = document.createElement('p');
        p1.innerHTML = `<strong>Desc:</strong> ${pic.description} <br> <strong>Added by:</strong> ${pic.user}`;

        
        const li = document.createElement('li');
        li.classList.add('light-border-picture');
        li.classList.add('picturebox');

        li.appendChild(h2);
        li.appendChild(figure);
        li.appendChild(p1);
        ul.appendChild(li);
    });

};

// AJAX call
const getPics = async () => {
    console.log('getPic token ', sessionStorage.getItem('token'));
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/pic', options);
        const pics = await response.json();
        createPicCards(pics);
    }
    catch (e) {
        console.log(e.message);
    }
};

getPics();


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
        userInfo.innerHTML = `Logged in as ${json.user.name}`;
        getPics();
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
        loginWrapper.style.display = 'block';
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
    getPics();
});

if (sessionStorage.getItem('token')) {
    loginWrapper.style.display = 'none';
    logoutWrapper.style.display = 'block';
    getPics();
}
