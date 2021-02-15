var xhr = new XMLHttpRequest();
//const dominio = 'http://192.168.0.18:8080'

function list() {
    xhr.open('get', 'http://localhost:3000/clientes' , true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)
            let tabelaClientes = document.getElementById("clientes")
            data.forEach(cliente => {

                
                let clienteTabela = document.createElement("tr")
                let emailCliente = document.createElement("td")
                emailCliente.setAttribute("class", "email")
                let senhaCliente = document.createElement("td")
                clienteTabela.appendChild(emailCliente)
                clienteTabela.appendChild(senhaCliente)
                emailCliente.innerHTML = cliente.email
                senhaCliente.innerHTML = cliente.senha
                tabelaClientes.appendChild(clienteTabela)
                
            });




            console.log(data)

            // document.getElementById("listemail1").innerHTML = data[0].email
            // document.getElementById("listsenha1").innerHTML = data[0].senha


        }
    }
    xhr.send();
}