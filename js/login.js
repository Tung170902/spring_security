document.addEventListener('DOMContentLoaded',function (){
    document.forms['loginForm']['btnSubmit'].onclick = function (){
        console.log(document.forms['loginForm']['username'].value)
        console.log(document.forms['loginForm']['password'].value)
        var loginApiUrl = 'http://localhost:8080/api/v1/login'
        var username = document.forms['loginForm']['username'].value
        var password = document.forms['loginForm']['password'].value
        var obj = {
            "username" : username,
            "password" : password
        }

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200){
                alert('Login success !');
                window.location.href = 'user-article.html'
            }
        }
        xhr.open('POST', registerApiUrl, false);
        xhr.setRequestHeader('Content-type','application/json')
        xhr.send(JSON.stringify(obj))
    }
})