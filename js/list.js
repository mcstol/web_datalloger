var xhr = new XMLHttpRequest();
//const dominio = 'http://192.168.0.18:8080'

function list() {
    xhr.open('get', 'http://localhost:3000/clientes' , true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)[0].email
            // console.log(data)
            console.log(data)
            document.getElementById("listemail1").innerHTML = data
        }
    }
    xhr.send();
}