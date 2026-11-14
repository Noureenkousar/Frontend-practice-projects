let message = document.getElementById("message")

const validateForm = (event) => {

    event.preventDefault()

    let username = event.target.username
    let password = event.target.password

    if(username.value === "" && password.value === "") {
        message.innerHTML = "Please enter username and password"
    } else if (password.value === "") {
        message.innerHTML = "please enter password"
    } else if (username.value === "") {
        message.innerHTML = "Please enter username"
    } 
}