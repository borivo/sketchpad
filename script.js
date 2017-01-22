

/****** PAINT ***********************************/
function paint()  {
  $('.cell').on('mouseover', function()  {

  
  var $opacity = $(this).css("opacity"); 
  $(this).css("opacity", + $opacity + 0.1); 
  
});
}

var $number = 20;   

function createGrid()  {
  for (var rows = 0; rows < $number; rows++)  {
    for (var column = 0; column < $number; column++)  {
      $('#container').append('<div class="grid"><div class="cell"></div></div>');
    } 
  }
  $('.grid').width(400/$number);
    $('.grid').height(400/$number);
    
    paint();
}



$(document).ready(function()  {
  
/***** CREATE GRID **********************/  


  
  createGrid();
    paint();
   


/****** CLICK PAINT BUTTON****************************/
 
 $('#paint').on('click', function()  {
  $('#container').empty();
  createGrid(); 
paint();
 });

/***** TRAIL ******************************/

$('#trail').on('click', function()  {
  $('.cell').css('opacity', 0.01);
  $('.cell').on('mouseover', function()  {
  $(this).fadeTo('fast', 1);
});
  $('.cell').on('mouseout', function()  {
    $(this).fadeTo('fast', 0.01);
  });
});

/***** CLEAR ******************************/


  $('#clear').on('click', function()  {
  $('.cell').css('opacity', 0.01);
  paint();
});

/***** Size *****************************/

$('#size').on('click', function()  {
  $('#container').empty();
  var $number = prompt('What size of grid?');
  var $number = parseInt($number); 
  for (var rows = 0; rows < $number; rows++)  {
    for (var column = 0; column < $number; column++)  {
      $('#container').append('<div class="grid"><div class="cell"></div></div>');
    } 
  }
  $('.grid').width(400/$number);
    $('.grid').height(400/$number);
    
    
    
    paint();  
});

/***** RAINBOW **************************/

$('#rainbow').on('click', function()  {
 $('.cell').css('opacity', 0.01);
 $('.cell').mouseover(function()  {
  var $x = Math.ceil(Math.random() * 250);
  var $y = Math.ceil(Math.random() * 250);
  var $z = Math.ceil(Math.random() * 250);
  var $rgb = 'r' + 'g' + 'b' + '(' + $x + ',' + $y + ',' + $z + ')';
    $(this).css('background-color', 'rgb(' + $x + ',' + $y + ',' + $z + ')');
    console.log($x, $y, $z);
  });
});




});

















