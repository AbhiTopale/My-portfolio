// Back-to-Top Button Functionality
window.onscroll = function () {
    // Show or hide the button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }

    // Trigger animations on scroll
    animateOnScroll();
};

// Smooth scroll to top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animations when elements come into view
function animateOnScroll() {
    // Fade-in animations for sections
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });

    // Animate skill boxes
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach((box) => {
        if (isInViewport(box)) {
            box.classList.add('animate');
        }
    });

    // Animate hobby boxes
    const hobbyBoxes = document.querySelectorAll('.hobby-box');
    hobbyBoxes.forEach((box, index) => {
        if (isInViewport(box)) {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
        }
    });
}

// Trigger animations on page load
window.addEventListener('load', () => {
    animateOnScroll();
});