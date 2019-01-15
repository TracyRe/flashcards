$(document).ready(function(){
  $("#term1").click(function(){
    $("#def1").removeClass("hide");
    $("#term1").addClass("hide");
  });

  $("#def1").click(function(){
    $("#def1").addClass("hide");
    $("#term1").removeClass("hide");
  });
});
