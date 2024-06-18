const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const inputHandler = (evt) => {
    let text = evt.currentTarget.value.trim();
    textOutput.textContent = text.length > 0 ? text : "Anonymous";
}

textInput.addEventListener("input", inputHandler);