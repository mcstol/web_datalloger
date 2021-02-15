function atualizar() {
    var email = $("#emailPut").val()
    var senha = $("#senhaPut").val()
    var dados = {
        "email": email,
        "senha": senha  
    }
    console.log(dados)
    var caminho = "http://localhost:3000/clientes"
    var IDuser = $("#IDPut").val()
    var caminhoFinal = caminho+"/"+IDuser
    // console.log("Excluiu!")
    // console.log(caminhoFinal)
    if (email=="" ||senha=="" ) {
        alert("Preencha todos os campos!")       
    } else {
        console.log(caminhoFinal)
        console.log("enviar dados!")
        $.ajax({
            type: "PUT",
            url: caminhoFinal,
            data:JSON.stringify(dados),
            success: function(data){
                alert("Dados atualizados!\n"+data.email)
            },
            contentType: "application/json",
            dataType: 'json'
        })
        
    }


}