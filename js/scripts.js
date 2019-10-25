$(document).ready(function(){
  $("form").submit(function(event){

    var language1 = $("input:radio[name=language1]:checked").val();
    var language2 = $("input:radio[name=language1]:checked").val();
    var language3 = $("input:radio[name=language1]:checked").val();
    var language4 = $("input:radio[name=language1]:checked").val();
    var language5 = $("input:radio[name=language1]:checked").val();

      if (language1 === "javascript" &&& language4 === "javascript"){
        $(".javascript").show();
        $(".ruby").hide();
        $(".python").hide();
        $(".swift").hide();
      } else if (language1 === "ruby"){
        $(".ruby").show();
      } else if (language1 === "python"){
        $(".python").show();
      } else if (language1 === "swift"){
        $(".swift").show();
      }

    event.preventDefault();
  });
});






//add button
//add another question
//add js to capture form info
