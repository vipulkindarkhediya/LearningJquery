$(document).ready(function () {
  $("button:first").click(function (e) {
    e.preventDefault();
    $("p").remove();
  });
  $("button:last").click(function (e) {
    e.preventDefault();
    $("p").empty();
  });
});
