var image = document.getElementById("profileImage");

function closeImage() {
  image.classList.remove("fullscreen-image");
}

function openImage() {
  image.classList.add("fullscreen-image");
}

image.addEventListener("click", function () {
  if (image.classList.contains("fullscreen-image")) {
    closeImage();
  } else {
    openImage();
  }
});
