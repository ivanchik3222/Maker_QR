const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

function renderImages() {
  gallery.innerHTML = "";
  const images = JSON.parse(localStorage.getItem("images") || "[]");
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}

fileInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = ev => {
      const images = JSON.parse(localStorage.getItem("images") || "[]");
      images.push(ev.target.result);
      localStorage.setItem("images", JSON.stringify(images));
      renderImages();
    };
    reader.readAsDataURL(file);
  }
});

renderImages();
