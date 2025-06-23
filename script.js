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
	const blob = document.getElementById("skills-blob");

	const buttons = [
		document.getElementById("skills-tech-btn"),
		document.getElementById("skills-graph-btn"),
		document.getElementById("skills-oth-btn")
	];

	buttons.forEach((btn) => {
		btn?.addEventListener("click", () => {
			const rect = btn.getBoundingClientRect();
			const parentRect = btn.offsetParent?.getBoundingClientRect() || { left: 0, top: 0 };

			const left = rect.left - parentRect.left;
			const top = rect.top - parentRect.top - 50;

			blob.style.left = `${left}px`;
			blob.style.top = `${top}px`;
		});
	});
};
document.addEventListener("DOMContentLoaded", moveBlobToButton);

// HAM MENU
const hamburger = document.querySelector(".ham");
const navContent = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("ham-clicked");
	navContent.classList.toggle("show-nav-content");
});


// ACCORDION
function updateAccordion() {
	const allTabContents = document.querySelectorAll('.tab-content');
	const checkedRadio = document.querySelector('.exp-content__accordion__tab input:checked');

	allTabContents.forEach((tab) => {
		tab.style.maxHeight = null;
		tab.style.padding = '0 1rem';
	});

	if (checkedRadio) {
		const tabContent = checkedRadio.parentElement.querySelector('.tab-content');
		tabContent.style.padding = '1rem'; 
		tabContent.style.maxHeight = (tabContent.scrollHeight + 50) + 'px';
	}
}

const radioButtons = document.querySelectorAll('.exp-content__accordion__tab input[type="radio"]');
radioButtons.forEach((radio) => {
	radio.addEventListener('change', updateAccordion);
});

window.addEventListener('DOMContentLoaded', updateAccordion);
