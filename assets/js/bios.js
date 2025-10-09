/**
 * bios.js
 * Handles loading and display of bios from JSON data on category pages (e.g., vip.html, attitude.html).
 */

const bioLoaderModule = (() => {
    // Determine the current bio category from the URL path.
    // Example: /pages/bios/vip.html -> 'vip'
    const getCurrentCategory = () => {
        const path = window.location.pathname;
        const match = path.match(/\/pages\/bios\/(\w+)\.html/);
        if (match && match[1]) {
            return match[1];
        }
        // If not a bio page, return null
        return null;
    };

    /**
     * Fetches bio data from the corresponding JSON file.
     * @param {string} category - The category name (e.g., 'vip').
     * @returns {Promise<Array>} - A promise that resolves to an array of bio objects.
     */
    const fetchBios = async (category) => {
        const jsonUrl = `../../data/bios/${category}.json`;
        try {
            const response = await fetch(jsonUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${jsonUrl}`);
            }
            const data = await response.json();
            // Assuming the JSON structure is an array of strings or objects with a 'text' field
            return data.bios || data; 
        } catch (error) {
            console.error(`Error loading bios for category ${category}:`, error);
            // Return empty array on failure
            return []; 
        }
    };

    /**
     * Creates the HTML structure for a single bio card.
     * @param {string} bioText - The text of the bio.
     * @returns {string} - The HTML string for the bio card.
     */
    const createBioCardHTML = (bioText) => {
        // Replicate the structure from index.html for consistency
        return `
            <div class="bio-card fade-in">
                <div class="bio-text">
                    ${bioText}
                </div>
                <button class="copy-btn" onclick="copyBio(this)">Copy Bio</button>
            </div>
        `;
    };

    /**
     * Renders the fetched bios into the designated container on the page.
     * @param {Array} bios - The array of bios to display.
     */
    const renderBios = (bios) => {
        const container = document.querySelector('.bio-grid');
        const header = document.querySelector('.bio-header h2');
        const category = getCurrentCategory();

        if (!container) {
            console.warn("Bio container '.bio-grid' not found.");
            return;
        }

        // Clear existing content (if any)
        container.innerHTML = '';

        if (header && category) {
            // Capitalize the first letter for display
            const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
            header.textContent = `${displayCategory} Instagram Bios`;
        }

        if (bios.length === 0) {
            container.innerHTML = `<p class="text-center" style="grid-column: 1 / -1; font-style: italic;">No bios found for this category yet. Please check back later!</p>`;
            return;
        }

        // Generate and insert HTML for each bio
        const bioHTML = bios.map(bio => {
            // If the JSON object has a 'text' property, use it. Otherwise, assume the item is the text itself.
            const text = (typeof bio === 'object' && bio.text) ? bio.text : bio;
            return createBioCardHTML(text);
        }).join('');

        container.innerHTML = bioHTML;
        
        // Trigger scroll animation for the newly loaded elements
        if (window.scrollAnimationModule && window.scrollAnimationModule.animateOnScroll) {
             window.scrollAnimationModule.animateOnScroll();
        }
    };

    /**
     * Main initialization function for bios.js
     */
    const init = async () => {
        const category = getCurrentCategory();
        
        // Only proceed if we are on a bio category page
        if (!category) {
            // console.log("Not a bio category page, bios.js skipping content load.");
            return;
        }

        const bios = await fetchBios(category);
        renderBios(bios);
        
        console.log(`bios.js loaded and rendered ${bios.length} bios for category: ${category}`);
    };

    return {
        init: init
    };

})();

// Initialize the bio loader after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    bioLoaderModule.init();
});
