const CollapseTriggers = document.querySelectorAll('[data-win-toggle="collapse"]');

for (const CollapseTrigger of CollapseTriggers) {
 let getCllpsePanelID = CollapseTrigger.getAttribute("data-win-target");
 let CollapsePanel = document.querySelector(getCllpsePanelID);
 let DownIcon = CollapseTrigger.getElementsByClassName("icons10-angle-down")[0]
            || CollapseTrigger.getElementsByClassName("icons10-angle-up")[0];

  CollapseTrigger.addEventListener("click", () => {
    if(CollapsePanel.classList.contains("show")) {
      CollapsePanel.classList.remove("show");
      CollapsePanel.style.height = "";
      DownIcon?.classList.replace("icons10-angle-up", "icons10-angle-down");
    }
    else {
      CollapsePanel.classList.add("show");
      let total_height = 0;
      CollapsePanel.childNodes.forEach((node) => {
        if(node.clientHeight !== undefined) {
          let _margin = parseInt(window.getComputedStyle(node).marginTop) + parseInt(window.getComputedStyle(node).marginBottom);
          total_height += node.clientHeight+_margin;
        }
      });
      CollapsePanel.style.height = `${total_height}px`;
      DownIcon?.classList.replace("icons10-angle-down", "icons10-angle-up");
    }
  });
};