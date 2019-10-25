$(document).ready(function(){
  $("form").submit(function(event){

    $(".results").show();

    var language1 = $("input:radio[name=language1]:checked").val();
    var language2 = $("input:radio[name=language2]:checked").val();
    var language3 = $("input:radio[name=language3]:checked").val();
    var language4 = $("input:radio[name=language4]:checked").val();
    var language5 = $("input:radio[name=language5]:checked").val();


      if (language1 === "javascript"){
        if (language4 === "javascript"){
          $(".javascript").show();
          $(".ruby").hide();
          $(".python").hide();
          $(".swift").hide();
        } else if (language4 === "ruby"){
          $(".javascript").show();
          $(".ruby").show();
          $(".python").hide();
          $(".swift").hide();
        }else if (language4 === "python"){
          $(".javascript").show();
          $(".ruby").hide();
          $(".python").show();
          $(".swift").hide();
        }else if (language4 === "swift"){
          $(".javascript").show();
          $(".ruby").hide();
          $(".python").hide();
          $(".swift").show();
        }
      } else if (language1 === "ruby"){
        if (language4 === "javascript"){
          $(".javascript").show();
          $(".ruby").show();
          $(".python").hide();
          $(".swift").hide();
        }else if (language4 === "ruby"){
          $(".javascript").hide();
          $(".ruby").show();
          $(".python").hide();
          $(".swift").hide();
        }else if (language4 === "python"){
          $(".javascript").hide();
          $(".ruby").show();
          $(".python").show();
          $(".swift").hide();
        }else if (language4 === "swift"){
          $(".javascript").hide();
          $(".ruby").show();
          $(".python").hide();
          $(".swift").show();
        }
      } else if (language1 === "python"){
        if (language4 === "javascript"){
          $(".javascript").show();
          $(".ruby").hide();
          $(".python").show();
          $(".swift").hide();
        }else if (language4 === "ruby"){
          $(".javascript").hide();
          $(".ruby").show();
          $(".python").show();
          $(".swift").hide();
        }else if (language4 === "python"){
          $(".javascript").hide();
          $(".ruby").hide();
          $(".python").show();
          $(".swift").hide();
        }else if (language4 === "swift"){
          $(".javascript").hide();
          $(".ruby").hide();
          $(".python").show();
          $(".swift").show();
        }
      } else if (language1 === "swift"){
        if (language4 === "javascript"){
          $(".javascript").show();
          $(".ruby").hide();
          $(".python").hide();
          $(".swift").show();
        }else if (language4 === "ruby"){
          $(".javascript").hide();
          $(".ruby").show();
          $(".python").hide();
          $(".swift").show();
        }else if (language4 === "python"){
          $(".javascript").hide();
          $(".ruby").hide();
          $(".python").show();
          $(".swift").show();
        }else if (language4 === "swift"){
          $(".javascript").hide();
          $(".ruby").hide();
          $(".python").hide();
          $(".swift").show();
        }
      }
    event.preventDefault();
  });
});






//add button
//add another question
//add js to capture form info
