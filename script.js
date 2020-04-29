window.onload = (event) => {
	document.querySelector("body").classList.add("ready");
};

const today = new Date();
const birthday = new Date("November 23, 1994 07:42:32");
const age = today.getFullYear() - birthday.getFullYear();

const greetings = [
	`<p>I hope you are well and good fellow reader! I'm <span class="highlight name blinking-cursor">Samuel Huang</span>, ${age} years old this year and I'm a tech enthusiast who happens to also be a <span class="alt-highlight">web developer</span> with front & back end capability. I code, create and love to learn new things! Always excited for challenges.</p>`,
	`<p>It's nice to meet you 🙂 My name is <span class="highlight name blinking-cursor">Sam</span>, ${age} this year and I'm a <span class="alt-highlight">software developer</span> with a huge passion for learning new and wonderful things. I code, create and have a big fluffy cat at home! Looking to better myself everyday.</p>`,
	`<p>Hi there! Thanks for stopping by and checking me out. I'm <span class="highlight name blinking-cursor">Sammy</span>, ${age}, and I'm an animal loving <span class="alt-highlight">software engineer</span> who wants to get involved in all sorts of new technology. <br /> I code, create and love to learn new things! Trying my hands on leetcode at the moment.</p>`,
];

document.querySelector(".main-message").innerHTML =
	greetings[Math.floor(Math.random() * greetings.length)];
