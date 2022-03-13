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

      
    });