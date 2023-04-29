export default function nameValidator(field) {
    validLastNameRules(field);
}

function validLastNameRules(field) {
    const regex = /\d/;
    let fieldName = "";

    switch (field.name) {
        case 'nameField':
            fieldName = 'First Name';
            break;
        case 'lastNameField':
            fieldName = 'Last Name';
            break;
        default:
            fieldName = "field";
            break;
    }

    if (field.value.length < 3 ){
        console.log(`O ${fieldName} deve conter no mínimo 3 caracteres`);
    } else if (field.value.length > 15 && field.name === 'nameField' || field.value.length > 50 && field.name === 'lastNameField') {
        console.log(`O ${fieldName} deve conter no máximo ${field.name === 'nameField' ? '15' : '50'} caracteres`);
    } else if (regex.test(field.value)) {
        field.setCustomValidity(`O ${fieldName} não pode conter números`);
    }
}