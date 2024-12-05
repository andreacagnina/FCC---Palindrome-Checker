function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

// Blocca i caratteri speciali durante l'inserimento
textInput.addEventListener("input", (event) => {
    textInput.value = textInput.value.replace(/[^a-zA-Z]/g, ''); // Permetti solo lettere, numeri e spazi
});

// Aggiungi evento click al pulsante
checkBtn.addEventListener("click", () => {
    const inputValue = textInput.value.trim(); // Rimuovi spazi all'inizio e alla fine

    if (inputValue.length === 0) {
        resultDiv.innerText = "Please input a value";
        resultDiv.classList.remove("success");
        resultDiv.classList.add("error");
        resultDiv.style.display = "block";
    } else if (isPalindrome(inputValue)) {
        resultDiv.innerText = `"${inputValue}" is a palindrome`;
        resultDiv.classList.remove("error");
        resultDiv.classList.add("success");
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerText = `"${inputValue}" is not a palindrome`;
        resultDiv.classList.remove("success");
        resultDiv.classList.add("error");
        resultDiv.style.display = "block";
    }
});