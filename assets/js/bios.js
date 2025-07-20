document.addEventListener('DOMContentLoaded', () => {
    const bioDisplayArea = document.getElementById('bio-display-area');

    /**
     * मौजूदा पेज के URL से कैटेगरी का नाम निकालता है।
     * उदाहरण: 'pages/bios/vip.html' से 'vip' निकालेगा।
     * @returns {string|null} कैटेगरी का नाम (जैसे 'vip') या null अगर नहीं मिला।
     */
    function getCategoryFromURL() {
        // URL पाथ को '/' से तोड़ें
        const pathSegments = window.location.pathname.split('/');
        // आखिरी सेगमेंट फाइल का नाम होगा (जैसे 'vip.html')
        const fileName = pathSegments[pathSegments.length - 1]; 
        
        if (fileName && fileName.endsWith('.html')) {
            // '.html' एक्सटेंशन हटाकर कैटेगरी का नाम निकालें
            return fileName.replace('.html', ''); 
        }
        return null;
    }

    /**
     * किसी विशिष्ट कैटेगरी के बायो को उसकी JSON फ़ाइल से fetch करता है।
     * @param {string} category - कैटेगरी का नाम (जैसे 'vip', 'attitude')।
     * @returns {Promise<Array<string>>} एक Promise जो बायो स्ट्रिंग के एक array में resolve होता है।
     */
    async function fetchBios(category) {
        try {
            // विशिष्ट कैटेगरी की JSON फ़ाइल का पाथ बनाएं
            // मान लें कि JSON फ़ाइलें /data/ फोल्डर में हैं
            const response = await fetch(/data/${category}.json);

            // जांचें कि रिक्वेस्ट सफल थी या नहीं
            if (!response.ok) {
                throw new Error(HTTP error! status: ${response.status} for category: ${category}. Check if /data/${category}.json exists.);
            }

            const data = await response.json();

            // मान लें कि संरचना एक ऑब्जेक्ट के साथ एक array है: [{ category: "...", bios: [...] }]
            if (data && data.length > 0 && data[0].bios) {
                return data[0].bios;
            } else {
                console.warn('/data/${category}.json' में 'bios' array नहीं मिला या फ़ाइल खाली है।);
                return [];
            }
        } catch (error) {
            console.error(कैटेगरी '${category}' के बायो fetch करने में त्रुटि:, error);
            // त्रुटि होने पर खाली array लौटाएं ताकि ऐप क्रैश न हो
            return [];
        }
    }

    /**
     * बायो के एक array को निर्दिष्ट डिस्प्ले एरिया में दिखाता है।
     * @param {Array<string>} biosArray - प्रदर्शित करने के लिए बायो स्ट्रिंग का array।
     * @param {string} currentCategory - वर्तमान में प्रदर्शित की जा रही कैटेगरी का नाम।
     */
    function displayBios(biosArray, currentCategory) {
        if (!bioDisplayArea) {
            console.error("बायो डिस्प्ले एरिया एलिमेंट नहीं मिला। कृपया सुनिश्चित करें कि 'bio-display-area' ID वाला एक एलिमेंट मौजूद है।");
            return;
        }

        // पहले से प्रदर्शित बायो को साफ करें
        bioDisplayArea.innerHTML = '';

        if (biosArray.length === 0) {
            bioDisplayArea.innerHTML = <p>"${currentCategory}" कैटेगरी के लिए कोई बायो उपलब्ध नहीं है।</p>;
            return;
        }

        // वर्तमान कैटेगरी के लिए एक शीर्षक जोड़ें
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = ${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Bios;
        bioDisplayArea.appendChild(categoryHeading);

        // प्रत्येक बायो के लिए एक सूची या व्यक्तिगत पैराग्राफ बनाएं
        const bioList = document.createElement('ul'); // बेहतर संरचना के लिए एक अनऑर्डर लिस्ट का उपयोग करें
        biosArray.forEach(bioText => {
            const listItem = document.createElement('li');
            listItem.textContent = bioText;
            bioList.appendChild(listItem);
        });
        bioDisplayArea.appendChild(bioList);
    }

    // मुख्य लॉजिक: पेज लोड होने पर URL से कैटेगरी पहचानें और बायो लोड करें
    const currentCategory = getCategoryFromURL();
    if (currentCategory) {
        fetchBios(currentCategory).then(bios => {
            displayBios(bios, currentCategory);
        });
    } else {
        // यह कोड तब चलेगा जब bios.js ऐसे पेज पर लोड हो जो कैटेगरी पेज नहीं है (जैसे index.html)
        // हालाँकि, इस नए सेटअप में bios.js केवल कैटेगरी पेजों पर ही लिंक किया जाएगा।
        console.warn("URL से कैटेगरी निर्धारित नहीं की जा सकी। कोई बायो लोड नहीं होगा।");
        if (bioDisplayArea) {
            bioDisplayArea.innerHTML = "<p>कैटेगरी बायो देखने के लिए मुख्य पेज से एक कैटेगरी चुनें।</p>";
        }
    }
});
