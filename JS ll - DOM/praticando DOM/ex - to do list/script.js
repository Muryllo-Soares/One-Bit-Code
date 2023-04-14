const addBtn = document.getElementById('addBtn')
const inputText = document.getElementById('text')
const ulList = document.getElementById('list')

addBtn.addEventListener('click', function(){
    const newLi = document.createElement('li')
    newLi.className = 'newLi'
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = '✔'
    removeRowBtn.className = 'removeBtn'

    removeRowBtn.addEventListener('click', function(){
        ulList.removeChild(newLi)
    })

    newLi.append(inputText.value, removeRowBtn)
    ulList.append(newLi)
    inputText.value = ''
})
