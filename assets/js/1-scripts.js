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
        valueMissing: "Campo não pode estar vazio",
        typeMismatch: "Caracteres não permitidos nesse campo",
        patternMismatch: "Formato não é válido nesse campo",
        tooShort: "É necessário mais caracteres nesse campo",
        customError: "Erro customizado",
    },
    lastNameField: {
        valueMissing: "Campo não pode estar vazio",
        typeMismatch: "Caracteres não permitidos nesse campo",
        patternMismatch: "Formato não é válido nesse campo",
        tooShort: "É necessário mais caracteres nesse campo",
        customError: "Erro customizado",
    },
    emailField: {
        valueMissing: "Campo não pode estar vazio",
        typeMismatch: "Caracteres não permitidos nesse campo",
        patternMismatch: "Formato não é válido nesse campo",
        tooShort: "É necessário mais caracteres nesse campo",
        customError: "Erro customizado",
    },
    passwordField: {
        valueMissing: "Campo não pode estar vazio",
        typeMismatch: "Caracteres não permitidos nesse campo",
        patternMismatch: "Formato não é válido nesse campo",
        tooShort: "É necessário mais caracteres nesse campo",
        customError: "Erro customizado",
    },
}

function checkField(field) {
    let message = "";
    field.setCustomValidity("");

    if (field.name === "nameField" || field.name === "lastNameField") {
        nameValidator(field);
    }
    
    if (field.name === "emailField") {
        const isValid = emailValidator(field.value);
        
        if(isValid) {
            console.log("email válido")
        } else {
            console.log("email inválido")
        }
    }

    if (field.name === "passwordField") {
        const isValid = passwordValidator(field.value);
        console.log(isValid);
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
        + isso porque o console.log aponta 'false' mas não aparece mensagem.
    
    - Se tentar dar submit com os inputs em branco, apontar mensagem customizada em baixo dos inputs
        + Portanto, criar um evento ou funcionalidade para conferir cada campo
        + Se todos os inputs estiverem preenchidos, pode dar submit
*/


/*
Os usuários devem ser capazes de:
    - Ver os estados de foco para todos os elementos interativos na página***
    - Receber uma mensagem de erro quando o `formulário` for enviado se:
        + Qualquer campo `input` estiver vazio. A mensagem para este erro deve dizer *"[Nome do campo] não pode estar vazio"*
        + O endereço de e-mail não estiver no formato correto (ou seja, um endereço de e-mail correto deve ter esta estrutura: 
            +`name@host.tld`). A mensagem para este erro deve dizer *"Parece que este não é um e-mail"*
*/