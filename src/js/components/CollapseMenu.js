function CollapseMenu(collapseItem, collapseTitle, collapseBody, offset) {
  const Accordions = document.querySelectorAll(collapseItem);

  for (const Accordion of Accordions) {
    const accordionTitle = Accordion.getElementsByClassName(collapseTitle)[0];
    const accordionContent = Accordion.getElementsByClassName(collapseBody)[0];
    
    accordionTitle.onclick = function() {
      // accordionContent.classList.toggle("show");
      let down_icon = accordionTitle.getElementsByClassName("icons10-angle-down")[0]
                  || accordionTitle.getElementsByClassName("icons10-angle-up")[0];
      
      if(accordionContent.classList.contains("show")) {
        accordionContent.classList.remove("show");
        accordionContent.style.height = "";
        down_icon?.classList.replace("icons10-angle-up", "icons10-angle-down");
      }
      else {
        accordionContent.classList.add("show");
        let total_height = 0;
        
        accordionContent.childNodes.forEach((node) => {
          if(node.clientHeight !== undefined) {
            let _platform = window.getComputedStyle(document.documentElement).getPropertyValue("--platform");
            let _margin = _platform.includes("windows11") && offset ? 5 : 0;
            total_height += node.clientHeight+_margin;
          }
        });
        accordionContent.style.height = `${total_height}px`;
        down_icon?.classList.replace("icons10-angle-down", "icons10-angle-up");
      }
    };
  };
}

CollapseMenu(".app-accordion", "app-accordion-title", "app-accordion-panel", false);
CollapseMenu(".app-navbar-submenu", "app-navbar-submenu-title", "app-navbar-submenu-content", true);
