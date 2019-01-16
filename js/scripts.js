$(document).ready(function(){
  $(".flashcard").click(function(){
    $(this).children().toggle();
  });

  $("#showAll").click(function(){
    $(".definition").css("display", "block");
    $(".term").css("display", "none");
    });

  $("#hideAll").click(function(){
    $(".term").css("display", "block");
    $(".definition").css("display", "none");
  });
});
