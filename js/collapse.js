$(document).ready(function(){
  $("#demo-1").on("hide.bs.collapse1", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span>Open to read');
  });
  $("#demo-1").on("show.bs.collapse1", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
  });
  
   $("#demo-2").on("hide.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Open to read');
  });
  $("#demo-2").on("show.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Close');
  });
  
   $("#demo-3").on("hide.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Open to read');
  });
  $("#demo-3").on("show.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Open to read');
  });
});
