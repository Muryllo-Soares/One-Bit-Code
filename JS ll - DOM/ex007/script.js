const button = document.getElementById("confirm-button")

button.addEventListener("click", evento)

function evento(ev){
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const confirmPassword = sectionElement.children.confirmPassword.value

    if(password === confirmPassword){
        alert("Cadastrado com Sucesso!")
    }else{
        alert("Senha Incorreta.")
    }
}

function remover(){
    button.removeEventListener("click", evento)
    alert("removido")
}



button.addEventListener('mouseover', function (ev) {
    console.log(ev)
})  
    
