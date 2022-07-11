$("#login-button").click(function (event) {
  event.preventDefault();
  $("form").fadeOut(500);
  $(".wrapper").addClass("form-success");
  setTimeout(function () {
    location.href = "BirthdayCake.html";
  }, 2000);
});
