const NavBarTogglers = document.querySelectorAll('[data-win-toggle="navbar-left"]');
let NavBarOverlay = document.createElement("div");

for (const NavBarToggler of NavBarTogglers) {
  const NavBar = document.querySelector(NavBarToggler.getAttribute("data-win-target"));
  
  function toggleNavBarMobile() {
    if(document.querySelector(".app-navbar-overlay") === null) {
      NavBarOverlay.className = "app-navbar-overlay";
      NavBar.appendChild(NavBarOverlay);
    }
    NavBar.classList.toggle("collapsed-float");
    NavBarOverlay.classList.toggle("show");
  }
  function toggleNavBar() {
    var device_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(device_width < 760) {
      toggleNavBarMobile();
    }
    else {
      NavBar.classList.toggle("collapsed");
    }
  }
  NavBarToggler.addEventListener("click", toggleNavBar);
};

NavBarOverlay.addEventListener("click", toggleNavBar);


// Scrolling Shadow ------------------------------------
const NavBar_ = document.querySelector(".app-navbar-wrap");
const NavBar_Nav = NavBar_.querySelector("nav");
const NavBar_List = document.getElementById("app-navbar-list");
const Navbar_Header = NavBar_.querySelector(".app-navbar-header");

NavBar_List.addEventListener("scroll", (e) => {
  let _scrolTop_ = e.target.scrollTop;
  _scrolTop_ < 50
    ? Navbar_Header.style.boxShadow = "none"
    : Navbar_Header.style.boxShadow = "0 4px 8px -8px #77777777";
});


// Resize Animation suppressor -----------------------
function ResizedWin() {
  NavBar_.style.transition = "";
  NavBar_Nav.style.transition = "";
}
var on_resizew;
window.onresize = function() {
  clearTimeout(on_resizew);
  NavBar_.style.transition = "unset";
  NavBar_Nav.style.transition = "unset";
  on_resizew = setTimeout(ResizedWin, 100);
};