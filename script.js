// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add('show');
        }

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Define colors/gradients for each category (moved to top for better scope)
    const categoryColors = {
        'vip': {
            headerGradient: 'linear-gradient(to right, #8a2be2, #ff009c)', // Purple to Pink
            mainColor: '#8a2be2' // Primary Purple
        },
        'attitude': {
            headerGradient: 'linear-gradient(to right, #FF4E50, #F9D423)', // Red-Orange to Yellow
            mainColor: '#FF4E50'
        },
        'love': {
            headerGradient: 'linear-gradient(to right, #EB3349, #F45C43)', // Red to Orange-Red
            mainColor: '#EB3349'
        },
        'sad': {
            headerGradient: 'linear-gradient(to right, #4B79A1, #283E51)', // Dark Blue to Darker Blue
            mainColor: '#4B79A1'
        },
        'funny': {
            headerGradient: 'linear-gradient(to right, #FDC830, #F37335)', // Orange-Yellow to Orange
            mainColor: '#F37335'
        },
        'cool': {
            headerGradient: 'linear-gradient(to right, #2193b0, #6dd5ed)', // Light Blue to Cyan
            mainColor: '#2193b0'
        },
        'stylish': {
            headerGradient: 'linear-gradient(to right, #aa4b6b, #6b6b83)', // Dark Rose to Grey-Blue
            mainColor: '#aa4b6b'
        },
        'friends': {
            headerGradient: 'linear-gradient(to right, #56ab2f, #a8e063)', // Green to Light Green
            mainColor: '#56ab2f'
        },
        'single': {
            headerGradient: 'linear-gradient(to right, #a770ef, #cf8bf3)', // Light Purple to Pink-Purple
            mainColor: '#a770ef'
        },
        'punjabi': {
            headerGradient: 'linear-gradient(to right, #f7bb97, #dd5e89)', // Light Orange to Pink
            mainColor: '#dd5e89'
        },
        // **Added default category for index.html or fallback**
        'default': { // Make sure this key exists for index.html
            headerGradient: 'linear-gradient(to right, #8a2be2, #ff009c)', // Default Purple to Pink
            mainColor: '#8a2be2' // Default Primary Purple
        }
    };

    // Function to apply category-specific styles
    function applyCategoryStyles(categoryKey) {
        const header = document.querySelector('.header');
        const pageTitle = document.querySelector('.page-title');
        const subSectionTitles = document.querySelectorAll('.sub-section-title');
        const copyBtns = document.querySelectorAll('.copy-btn');
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        const colors = categoryColors[categoryKey] || categoryColors['default'];

        if (header) {
            header.style.background = colors.headerGradient;
        }
        if (pageTitle) {
            pageTitle.style.color = colors.mainColor;
        }
        subSectionTitles.forEach(title => {
            title.style.color = colors.mainColor;
        });
        copyBtns.forEach(btn => {
            btn.style.backgroundColor = colors.mainColor;
            btn.onmouseover = () => btn.style.backgroundColor = colors.mainColor + 'd0';
            btn.onmouseout = () => btn.style.backgroundColor = colors.mainColor;
        });
        if (scrollToTopBtn) {
            scrollToTopBtn.style.backgroundColor = colors.mainColor;
            scrollToTopBtn.onmouseover = () => scrollToTopBtn.style.backgroundColor = colors.mainColor + 'd0';
            scrollToTopBtn.onmouseout = () => scrollToTopBtn.style.backgroundColor = colors.mainColor;
        }
    }

    // Function to load category demo cards on index.html
    async function loadCategoryDemos() {
        const categoryGrid = document.getElementById('category-demo-grid');
        if (!categoryGrid) return;

        const categories = [
            { name: "VIP Bios", link: "vip-bios.html", iconName: "grade", demoBio: "👑 Royalty in every word. Elevate your profile with our exclusive VIP bios." },
            { name: "Attitude Bios", link: "attitude-bios.html", iconName: "mood", demoBio: "🔥 Unleash your inner fire. Bold statements that define you." },
            { name: "Common Bios", link: "common-bios.html", iconName: "people_alt", demoBio: "🌟 हर मूड और हर प्रोफाइल के लिए खास बायो।"},
            { name: "Love Bios", link: "love-bios.html", iconName: "favorite", demoBio: "❤️ Express your deepest feelings. Bios that speak from the heart." },
            { name: "Sad Bios", link: "sad-bios.html", iconName: "sentiment_dissatisfied", demoBio: "😔 Reflect your true emotions. Bios for the melancholic soul." },
            { name: "Funny Bios", link: "funny-bios.html", iconName: "sentiment_very_satisfied", demoBio: "😂 Laughter guaranteed. Hilarious bios to lighten the mood." },
            { name: "Cool Bios", link: "cool-bios.html", iconName: "ac_unit", demoBio: "😎 Stay chill, stay cool. Bios that reflect your effortless style." },
            { name: "Stylish Bios", link: "stylish-bios.html", iconName: "star_half", demoBio: "✨ Shine bright, look sharp. Trendy bios to make you stand out." },
            { name: "Friends Bios", link: "friends-bios.html", iconName: "people", demoBio: "🤝 Celebrate true friendship. Bios dedicated to your best buddies." },
            { name: "Single Bios", link: "single-bios.html", iconName: "person", demoBio: "💖 Loving my single life. Bios for independent souls." },
            { name: "Punjabi Bios", link: "punjabi-bios.html", iconName: "flag", demoBio: "💪 Desi swag, Punjabi pride. Bios with a touch of Punjabiyat." }
        ];

        categoryGrid.innerHTML = '';

        categories.forEach((category, index) => {
            const card = document.createElement('a');
            card.href = category.link;
            card.classList.add('category-demo-card');
            const gradientClasses = ['gradient-bg-1', 'gradient-bg-2', 'gradient-bg-3', 'gradient-bg-4'];
            card.classList.add(gradientClasses[index % gradientClasses.length]);

            card.innerHTML = `
                <div class="card-icon"><span class="material-icons">${category.iconName}</span></div>
                <h3 class="card-title">${category.name}</h3>
                <p class="card-demo-text">${category.demoBio}</p>
                <div class="card-link-overlay">View All Bios <span class="material-icons">arrow_forward</span></div>
            `;
            categoryGrid.appendChild(card);
        });
    }

    // Function to load actual bios on category pages
    async function loadCategorySpecificBios() {
        // boysBioListContainer और girlsBioListContainer को अब common-bios.html में उपयोग नहीं किया जाएगा,
        // लेकिन इन्हें अन्य कैटेगरी पेजों के लिए रखा गया है।
        const boysBioListContainer = document.getElementById('boys-bio-list');
        const girlsBioListContainer = document.getElementById('girls-bio-list');
        const allBioListContainer = document.getElementById('all-bio-list'); // Common bios के लिए मुख्य कंटेनर

        // अगर कोई भी अपेक्षित कंटेनर मौजूद नहीं है तो बाहर निकल जाएं
        if (!boysBioListContainer && !girlsBioListContainer && !allBioListContainer) return;

        const response = await fetch('bios.json');
        const biosData = await response.json();

        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        const categoryKey = currentPage.replace('-bios', ''); // e.g., 'vip' from 'vip-bios', 'common' from 'common-bios'

        // यह फंक्शन बायो कार्ड बनाता है
        function createBioCard(bio, index) {
            const bioCard = document.createElement('div');
            bioCard.classList.add('bio-card');
            const gradientClasses = ['gradient-bg-1', 'gradient-bg-2', 'gradient-bg-3', 'gradient-bg-4'];
            bioCard.classList.add(gradientClasses[index % gradientClasses.length]);

            // सुनिश्चित करें कि बायो टेक्स्ट 'text' प्रॉपर्टी से लिया गया है
            let formattedBioText = bio.text ? bio.text.replace(/\n/g, '<br>') : '';
            formattedBioText = formattedBioText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            bioCard.innerHTML = `
                <p class="bio-text">${formattedBioText}</p>
                <button class="copy-btn">Copy</button>
            `;
            return bioCard;
        }

        // Common कैटेगरी के लिए विशेष लॉजिक
        if (categoryKey === 'common') {
            if (allBioListContainer) {
                allBioListContainer.innerHTML = ''; // सुनिश्चित करें कि यह खाली है
                const commonBios = biosData[categoryKey] || []; // सीधे 'common' ऐरे से बायो प्राप्त करें
                if (commonBios.length > 0) {
                    commonBios.forEach((bio, index) => {
                        allBioListContainer.appendChild(createBioCard(bio, index));
                    });
                } else {
                    allBioListContainer.innerHTML = '<p class="no-bios-message">अभी तक कोई सामान्य बायो उपलब्ध नहीं है।</p>';
                }
            }
        } else {
            // अन्य सभी कैटेगरी (VIP, Attitude, Love, आदि) के लिए सामान्य लॉजिक
            // Boys Bios डिस्प्ले करें
            if (boysBioListContainer) {
                boysBioListContainer.innerHTML = '';
                const boysBios = biosData[categoryKey] && biosData[categoryKey].boys ? biosData[categoryKey].boys : [];
                if (boysBios.length > 0) {
                    boysBios.forEach((bio, index) => {
                        boysBioListContainer.appendChild(createBioCard(bio, index));
                    });
                } else {
                    boysBioListContainer.innerHTML = '<p class="no-bios-message">अभी तक लड़कों के लिए कोई बायो उपलब्ध नहीं है।</p>';
                }
            }

            // Girls Bios डिस्प्ले करें
            if (girlsBioListContainer) {
                girlsBioListContainer.innerHTML = '';
                const girlsBios = biosData[categoryKey] && biosData[categoryKey].girls ? biosData[categoryKey].girls : [];
                if (girlsBios.length > 0) {
                    girlsBios.forEach((bio, index) => {
                        girlsBioListContainer.appendChild(createBioCard(bio, index));
                    });
                } else {
                    girlsBioListContainer.innerHTML = '<p class="no-bios-message">अभी तक लड़कियों के लिए कोई बायो उपलब्ध नहीं है।</p>';
                }
            }
        }

        // Add copy functionality
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const bioText = this.previousElementSibling.innerText;
                navigator.clipboard.writeText(bioText).then(() => {
                    this.innerText = 'Copied!';
                    this.classList.add('copied');
                    setTimeout(() => {
                        this.innerText = 'Copy';
                        this.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });
    }

    // Determine which function to call based on the current page
    const currentPageName = window.location.pathname.split('/').pop();
    if (currentPageName === 'index.html' || currentPageName === '') {
        loadCategoryDemos();
        applyCategoryStyles('default');
    } else if (currentPageName.endsWith('-bios.html')) {
        const categoryKey = currentPageName.replace('-bios.html', '');
        loadCategorySpecificBios();
        applyCategoryStyles(categoryKey);
    }
});

