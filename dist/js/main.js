"use strict";

$("#menu-action").click(function () {
  $(".sidebar").toggleClass("active");
  $(".main-content").toggleClass("active");
  $(this).toggleClass("active");
});

// Add hover feedback on menu
$("#menu-action").hover(function () {
  $(".sidebar").toggleClass("hovered");
});
// Date Picker
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, options);
});


$(document).ready(function () {
  $(".datepicker").datepicker();
});
