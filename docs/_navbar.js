const navbar_items = [
  {
    "title": "Home",
    "href": "../index.html",
    "icon": "<img src='./assets/mountain.jpg'>"
  },
  {
    "title": "Getting Started",
    "href": "gettingStarted.html",
    "icon": "<i class='icons10-terminal'></i>"
  },
  {
    "title": "Accordion",
    "href": "accordion.html",
    "icon": "<i class='icons10-down-squared'></i>"
  },
  {
    "title": "Alerts",
    "href": "alert.html",
    "icon": "<i class='icons10-advertising'></i>"
  },
  {
    "title": "Buttons",
    "href": "buttons.html",
    "icon": "<i class='icons10-controller'></i>"
  },
  {
    "title": "CheckBox",
    "href": "checkbox.html",
    "icon": "<i class='icons10-checked-2'></i>"
  },
  {
    "title": "InputText",
    "href": "inputText.html",
    "icon": "<i class='icons10-keyboard'></i>"
  },
  {
    "title": "InputSearch",
    "href": "inputSearch.html",
    "icon": "<i class='icons10-search'></i>"
  },
  {
    "title": "Link",
    "href": "links.html",
    "icon": "<i class='icons10-link'></i>"
  },
  {
    "title": "Loaders",
    "href": "loaders.html",
    "icon": "<i class='icons10-tasks'></i>"
  },
  {
    "title": "ProgressBar",
    "href": "progressBars.html",
    "icon": "<i class='icons10-bar-chart'></i>"
  },
  {
    "title": "RadioButton",
    "href": "radioButton.html",
    "icon": "<i class='icons10-checked'></i>"
  },
  {
    "title": "SliderBar",
    "href": "sliderbar.html",
    "icon": "<i class='icons10-arrow-right'></i>"
  },
  {
    "title": "Switch",
    "href": "switch.html",
    "icon": "<i class='icons10-touch'></i>"
  }
];

function init_navbar_ul(active_item="Home", path="root") {
  for (const navbar_item of navbar_items) {

    const is_active = navbar_item.title === active_item ? 'active' : '';
    
    const is_path = path === "root" ? "./docs/" : "./";
    navbar_item.icon = navbar_item.icon.replace('./', is_path);

    const dividerHeader = `<h1>Components</h1><div class="app-hr"></div>`;
    if(navbar_items.indexOf(navbar_item) === 2) {
      document.getElementById("app-navbar-list").innerHTML += dividerHeader;
    }

    const item = `<li class="app-navbar-list-item">
                    <a href=${is_path}${navbar_item.href} class="${is_active}">
                      ${navbar_item.icon}
                      <span>${navbar_item.title}</span>
                    </a>
                  </li>`;
    
    document.getElementById("app-navbar-list").innerHTML += item;
    //console.log(navbar_items.indexOf(navbar_item));
  };
}