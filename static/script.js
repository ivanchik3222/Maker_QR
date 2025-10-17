const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const logo = document.getElementById("logo");

// ===== Загрузка сохранённого фото из LocalStorage =====
window.addEventListener("DOMContentLoaded", () => {
  const savedPhoto = localStorage.getItem("savedPhoto");
  if (savedPhoto) {
    preview.src = savedPhoto;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }

  logo.src = "/static/icons/logo.png";
});

// ===== Загрузка нового фото =====
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const imageData = e.target.result;
    preview.src = imageData;
    preview.style.display = "block";
    localStorage.setItem("savedPhoto", imageData);
  };
  reader.readAsDataURL(file);
});
