const Accordions = document.querySelectorAll(".app-accordion-item");

for (const Accordion of Accordions) {
  const accordionTitle = Accordion.getElementsByClassName("app-accordion-title")[0];
  const accordionContent = Accordion.getElementsByClassName("app-accordion-content")[0];
  
  accordionTitle.onclick = function() {
    accordionContent.classList.toggle("show");
  };
};