function post(){
  var email = $("#email").val()
  var senha = $("#senha").val()
  var dados = {
    "email": email,
    "senha": senha  
  }
  console.log(dados)
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/clientes',
    data: JSON.stringify(dados), 
    success: function(data) {  
      alert(data.email + ' Dados salvos com sucesso!');
    },
    contentType: "application/json",
    dataType: 'json'
});
}