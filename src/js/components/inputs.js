const PwdTogglers = document.querySelectorAll('[data-win-toggle="password"]');

for (const PwdToggler of PwdTogglers) {
 const getInputPwdID = PwdToggler.getAttribute("data-win-target");
  PwdToggler.addEventListener("click", () => {
    const InputPass = document.querySelector(getInputPwdID);
    InputPass.type === "password" ? InputPass.type = "text" : InputPass.type = "password";
  });
};


const TxtClearers = document.querySelectorAll('[data-win-clear="text"]');

for (const TxtClearer of TxtClearers) {
 const getInputTxtID = TxtClearer.getAttribute("data-win-target");
 const InputTxt = document.querySelector(getInputTxtID);
 InputTxt.addEventListener("input", () => {
  InputTxt.value !=="" ? TxtClearer.style.visibility = "visible" : TxtClearer.style.visibility = "hidden";
});
 TxtClearer.addEventListener("click", () => {
    InputTxt.value = "";
    InputTxt.focus();
    TxtClearer.style.visibility = "hidden";
  });
};