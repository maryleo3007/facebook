//declaracion de variables
var spn_usuario = document.getElementById('spn_usuario');
var spn_pass = document.getElementById('spn_pass');
var emails = ["maryleo@hotmail.com","laboratoria@gmail.com","papu@laboratoria.la","gian@laboratoria.la"];

//funcion para validar usuarios
function validacion() {
  var nombreUsuario = document.forms["form_face"]["ipt_usuario"].value;
  var passUsuario = document.forms["form_face"]["ipt_pass"].value;
  //condicion para que el usuario no ingrese un valor nulo, vacío o espacios en blanco
  if(nombreUsuario == ""|| nombreUsuario == null || nombreUsuario.length == 0 || /^\s+$/.test(nombreUsuario)){
    spn_usuario.innerHTML = "El campo de usuario no puede estar en blanco";
    return false;
  }
  //condicion para que el usuario ingrese un email del tipo hola@laboratoria.la
  if( !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(nombreUsuario))){
    spn_usuario.innerHTML = "Debes ingresar una dirección de correo electrónico válido ej: miNombre@mail.la";
    return false;
  }
  //condicion para que el usuario no ingrese un password nulo, vacío o espacios en blanco
  if(passUsuario == ""|| passUsuario == null || passUsuario.length == 0 || /^\s+$/.test(passUsuario)){
    spn_pass.innerHTML = "El campo de password no puede estar en blanco";
    return false;
  }
  var usuarioValido = false;
  emails.forEach(function(elemento){
    if(nombreUsuario == elemento){
      usuarioValido = true;
    }else{
      spn_usuario.innerHTML = "Este usuario no esta registrado";
    }
  });
return usuarioValido;
}
