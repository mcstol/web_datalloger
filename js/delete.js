function excluir() {

    var caminho = "http://localhost:3000/clientes"
    var IDuser = $("#ID").val()
    var caminhoFinal = caminho+"/"+IDuser
    // console.log("Excluiu!")
    // console.log(caminhoFinal)
    $.ajax({
        type: "DELETE",
        url: caminhoFinal,
        success: function(data){
            alert("Dados excluidos!\n"+data.email)
        }
    })

}