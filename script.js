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

	skillsTechBtn.addEventListener("click", () => (blob.style.left = "0"));
	skillsGraphBtn.addEventListener("click", () => (blob.style.left = "17rem"));
	skillsSoftBtn.addEventListener("click", () => (blob.style.left = "30rem"));
	skillsOthBtn.addEventListener("click", () => (blob.style.left = "42rem"));
};
moveBlobToButton();
