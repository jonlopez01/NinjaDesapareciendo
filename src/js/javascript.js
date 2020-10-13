$('document').ready(function(){
  
  $('img').click(function(){
    // $(this).hide();
    $(this).fadeOut("slow");
  });

  $('#restaurar').click(function(){
    $('img').show();
  });



});