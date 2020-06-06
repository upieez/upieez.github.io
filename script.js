window.onload = (event) => {
	document.querySelector("body").classList.add("ready");
};

const { annotate, annotationGroup } = RoughNotation;

const today = new Date();
const birthday = new Date("November 23, 1994 07:42:32");
const age = today.getFullYear() - birthday.getFullYear();

const greetings = [
	`<p>I hope you are well and good fellow reader! I'm <span class="name" id="my-name">Samuel</span>, ${age} years old this year and I'm a tech enthusiast who happens to also be a <span class="alt-highlight" id="my-title">developer</span> with front & back end capability. I code, create and love to learn new things! Always excited for challenges.</p>`,
	`<p>It's nice to meet you 🙂 My name is <span class="name" id="my-name">Sam</span>, ${age} this year and I'm a <span class="alt-highlight" id="my-title">software developer</span> with a huge passion for learning new and wonderful things. I code, create and have a big fluffy cat at home! Looking to better myself everyday.</p>`,
	`<p>Hi there! Thanks for stopping by and checking me out. I'm <span class="name" id="my-name">Sammy</span>, ${age}, and I'm an animal loving <span class="alt-highlight" id="my-title">SWE</span> (software engineer) who wants to get involved in all sorts of new technology. <br /> I code, create and love to learn new things! Trying my hands on leetcode at the moment.</p>`,
];

document.querySelector(".main-message").innerHTML =
	greetings[Math.floor(Math.random() * greetings.length)];

const myName = document.querySelector("#my-name");
const myTitle = document.querySelector("#my-title");
const upcoming = document.querySelector("#upcoming");
const regify = document.querySelector("#regify");
const livinLocal = document.querySelector("#livin-local");
const lunchLeh = document.querySelector("#lunch-leh");
const matchDonut = document.querySelector("#match-donut");

const a1 = annotate(myName, { type: "highlight", color: "#ffff00" });
const a2 = annotate(myTitle, { type: "underline", color: "	#6495ed" });
const a3 = annotate(upcoming, { type: "circle", color: "	#6495ed" });
const a4 = annotate(regify, { type: "box", color: "	#6495ed" });
const a5 = annotate(livinLocal, { type: "box", color: "	#6495ed" });
const a6 = annotate(lunchLeh, { type: "box", color: "	#6495ed" });
const a7 = annotate(matchDonut, { type: "box", color: "	#6495ed" });

const ag = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
ag.show();
