function menu(){
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

const mybutton= document.getElementById("mybutton");
const myimg=document.getElementById("myimg");

function hide() {
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle('active');
});
}
}

hide();

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const extraContent = document.getElementById("extraContent");

   if (toggleBtn && extraContent) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = !extraContent.classList.contains("show");
      extraContent.classList.toggle("show");
      toggleBtn.textContent = isHidden ? "Show Less" : "Show More";
    });
  }
});

