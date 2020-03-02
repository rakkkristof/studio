

function hideSidebar (){
  $("#main-block").animate({width: '100%'},1000);
  $("#sidemenu").animate({left: '100%'},1000);
  $("#right-arrow").animate({left: '100%'},1000);
  $("#left-arrow").show();
  $("#left-arrow").position("fixed");
}

function showSidebar (){
  $("#main-block").animate({width: '60%'}, 1000);
  $("#sidemenu").animate({left: '60%'}, 1000);
  $("#right-arrow").animate({left: '53.5%'},1000);
  $("#left-arrow").hide();
}

 /*
$( window ).scroll(function() {
    hideSidebar();
})*/
