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
}; // MOVE BLOB TO BTN CLICKED SKILLS SECTION


var moveBlobToButton = function moveBlobToButton() {
  var skillsTechBtn = document.getElementById("skills-tech-btn");
  var skillsGraphBtn = document.getElementById("skills-graph-btn");
  var skillsSoftBtn = document.getElementById("skills-soft-btn");
  var skillsOthBtn = document.getElementById("skills-oth-btn");
  var blob = document.getElementById("skills-blob");
  skillsTechBtn.addEventListener("click", function () {
    return blob.style.left = "0";
  });
  skillsGraphBtn.addEventListener("click", function () {
    return blob.style.left = "17rem";
  });
  skillsSoftBtn.addEventListener("click", function () {
    return blob.style.left = "30rem";
  });
  skillsOthBtn.addEventListener("click", function () {
    return blob.style.left = "42rem";
  });
};

moveBlobToButton(); // HAM MENU

var hamburger = document.querySelector(".ham");
var navContent = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("ham-clicked");
  navContent.classList.toggle("show-nav-content");
});