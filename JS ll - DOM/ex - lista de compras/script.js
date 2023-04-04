
//cria um produto dentro de uma ul mais um button ao lado caso queria excluir o produto.
function addList(){
    const product = document.getElementById('product').value
    const unit = document.getElementById('unit').value

    const liList = document.createElement('li')
    liList.className = 'lista-items'
    liList.id = 'product-li'
    liList.innerText = product +   " (" + "Un. " + unit + ")"
    liList.innerHTML += '   <button onclick = "removeList()">Excluir</button>'
    const count = document.getElementsByClassName('lista-items')



    list.appendChild(liList)

    document.getElementById('product').value = ''
    document.getElementById('unit').value = ''
}


//Function para o Button "excluir" ao lado do produto
function removeList(){
    const fullList = document.getElementById('product-li')

    const confirmation = confirm ("Deseja Remover o produto?")

    if(confirmation){
        fullList.remove()
    }
}