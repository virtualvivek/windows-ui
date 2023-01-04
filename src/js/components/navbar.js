const NavBar = document.getElementById("app-navbar-wrap-id");

function toggleNavBarMobile() {
  if(document.querySelector(".app-navbar-overlay") === null) {
    var _overlay = document.createElement("div");
    _overlay.className = "app-navbar-overlay";
    NavBar.appendChild(_overlay);
  }
  NavBar.classList.toggle("toggled-float");
}

function toggleNavBar() {
  var device_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(device_width < 760) {
    toggleNavBarMobile();
    let _overlay = document.querySelector(".app-navbar-overlay");
    NavBar.classList.contains("toggled-float")
      ? _overlay.classList.add("show")
      : _overlay.classList.remove("show");
  
    _overlay.addEventListener("click", toggleNavBar);
  }
  else {
    NavBar.classList.toggle("toggled");
  }
}

const NavBar_ToggleButton = document.querySelectorAll('.app-navbar-toggle-button');
NavBar_ToggleButton.forEach(el => el.addEventListener("click", toggleNavBar));


// Scrolling Shadow ------------------------------------

const Navbar_Inner = NavBar.querySelector("nav");
const Navbar_Header = NavBar.querySelector(".app-navbar-header");

Navbar_Inner.addEventListener("scroll", (e) => {
  if(e.target.scrollTop < 50) {
    Navbar_Header.style.boxShadow = "none";
  }
  else {
    Navbar_Header.style.boxShadow = "0 6px 8px -8px var(--color-link-bg-active)";
  }
});

// Resize Animation suppressor -----------------------

function resizedw() {
  document.getElementById("app-navbar-wrap-id").style.transition = "";
  document.querySelector("#app-navbar-wrap-id nav").style.transition = "";
}

var on_resizew;
window.onresize = function() {
  clearTimeout(on_resizew);
  document.getElementById("app-navbar-wrap-id").style.transition = "unset";
  document.querySelector("#app-navbar-wrap-id nav").style.transition = "unset";
  on_resizew = setTimeout(resizedw, 100);
};
