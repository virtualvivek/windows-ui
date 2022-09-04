/*
MIT License
Copyright (c) 2020-22 Vivek Verma
https://github.com/virtualvivek/windows-ui-web
*/

// DayNight Switches -------------------------------------------------------------------------------------

function setThemeDay() {
  document.body.classList.remove("dark-theme");
  document.documentElement.style.setProperty('--color_scheme','light');
  document.documentElement.style.setProperty('--color_bg_light','');
  document.documentElement.style.setProperty('--color_text_dark','');
  document.documentElement.style.setProperty('--color_nav','');
  document.documentElement.style.setProperty('--color_grey_light','');
  document.documentElement.style.setProperty('--color_grey_light_alpha','');
  document.documentElement.style.setProperty('--color_link_bg_hover','');
  document.documentElement.style.setProperty('--color_link_bg_active','');
  document.documentElement.style.setProperty('--color_button','');
  document.documentElement.style.setProperty('--color_button_hover','');
  document.documentElement.style.setProperty('--color_primary_light','');
  document.documentElement.style.setProperty('--color_primary_dark','');
  document.getElementById("app-navbar-theme-switch").checked = true;
  document.getElementById("app-navbar-theme-switch-text").innerHTML="Day Mode";
}
function setThemeNight() {
  document.body.classList.add("dark-theme");
  document.documentElement.style.setProperty('--color_scheme','dark');
  document.documentElement.style.setProperty('--color_bg_light','#111111');
  document.documentElement.style.setProperty('--color_text_dark','#FFFFFF');
  document.documentElement.style.setProperty('--color_nav','#403E41');
  document.documentElement.style.setProperty('--color_grey_light','#444444');
  document.documentElement.style.setProperty('--color_grey_light_alpha','#444444D1');
  document.documentElement.style.setProperty('--color_link_bg_hover','#555555');
  document.documentElement.style.setProperty('--color_link_bg_active','#222222');
  document.documentElement.style.setProperty('--color_button','#555555');
  document.documentElement.style.setProperty('--color_button_hover','#999999');
  document.documentElement.style.setProperty('--color_primary_light','#FFFFFF');
  document.documentElement.style.setProperty('--color_primary_dark','#403E41');
  document.getElementById("app-navbar-theme-switch").checked = false;
  document.getElementById("app-navbar-theme-switch-text").innerHTML="Night Mode";
}

if(localStorage.getItem("isNight") == "true") {
  setThemeNight();
}

function addThemeChangeTransition(callback) {
  document.body.classList.add("transition-background-400ms");
  document.querySelector(".app-navbar-wrap nav").classList.add("transition-background-400ms");
  callback();
}

function toggleDayNight() {
  if(localStorage.getItem("isNight") == "true") {
    addThemeChangeTransition(() => {
      setThemeDay();
      localStorage.setItem("isNight", false);
    });
  }
  else {
    addThemeChangeTransition(() => {
      setThemeNight();
      localStorage.setItem("isNight", true);
    });
  }
}
const daynight_toggle_btn = document.querySelectorAll("#app-navbar-theme-switch");
daynight_toggle_btn.forEach(el => el.addEventListener("click", toggleDayNight));

// --------------------------------------------------------------------------------------------------

// Color Alpha Primary    ---------------------------------------------------------------------------

let alpha_color = window.getComputedStyle(document.documentElement).getPropertyValue("--PrimaryColor");
alpha_color = alpha_color.trim();
alpha_color = alpha_color+"9C";
document.documentElement.style.setProperty("--color_primary_alpha", alpha_color);

// --------------------------------------------------------------------------------------------------

// Navigation Bar -----------------------------------------------------------------------------------

const app_navbar = document.getElementById("app-navbar-wrap-id");
const app_navbar_inner = app_navbar.querySelector("nav");
const app_navbar_header = app_navbar.querySelector(".app-navbar-header");

function toggleNavBar() {
  if(document.querySelector(".app-navbar-overlay") === null) {
    var _app_navbar_overlay = document.createElement("div");
    _app_navbar_overlay.className = "app-navbar-overlay";
    app_navbar.appendChild(_app_navbar_overlay);
  }
  app_navbar.classList.toggle("toggled");

  let app_navbar_overlay = document.querySelector(".app-navbar-overlay");
  if(app_navbar.classList.contains("toggled")) {
    app_navbar_overlay.classList.add("show");
  }
  else {
    app_navbar_overlay.classList.remove("show");
  }
  app_navbar_overlay.addEventListener("click", toggleNavBar);
}

app_navbar_inner.addEventListener("scroll", (e) => {
  if(e.target.scrollTop < 50) {
    app_navbar_header.style.boxShadow = "none";
  }
  else {
    app_navbar_header.style.boxShadow = "0 6px 8px -8px var(--color_link_bg_active)";
  }
});

const navbar_toggle_btn = document.querySelectorAll('.app-navbar-toggle-button');
navbar_toggle_btn.forEach(el => el.addEventListener("click", toggleNavBar));

// --------------------------------------------------------------------------------------------------

// NavBarSubMenu -----------------------------------------------------------------------------------

const subMenus = document.querySelectorAll(".app-nav-submenu");
for (const subMenu of subMenus) {
  const subMenuTitle = subMenu.getElementsByClassName("app-nav-submenu-title")[0];
  const subMenuContent = subMenu.getElementsByClassName("app-nav-submenu-content")[0];

  subMenuTitle.onclick = function() {
    subMenuContent.classList.toggle("show");
  };
};

// --------------------------------------------------------------------------------------------------

// Accordion ----------------------------------------------------------------------------------------

const Accordions = document.querySelectorAll(".app-accordion-item");
for (const Accordion of Accordions) {
  const accordionTitle = Accordion.getElementsByClassName("app-accordion-title")[0];
  const accordionContent = Accordion.getElementsByClassName("app-accordion-content")[0];
  
  accordionTitle.onclick = function() {
    accordionContent.classList.toggle("show");
  };
};

// --------------------------------------------------------------------------------------------------

// Alert --------------------------------------------------------------------------------------------

const AlertTriggers = document.querySelectorAll('[data-toggle="modal"]');

for (const AlertTrigger of AlertTriggers) {
 const getAlertID = AlertTrigger.getAttribute("data-target");

  AlertTrigger.onclick = function(e) {
    if (e.target !== this && AlertTrigger.classList.contains("app-alert"))
    return;
    document.getElementById(getAlertID).classList.toggle("show");
  };
};

// --------------------------------------------------------------------------------------------------

// SliderBar ----------------------------------------------------------------------------------------

const settings = { fill: "var(--PrimaryColor)", background: "#999999" }
// First find all the SliderBar
const sliders = document.querySelectorAll(".app-range-slider");
for (const slider of sliders) {
  slider.querySelector("input").addEventListener("input", (event) => {
    if(slider.querySelector("span")) {
      slider.querySelector('span').innerHTML = event.target.value;
    }
    applyFill(event.target);
  });
  applyFill(slider.querySelector("input"));
};

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}

// --------------------------------------------------------------------------------------------------

// Loaders ---------------------------------------------------------------------------------------

const loader_busy_body='<div class="app-ldr-busy ball-1"><div class="ldr-busy-ball"></div></div>'
                      +'<div class="app-ldr-busy ball-2"><div class="ldr-busy-ball"></div></div>'
                      +'<div class="app-ldr-busy ball-3"><div class="ldr-busy-ball"></div></div>'
                      +'<div class="app-ldr-busy ball-4"><div class="ldr-busy-ball"></div></div>'
                      +'<div class="app-ldr-busy ball-5"><div class="ldr-busy-ball"></div></div>';

const loader_busys = document.querySelectorAll(".app-loader-busy");
for (const loaderbusy of loader_busys) { loaderbusy.innerHTML = loader_busy_body; };

const loader_bar_body='<div class="app-ldr-bar first"></div>'
                      +'<div class="app-ldr-bar second"></div>'
                      +'<div class="app-ldr-bar third"></div>'
                      +'<div class="app-ldr-bar fourth"></div>';

const loader_bars = document.querySelectorAll(".app-loader-bar");
for (const loaderbars of loader_bars) { loaderbars.innerHTML = loader_bar_body; };

// --------------------------------------------------------------------------------------------------

// InputPassword ------------------------------------------------------------------------------------

const input_text_passwords = document.querySelectorAll(".app-input-container");
for (const input_text_pass of input_text_passwords) {
  const input_field_pass = input_text_pass.getElementsByTagName("input")[0];
  const un_mask_button = input_text_pass.getElementsByTagName("button");

  if(un_mask_button.length !== 0) {
    un_mask_button[0].onclick = function() {
      if(input_field_pass.type === "password") {
        input_field_pass.type = "text";
      }
      else {
        input_field_pass.type = "password";
      }
    };
  }
};

// --------------------------------------------------------------------------------------------------


