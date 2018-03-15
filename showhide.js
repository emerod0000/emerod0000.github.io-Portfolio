 $("#text").hide();
 $("#less").hide();
 $("#more").click( function() {
   $("#text").show();
   $("#less").show();
   $("#more").hide();
 });
 $("#less").click( function() {
   $("#text").hide();
   $("#less").hide();
   $("#more").show();
 });
