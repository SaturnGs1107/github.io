const div = document.getElementById('Titulo-Secundario');
div.style.color = 'rgb(240, 105, 105)';
div.style.textAlign = 'center';
div.style.marginTop = '5rem';
div.style.fontSize = '2.6rem';
div.style.marginRight= '6rem';
div.style.marginLeft= '4rem';

document.getElementById('enlace-Alerta').addEventListener('click', function(event){
event.preventDefault();
alert('Esto Es Una Alerta En Un Boton');
})
document.getElementById('enlacee-Alerta').addEventListener('click', function(){
    document.getElementById('Ventana-Emerg').style.display = 'block';
})
document.getElementById('cerrar-Ventana').addEventListener('click', function(){
    document.getElementById('Ventana-Emerg').style.display = 'none';
})


