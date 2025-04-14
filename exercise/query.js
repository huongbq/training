document.querySelector(".message").style.color = "blue";

// jQuery
$(".message").css("font-style", "italic");

// jQuery Selectors
$("#changeText").click(function () {
  // jQuery HTML
  $(".message").html("Text has been <strong>changed</strong> with jQuery!");
});

// jQuery CSS
$("#toggleStyle").click(function () {
  $(".message").toggleClass("highlight");
});

// jQuery DOM
$("#addItem").click(function () {
  $("#list").append("<li>New Item</li>");
});
