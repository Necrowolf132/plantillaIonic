$(".mostrar_ventana").click(function() {
    $("."+$(this).attr('data-ventana')).css({
      "left": "0"
    });
  }); 

  $(".my_map").click(function() {
    $(".side-two2").css({
      "right": "-30%"
    });
  });

  $(".map_back").click(function() {
    $(".side-two2").css({
      "right": "-100%"
    });
  });
  
  $(".cerrar_ventana").click(function() {
    $("."+$(this).attr('data-ventana')).css({
      "left": "-100%"
    });
  });

if( $('.sideBar-body').attr('data-tipo') == 'group' ){
    $('.my_map').removeClass('hide');
  }else{
    $('.my_map').addClass('hide');
  }
  //valores iniciales
  $('.message[data-chat=person1]').removeClass('hide');
  $('.for-chat[data-chat=person1]').addClass('active');
  $('.text_responder').attr('data-chat-on', 'person1');
  
  $(document).on('click','.for-chat', function(){
    $(this).addClass('active');
    $('.imgUser_otro').attr('src',$(this).find('.imgUser').attr('src'));
    $('.heading-name-meta').html($(this).find('.name-meta').html());

    if ($(this).hasClass('.active')) {
      return false;
    } else {
        var findChat = $(this).attr('data-chat');
        var findtipo = $(this).attr('data-tipo');
        $('.message').addClass('hide');
        $('.for-chat').removeClass('active');
        $(this).addClass('active');
        $('.message[data-chat = '+findChat+']').removeClass('hide');
        $('.text_responder').attr('data-chat-on', findChat);

        if( findtipo == 'group' ){
          $('.my_map').removeClass('hide');
        }else{
          $('.my_map').addClass('hide');
        }
      
    }
  });

  function enviar_msj(){
    
    var user_on = $('#comentario').attr('data-chat-on');
    var data_msj = $('#comentario').val();
    
    var msj = '<div class="row message-body"> <div class="col-sm-12 message-main-sender"> <div class="sender"> <div class="dropup"> <i class="fa fa-ellipsis-v fa-2x pull-right dropdown-toggle drop_msj_inter" aria-hidden="true" id="" data-toggle="dropdown"></i> <ul class="dropdown-menu dropdown-menu_per"> <li class="#" role="presentation"><a role="menuitem" tabindex="-1" href="#">Responder</a></li> <li class="#" role="presentation"><a role="menuitem" tabindex="-1" href="#">Reenviar </a></li> <li class="#" role="presentation"><a role="menuitem" tabindex="-1" href="#">Destacar </a></li> <li class="#" role="presentation"><a role="menuitem" tabindex="-1" href="#">Eliminar </a></li> <li class="#" role="presentation"><a role="menuitem" tabindex="-1" href="#">Compartir </a></li> </ul> </div> <div class="message-text"> '+data_msj+' </div> <span class="message-time pull-right"> 10:30 am </span> </div> </div> </div>';
    
    $('#'+user_on).append(msj);
    $('#comentario').val('');
    $(".message").animate({ scrollTop: $('.conversation')[0].scrollHeight},0);

  }

  $(".responder").click(function() {
    enviar_msj();
  });

  $(document).on('click','.eliminar_mini', function(){
    $(this).remove();
  });

  $(document).on('click','.for-new-grupo', function(){ 
    var img = $(this).find('.imgUser_n_g').attr('src');
    var nomb_apell = $(this).find('.name-meta_n_g').text();

    var mini_gru ='<div class="mini-sideBar eliminar_mini"> <div class=""> <div class="col-sm-2 col-xs-2 sideBar-avatar"> <div class="mini-avatar-icon"> <img class="" src="'+img+'"> </div> </div> <div class="col-sm-8 col-xs-8 sideBar-main"> <div class="row"> <div class="mini-sideBar-name"> <span class="name-meta"> '+nomb_apell+' </span> </div> </div> </div> </div> <i class="glyphicon glyphicon-remove form-control-feedback mini-icon"></i> </div>';

    $('.mini_body_gru').append(mini_gru);
    $(".mini_body_gru").animate({ scrollTop: $('.mini_body_gru')[0].scrollHeight},0);

  });

  $(document).on('click','.open_f1', function(){
    $("#f1").click()
  });

  $(document).on('click','.open_f2', function(){
    $("#f2").click()
  });

  $(document).on('click','.img_preview_reply', function(){
    $(".img_preview_reply_modal").attr('src',$(this).attr('src'));
    $(".model_img_preview_reply").modal();
  });

  $(".on_like").click(function() { 
    if( $(this).hasClass('blue-text') ){
      $(this).removeClass('blue-text');
    }else{
      $(this).addClass('blue-text');
    }
  });

  $(document).on('click','.ver_new', function(){
    $(".modal_unirse").modal();
  });
  $(document).on('click','.si_grupo', function(){
    $(".ver_new").remove();
    $(".modal_unirse").modal('hide');
    $("#msj_gruppo").removeClass('nuevo_g');
    $("#msj_gruppo").addClass('for-chat');
  });
  $(document).on('click','.nuevo_g', function(){
    $(".modal_unirse").modal();
  });

 

  

  