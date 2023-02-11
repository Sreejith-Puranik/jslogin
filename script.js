var username,password;

function validate(){
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    if(username == 'abc' && password == '123'){
        sessionStorage.setItem("user",username)
        alert("Login success");
    }
    else{
        alert("login unsuccess");
    }
}