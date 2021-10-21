"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// SKILLS SECTION CHOICE
var skillsBtns = _toConsumableArray(document.querySelectorAll(".skills-content__nav__btn"));

var skillsContents = _toConsumableArray(document.querySelectorAll(".skills-content__article"));

skillsBtns.forEach(function (button, i) {
  button.addEventListener("click", function () {
    resetClasses();
    skillsContents[i].classList.add("show-content");
    skillsBtns[i].classList.add("content-clicked");
  });
});

var resetClasses = function resetClasses() {
  skillsContents.forEach(function (content) {
    content.classList.remove("show-content");
  });
  skillsBtns.forEach(function (button) {
    button.classList.remove("content-clicked");
  });
}; // MOVE BLOB TO MOUSE CLICK POSITION IN THE SKILLS NAV CONTAINER
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