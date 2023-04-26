const cadastro = {
    nome: 'Muryllo',
    idade: 27,
    email: 'muryllo428@gmail.com'
}

const {nome, idade, email} = cadastro

function dados({nome, idade, email}){
   return{
    nome,
    idade,
    email
   }
}
console.log(dados(cadastro))

const city = ['Santa Rita', 'Alto Araguaia']

const [GO, MT] = city

console.log(GO,MT)





