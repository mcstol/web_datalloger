var xhr = new XMLHttpRequest();
var link1 = document.querySelector('.link1')
link1.addEventListener('click', () => {
    xhr.open('get', 'http://127.0.0.1:5500//views/historic.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("main").innerHTML = xhr.responseText;
        }
    }
    xhr.send();

})

var link1 = document.querySelector('.link2')
link1.addEventListener('click', () => {
    xhr.open('get', 'http://127.0.0.1:5500//views/email.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("main").innerHTML = xhr.responseText;
        }
    }
    xhr.send();

})

var link1 = document.querySelector('.link3')
link1.addEventListener('click', () => {
    xhr.open('get', 'http://127.0.0.1:5500//views/login.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("main").innerHTML = xhr.responseText;
        }
    }
    xhr.send();

})

var link1 = document.querySelector('.link4')
link1.addEventListener('click', () => {
    xhr.open('get', 'http://127.0.0.1:5500//views/donwload.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("main").innerHTML = xhr.responseText;
        }
    }
    xhr.send();

})