'use strict';

const images = [
    { 'id': '1', 'url':'./img/00112.png' },
    { 'id': '2', 'url':'./img/00114.png' },
    { 'id': '3', 'url':'./img/00115.png' },
    { 'id': '4', 'url':'./img/00118.png' },
    { 'id': '5', 'url':'./img/00120.png' },
    { 'id': '6', 'url':'./img/00124.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const previous = items[items.length - 1];
    containerItems.insertBefore( previous, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);