let currentSlide = 0;

function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  pages.forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function autoSlide() {
  const carouselImages = document.querySelector('.carousel-images');
  const slides = document.querySelectorAll('.carousel-images img');
  currentSlide = (currentSlide + 1) % slides.length;
  carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Start auto-slide
setInterval(autoSlide, 3000); // Slide every 3 seconds

function loginUser() {
  alert('Login functionality is under construction.');
}

function registerUser() {
  alert('User registered successfully!');
}

function generatePlan() {
  const mockPlan = {
    workout: '30 minutes of jogging, 3 times a week',
    diet: '2000 calorie balanced diet',
    wellness: '10 minutes of meditation daily',
    date: new Date().toLocaleDateString()
  };

  const plansContainer = document.getElementById('plans-container');
  const planDiv = document.createElement('div');
  planDiv.classList.add('plan');
  planDiv.innerHTML = `
    <p><strong>Date:</strong> ${mockPlan.date}</p>
    <p><strong>Workout:</strong> ${mockPlan.workout}</p>
    <p><strong>Diet:</strong> ${mockPlan.diet}</p>
    <p><strong>Wellness:</strong> ${mockPlan.wellness}</p>
  `;
  plansContainer.appendChild(planDiv);
}
