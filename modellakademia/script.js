function hideSidebar (){
  $("#main-block").width('100%');
  $("#sidemenu").hide();
  $("#right-arrow").hide();
  $("#left-arrow").show();
}

function showSidebar (){
  $("#main-block").width('60%');
  $("#sidemenu").show();
  $("#right-arrow").show();
  $("#left-arrow").hide();
}
