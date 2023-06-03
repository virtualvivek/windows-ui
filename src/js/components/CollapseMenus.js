const CollapseTriggers = document.querySelectorAll('[data-win-toggle="collapse"]');

for (const CollapseTrigger of CollapseTriggers) {
 let getCllpsePanelID = CollapseTrigger.getAttribute("data-win-target");
 let CollapsePanel = document.querySelector(getCllpsePanelID);

  CollapseTrigger.addEventListener("click", () => {
    if(CollapsePanel.classList.contains("show")) {
      CollapsePanel.classList.remove("show");
      CollapsePanel.style.height = "";
      CollapseTrigger.setAttribute("aria-expanded", false);
    }
    else {
      CollapsePanel.classList.add("show");
      CollapseTrigger.setAttribute("aria-expanded", true);

      let total_height = 0;
      CollapsePanel.childNodes.forEach((node) => {
        if(node.clientHeight !== undefined) {
          let _margin = parseInt(window.getComputedStyle(node).marginTop) + parseInt(window.getComputedStyle(node).marginBottom);
          total_height += node.clientHeight+_margin;
        }
      });
      CollapsePanel.style.height = `${total_height}px`;
    }
  });
};