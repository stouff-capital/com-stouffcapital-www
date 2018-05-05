$(document).ready(function() {
  $(".email-action input").each(function() {
    if($(this).val().length > 0)
      $(this).parents(".email-action").addClass("focus");
  })

  $(".email-action input").on("focus", function() {
    $(this).parents(".email-action").addClass("focus");
  });

  $(".email-action input").on("blur", function() {
    if($(this).val().length === 0)
      $(this).parents(".email-action").removeClass("focus");
  });
});
