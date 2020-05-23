const color_palette = [
    {'name':'freedom colors', 'colors':['#151515', '#343a40', '#ffc451', '#ffffff']},
    {'name':'avocado', 'colors':['#fcf876', '#3797a4', '#8ccbbe', '#e4e4e4']},
    {'name':'pink pastel', 'colors':['#fee2b3', '#ffa299', '#ad6989', '#562349']},
    {'name':'brownie', 'colors':['#e8e4e1', '#f9c49a', '#ec823a', '#7c3c21']},
    {'name':'napolitan', 'colors':['#eb6383', '#fa9191', '#ffe9c5', '#b4f2e1']},
    {'name':'skin shades', 'colors':['#7d5a5a', '#f1d1d1', '#f3e1e1', '#faf2f2']},
    {'name':'stonn', 'colors':['#222831', '#30475e', '#f2a365', '#ececec']},
    {'name':'cyan shades', 'colors':['#204051', '#3b6978', '#84a9ac', '#cae8d5']},
    {'name':'soil', 'colors':['#faf4f4', '#ef962d', '#9c5518', '#5a3f11']},
    {'name':'purples', 'colors':['#424874', '#a6b1e1', '#dcd6f7', '#f4eeff']},
    {'name':'sand', 'colors':['#df7861', '#ecb390', '#ecdfc8', '#fcf8e8']},
    {'name':'blue ice', 'colors':['#142850', '#27496d', '#00909e', '#dae1e7']},
    {'name':'baby colors', 'colors':['#ffd1bd', '#ffb0cd', '#ffffff', '#c2f0fc']},
    {'name':'sea blues', 'colors':['#142850', '#27496d', '#0c7b93', '#00a8cc']},
    {'name':'calm pastel', 'colors':['#d77fa1', '#e6b2c6', '#fef6fb', '#d6e5fa']},
  ]; 


  function setColors(palette){
    $(".palette-color").each(function(index){    
        $(this).css("background-color", palette[index]);
      });
      
    $('.input-color + label').each(function(index){
      $(this).css("background-color",palette[index]);
    });
  
    $('.input-color').each(function(index){
      $(this).attr("value",palette[index]);
    });
  };