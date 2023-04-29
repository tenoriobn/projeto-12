import nameValidator from "./2-nameValidator.js";
import emailValidator from "./3-emailValidator.js";
import passwordValidator from "./4-passwordValidator.js";

const requiredField = document.querySelectorAll("[required]");

requiredField.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
    field.addEventListener("invalid", event => event.preventDefault());
})

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const messages = {
    nameField: {
        valueMissing: "First Name cannot be empty",
        tooShort: "Need more characters in the name",
        customError: "The name cannot contain numbers",
    },
    lastNameField: {
        valueMissing: "Last name cannot be empty",
        tooShort: "Need more characters in last name",
        customError: "Last name cannot contain numbers",
    },
    emailField: {
        valueMissing: "Email cannot be empty",
        tooShort: "Need more characters in email",
        customError: "Look like this is not an email",
    },
    passwordField: {
        valueMissing: "Password cannot be empty",
        tooShort: "Need more characters in password",
        customError: "Invalid password. Try something like '@Abcd1234'",
    },
}

function checkField(field) {
    let message = "";
    field.setCustomValidity("");

    if (field.name === "nameField" || field.name === "lastNameField") {
        nameValidator(field);
    }
    
    if (field.name === "emailField") {
        emailValidator(field);
    }

    if (field.name === "passwordField") {
        passwordValidator(field);
    }

    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
            console.log(message)
        }
    })

    let errorMessage = field.parentNode.querySelector(".error__message");
    let errorInput = field.parentNode.querySelector(".form__field");
    const inputValidator = field.checkValidity();

    if (!inputValidator) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        errorInput.classList.add('form__field__error');
        errorInput.placeholder = "";
    } else {
        errorMessage.textContent = "";
        errorInput.classList.remove('form__field__error');
    }
}



/* 
    - Criar mensagens customizadas e conferir no console 
        + se ocorrer bem, imprimir para o usuário em baixo do input.**
        + Não esquecer de mostrar o icon de "!" dentro dos inputs não válidados.**
    
    - Corrigir input de password para que se retornar true apareça mensagem de erro.
        + isso porque o console.log aponta 'false' mas não aparece mensagem.**
        + Isso acontece nos outros inputs quando se trata de nome com número, isso deveria disparar 'typeMismatch' ou 'patternMismatch'**
    
    - Se tentar dar submit com os inputs em branco, apontar mensagem customizada em baixo dos inputs
        + Portanto, criar um evento ou funcionalidade para conferir cada campo
        + Se todos os inputs estiverem preenchidos, pode dar submit
*/


/*
Os usuários devem ser capazes de:
    - Ver os estados de foco para todos os elementos interativos na página***
    - Receber uma mensagem de erro quando o `formulário` for enviado se:
        + Qualquer campo `input` estiver vazio. A mensagem para este erro deve dizer *"[Nome do campo] não pode estar vazio"

        + O endereço de e-mail não estiver no formato correto (ou seja, um endereço de e-mail correto deve ter esta estrutura: 
            +`name@host.tld`). A mensagem para este erro deve dizer *"Parece que este não é um e-mail"**
*/