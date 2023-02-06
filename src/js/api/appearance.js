function setDarkScheme(save_changes = false) {
  document.documentElement.setAttribute("data-theme", "dark");
  document.body.classList.add("dark-theme");
  
  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = false;
    document.getElementById("app-navbar-theme-switch-text").innerHTML="Night Mode";
  }
  if(save_changes) { localStorage.setItem(lc_storage_theme_key, "dark"); }
}

if(localStorage.getItem(lc_storage_theme_key) == "dark") {
  setDarkScheme(false);
}

function setLightScheme(save_changes = false) {
  document.documentElement.setAttribute("data-theme", "light");
  document.body.classList.remove("dark-theme");

  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = true;
    document.getElementById("app-navbar-theme-switch-text").innerHTML="Day Mode";
  }
  if(save_changes) { localStorage.setItem(lc_storage_theme_key, "light"); }
}

const getColorScheme = () => {
  let color = window.getComputedStyle(document.documentElement).getPropertyValue("color-scheme");
  return color.toString();
}

function addThemeChangeTransition(callback) {
  document.body.classList.add("transition-background-400ms");
  document.querySelector(".app-navbar-wrap nav").classList.add("transition-background-400ms");
  callback();
}

// [ThemeSwitch Toggle] -------------------------------------------

function toggleDayNight() {
  addThemeChangeTransition(() => {
    getColorScheme() === "dark" ? setLightScheme(true) : setDarkScheme(true);
  });
}

const DayNightSwitch = document.querySelectorAll("#app-navbar-theme-switch");
DayNightSwitch.forEach(el => el.addEventListener("click", toggleDayNight));


const Appearance = {
  setDarkScheme,
  setLightScheme,
  getColorScheme
}