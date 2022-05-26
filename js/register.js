document.addEventListener('DOMContentLoaded',function (){
    document.forms['registerForm']['btnSubmit'].onclick = function (){
        console.log(document.forms['registerForm']['username'].value)
        console.log(document.forms['registerForm']['password'].value)
        console.log(document.forms['registerForm']['confirmPassword'].value)
        var registerApiUrl = 'http://localhost:8080/api/v1/register'
        var username = document.forms['registerForm']['username'].value
        var password = document.forms['registerForm']['password'].value
        var confirmPassword = document.forms['registerForm']['confirmPassword'].value
        if(password != confirmPassword){
            alert("Wrong password !!!")
            return
        }
        var obj = {
            "username" : username,
            "password" : password
        }

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
                alert('Register success !');
                window.location.href = 'login.html'
            }
        }
        xhr.open('POST', registerApiUrl, false);
        xhr.setRequestHeader('Content-type','application/json')
        xhr.send(JSON.stringify(obj))
    }
})