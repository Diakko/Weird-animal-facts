'use strict';
const url = 'http://localhost:3000';

const ul = document.querySelector('ul');
const createPictureCards = (pictures) => {
    // Clear ul
    ul.innerHTML = '';
    pictures.forEach((picture) => {
        const img = document.createElement('img');
        img.src = url + picture.filename;
        img.alt = picture.name;
        img.classList.add('resp');

        /*// open large image when clicking image *TBD*
        img.addEventListener('click', () => {
            modalImage.src = url + '/' + picture.filename;
            imageModal.alt = picture.name;
            imageModal.classList.toggle('hide');
            try {
                const coords = JSON.parse(picture.coords);
                // console.log(coords);
                addMarker(coords);
            }
            catch (e) {
            }*/

        const figure = document.createElement('figure').appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerHTML = picture.title;

        const p1 = document.createElement('p');
        p1.innerHTML = `Desc: ${picture.description}`;

        
        const li = document.createElement('li');
        li.classList.add('light-border');

        li.appendChild(h2);
        li.appendChild(figure);
        li.appendChild(p1);
        ul.appendChild(li);

    });

};
const getPicture = async () => {
    console.log('getpicture token ', sessionStorage.getItem('token'));
    try {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        };
        const response = await fetch(url + '/picture', options);
        const pictures = await response.json();
        createPictureCards(pictures);
    }
    catch (e) {
        console.log(e.message);
    }
};

getPicture();
