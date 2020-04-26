window.onload = (event) => {
    document.querySelector('body').classList.add('ready');
};

const today = new Date;
const birthday = new Date('November 23, 1994 07:42:32');
const age = today.getFullYear() - birthday.getFullYear();

const greetings = [
    `<p>I hope you are well! I'm <span class="highlight name blinking-cursor">Samuel</span>, AGE years old this year and I'm an animal loving <span class="alt-highlight">web developer</span> with front & back end capability. <br /> I code, create and love to learn new things! Always excited for challenges.</p>`,
    `<p>It's nice to meet you! I'm <span class="highlight name blinking-cursor">Samuel</span>, AGE years old this year and I'm an animal loving <span class="alt-highlight">web developer</span> with front & back end capability. <br /> I code, create and love to learn new things! Always excited for challenges.</p>`,
    `<p>Hi there! Thanks for checking me out I'm <span class="highlight name blinking-cursor">Samuel</span>, AGE years old this year and I'm an animal loving <span class="alt-highlight">web developer</span> with front & back end capability. <br /> I code, create and love to learn new things! Always excited for challenges.</p>`
];

document.querySelector(".main-message")
    .innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
    
document.body.innerHTML = document.body.innerHTML.replace('AGE', age);