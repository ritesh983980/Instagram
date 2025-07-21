// Main JavaScript for UniqueBio.in

// Function to copy text to clipboard
// This function will be called from HTML onclick events
function copyBio(button) { // Renamed from copyToClipboard to match HTML onclick
    const bioText = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(bioText.trim()).then(() => {
        const originalText = button.textContent;
        const originalBgColor = button.style.backgroundColor; // Store original background color
        
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#00b894'; // Success color
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = originalBgColor; // Restore original background color
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Optionally, provide user feedback for failed copy
    });
}

// Animation on scroll function
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in:not(.animated)');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Adjust threshold as needed
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Universal function to load and display bios for a given category
// This will replace the repetitive fetch logic in each HTML file
function loadBiosForCategory(jsonPath, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Display loading message initially
    container.innerHTML = '<div class="loading-message">Loading bios...</div>';

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                // If the response is not ok, try to read the error message from the server
                return response.text().then(text => {
                    throw new Error(`HTTP error! status: ${response.status} - ${text}`);
                });
            }
            return response.json();
        })
        .then(data => {
            if (!data.bios || data.bios.length === 0) {
                container.innerHTML = '<p class="error-message">No bios found in the data file.</p>';
                return;
            }
            
            container.innerHTML = ''; // Clear loading message
            
            data.bios.forEach((bio, index) => {
                const delayClass = `delay-${index % 3}`; 
                container.innerHTML += `
                    <div class="bio-card fade-in ${delayClass}">
                        <div class="bio-text">${bio.text.replace(/\n/g, '<br>')}</div>
                        <button class="copy-btn" onclick="copyBio(this)">Copy Bio</button>
                    </div>
                `;
            });

            // Trigger animations for newly added elements after they are appended to the DOM
            // Dispatching a scroll event forces `animateOnScroll` to re-evaluate elements.
            const event = new Event('scroll');
            window.dispatchEvent(event);

        })
        .catch(error => {
            console.error(`Error loading bios from ${jsonPath}:`, error);
            container.innerHTML = `
                <div class="error-message">
                    Failed to load bios. Please try again later.
                    <br><small>Error: ${error.message}</small>
                </div>
            `;
        });
}


document.addEventListener('DOMContentLoaded', function() {
    // --- Existing functionalities ---

    // Mobile menu toggle functionality (placeholder)
    // const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    // const navMenu = document.querySelector('.nav-menu');
    // if (mobileMenuToggle && navMenu) {
    //     mobileMenuToggle.addEventListener('click', () => {
    //         navMenu.classList.toggle('active');
    //     });
    // }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    if (document.getElementById('contactForm')) {
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // In a real implementation, you would send this data to a server
                document.getElementById('successMessage').style.display = 'block';
                this.reset();
                
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            } else {
                alert('Please fill in all fields.'); // Basic alert for incomplete form
            }
        });
    }

    // --- New/Centralized functionalities ---

    // Initial check for animations on page load
    // This will handle elements that are already in the DOM on load
    animateOnScroll();

    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Note: copyBio() is called via inline onclick in HTML.
    // No explicit event listeners for copy buttons are needed here in main.js.
});

