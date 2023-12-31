const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output-div");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function generateURL (text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured: " + error);
}

function clickHandler() {
    let inputText = txtInput.value;
    
    fetch(generateURL(inputText))
    .then(response => response.json())
    .then(json => {
        let outputText = json.contents.translated;
        outputDiv.innerText = outputText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
