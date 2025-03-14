const buttonHeight = 20;
const buttonWidth = 20;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const no_button = document.getElementById('no_button');
    
    no_button.addEventListener('mouseover', () => {
        no_button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        no_button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
});