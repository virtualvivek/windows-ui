const navbar_items = [
  {
    "title": "Utilities",
    "href": "#"
  },
  {
    "title": "Appearance",
    "href": "appearance.html",
    "icon": "<i class='icons10-sun'></i>"
  },
  {
    "title": "Classes",
    "href": "classes.html",
    "icon": "<i class='icons10-puzzle'></i>"
  },
  {
    "title": "Colors",
    "href": "colors.html",
    "icon": "<i class='icons10-color-palette'></i>"
  },
  {
    "title": "Icons",
    "href": "icons.html",
    "icon": "<i class='icons10-deathly-hallows'></i>"
  },
  {
    "title": "Components",
    "href": "#"
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
    "title": "CommandBar",
    "href": "commandbar.html",
    "icon": "<i class='icons10-terminal'></i>"
  },
  {
    "title": "Dialogs",
    "href": "dialogs.html",
    "icon": "<i class='icons10-notification-image'></i>"
  },
  {
    "title": "InputText",
    "href": "inputtext.html",
    "icon": "<i class='icons10-keyboard'></i>"
  },
  // {
  //   "title": "Link",
  //   "href": "links.html",
  //   "icon": "<i class='icons10-link'></i>"
  // },
  {
    "title": "Loaders",
    "href": "loaders.html",
    "icon": "<i class='icons10-tasks'></i>"
  },
  {
    "title": "MenuBar",
    "href": "menubar.html",
    "icon": "<i class='icons10-align-left'></i>"
  },
  {
    "title": "ProgressBar",
    "href": "progressbars.html",
    "icon": "<i class='icons10-bar-chart'></i>"
  },
  {
    "title": "RadioButton",
    "href": "radiobutton.html",
    "icon": "<i class='icons10-checked'></i>"
  },
  {
    "title": "Select",
    "href": "select.html",
    "icon": "<i class='icons10-database'></i>"
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
  },
  {
    "title": "TableView",
    "href": "tableview.html",
    "icon": "<i class='icons10-grid-3'></i>"
  }
];

async function init_navbar_ul (active_item="Home", path="root") {

  for (const navbar_item of navbar_items) {
    const is_active = navbar_item.title === active_item ? 'active' : init_navbar_top_ul(active_item);
    const is_path = path === "root" ? "./docs/" : "./";
    navbar_item.icon = navbar_item.icon?.replace('./', is_path);

    let item;
    if(navbar_item.href == "#") {
      item = document.createElement('div');
      item.innerHTML = `<h1>${navbar_item.title}</h1><div class="app-hr"></div>`;
    }
    else {
      item = document.createElement('li');
      item.className = "app-navbar-list-item";
      item.innerHTML = `<a href=${navbar_item.title === active_item
                          ? "javascript:;"
                          : is_path+navbar_item.href} class="${is_active}">
                          ${navbar_item.icon}
                          <span>${navbar_item.title}</span>
                        </a>`;
    }
    document.getElementById("app-navbar-list").appendChild(item);
  };
}

function init_navbar_top_ul(active_itm) {
  let navbar_items = document.getElementsByClassName("app-navbar-list-item");
  Array.from(navbar_items).forEach((el) => {
    if(el.innerText == active_itm) {
      el.querySelector("a").classList.add("active");
    }
  });
}