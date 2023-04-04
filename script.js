async function obterEndereco(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const resposta = await fetch(url);
  const endereco = await resposta.json();
  console.log(endereco);
}

obterEndereco(prompt("Digite o seu CEP:"));