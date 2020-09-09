
var xhr = new XMLHttpRequest();
var link1 = document.querySelector('.link1')
link1.addEventListener('click', ()=>{
    xhr.open('get', 'http://192.168.42.96:8080/views/historic.html', true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.querySelector("main").innerHTML = xhr.responseText;
    } 
}
xhr.send();
    
})