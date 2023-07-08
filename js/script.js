const button = document.querySelector('button')
const a = document.querySelector('#link_quem_sou')
const p = document.querySelector('.quem_sou')

a.addEventListener('click', () =>{
    p.textContent = "Casado, pai de 3 filhos, apaixonado pela familia e por tecnologia, auto-didata nas linguagens de programação."
})

button.addEventListener('click', () => {
    
    alert("Seu contato foi enviado com sucesso.")
    
})

/*
Ex.: para a utilização da foto, utilizei xxx, para o nome, utilizei a tag html xxx da seguinte forma... Para a descrição, usei... Para os links, usei... Para o menu, usei...

Para criação do Menu usei a tag header, nav
coloquei dentro de uma ul a lista de tópicos para o menu

deixei a imagem e o nome em uma div separada da tag nav para ficar mais facil trabalhar a imagem caso houvesse necessidade

usei a tag details para esconder algumas informações

Comecei desenvolvendo para mobile first e depois fui adaptando para telas maiores, 
Para a simulação de envios de dados usei o DOM, 
Para a const a (está com um escutador de evento, que ao ser clicado, mostra na tela um paragrafo com as informações 'quem sou')
e para o button o escutador de enventos está para exibir um alerta na tela para o usuário.

link para projeto
https://fabiocosta123.github.io/programacaoFrontendUnicesumar/

Repositorio do github: (deixarei publico para correção), após voltarei ao privado;
https://github.com/fabiocosta123/programacaoFrontendUnicesumar
*/