// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("intro").textContent = "Text has been changed with JavaScript!";
    document.getElementById("intro").style.color = "green"; // Modify CSS style
  });
  
  // Add or remove an element
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const box = document.getElementById("box");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  
