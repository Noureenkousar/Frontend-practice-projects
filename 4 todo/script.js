let userTasks=[]
let display =document.getElementById("display")

const addTask = () => {
    let userInput=document.getElementById("user-input")

    userTasks.push(userInput.value)
    console.log(userTasks);

    display.innerHTML=userTasks.map(value => `<li>${value}</li>`).join("")
}