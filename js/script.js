let firstName = "Riki Rosita"
const birthDate = 1999

const firstNameInput = document.getElementById("first-name-input")
const submitButton = document.getElementById("submit-button")
console.log("Sudah diisi")

firstNameInput.addEventListener("keyup", function(eventt){
    var firstName = firstNameInput.value
    if (firstName == "") {
        submitButton.disabled = "none"
    } else {
        submitButton.display = "grid"
    }
})