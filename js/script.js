let currentUser = "";

// Show modal on page load
document.addEventListener("DOMContentLoaded", function () {
  showUsernameModal();
  setWelcomeMessage();
});

// Show username modal
function showUsernameModal() {
  const modal = document.getElementById("username-modal");
  const modalContent = document.getElementById("modal-content");

  // Show modal
  modal.classList.remove("hidden");

  // Animate modal appearance
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);

  // Focus on input
  document.getElementById("username-input").focus();
}

// Set username function
function setUsername(event) {
  event.preventDefault();
  const input = document.getElementById("username-input");
  const name = input.value.trim();

  if (name) {
    currentUser = name;
    // Store in memory (not localStorage as per restrictions)
    window.userData = { name: name };
    updateWelcomeMessage();
    closeModal();
  }
}

// Skip username function
function skipUsername() {
  currentUser = "Visitor";
  window.userData = { name: "Visitor" };
  updateWelcomeMessage();
  closeModal();
}

// Close modal function
function closeModal() {
  const modal = document.getElementById("username-modal");
  const modalContent = document.getElementById("modal-content");

  // Animate modal disappearance
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

document.querySelectorAll("nav a, #mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll("nav a, #mobile-menu a").forEach((l) => {
      l.classList.remove("bg-blue-600");
      l.classList.add("bg-gray-700");
    });
    this.classList.remove("bg-gray-700");
    this.classList.add("bg-blue-600");
  });
});

// Update welcome message with username
function updateWelcomeMessage() {
  const welcomeElement = document.getElementById("welcome-user");
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = `Good Morning, ${currentUser}`;
  } else if (hour < 17) {
    greeting = `Good Afternoon, ${currentUser}`;
  } else {
    greeting = `Good Evening, ${currentUser}`;
  }

  welcomeElement.textContent = greeting;
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("Please enter your name");
    document.getElementById("name").focus();
    return;
  }

  if (!email) {
    alert("Please enter your email");
    document.getElementById("email").focus();
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    document.getElementById("email").focus();
    return;
  }

  if (!message) {
    alert("Please enter your message");
    document.getElementById("message").focus();
    return;
  }

  // Success message
  alert("Thank you for your message! I'll get back to you soon.");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return; // Skip invalid hrefs
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-gray-800/98");
  } else {
    header.classList.remove("bg-gray-800/98");
  }
});

// Personalized welcome message
function setWelcomeMessage() {
  const welcomeElement = document.getElementById("welcome-user");
  const hour = new Date().getHours();
  let greeting = "User";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  welcomeElement.textContent = greeting;
}

// Initialize welcome message on load
document.addEventListener("DOMContentLoaded", setWelcomeMessage);

// Add some custom CSS animations
const style = document.createElement("style");
style.textContent = `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `;
document.head.appendChild(style);
