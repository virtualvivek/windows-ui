const home_checkbox = document.getElementById('home_toggle_code');
const home_code_content_1 = document.getElementById("code_content_1");
const home_code_content_2 = document.getElementById("code_content_2");

home_checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    home_code_content_1.style.display = "none";
    home_code_content_2.style.display = "flex";
  } else {
    home_code_content_2.style.display = "none";
    home_code_content_1.style.display = "flex";
  }
})