$(document).ready(function() {
  $(".text-square, .text-square-2, .text-square-3, .shape-1, .shape-2, .shape-3").draggable({
      drag: function(event, ui) {
          let newPos = ui.position;
          if ($(this).hasClass('text-square')) {
              $('.shape-1').css({ top: newPos.top, left: newPos.left });
          } else if ($(this).hasClass('text-square-2')) {
              $('.shape-2').css({ top: newPos.top, left: newPos.left });
          } else if ($(this).hasClass('text-square-3')) {
              $('.shape-3').css({ top: newPos.top, left: newPos.left });
          }
      }
  });


  $('.shape-1').click(function() {
      let position = $(this).position();

      $('.text-square').toggle().css({
          top: position.top,
          left: position.left
      });

      $(this).toggleClass('text-square');
  });

  $('.text-square').click(function() {
      $(this).hide();
      $('.shape-1').removeClass('text-square');
  });


  $('.shape-2').click(function() {
      let position = $(this).position();

      $('.text-square-2').toggle().css({
          top: position.top,
          left: position.left
      });

      $(this).toggleClass('text-square-2');
  });

  $('.text-square-2').click(function() {
      $(this).hide();
      $('.shape-2').removeClass('text-square-2');
  });


  $('.shape-3').click(function() {
      let position = $(this).position();

      $('.text-square-3').toggle().css({
          top: position.top,
          left: position.left
      });

      $(this).toggleClass('text-square-3');
  });

  $('.text-square-3').click(function() {
      $(this).hide();
      $('.shape-3').removeClass('text-square-3');
  });










  
  // Image click handlers
  $(document).on('click','.letter-j img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/J_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-a img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/A_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-2 img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/2_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-4 img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/4_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-b img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/B_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-u img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/U_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });

  $(document).on('click','.letter-r img',function(){
    imgsrc = $(this).attr('data-src')
    let random = Math.floor(Math.random() * 4)
    newsrc = "image/R_" + imgsrc + "_"+random+".png"
    $(this).attr('src', newsrc)
    console.log(newsrc);
});

  $(document).on('click','.letter-g img',function(){
      imgsrc = $(this).attr('data-src')
      let random = Math.floor(Math.random() * 4)
      newsrc = "image/G_" + imgsrc + "_"+random+".png"
      $(this).attr('src', newsrc)
      console.log(newsrc);
  });
});

document.querySelector('video').playbackRate = 0.9;
