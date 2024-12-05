// Funzione per verificare se una stringa è un palindromo
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Evento click sul pulsante
document.getElementById("check-btn").addEventListener("click", () => {
    const textInput = document.getElementById("text-input").value.trim();
    const resultDiv = document.getElementById("result");

    if (textInput.length === 0) {
        resultDiv.innerText = "Please input a value";
        resultDiv.className = "error";
        resultDiv.style.display = "block";
    } else if (isPalindrome(textInput)) {
        resultDiv.innerText = `${textInput} is a palindrome`;
        resultDiv.className = "";
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerText = `${textInput} is not a palindrome`;
        resultDiv.className = "error";
        resultDiv.style.display = "block";
    }
});