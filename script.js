'use strict'

const menuStacks = document.querySelector('.menu__stacks');
const subMenu = document.querySelector('.subMenu');
const intro = document.querySelectorAll('.intro');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const search = document.querySelector('.search');

menuStacks.addEventListener('mouseenter', (e) => {
    for (let item of intro) {
        item.style.display = 'none';
    }
    search.style.display = 'none';
    subMenu.classList.remove('disappear');
    setTimeout(() => {
        subMenu.classList.add('appear');
    }, 200);

    //console.log(e);
})

header.addEventListener('mouseleave', (e) => {
    //header.style.backgroundColor = 'rgb(243, 255, 200)';
    for (let item of intro) {
        item.style.display = 'flex';
    }
    search.style.display = 'block';
    subMenu.classList.add('disappear');
    setTimeout(() => {
        subMenu.classList.remove('appear');
    }, 500)

    //console.log(e);
})