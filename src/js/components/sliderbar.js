const SliderSettings = { fill: "var(--PrimaryColor)", background: "#999999" }
const Sliders = document.querySelectorAll(".app-range-slider");

for (const Slider of Sliders) {
  Slider.querySelector("input").addEventListener("input", (event) => {
    if(Slider.querySelector("span")) {
      Slider.querySelector("span").innerHTML = event.target.value;
    }
    applyFill(event.target);
  });
  applyFill(Slider.querySelector("input"));
};

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${SliderSettings.fill} ${percentage}%, ${SliderSettings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}