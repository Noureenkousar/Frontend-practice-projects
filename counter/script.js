let count=0;
let dislay=document.getElementById('display')
let name=document.getElementById('name')
const incCount=()=>{
    count++
    display.innerHTML=count
}
const decCount=()=>{
    if(count>0){
        count--
    }
    display.innerHTML=count
}
const bye=()=>{
    name.innerHTML="bye"
}