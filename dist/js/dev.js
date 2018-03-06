/* EVENTO PARA CABIO DE CAPAZ EN LAS VISTAS */
$("body").on('click', '.btn-capa', function(){
	if( $(this).attr("capa-hidden") ){
		var most = "#"+$(this).attr("data-capa");
		var ocul = "#"+$(this).attr("capa-hidden");
		ocuptar_capa_generic(most, ocul);
	}else{
    mostrar_capa_generic($(this).attr("data-capa"));
	}
});

/* FUNCION DE MOSTRAR CAPAS EN LAS VISTAS */
function mostrar_capa_generic(mostar){
  $(".capa-control").addClass("hidden");
  $("#"+mostar).removeClass("hidden").addClass("animated fadeIn");
}

/* FUNCION DE OCULTAR CAPAS DE LAS VISTAS */
function ocuptar_capa_generic(mostrar, ocultar){
  $(ocultar).removeClass("animated fadeIn").addClass("animated fadeIn");
    setTimeout(function () {
      $(ocultar).removeClass("animated fadeIn").addClass("hidden");
            $(mostrar).removeClass("hidden");
        }, 500);
}

/*FUNCION DE ENVIO AJAX GENERAL */
function envio_general(retorno, parametros,form_nom){
    var data = {};
    var url = '';
    
    if (typeof parametros.form !== 'undefined') {
      data = parametros.form;
    }
    else if(typeof parametros.data !== 'undefined'){
      data = parametros.data;
    }

    url = parametros.url;
    $.ajax({
      type: 'POST',
      url: url ,
      data: data ,
      cache: false,
      dataType: 'json',
      error: function(msj) {
        console.log(msj);
      },
      complete: function (msj) {
        window[retorno](msj,form_nom);
      }
    });
}

/* EVENTO PARA RECETEAR FORMULARIO */
$(document).on('click', '.reset_form', function(){
  recetear_generico($(this).attr("data-reset"));
});

/* FUNCION GENERICA PARA RECETEAR FORMULARIO */
function recetear_generico(tabla){
  $('#'+tabla)[0].reset();
  $('#'+tabla).find(':input[type="hidden"]').each(function() {
    $(this).val('');
  });
}

/* FUNCION DE RESPUESTA (GUARDAR) GENERICO */
function respuesta_generic(data){
  if(data.responseJSON.control){
    toastr.success(data.responseJSON.mensaje, data.responseJSON.titulo, {
      timeOut: 10000,
      closeButton: true,
      progressBar: true
    });
    $('#'+data.responseJSON.tabla).DataTable().ajax.reload();
  }else{
    toastr.error(data.responseJSON.message, 'Error', {
      timeOut: 10000,
      closeButton: true,
      progressBar: true
    });
  }
}

/* EVENTO PARA EL BOTON MODIFICRA ( REALIZA UN CONSULTAR POR ID ) */
$(document).on('click', '.btn_modi', function(){
  let url_c = $(this).attr('dato-url');
  let form_c = $(this).attr('dato-form');
  var datos = {url: url_c};
  envio_general('pintar_generic', datos,form_c);
});

/* FUNCION PINTAR GENERICA ( EL NAME DE LOS CAMPOS TIENEN QUE SER IGUAL A LOS DE LA BD PARA QUE FUNCIONE ) */
function pintar_generic(data,form_nam){
  mostrar_capa_generic(form_nam);
 
}

