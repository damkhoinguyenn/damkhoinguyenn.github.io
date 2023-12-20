document.addEventListener("DOMContentLoaded", function () {
  const frames = JSON.parse(localStorage.getItem("selectedFrames"));
  const folderName = localStorage.getItem("selectedFolderName");
  const imageType = localStorage.getItem("imageType");
  const imageContainer = document.getElementById("imagesDisplayContainer");

  frames.forEach((frame) => {
    const img = document.createElement("img");
    img.src = `data/${folderName}/images${imageType}/${frame}.jpg`;
    img.classList.add("frame-image");
    imageContainer.appendChild(img);
  });
});
