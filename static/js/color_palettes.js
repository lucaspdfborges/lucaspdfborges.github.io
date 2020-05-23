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


  function getScreenSVG(color1, color2, color3, color4, color5){

    var screen_svg = `<svg id="screen-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="cb7db7bb-371f-430c-ab8e-9f8547f8cfe6" data-name="Layer 1" width="480" height="350" viewBox="180 150 755 500"><defs><linearGradient id="be60935f-ac8f-4117-88a8-c3e19524f342" x1="340.5" y1="874.69" x2="340.5" y2="452.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>dashboard</title><path d="M950,206.25V626.92a19.5,19.5,0,0,1-19.51,19.51H251.27a19.5,19.5,0,0,1-19.51-19.51V206.25a19.51,19.51,0,0,1,19.51-19.51H930.44A19.51,19.51,0,0,1,950,206.25Z" transform="translate(-35 -15.95)" fill="${color5}" opacity="0.9" stroke="#bbb" stroke-width="1"/><path d="M383.53,196.5V646.43H251.27a19.5,19.5,0,0,1-19.51-19.51V206.25l.71-2.65,1.9-7.1Z" transform="translate(-35 -15.95)" fill="${color4}" stroke="#ccc" stroke-width="1"/><polygon points="347.5 187.65 347.5 228.15 196.76 228.15 196.76 190.3 197.47 187.65 347.5 187.65" fill="${color1}" opacity="0.7"/><path d="M950,206.25H231.76a19.5,19.5,0,0,1,19.51-19.5H930.44A19.5,19.5,0,0,1,950,206.25Z" transform="translate(-35 -15.95)" fill="#c8cad7"/><circle cx="216.27" cy="180.55" r="4.88" fill="#ffffff"/><circle cx="230.9" cy="180.55" r="4.88" fill="#ffffff"/><circle cx="245.53" cy="180.55" r="4.88" fill="#ffffff"/><rect x="221.98" y="205.48" width="101.33" height="9.33" fill="${color4}"/><rect x="221.98" y="250.98" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="283.15" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="315.32" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="347.48" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="379.65" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="411.82" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="221.98" y="443.98" width="101.33" height="9.33" fill="${color3}" opacity="0.5"/><rect x="431.49" y="239.79" width="449.01" height="1.5" fill="${color4}" opacity="0.5"/><rect x="431.49" y="274.62" width="449.01" height="1.5" fill="${color4}" opacity="0.5"/><rect x="431.49" y="309.46" width="449.01" height="1.5" fill="${color4}" opacity="0.5"/><rect x="431.49" y="344.29" width="449.01" height="1.5" fill="${color4}" opacity="0.5"/><rect x="431.49" y="379.12" width="449.01" height="1.5" fill="${color4}" opacity="0.5"/><polygon points="880.51 380.61 430.94 380.61 430.94 312.11 472.17 332.43 514.84 338.21 552.28 326.92 597.45 291.89 620.17 278.77 636.78 275.57 652.67 276.42 678.81 289.33 714.33 311.96 742.21 315.55 764.32 307.93 811.17 269.55 835.09 261.02 860.12 264.89 880.51 276.66 880.51 380.61" fill="${color2}" opacity="0.5"/><path d="M544.3,354.18c-40.48,0-77.9-24.76-78.36-25.08l1.11-1.66c.58.39,58.16,38.49,107.09,19.4C592,339.89,604.68,329.06,617,318.6c12.83-10.93,24.95-21.26,41.46-25.74,19-5.13,39.65-.48,55.38,12.44,13.44,11.05,40.22,28.8,68.51,23.49,14.42-2.7,26.58-13.24,39.45-24.39C846.44,283,872,260.91,916.09,292.63l-1.17,1.62c-42.85-30.79-67.76-9.21-91.84,11.66-13.08,11.34-25.44,22-40.39,24.85-29.1,5.45-56.44-12.64-70.15-23.91-15.23-12.52-35.26-17-53.58-12.05-16.09,4.36-28,14.54-40.69,25.32-12.41,10.57-25.25,21.51-43.4,28.59A83.88,83.88,0,0,1,544.3,354.18Z" transform="translate(-35 -15.95)" fill="${color3}"/><circle cx="647.55" cy="275.37" r="11.13" fill="${color4}"/><g opacity="0.1"><path d="M388.25,475.67a.5.5,0,0,0,0-.12,21.55,21.55,0,0,0,.73-5.36,33.89,33.89,0,0,1-.73,4.3A2.62,2.62,0,0,0,388.25,475.67Z" transform="translate(-35 -15.95)"/><path d="M374.46,497.79a7,7,0,0,1,.58,2.7,8.11,8.11,0,0,0-.58-3.76,3.55,3.55,0,0,0-3.75-2.17c-2,.47-2.89,3.11-4.87,3.74-1.67.53-3.5-.66-4.3-2.22a11.17,11.17,0,0,1-.82-5.14c0-2,0-3.95,0-5.92,0-2.15-.07-4.47-1.4-6.16-1.65-2.11-5.52-3-8.11-2.94a6.83,6.83,0,0,0-4.62,1.87,6,6,0,0,1-4.87,1.73,4.19,4.19,0,0,1-3.4-2.94c-.2-.76-.14-1.57-.37-2.33-.55-1.86-2.53-2.82-3.86-4.23a7.78,7.78,0,0,1-2-5,8.09,8.09,0,0,0,2,6.06c1.33,1.41,3.31,2.38,3.86,4.24.23.75.17,1.57.37,2.33a4.23,4.23,0,0,0,3.4,2.94,6,6,0,0,0,4.87-1.74A6.93,6.93,0,0,1,351.2,477c2.59-.08,6.46.84,8.11,2.94,1.33,1.69,1.39,4,1.4,6.16,0,2,0,3.95,0,5.92a11.19,11.19,0,0,0,.82,5.15c.8,1.56,2.63,2.74,4.3,2.21,2-.63,2.85-3.26,4.87-3.74A3.57,3.57,0,0,1,374.46,497.79Z" transform="translate(-35 -15.95)"/><path d="M393.89,491.28a9.3,9.3,0,0,1-2,3.26q-3.92,4.68-7.81,9.37c-3.28,3.95-6.76,8.52-6.51,13.56.24-4.62,3.46-8.82,6.51-12.49l7.81-9.38a9.26,9.26,0,0,0,2-3.25,9,9,0,0,0,.2-2.6A6.48,6.48,0,0,1,393.89,491.28Z" transform="translate(-35 -15.95)"/><path d="M373.51,515.89a5.58,5.58,0,0,1-.24-1.27,6.33,6.33,0,0,0,.24,2.33c.53,1.72,2.48,3.13,4.12,2.4,0-.35-.07-.7-.08-1C375.93,519,374,517.57,373.51,515.89Z" transform="translate(-35 -15.95)"/></g><g opacity="0.5"><rect x="471.17" y="458.65" width="66" height="14" fill="${color2}"/><rect x="622.72" y="458.65" width="66" height="14" fill="${color3}"/><rect x="774.27" y="458.65" width="66" height="14" fill="${color4}"/></g><path d="M501.5,572.37c0-20.44,16.63-36.14,37.08-36.14h.29v-9.3h-.29c-25.58,0-46.38,19.87-46.38,45.44a46.26,46.26,0,0,0,15.89,34.9l6.59-6.59A37,37,0,0,1,501.5,572.37Z" transform="translate(-35 -15.95)" fill="${color2}"/><path d="M539.8,526.94v9.3a37.07,37.07,0,1,1-24.19,65.37L509,608.2a46.36,46.36,0,1,0,30.78-81.26Z" transform="translate(-35 -15.95)" fill="${color2}" opacity="0.5"/><path d="M843.8,535.76c20.44,0,36.14,16.63,36.14,37.08,0,.09,0,.19,0,.29h9.3c0-.1,0-.2,0-.29,0-25.57-19.87-46.38-45.44-46.38a46.24,46.24,0,0,0-34.9,15.89l6.59,6.59A37,37,0,0,1,843.8,535.76Z" transform="translate(-35 -15.95)" fill="${color4}" opacity="0.5"/><path d="M889.23,574.06h-9.3a37.07,37.07,0,1,1-65.37-24.19L808,543.28a46.36,46.36,0,1,0,81.26,30.78Z" transform="translate(-35 -15.95)" fill="${color2}"/><path d="M709,529.66l-1.85,9.26c13.61,5.49,22.31,18.83,22.31,34.38a37.07,37.07,0,1,1-51.93-33.95L673.41,531A46.36,46.36,0,1,0,738.8,573.3C738.8,553.23,726.92,536.11,709,529.66Z" transform="translate(-35 -15.95)" fill="${color3}" opacity="0.5"/><path d="M693.59,535.69a32.38,32.38,0,0,1,12.91,2.68l1.85-9.25a40.9,40.9,0,0,0-14.76-2.73,46.17,46.17,0,0,0-19,4.09l4.16,8.33A36.69,36.69,0,0,1,693.59,535.69Z" transform="translate(-35 -15.95)" fill="${color2}"/></svg>`;

    return screen_svg
  }

  //function update color use
  
  function updateColorUse(){
    var pltt = [];

    $('.input-color').each(function(index){
      pltt.push($(this).attr("value"));
    });

    var background_color = '#ffffff'; 

    if(!$('#whited').is(':checked')){
      background_color = pltt[3];  
    }

    if($('#dark-theme').is(':checked')){
      var screen_svg = getScreenSVG(pltt[2], pltt[3], pltt[1], background_color, pltt[0]);
    } else{
      var screen_svg = getScreenSVG(pltt[3], pltt[2], pltt[1], pltt[0], background_color);
    }

    $("#screen-svg").remove();
    $("#screen-svg-div").append(screen_svg);
  }


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

    updateColorUse();
  };
