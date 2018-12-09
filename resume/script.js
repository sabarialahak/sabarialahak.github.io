
$(document).ready(function () {
  $(".container2 .imgStyle").on({
    mouseover: function(){
      $(this).css({
        'cursor':'pointer',
        'border-color':'salmon'
      });
    },

    mouseout:function(){
      $(this).css({
        'cursor':'default',
        'border-color':'#FFEBCD'
      });
    },

    click:function(){
      var imgurl=$(this).attr('src');
      $('#mainImg').fadeOut(300,function(){
        $(this).attr('src',imgurl);
      }).fadeIn(500);
    }
  });
});
