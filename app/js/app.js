/*
* Jornal Meio Norte - v0.0.1
* http://jornal.meionorte.com
*
* Application Core
*
* Made by Allan Alexandre
*/

;(function ( $, window, document, undefined ) {

  "use strict";

  // Navegação
  $('.btn-menu-collapse').on('click', function(){ 
      $('.navigation').toggleClass('nav-open');
  });


  // Chat
  $('.btn-chat, .btn-close-chat').on('click', function(){ 
    $('.box-chat').toggleClass('nav-open');
  });
  // $(document).keyup(function(e){
  //   if (e.keyCode == 27) {
  //     $('.box-chat').removeClass('nav-open');
  //   }
  // }); 
  $('.chat-item-header').on('click', function(){  
    if($(this).parent().attr('class').indexOf('opened')!=-1){
      $(this).parent().removeClass('opened');
    }else{
      $(this).parent().addClass('opened');
    }
  });
  
  $('.chat-item-minimize').on('click', function(){
    $(this).parent().parent().parent().removeClass('opened');
  });

  $('select').material_select();


  $('.dropdown-menu').dropdown({
      inDuration: 250,
      outDuration: 225,
      hover: false,
      gutter: -20, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    }
  );

 $('.dropdown-button').dropdown({
      inDuration: 250,
      outDuration: 225,
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  $('.tooltipped').tooltip({delay: 50});


  $('.modal-trigger').leanModal();

  
  

})( jQuery, window, document );