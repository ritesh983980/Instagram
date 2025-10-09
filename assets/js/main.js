/**
 * main.js
 * Global site functionalities for UniqueBio.in
 * Includes scroll animations and search handling.
 */

// --- 1. Utility Functions ---

/**
 * Helper function to remove a class after a delay.
 * Used for copy button feedback.
 * @param {HTMLElement} element - The element to modify.
 * @param {string} className - The class name to remove.
 * @param {number} delay - The delay in milliseconds.
 */
function removeClassDelayed(element, className, delay) {
    setTimeout(() => {
        element.classList.remove(className);
    }, delay);
}


// --- 2. Scroll Animation Logic ---

const scrollAnimationModule = (() => {
    const FADE_IN_CLASS = 'fade-in';
    const ANIMATED_CLASS = 'animated';
    const SCREEN_POSITION_MULTIPLIER = 1.2; // Element appears when 1/1.2 (approx 83%) of the screen is above it

    /**
     * Finds elements with the fade-in class and adds the 'animated' class
     * when they scroll into the viewport.
     */
    const animateOnScroll = () => {
        // Only select elements that haven't been animated yet
        const elements = document.querySelectorAll(`.${FADE_IN_CLASS}:not(.${ANIMATED_CLASS})`);
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / SCREEN_POSITION_MULTIPLIER;
            
            if (elementPosition < screenPosition) {
                // Add a small delay to respect CSS delay classes (delay-1, delay-2, etc.)
                // and ensure the animation is triggered.
                element.classList.add(ANIMATED_CLASS);
            }
        });
    };

    /**
     * Initializes the scroll animation listeners.
     */
    const init = () => {
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('resize', animateOnScroll); // Recalculate on resize
        animateOnScroll(); // Run once on load to catch elements already in view
    };

    return {
        init: init
    };
})();


// --- 3. Search Functionality ---

const searchModule = (() => {
    const SEARCH_BOX_SELECTOR = '.search-box';
    const SEARCH_INPUT_SELECTOR = '.search-box input';
    const SEARCH_BUTTON_SELECTOR = '.search-box button';

    /**
     * Handles the search action (simulated, as this is a front-end file).
     * In a real app, this would redirect or fetch/filter content.
     */
    const handleSearch = () => {
        const inputElement = document.querySelector(SEARCH_INPUT_SELECTOR);
        const query = inputElement ? inputElement.value.trim() : '';

        if (query) {
            console.log(`Searching for: ${query}`);
            // --- ACTUAL SEARCH LOGIC (SIMULATED REDIRECTION) ---
            // In a real scenario, this would navigate to a search results page:
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            
            // For this project, we'll just show an alert.
            alert(`Search functionality is active! Searching for: "${query}".\n\n(Note: In a live website, this would take you to a results page.)`);
        } else {
            alert('Please enter a search term for bios, fonts, or hashtags.');
        }
    };

    /**
     * Initializes search listeners.
     */
    const init = () => {
        const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);
        const searchInput = document.querySelector(SEARCH_INPUT_SELECTOR);

        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleSearch();
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch();
                }
            });
        }
    };

    return {
        init: init
    };
})();


// --- 4. Main Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Scroll Animations
    scrollAnimationModule.init();

    // 2. Initialize Search
    searchModule.init();
    
    // Note: The 'copyBio' function from index.html is expected to be global
    // or moved here if we want to follow best practices, but for simple projects,
    // keeping it in the HTML script tag works too. If moved here:
    // window.copyBio = (button) => { /* ... copy logic ... */ };
    
    console.log("main.js loaded and initialized.");
});

// Expose copyBio globally so the inline HTML button handler can find it.
// This is required because the copyBio function was defined in index.html's <script> tag.
window.copyBio = (button) => {
    const bioText = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(bioText.trim()).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        // Use the global utility function
        removeClassDelayed(button, 'Copied!', 2000); 
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
        alert('Copy failed! Please try again or copy manually.');
    });
};
