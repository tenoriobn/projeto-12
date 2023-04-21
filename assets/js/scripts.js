const requiredField = document.querySelectorAll("[required]");

requiredField.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
})

function checkField(field) {
    console.log("Deu certo!")
}



/*
Os usuários devem ser capazes de:
    - Ver os estados de foco para todos os elementos interativos na página***
    - Receber uma mensagem de erro quando o `formulário` for enviado se:
        + Qualquer campo `input` estiver vazio. A mensagem para este erro deve dizer *"[Nome do campo] não pode estar vazio"*
        + O endereço de e-mail não estiver no formato correto (ou seja, um endereço de e-mail correto deve ter esta estrutura: 
            +`name@host.tld`). A mensagem para este erro deve dizer *"Parece que este não é um e-mail"*
*/