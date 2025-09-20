// ----------------------------
// Existing upload functionality
// ----------------------------
document.getElementById("upload")?.addEventListener("change", function(event) {
  const files = event.target.files;
  const gallery = document.getElementById("user-gallery");
  gallery.innerHTML = ""; // clear old uploads

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.classList.add("gallery-img"); // add class for zoom functionality
      gallery.appendChild(img);

      // Zoom popup for uploaded images
      img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
      });
    };
    reader.readAsDataURL(file);
  });
});

// ----------------------------
// Zoom popup functionality
// ----------------------------
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

// Apply zoom to all existing static images
document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// ----------------------------
// "+X more" functionality
// ----------------------------
const showMore = document.getElementById("showMore");
const fullGalleryModal = document.getElementById("fullGalleryModal");
const closeModal = document.getElementById("closeModal");

if (showMore) {
  showMore.addEventListener("click", () => {
    fullGalleryModal.style.display = "block";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    fullGalleryModal.style.display = "none";
  });
}

// ----------------------------
// Optional: zoom images inside full gallery modal
// ----------------------------
fullGalleryModal?.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});