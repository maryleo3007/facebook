btn_muro = document.getElementById('btn_muro');
var tag_a_publico = document.getElementById('a-publicos');
var resultado = document.getElementById('resultado');
var result = document.getElementById('result');
var posts = [];

/*tag_a_publico.addEventListener('click',function(e){
  e.preventDefault();
  var post = document.getElementById("txt_muro").value;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  var valorSeleccionado = opcionSeleccionada.value;
  posts.forEach(function(elemento){
    if(elemento.type == valorSeleccionado){

    }
  });
});
*/
//evento para agregar un nuevo post
btn_muro.addEventListener('click',function(event){
  event.preventDefault();
  //var result = "";
  var post = document.getElementById("txt_muro").value;
  var lista = document.getElementById("opciones");
  var indiceSeleccionado = lista.selectedIndex;
  var opcionSeleccionada = lista.options[indiceSeleccionado];
  var valorSeleccionado = opcionSeleccionada.value;

  var todos = "";
  posts.push(new Muro(post,valorSeleccionado));
  console.log(posts[0].post)
  posts.forEach(function(elemento){
      //result += createPost(elemento.post);
      todos = result.appendChild(createPost(elemento.post));
  });

  //resultado.innerHTML = result;
  //resultado.appendChild(createPost("Gian"));
});

//function para crear el objeto  Muro(post, tipo){
  function Muro(post,type){
  this.post = post;
  this.type = type;
}

//funcion para eliminar un post
function eliminar(elemento){
  var i = posts.indexOf(elemento);
  if(i != -1){
      var x = confirm("Seguro que desea eliminar");
      if(x == true){
          posts.slice(i,1);
      }
    }
}

//funcion para validar el textArea del muro no este vacío
function validarMuro(){
  var txtA_muro = document.forms["form-muro"]["txtA_muro"].value;
  if(txtA_muro == ""){
      alert("Debe ingresar un texto");
      return false;
  }
}
//funcion para mostrar los post publicados
function mostrar(post){
  return "<div class = 'div-post' ><p class = 'p-post'>"+post+"</p><a href='#' class='link-eliminar'>Eliminar</a></div><br>";
}
//funcion para crear el post
function createPost(contenido) {
  var post = document.createElement('div');
  post.classList.add('div-create-post');
  var texto = document.createElement('p');
  texto.classList.add('p-create-post');
  texto.innerHTML = contenido;
  var eliminar = document.createElement('a');
  eliminar.innerHTML = "Eliminar";
  eliminar.setAttribute('href', '');
  var actualizar = document.createElement('a');
  actualizar.innerHTML = " Actualizar";
  actualizar.setAttribute('href', '');
  eliminar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parentNode; // Devuelve el padre
    console.log( e.target.parentNode);
    var confirmar = confirm("¿Seguro que quiere eliminar?");
    if(confirmar == true){
        alert("hola");
    }
  });
  post.appendChild(texto);
  post.appendChild(eliminar);
  post.appendChild(actualizar);
  return post;
}
