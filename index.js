const passwordLengthInput = document.getElementById('passwordLengthInput')
const includeUpperCaseLettersInput = document.getElementById('includeUpperCaseLettersInput')
const includeNumbersInput = document.getElementById('includeNumbersInput')
const includeSpecialSymbolsInput = document.getElementById('includeSpecialSymbols')
const generatePasswordButton = document.getElementById('generatePasswordButton')
const copyPasswordButton = document.getElementById('copyPasswordButton')
const resultBox = document.getElementById('resultBox')
const errorMessageBox = document.getElementById('errorMessageBox')

const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '_', ';', ':', '<', ',', '>', '.', '/', '?']

function getRandom(limit) {
    let random = Math.random()
    random = Math.floor(random * limit)
    return random
}


function getNextCharacter(choice) {
    if (choice === 0) {
        let random = getRandom(lowerCaseLetters.length)
        return lowerCaseLetters[random]
    } else if (choice === 1) {
        let random = getRandom(upperCaseLetters.length)
        return upperCaseLetters[random]
    } else if (choice === 2) {
        let random = getRandom(specialSymbols.length)
        return specialSymbols[random]
    } else {
        return getRandom(10)
    }
}

function getChoices() {
    const includeUpperCaseLetters = includeUpperCaseLettersInput.checked
    const includeSpecialSymbols = includeSpecialSymbolsInput.checked
    const includeNumbers = includeNumbersInput.checked
    const choices = [0]
    if (includeUpperCaseLetters) {
        choices.push(1)
    }
    if (includeSpecialSymbols) {
        choices.push(2)
    }
    if (includeNumbers) {
        choices.push(3)
    }
    return choices
}



function generatePassword() {
    let result = ''
    const choices = getChoices()
    for (let i = 1; i <= passwordLengthInput.valueAsNumber; i++) {
        let choice = choices[getRandom(choices.length)]
        result = result + getNextCharacter(choice)
    }
    resultBox.innerText = result
}

function copyPassword() {
    const password = resultBox.innerText
    if (password.length >= 6) {
        window.navigator.clipboard.writeText(password)
            .then(() => console.log('copied'))
    } else {
        errorMessageBox.innerText = 'password is not generated!'
    }
}
generatePasswordButton.addEventListener('click', generatePassword)
copyPasswordButton.addEventListener('click', copyPassword)

