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

// MOVE BLOB TO MOUSE CLICK POSITION IN THE SKILLS NAV CONTAINER
// const skillsNavContainer = document.getElementById("skills-nav");
// const skillsNavBlob = document.getElementById("skills-blob");

// skillsNavContainer.addEventListener("click", (event) => {
// 	console.log(event);
// 	let rect = event.target.getBoundingClientRect();
// 	let x = event.clientX - rect.left;
// 	let y = event.clientY - rect.top;
// 	skillsNavBlob.style.left = `${x}px`;
// 	skillsNavBlob.style.top = `${y}px`;
// });

// 365
// 122
