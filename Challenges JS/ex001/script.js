function easyloop(){
let str = '';
for (let i = 0; i <= 99; i++){
    if(i%7==0){
        str += i
    }
}
return str
}
console.log(easyloop())