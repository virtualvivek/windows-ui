var root_ = document.documentElement;

function setDarkScheme() {
  root_.setAttribute("data-theme", "dark");
  document.body.classList.add("dark-theme");
  
  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = true;
  }
  localStorage.setItem(lc_storage_theme_key, "dark");
}

const getColorScheme = () => {
  let color = window.getComputedStyle(root_).getPropertyValue("color-scheme");
  return color.toString();
}

if(localStorage.getItem(lc_storage_theme_key) == "dark") {
  setDarkScheme();
}

function setLightScheme() {
  root_.setAttribute("data-theme", "light");
  document.body.classList.remove("dark-theme");

  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = false;
  }
  localStorage.setItem(lc_storage_theme_key, "light");
}

if(localStorage.getItem(lc_storage_theme_key) == "light") {
  setLightScheme();
}

function setSystemScheme() {
  localStorage.setItem(lc_storage_theme_key, "system");
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkScheme();
  } else { setLightScheme() }
}

// [ThemeSwitch Toggle] -------------------------------------------
function toggleDayNight() {
  getColorScheme() === "dark" ? setLightScheme() : setDarkScheme();
}

const DayNightSwitch = document.querySelectorAll("#app-navbar-theme-switch");
DayNightSwitch.forEach(el => el.addEventListener("click", toggleDayNight));


const Appearance = {
  setDarkScheme,
  setLightScheme,
  setSystemScheme,
  getColorScheme
}