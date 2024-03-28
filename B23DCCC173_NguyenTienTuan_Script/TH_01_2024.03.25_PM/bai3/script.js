document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".image");
  images.forEach(function (image) {
    image.addEventListener("mouseover", function () {
      this.style.borderColor = "red";
    });
    image.addEventListener("mouseout", function () {
      this.style.borderColor = "transparent";
    });
  });
});
