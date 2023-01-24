const PwdTogglers = document.querySelectorAll('[data-win-toggle="password"]');

for (const PwdToggler of PwdTogglers) {
 const getInputPwdID = PwdToggler.getAttribute("data-win-target");
  PwdToggler.addEventListener("click", () => {
    const InputPass = document.querySelector(getInputPwdID);
    InputPass.type === "password" ? InputPass.type = "text" : InputPass.type = "password";
  });
};