const SliderSettings = { fill: "var(--color-primary-adaptive)", background: "#999999" }
const Sliders = document.querySelectorAll(".app-range-slider");

for (const Slider of Sliders) {
  const SliderInput = Slider.querySelector("input");
  const maxVal = SliderInput.getAttribute("max");
  
    SliderInput.addEventListener("input", (event) => {
      var elVal = event.target.value;
      
      var SliderTexts = document.querySelectorAll(`[for="${SliderInput.id}"]`);
      SliderTexts.forEach(el => {
        el.innerHTML = elVal;
        if(el.matches(".app-range-slider-popup")) {
          el.style.left = (elVal/maxVal) *72+"%";
          el.style.visibility = "visible";
          el.style.opacity = 1;
        }
      });
      
      applyFill(event.target);
    });
  applyFill(SliderInput);
  
  SliderInput.addEventListener("mouseleave", () => {
    const popup_ = SliderInput.nextElementSibling;
    if(popup_.className == "app-range-slider-popup") {
      popup_.style.visibility = "hidden";
      popup_.style.opacity = 0;
    }
  });
};

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${SliderSettings.fill} ${percentage}%, ${SliderSettings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}