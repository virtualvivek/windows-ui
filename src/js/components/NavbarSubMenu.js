const subMenus = document.querySelectorAll(".app-nav-submenu");
for (const subMenu of subMenus) {
  const subMenuTitle = subMenu.getElementsByClassName("app-nav-submenu-title")[0];
  const subMenuContent = subMenu.getElementsByClassName("app-nav-submenu-content")[0];

  subMenuTitle.onclick = function() {
    subMenuContent.classList.toggle("show");
  };
};