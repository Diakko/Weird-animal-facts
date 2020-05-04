'use strict';
const url = 'http://localhost:3000';

const ul = document.querySelector('#picturecards');

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
        p1.innerHTML = `<strong>Desc:</strong> ${pic.description}`;

        
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
    try {
        const response = await fetch(url + '/pic');
        const pics = await response.json();
        createPicCards(pics);
    }
    catch (e) {
        console.log(e.message);
    }
};



getPics();
