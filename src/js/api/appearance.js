function setDarkScheme() {
  document.documentElement.setAttribute("data-theme", "dark");
  document.body.classList.add("dark-theme");
  
  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = false;
    document.getElementById("app-navbar-theme-switch-text").innerHTML="Night Mode";
  }
}

if(localStorage.getItem("isNight") == "true") {
  setDarkScheme();
}

function setLightScheme() {
  document.documentElement.setAttribute("data-theme", "light");
  document.body.classList.remove("dark-theme");

  if(document.getElementById("app-navbar-theme-switch")) {
    document.getElementById("app-navbar-theme-switch").checked = true;
    document.getElementById("app-navbar-theme-switch-text").innerHTML="Day Mode";
  }
}

function addThemeChangeTransition(callback) {
  document.body.classList.add("transition-background-400ms");
  document.querySelector(".app-navbar-wrap nav").classList.add("transition-background-400ms");
  callback();
}

// [ThemeSwitch Toggle] -------------------------------------------

function toggleDayNight() {
  if(localStorage.getItem("isNight") == "true") {
    addThemeChangeTransition(() => {
      setLightScheme();
      localStorage.setItem("isNight", false);
    });
  }
  else {
    addThemeChangeTransition(() => {
      setDarkScheme();
      localStorage.setItem("isNight", true);
    });
  }
}
const DayNightSwitch = document.querySelectorAll("#app-navbar-theme-switch");
DayNightSwitch.forEach(el => el.addEventListener("click", toggleDayNight));