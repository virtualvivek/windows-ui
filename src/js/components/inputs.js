const InputPassword = document.querySelectorAll(".app-input-container");
for (const InputPass of InputPassword) {
  const input_field_pass = InputPass.getElementsByTagName("input")[0];
  const un_mask_button = InputPass.getElementsByTagName("button");

  if(un_mask_button.length !== 0) {
    un_mask_button[0].onclick = function() {
      input_field_pass.type === "password" ? input_field_pass.type = "text" : input_field_pass.type = "password";
    };
  }
};