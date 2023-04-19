//Usando o sessionStorage
document.getElementById('sessionBtn').addEventListener('click',function (){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''

    document.getElementById('readSession').addEventListener('click', function(){
        const info = sessionStorage.getItem('info')
        alert ('A informação salve é: ' + info)
    })
})

//Usando o localStorage
document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''

    document.getElementById('readLocal').addEventListener('click', function(){
        const text = localStorage.getItem('text')
        alert('A informação salva é: ' + text)
    })
})

//Usando cookies
document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023,04,20) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023,04,20) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)

   remove