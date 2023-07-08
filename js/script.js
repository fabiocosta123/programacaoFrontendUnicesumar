const button = document.querySelector('button')
const a = document.querySelector('#link_quem_sou')
const p = document.querySelector('.quem_sou')

a.addEventListener('click', () =>{
    p.textContent = "Casado, pai de 3 filhos, apaixonado pela familia e por tecnologia, auto-didata nas linguagens de programação."
})

button.addEventListener('click', () => {
    
    alert("Seu contato foi enviado com sucesso.")
    
})