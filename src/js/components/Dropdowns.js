const DropdownTriggers = document.querySelectorAll('[data-win-toggle="dropdown"]');

for (const DropdownTrigger of DropdownTriggers) {
 const getDropdownID = DropdownTrigger.getAttribute("data-win-target");
 const DropdownList = document.querySelector(getDropdownID);
 const DropdownListItems = DropdownList.querySelectorAll("li");
 const DropdownListSearch = DropdownList.querySelector('input[type="search"]');

  const addClickListener = () => {
    DropdownList.classList.add("show");
    document.addEventListener("mousedown", outsideClickListener);
  }

  const removeClickListener = () => {
    DropdownList.classList.remove("show");
    document.removeEventListener("mousedown", outsideClickListener);
  }

  const outsideClickListener = event => {
    if (!(DropdownList.contains(event.target)
      || DropdownTrigger.contains(event.target)) && DropdownList.classList.contains("show")) {
      removeClickListener();
    }
  }

  DropdownTrigger.addEventListener("click", (event) => {
    // getScreenOffset() from "../api/getScreenOffset.js"
    getScreenOffset(DropdownTrigger)
      ? DropdownList.classList.add("reverse")
      : DropdownList.classList.remove("reverse");
    DropdownList.classList.contains("show") ? removeClickListener() : addClickListener(); 
  });

  // On items click
  for (const DropdownListItem of DropdownListItems) {
    DropdownListItem.addEventListener("click", () => {
      // Checking if dropdown is a [✓] checkable list --
      if(DropdownList.parentNode.classList.contains("app-select-text")) {
        [].forEach.call(DropdownListItems, function(el) {
          el.classList.remove("selected");
        });
        DropdownListItem.classList.add("selected");
        DropdownTrigger.textContent = DropdownListItem.textContent;
      }

      removeClickListener();
    });
  }

  // On Search list items
  if(DropdownListSearch) {
    DropdownListSearch.addEventListener("keyup", () => {
      var filter, a, i, txtValue;
      filter = DropdownListSearch.value.toUpperCase();
      for (i = 0; i < DropdownListItems.length; i++) {
        a = DropdownListItems[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        (txtValue.toUpperCase().indexOf(filter) > -1)
        ? DropdownListItems[i].style.display = ""
        : DropdownListItems[i].style.display = "none";
      }
    });
  }
};