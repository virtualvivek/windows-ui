const SliderSettings = { fill: "var(--color-primary-adaptive)", background: "#999999" }
const Sliders = document.querySelectorAll(".app-range-slider");

for (const Slider of Sliders) {
  const SliderInput = Slider.querySelector("input");
  SliderInput.addEventListener("input", (event) => {
    if(!(SliderInput.id === "" || SliderInput.id === undefined)) {
      const SliderText = document.querySelector(`[for="${SliderInput.id}"]`);
            SliderText.innerHTML = event.target.value;
    }
    applyFill(event.target);
  });
  applyFill(SliderInput);
};

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${SliderSettings.fill} ${percentage}%, ${SliderSettings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}