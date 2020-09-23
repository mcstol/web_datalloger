var xhr = new XMLHttpRequest();

const dominio = 'http://127.0.0.1:5500'

function atualizaMain(link) {
    xhr.open('get', link, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector("main").innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}

document.querySelector('.link1')
    .addEventListener('click', () => atualizaMain(dominio + '/views/historic.html'))

document.querySelector('.link2')
    .addEventListener('click', () => atualizaMain(dominio + '/views/email.html'))

document.querySelector('.link3')
    .addEventListener('click', () => atualizaMain(dominio + '/views/login.html'))

document.querySelector('.link4')
    .addEventListener('click', () => atualizaMain(dominio + '/views/donwload.html'))