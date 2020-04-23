window.onload = (event) => {
    document.querySelector('body').classList.add('ready');
};

const today = new Date
const birthday = new Date('November 23, 1994 07:42:32')
const age = today.getFullYear() - birthday.getFullYear();

document.body.innerHTML = document.body.innerHTML.replace('AGE', age);
