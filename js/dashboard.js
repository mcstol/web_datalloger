var xhr = new XMLHttpRequest();

const dominio = 'http://192.168.0.64:8080'

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
    .addEventListener('click', () => atualizaMain(dominio + '/views/profile.html'))

document.querySelector('.link4')
    .addEventListener('click', () => atualizaMain(dominio + '/views/donwload.html'))




function save() {
    console.log("clicou o botão!")
}