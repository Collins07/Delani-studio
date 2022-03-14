$(document).ready(function() {

    // toggle effect in JQuery

    $("#img1").click(function() {
      $("#img1").toggle();
      $(".show").toggle();
    });
    $(".show").click(function() {
        $("#img1").toggle();
        $(".show").toggle();
      });


      $("#img2").click(function() {
        $("#img2").toggle();
        $(".show1").toggle();
      });
      $(".show1").click(function() {
        $("#img2").toggle();
        $(".show1").toggle();
      });


      $("#img3").click(function() {
        $("#img3").toggle();
        $(".show2").toggle();
      });
      $(".show2").click(function() {
        $("#img3").toggle();
        $(".show2").toggle();
      });

      //  hover effect in JQuery

    $(".test1").hover(function(){
        $(".test1").css("filter", "brightness(40%)");
        $("#column1").toggle();
        $(".test1").show();
        });
        $("body").hover(function(){
            $(".test1").css("filter", "brightness(100%)");
        });
  
  
      $(".test2").hover(function(){
        $(".test2").css("filter", "brightness(40%)");
        $("#column2").toggle();
        $(".test2").show();
        });
        $("body").hover(function(){
            $(".test2").css("filter", "brightness(100%)");
        });
  
  
      $(".test3").hover(function(){
        $(".test3").css("filter", "brightness(40%)");
        $("#column3").toggle();
        $(".test3").show();
        });
        $("body").hover(function(){
            $(".test3").css("filter", "brightness(100%)");
        });
  
  
      $(".test4").hover(function(){
        $(".test4").css("filter", "brightness(40%)");
        $("#column4").toggle();
        $(".test4").show();
        });
        $("body").hover(function(){
            $(".test4").css("filter", "brightness(100%)");
        });
  
  
      $(".test5").hover(function(){
        $(".test5").css("filter", "brightness(40%)");
        $("#column5").toggle();
        $(".test5").show();
        });
        $("body").hover(function(){
            $(".test5").css("filter", "brightness(100%)");
        });
  
  
      $(".test6").hover(function(){
        $(".test6").css("filter", "brightness(40%)");
        $("#column6").toggle();
        $(".test6").show();
        });
        $("body").hover(function(){
            $(".test6").css("filter", "brightness(100%)");
        });
  
  
      $(".test7").hover(function(){
        $(".test7").css("filter", "brightness(40%)");
        $("#column7").toggle();
        $(".test7").show();
        });
        $("body").hover(function(){
            $(".test7").css("filter", "brightness(100%)");
        });
  
  
        $(".test8").hover(function(){
          $(".test8").css("filter", "brightness(40%)");
          $("#column8").toggle();
          $(".test8").show();
          });
          $("body").hover(function(){
              $(".test8").css("filter", "brightness(100%)");
         });


        //  button JQuery effects
         $("#btn").hover(function(){
            $(this).css("background-color", "green");
          }, function() {
            $(this).css("background-color", "blue");
      
          });
    });

    // Javascript user form
  function myFunction(){
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(name == "" || message == ""){
      alert("Enter valid details")
    }
    else{
      alert(name + " " + "we have received your message. Thank you fro reaching out to us.");
    }
  }