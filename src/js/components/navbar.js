const NavBar = document.getElementById("app-navbar-wrap-id");

function toggleNavBar() {
  if(document.querySelector(".app-navbar-overlay") === null) {
    var _app_navbar_overlay = document.createElement("div");
    _app_navbar_overlay.className = "app-navbar-overlay";
    NavBar.appendChild(_app_navbar_overlay);
  }

  NavBar.classList.toggle("toggled");

  let app_navbar_overlay = document.querySelector(".app-navbar-overlay");
  if(NavBar.classList.contains("toggled")) {
    app_navbar_overlay.classList.add("show");
  }
  else {
    app_navbar_overlay.classList.remove("show");
  }
  app_navbar_overlay.addEventListener("click", toggleNavBar);
}

const NavBar_ToggleButton = document.querySelectorAll('.app-navbar-toggle-button');
NavBar_ToggleButton.forEach(el => el.addEventListener("click", toggleNavBar));

// [Scrolling Shadow]------------------------------------------------------

const Navbar_Inner = NavBar.querySelector("nav");
const Navbar_Header = NavBar.querySelector(".app-navbar-header");

Navbar_Inner.addEventListener("scroll", (e) => {
  if(e.target.scrollTop < 50) {
    Navbar_Header.style.boxShadow = "none";
  }
  else {
    Navbar_Header.style.boxShadow = "0 6px 8px -8px var(--color_link_bg_active)";
  }
});