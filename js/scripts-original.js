$(document).ready(function(){
  $("#alert-term").click(function(){
    $("#alert-def").removeClass("hide");
    $("#alert-term").addClass("hide");
  });

  $("#alert-def").click(function(){
    $("#alert-def").addClass("hide");
    $("#alert-term").removeClass("hide");
  });

  $("#arguments-term").click(function(){
    $("#arguments-def").removeClass("hide");
    $("#arguments-term").addClass("hide");
  });

  $("#arguments-def").click(function(){
    $("#arguments-def").addClass("hide");
    $("#arguments-term").removeClass("hide");
  });

  $("#attributes-term").click(function(){
    $("#attributes-def").removeClass("hide");
    $("#attributes-term").addClass("hide");
  });

  $("#attributes-def").click(function(){
    $("#attributes-def").addClass("hide");
    $("#attributes-term").removeClass("hide");
  });

  $("#showAll").click(function(){
    $(".term").addClass("hide");
    $(".definition").removeClass("hide");
  });

  $("#hideAll").click(function(){
    $(".term").removeClass("hide");
    $(".definition").addClass("hide");
  });

});
