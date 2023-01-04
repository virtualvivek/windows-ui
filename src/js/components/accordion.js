const Accordions = document.querySelectorAll(".app-accordion");

for (const Accordion of Accordions) {
  const accordionTitle = Accordion.getElementsByClassName("app-accordion-title")[0];
  const accordionContent = Accordion.getElementsByClassName("app-accordion-panel")[0];
  
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
        if(node.clientHeight !== undefined) { total_height += node.clientHeight; }
      });
      accordionContent.style.height = `${total_height}px`;
      down_icon?.classList.replace("icons10-angle-down", "icons10-angle-up");
    }
  };
};