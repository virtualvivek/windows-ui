const NavBarTogglers = document.querySelectorAll('[data-win-toggle="navbar-left"]');

for (const NavBarToggler of NavBarTogglers) {
  const NavBar = document.querySelector(NavBarToggler.getAttribute("data-win-target"));

  let _overlay = null;
  function toggleNavBarMobile() {
    if(document.querySelector(".app-navbar-overlay") === null) {
      _overlay = document.createElement("div");
      _overlay.className = "app-navbar-overlay";
      NavBar.appendChild(_overlay);
    }
    NavBar.classList.toggle("collapsed-float");
  }
  function toggleNavBar() {
    var device_width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;
    if(device_width < 760) {
      toggleNavBarMobile();
      NavBar.classList.contains("collapsed-float")
        ? _overlay.classList.add("show")
        : _overlay.classList.remove("show");
      _overlay.addEventListener("click", toggleNavBar);
    }
    else {
      NavBar.classList.toggle("collapsed");
    }
  }
  NavBarToggler.addEventListener("click", toggleNavBar);
};


// Scrolling Shadow ------------------------------------
const NavBarWrap = document.querySelector(".app-navbar-wrap");
const NavBarWrap_Nav = NavBarWrap.querySelector("nav");
const Navbar_Header = NavBarWrap.querySelector(".app-navbar-header");

NavBarWrap_Nav.addEventListener("scroll", (e) => {
  e.target.scrollTop < 50
    ? Navbar_Header.style.boxShadow = "none"
    : Navbar_Header.style.boxShadow = "0 6px 8px -8px var(--color-link-bg-active)";
});
// Resize Animation suppressor -----------------------
function ResizedWin() {
  NavBarWrap.style.transition = "";
  NavBarWrap_Nav.style.transition = "";
}
var on_resizew;
window.onresize = function() {
  clearTimeout(on_resizew);
  NavBarWrap.style.transition = "unset";
  NavBarWrap_Nav.style.transition = "unset";
  on_resizew = setTimeout(ResizedWin, 100);
};