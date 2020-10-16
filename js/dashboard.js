var xhr = new XMLHttpRequest();
var senhasIguais = false
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



function confirmaSenha(event) {
    console.log("acessou a função")
    var senha = $("#senha").val()
    var confirmaSenha = $("#confirmeSenha").val()
    if (senha !== confirmaSenha) {
        alert("Senhas não são iguais")
        return false
    } else {
        senhasIguais = true
    }
}

function save() {
    console.log("clicou o botão!", senhasIguais)
    var formulario = JSON.stringify({
        email: $("#email1").val(),
        senha: $("#senha").val()
    })
    console.log(formulario)
    if (senhasIguais == true) {
        xhr.open("POST", "http://localhost:3000", true)
        xhr.setRequestHeader("content-type", "application/json")
        xhr.send(formulario)
    } else {
        alert("Senhas não são iguais!")
    }
}