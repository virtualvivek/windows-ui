const MenuBars = document.querySelectorAll(".app-menubar, .app-dropdown-menu.app-select-text");

for (const MenuBar of MenuBars) {
  let MenuBarTitle = MenuBar.querySelector("span");
  let MenuBarList = MenuBar.querySelector(".app-dropdown-list");
  let MenuBarListItems = MenuBarList.querySelectorAll(".app-dropdown-list-item");
  let MenuBarListSearch = MenuBarList.querySelector('input[type="search"]');

  const addClickListener = () => {
    MenuBarList.classList.add("show");
    document.addEventListener("mousedown", outsideClickListener);
  }

  const removeClickListener = () => {
    MenuBarList.classList.remove("show");
    document.removeEventListener("mousedown", outsideClickListener);
  }

  const outsideClickListener = event => {
    if (!(MenuBarList.contains(event.target) || MenuBarTitle.contains(event.target)) && MenuBarList.classList.contains("show")) {
      removeClickListener();
    }
  }

  MenuBarTitle.addEventListener("click", (event) => {
    getScreenOffset(MenuBar) ? MenuBarList.classList.add("reverse") : MenuBarList.classList.remove("reverse");
    MenuBarList.classList.contains("show") ? removeClickListener() : addClickListener(); 
  });

  for (const MenuBarListItem of MenuBarListItems) {
    MenuBarListItem.addEventListener("click", () => {

      // Checking if dropdown is a ✓ checkable list --
      let isCheckable = false;
      [].forEach.call(MenuBarListItems, function(el) {
        el.classList.remove("selected");
        isCheckable = true;
      });
      if(isCheckable){
        MenuBarListItem.classList.add("selected");
        MenuBarTitle.textContent = MenuBarListItem.textContent;
      }

      removeClickListener();
    });
  }

  if(MenuBarListSearch) {
    MenuBarListSearch.addEventListener("keyup", () => {
      var filter, a, i, txtValue;
      filter = MenuBarListSearch.value.toUpperCase();

      for (i = 0; i < MenuBarListItems.length; i++) {
        a = MenuBarListItems[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        (txtValue.toUpperCase().indexOf(filter) > -1)
        ? MenuBarListItems[i].style.display = ""
        : MenuBarListItems[i].style.display = "none";
      }
    });
  }

};