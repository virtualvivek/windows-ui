setTimeout(() => {
  let alpha_color = window.getComputedStyle(document.documentElement).getPropertyValue("--PrimaryColor");
  alpha_color = alpha_color.trim();
  alpha_color = alpha_color+"9C";
  document.documentElement.style.setProperty("--color_primary_alpha", alpha_color);
}, 50);
