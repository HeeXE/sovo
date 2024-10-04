// Image Slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4500); // Change image every 2 seconds
}

// Accordion
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

const filterButtons = document.querySelectorAll(".filter-button");
const productItems = document.querySelectorAll(".product-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    filterProducts(category);
  });
});

function filterProducts(category) {
  productItems.forEach((item) => {
    const productCategory = item.getAttribute("data-category");
    if (category === "all" || productCategory === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Update the active button class
  filterButtons.forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`.filter-button[data-category="${category}"]`)
    .classList.add("active");
}

// Initial filtering (show all products)
filterProducts("all");

// Scroll Animation to Products
const elementIds = ["browseButton", "nav_product", "nav_merch"];

elementIds.forEach((id) => {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Product").scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Animation to Merchandise
document
  .getElementById("nav_merch")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Carousel").scrollIntoView({ behavior: "smooth" });
  });

// Scroll Animation to Footer
document
  .getElementById("nav_footer")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  });

// Scroll Animation to Footer
document.getElementById("nav_sovo").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
});
