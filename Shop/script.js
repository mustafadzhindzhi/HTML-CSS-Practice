// function openLoginModal() {
//     loginModal.style.right = "0"; // Slide in from the right
//     modalOverlay.style.display = "block";
//  }
 
//  // Function to close the login modal
//  function closeLoginModal() {
//     loginModal.style.right = "-50%"; // Slide out to the right
//     modalOverlay.style.display = "none";
//  }
 
//  // Attach click event listeners to the login toggle and overlay
//  loginToggle.addEventListener("click", openLoginModal);
//  modalOverlay.addEventListener("click", closeLoginModal);

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active')
   })
}

if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active')
   })
};

const slides = document.querySelectorAll('#hero .slide');
let currentSlide = 0;

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000); // Change slide every 5 seconds