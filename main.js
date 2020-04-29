//far comparire il menu
$('div:nth-child(2)>a').click(function () {
  $(".hamburger-menu").show();
}
);
//far scomparire il menu
$('a.close').click(function () {
  $(".hamburger-menu").hide();
}
);
