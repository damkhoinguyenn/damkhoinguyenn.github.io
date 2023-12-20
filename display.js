document.addEventListener("DOMContentLoaded", function () {
  const frames = JSON.parse(localStorage.getItem("selectedFrames"));
  const folderName = localStorage.getItem("selectedFolderName");
  const imageType = localStorage.getItem("imageType");
  const frameSelector = document.getElementById("frameSelector");
  const imageDisplay = document.getElementById("imageDisplay");

  frames.forEach((frame) => {
    let option = document.createElement("option");
    option.value = frame;
    option.textContent = `Frame ${frame}`;
    frameSelector.appendChild(option);
  });

  frameSelector.addEventListener("change", function () {
    displayImage(frameSelector.value);
  });

  function displayImage(frame) {
    imageDisplay.innerHTML = "";
    const img = document.createElement("img");
    img.src = `tree/main/data/${folderName}/images${imageType}/${frame}.jpg`;
    img.classList.add("frame-image");
    imageDisplay.appendChild(img);
  }

  if (frames.length > 0) {
    displayImage(frames[0]);
  }
});
