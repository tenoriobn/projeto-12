export default function passwordValidator(field) {
    return validPasswordRules(field);
}

function validPasswordRules(field) {
    const capitalLetters = /[A-Z]/;
    const smallLetters = /[a-z]/;
    const numbers = /[0-9]/;
    const specialCharacters = /[!@#$%^&*()-_]/;

    if (field.value.length < 8) {
        console.log('senha muito curta')
        return false;
    }

    let auxiliaryCapital = 0;
    let auxiliarySmall = 0;
    let auxiliaryNumbers = 0;
    let auxiliarySpecial = 0;

    for (let i = 0; i < field.value.length; i++) {
        if (capitalLetters.test(field.value[i])) {
            auxiliaryCapital++;
        } else if (smallLetters.test(field.value[i])) {
            auxiliarySmall++;
        } else if (numbers.test(field.value[i])) {
            auxiliaryNumbers++;
        } else if (specialCharacters.test(field.value[i])) {
            auxiliarySpecial++;
        }
    }

    if (auxiliaryCapital > 0 && auxiliarySmall > 0 && auxiliaryNumbers > 0 && auxiliarySpecial > 0) {
        return true;
    }

    field.setCustomValidity("Invalid password. Try something like '@abcd1234'")
    return false;
}














// export default function passwordValidator(password) {
//     return validPasswordRules(password);
// }

// function validPasswordRules(password) {
//     const capitalLetters = /[A-Z]/;
//     const smallLetters = /[a-z]/;
//     const numbers = /[0-9]/;
//     const specialCharacters = /[!@#$%^&*()-_]/;

//     if (password.length < 8) {
//         return false;
//     }

//     let auxiliaryCapital = 0;
//     let auxiliarySmall = 0;
//     let auxiliaryNumbers = 0;
//     let auxiliarySpecial = 0;

//     for (let i = 0; i < password.length; i++) {
//         if (capitalLetters.test(password[i])) {
//             auxiliaryCapital++;
//         } else if (smallLetters.test(password[i])) {
//             auxiliarySmall++;
//         } else if (numbers.test(password[i])) {
//             auxiliaryNumbers++;
//         } else if (specialCharacters.test(password[i])) {
//             auxiliarySpecial++;
//         }
//     }

//     if (
//         auxiliaryCapital > 0 &&
//         auxiliarySmall > 0 &&
//         auxiliaryNumbers > 0 &&
//         auxiliarySpecial > 0
//     ) {
//         return true;
//     }

//     return false;
// }