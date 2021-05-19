$(function() {
  $("#search").on("keyup", function () {
    $("#search").val() !== ""
      ? $("#search-results").addClass("show")
      : $("#search-results").removeClass("show");
  });

  $("#search").on("focusout", function () {
    $("#search-results").removeClass("show");
  });

  const quillConfig = {
    modules: {
      toolbar: [["bold", "italic", "underline"]],
    },
    placeholder: "Describe this attribute...",
    theme: "snow"
  };

  let editor = new Quill("#editor", quillConfig);
});
