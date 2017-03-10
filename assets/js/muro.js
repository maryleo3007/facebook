btn_muro = document.getElementById('btn_muro');
var resultado = document.getElementById('resultado');
var posts = [];
function validarMuro(){
  var txtA_muro = document.forms["form-muro"]["txtA_muro"].value;
  if(txtA_muro == ""){
    alert("Debe ingresar un texto");
    return false;
  }
}
btn_muro.addEventListener('click',function(event){
  event.preventDefault();
  var result = "";
  var post = document.getElementById("txt_muro").value;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  var valorSeleccionado = opcionSeleccionada.value;
  posts.push(new Muro(post,valorSeleccionado));
  posts.forEach(function(elemento){
    result += mostrar(elemento.post);
  });
  resultado.innerHTML = result;
});

//function Muro(post){
  function Muro(post,type){
  this.post = post;
  this.type = type;
}
function mostrar(post){
  return "<div class = 'div-post'><p>"+post+"</p><a href='#' class='link-eliminar'>Eliminar</a></div>";
  
}
/*function eliminar(elemento){
  var i = posts.indexOf(elemento);
  if(i != -1){
    alert("Seguro que desea eliminar");

  }

}*/
