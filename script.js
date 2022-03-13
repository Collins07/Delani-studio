$(document).ready(function() {

    // toggle effect in JQuery

    $("#img1").click(function() {
      $("#img1").toggle();
      $(".p6").hide();
      $(".show").toggle();
    });
    $(".show").click(function() {
        $("#img1").toggle();
        $(".p6").show();
        $(".show").toggle();
      });


      $("#img2").click(function() {
        $("#img2").toggle();
        $(".p7").hide();
        $(".show1").toggle();
      });
      $(".show1").click(function() {
        $("#img2").toggle();
        $(".p7").show();
        $(".show1").toggle();
      });


      $("#img3").click(function() {
        $("#img3").toggle();
        $(".p8").hide();
        $(".show2").toggle();
      });
      $(".show2").click(function() {
        $("#img3").toggle();
        $(".p8").show();
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
    });