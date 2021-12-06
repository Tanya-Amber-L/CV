// SKILLS SECTION CHOICE
let skillsBtns = [...document.querySelectorAll(".skills-content__nav__btn")];
let skillsContents = [...document.querySelectorAll(".skills-content__article")];

skillsBtns.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetClasses();
		skillsContents[i].classList.add("show-content");
		skillsBtns[i].classList.add("content-clicked");
	});
});
const resetClasses = () => {
	skillsContents.forEach((content) => {
		content.classList.remove("show-content");
	});
	skillsBtns.forEach((button) => {
		button.classList.remove("content-clicked");
	});
};

// MOVE BLOB TO BTN CLICKED SKILLS SECTION

const moveBlobToButton = () => {
	const skillsTechBtn = document.getElementById("skills-tech-btn");
	const skillsGraphBtn = document.getElementById("skills-graph-btn");
	const skillsSoftBtn = document.getElementById("skills-soft-btn");
	const skillsOthBtn = document.getElementById("skills-oth-btn");
	const blob = document.getElementById("skills-blob");

	skillsTechBtn.addEventListener("click", () => {
		blob.style.left = skillsTechBtn.offsetLeft - 20;
		blob.style.top = skillsTechBtn.offsetTop - 50;
	});
	skillsGraphBtn.addEventListener("click", () => {
		blob.style.left = skillsGraphBtn.offsetLeft - 20;
		blob.style.top = skillsGraphBtn.offsetTop - 50;
	});
	skillsSoftBtn.addEventListener("click", () => {
		blob.style.left = skillsSoftBtn.offsetLeft - 30;
		blob.style.top = skillsSoftBtn.offsetTop - 50;
	});
	skillsOthBtn.addEventListener("click", () => {
		blob.style.left = skillsOthBtn.offsetLeft - 20;
		blob.style.top = skillsOthBtn.offsetTop - 50;
	});
};
moveBlobToButton();

// HAM MENU
const hamburger = document.querySelector(".ham");
const navContent = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("ham-clicked");
	navContent.classList.toggle("show-nav-content");
});
