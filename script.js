document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const contentSection = document.querySelector('.content-section');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    let biosData = {}; // This will store the data from bios.json

    // Function to fetch bios data from JSON file
    async function fetchBiosData() {
        try {
            const response = await fetch('bios.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            biosData = await response.json();
            console.log('Bios data loaded:', biosData);
            // Load the default section (Instagram) after data is fetched
            loadSection('instagram');
        } catch (error) {
            console.error('Error fetching bios data:', error);
            contentSection.innerHTML = '<p style="text-align: center; color: red;">Error loading content. Please check bios.json file and ensure it\'s valid JSON.</p>';
        }
    }

    // Function to render a specific section based on data from biosData
    function loadSection(sectionName) {
        contentSection.innerHTML = ''; // Clear existing content
        const sectionData = biosData.sections[sectionName];

        if (!sectionData) {
            contentSection.innerHTML = `<p style="text-align: center; color: orange;">Content for "${sectionName}" not found in bios.json.</p>`;
            return;
        }

        let sectionHtml = `
            <div id="section-${sectionName}" class="bio-section active">
                <h1>${sectionData.title}</h1>
                <p>${sectionData.description}</p>
                <div class="bio-categories">
        `;

        if (sectionName === 'username') {
            sectionHtml += `<div class="username-table-container">`;
            for (const category of sectionData.categories) {
                sectionHtml += `<h2>${category.categoryName}</h2>
                                <table class="username-table">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;
                category.items.forEach((item, index) => {
                    sectionHtml += `
                        <tr>
                            <td>${index + 1}.</td>
                            <td>
                                <div class="username-cell">
                                    <span class="username-text">${item.text}</span>
                                    <button class="copy-btn">Copy</button>
                                </div>
                            </td>
                        </tr>
                    `;
                });
                sectionHtml += `</tbody></table>`;
            }
            sectionHtml += `</div>`; // Close username-table-container
        } else {
            for (const category of sectionData.categories) {
                sectionHtml += `
                    <div class="category-item">
                        ${category.categoryName}
                        <span class="plus-icon">+</span>
                        <div class="bio-content">
                `;
                for (const item of category.items) {
                    const bioTextClass = item.centered ? 'bio-text-centered' : '';
                    sectionHtml += `
                        <div class="bio-text-wrapper ${bioTextClass}">
                            <p class="bio-text">${item.text.replace(/\n/g, '<br>')}</p>
                            <button class="copy-btn">Copy</button>
                        </div>
                    `;
                }
                sectionHtml += `</div></div>`; // Close bio-content, category-item
            }
        }

        sectionHtml += `</div></div>`; // Close bio-categories, bio-section
        contentSection.innerHTML = sectionHtml;

        // Scroll to the top of the content section after loading new content
        // This is useful when navigating between sections.
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Event Listeners (Static & Delegated) ---

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Navigation links click (Delegated to handle menu closing and section loading)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            loadSection(sectionId); // Load the section content dynamically
            // Close the menu after clicking a link
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Delegated event listener for category items and copy buttons within contentSection
    contentSection.addEventListener('click', async (event) => {
        const target = event.target;

        // Handle Copy button clicks
        if (target.classList.contains('copy-btn')) {
            let textToCopy = '';
            const parentWrapper = target.closest('.bio-text-wrapper'); // For regular bios
            const parentCell = target.closest('.username-cell'); // For username table

            if (parentWrapper) {
                // Use textContent directly, as innerText might include hidden text
                // Also, convert <br> tags back to newlines for actual copy
                textToCopy = parentWrapper.querySelector('.bio-text').innerHTML.replace(/<br\s*\/?>/gi, '\n');
            } else if (parentCell) {
                textToCopy = parentCell.querySelector('.username-text').innerText;
            }

            try {
                await navigator.clipboard.writeText(textToCopy);
                target.textContent = 'Copied!';
                target.classList.add('copied');
                setTimeout(() => {
                    target.textContent = 'Copy';
                    target.classList.remove('copied');
                }, 2000); // Change back to "Copy" after 2 seconds
            } catch (err) {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy text. Please try again.');
            }
        }
        // Handle Category item click to expand/collapse content (event delegation)
        else if (target.closest('.category-item')) {
            const item = target.closest('.category-item');
            const content = item.querySelector('.bio-content');
            const plusIcon = item.querySelector('.plus-icon');

            // Prevent expansion/collapse if a copy button within the item was clicked
            if (target.classList.contains('copy-btn')) {
                return;
            }

            if (content && plusIcon) { // Ensure they exist before trying to toggle
                // Close any other open category items within the same parent
                item.parentNode.querySelectorAll('.bio-content.active').forEach(openContent => {
                    if (openContent !== content) { // Don't close the current one
                        openContent.classList.remove('active');
                        openContent.style.maxHeight = '0';
                        openContent.closest('.category-item').querySelector('.plus-icon').textContent = '+';
                    }
                });

                // Toggle the clicked category item
                content.classList.toggle('active');
                if (content.classList.contains('active')) {
                    plusIcon.textContent = '-';
                    // Set maxHeight to scrollHeight to allow content to fully expand
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    plusIcon.textContent = '+';
                    content.style.maxHeight = '0'; // Collapse
                }
            }
        }
    });

    // Scroll to Top Button Logic
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial data fetch and content load when the page is ready
    fetchBiosData();
});
