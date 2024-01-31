// function mandarPedido(){
//     event.preventDefault();
//     // Seu código para enviar o pedido

//     // Exibe um alerta de sucesso após o envio do formulário
//     alert("Cadastro realizado com sucesso!");
// }

// function mandarPedido(){
//     event.preventDefault();
//     // Seu código para enviar o pedido

//     // Exibe um alerta de sucesso após o envio do formulário
//     alert("Cadastro realizado com sucesso!");
// }


function mandarPedido(form) {
    event.preventDefault();
    // Get the form controls
    const nome = form.nome.value;
    const cpf = form.cpf.value;
    const profissao = form.profissao.value;
    const genero = form.genero.value;
    const idade = form.idade.value;
    const cidade = form.cidade.value;
    const bairro = form.bairro.value;
    const obs = form.obs.value;
  
    // Do something with the form data
    console.log(`Nome: ${nome}, CPF: ${cpf}, Profissão: ${profissao}, Gênero: ${genero}, Idade: ${idade}, Cidade: ${cidade}, Bairro: ${bairro}, Observações: ${obs}`);
  
    // Exibe um alerta de sucesso após o envio do formulário
    alert("Cadastro realizado com sucesso!");
  }