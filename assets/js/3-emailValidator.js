export default function emailValidator(email) {
    return validEmailRules(email);
}

function validEmailRules(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}