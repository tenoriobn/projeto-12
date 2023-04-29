export default function emailValidator(field) {
    validEmailRules(field);

}

function validEmailRules(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!field.value){
        console.log('O email deve conter no mínimo 8 caracteres');
        return false
    } else if (field.value.length < 8) {
        console.log('O email deve conter no mínimo 8 caracteres');
        return false;
    } else if (!emailRegex.test(field.value)) {
        field.setCustomValidity('Invalid email address');
        return false;
    }
}