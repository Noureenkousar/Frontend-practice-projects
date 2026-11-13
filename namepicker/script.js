let arr=[]
let display=document.getElementById("display")
let displayName=document.getElementById("display-name")

const pickName=()=>{
    let randNo=Math.floor(Math.random()*arr.length)
    displayName.innerHTML=arr[randNo]
}

const addName=()=>{
    let userInput=document.getElementById("user-input")
    arr.push(userInput.value)
    display.innerHTML=arr
}