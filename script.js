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
function resetClasses() {
	skillsContents.forEach((content) => {
		content.classList.remove("show-content");
	});
	skillsBtns.forEach((button) => {
		button.classList.remove("content-clicked");
	});
}
