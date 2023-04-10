function confirm(element){
    const userName = element.children.userName.value
    const password = element.children.password.value
    const confirmPassword = element.children.confirmPassword.value
    
        if (password === confirmPassword){
        alert ("Cadastrado com sucesso!")
    } else{
        alert("O password não são iguais")
    }

}

