// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyBhyxCqbpL1A6dm93Bld3Q6DA7i3tXCpKs';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Comprehensive Indian Festivals Database
const indianFestivals = {
    national: [
        "Diwali - Festival of Lights (October/November)",
        "Holi - Festival of Colors (March)",
        "Dussehra/Vijayadashami - Victory of Good over Evil (September/October)",
        "Eid ul-Fitr - End of Ramadan",
        "Eid ul-Adha - Festival of Sacrifice",
        "Christmas - Birth of Jesus Christ (December 25)",
        "Guru Nanak Jayanti - Sikh Guru's Birthday",
        "Mahavir Jayanti - Jain Festival",
        "Buddha Purnima - Buddha's Birthday"
    ],
    regional: {
        "kerala": ["Onam", "Vishu", "Thrissur Pooram", "Theyyam", "Boat Race Festivals"],
        "tamil nadu": ["Pongal", "Tamil New Year", "Karthigai Deepam", "Navaratri", "Thaipusam"],
        "rajasthan": ["Desert Festival", "Pushkar Fair", "Teej", "Gangaur", "Kite Festival"],
        "punjab": ["Baisakhi", "Lohri", "Karva Chauth", "Diwali", "Holi"],
        "west bengal": ["Durga Puja", "Kali Puja", "Poila Boishakh", "Jagaddhatri Puja", "Saraswati Puja"],
        "maharashtra": ["Ganesh Chaturthi", "Gudi Padwa", "Navratri", "Gokul Ashtami", "Makar Sankranti"],
        "gujarat": ["Navratri", "Kite Festival", "Rann Utsav", "Janmashtami", "Diwali"],
        "karnataka": ["Mysore Dasara", "Ugadi", "Karaga", "Hampi Festival", "Pattadakal Dance Festival"],
        "andhra pradesh": ["Ugadi", "Brahmotsavam", "Sankranti", "Bonalu", "Deccan Festival"],
        "telangana": ["Bonalu", "Bathukamma", "Ugadi", "Sammakka Saralamma Jatara", "Deccan Festival"],
        "odisha": ["Jagannath Rath Yatra", "Durga Puja", "Kali Puja", "Poila Boishakh", "Konark Dance Festival"],
        "assam": ["Bihu", "Durga Puja", "Kali Puja", "Poila Boishakh", "Ambubachi Mela"],
        "himachal pradesh": ["Kullu Dussehra", "Summer Festival", "Winter Carnival", "Minjar Fair", "Lavi Fair"],
        "uttarakhand": ["Kumbh Mela", "Nanda Devi Raj Jat", "Harela", "Ganga Aarti", "Phool Dei"],
        "jammu kashmir": ["Shivratri", "Baisakhi", "Hemis Festival", "Amarnath Yatra", "Tulip Festival"],
        "goa": ["Carnival", "Shigmo", "Feast of St. Francis Xavier", "Sao Joao", "Christmas"],
        "bihar": ["Chhath Puja", "Sonepur Mela", "Bihula", "Karma", "Jitiya"],
        "jharkhand": ["Sarhul", "Karma", "Sohrai", "Tusu", "Chhath Puja"],
        "madhya pradesh": ["Khajuraho Dance Festival", "Malwa Utsav", "Tansen Music Festival", "Navratri", "Diwali"],
        "uttar pradesh": ["Kumbh Mela", "Ram Navami", "Krishna Janmashtami", "Dussehra", "Diwali"],
        "haryana": ["Teej", "Karva Chauth", "Baisakhi", "Holi", "Diwali"],
        "delhi": ["Dussehra", "Diwali", "Holi", "Qutub Festival", "Garden Tourism Festival"],
        "manipur": ["Lai Haraoba", "Yaoshang", "Kang", "Ningol Chakouba", "Cheiraoba"],
        "mizoram": ["Chapchar Kut", "Mim Kut", "Pawl Kut", "Christmas", "New Year"],
        "nagaland": ["Hornbill Festival", "Moatsu", "Sekrenyi", "Tuluni", "Tokhu Emong"],
        "arunachal pradesh": ["Losar", "Dree Festival", "Ziro Festival", "Siang River Festival", "Torgya"],
        "sikkim": ["Losar", "Saga Dawa", "Drukpa Teshi", "Lhabab Duchen", "Bumchu"],
        "meghalaya": ["Wangala", "Nongkrem", "Behdienkhlam", "Shad Suk Mynsiem", "Christmas"],
        "tripura": ["Kharchi Puja", "Garia Puja", "Ker Puja", "Durga Puja", "Poila Boishakh"]
    }
};

// Indian States Data (fallback for offline mode)
const statesData = {
    "kerala": {
        name: "Kerala",
        facts: [
            "Known as 'God's Own Country' with 100% literacy rate",
            "Has 44 rivers and is famous for backwaters",
            "First state in India to achieve total literacy",
            "Spice capital of India, especially black pepper and cardamom",
            "Has the highest Human Development Index in India"
        ],
        festivals: [
            "Onam - Harvest festival celebrating King Mahabali",
            "Thrissur Pooram - Spectacular temple festival with elephants",
            "Theyyam - Ritualistic art form and festival",
            "Vishu - New Year celebration",
            "Boat Race festivals during monsoon season"
        ],
        artForms: [
            "Kathakali - Classical dance-drama with elaborate makeup",
            "Theyyam - Ritualistic performance art",
            "Koodiyattam - Sanskrit theatre recognized by UNESCO",
            "Ottamthullal - Satirical dance form",
            "Aranmula Kannadi - Traditional metal mirrors"
        ],
        dances: [
            "Kathakali - Classical dance-drama",
            "Mohiniyattam - Classical dance of enchantress",
            "Kaikottikali - Group dance performed during Onam",
            "Thiruvathirakali - Women's group dance",
            "Oppana - Muslim women's dance form"
        ],
        cuisine: [
            "Appam with Stew - Fermented rice pancakes",
            "Puttu and Kadala Curry - Steamed rice cake with chickpea curry",
            "Kerala Fish Curry - Coconut-based spicy fish curry",
            "Sadya - Traditional vegetarian feast on banana leaf",
            "Payasam - Sweet dessert made with rice/vermicelli"
        ],
        attire: [
            "Mundu - Traditional white dhoti for men",
            "Saree - Kasavu saree with golden border for women",
            "Set Mundu - Two-piece traditional wear for women",
            "Chatta and Mundu - Shirt and dhoti combination",
            "Traditional jewelry includes Palakka mala and Nagapadam"
        ],
        famous: [
            "Backwaters and houseboats",
            "Ayurveda and traditional medicine",
            "Spice plantations and tea gardens",
            "Beaches like Kovalam and Varkala",
            "Hill stations like Munnar and Wayanad"
        ],
        languages: [
            "Malayalam - Official language",
            "English - Widely spoken",
            "Tamil - Spoken in border areas",
            "Hindi - Understood by many",
            "Arabic - In some Muslim communities"
        ]
    },
    "rajasthan": {
        name: "Rajasthan",
        facts: [
            "Largest state in India by area",
            "Home to the Thar Desert",
            "Has magnificent palaces and forts",
            "Known as 'Land of Kings'",
            "Rich in mineral resources including marble"
        ],
        festivals: [
            "Desert Festival - Celebrated in Jaisalmer",
            "Pushkar Fair - Famous camel fair",
            "Teej - Monsoon festival for women",
            "Gangaur - Festival celebrating marital bliss",
            "Kite Festival - Makar Sankranti celebration"
        ],
        artForms: [
            "Miniature Paintings - Detailed traditional paintings",
            "Blue Pottery - Jaipur's famous ceramic art",
            "Bandhani - Tie-dye textile art",
            "Phad Painting - Scroll paintings depicting folk tales",
            "Meenakari - Enamel work on jewelry"
        ],
        dances: [
            "Ghoomar - Traditional folk dance of women",
            "Kalbeliya - Snake charmer community dance",
            "Chari - Dance performed with pots on head",
            "Bhavai - Acrobatic dance with pots",
            "Kachhi Ghodi - Dance with dummy horses"
        ],
        cuisine: [
            "Dal Baati Churma - Lentils with baked wheat balls",
            "Laal Maas - Spicy red meat curry",
            "Gatte ki Sabzi - Gram flour dumplings curry",
            "Ker Sangri - Desert beans and berries dish",
            "Ghevar - Traditional sweet dessert"
        ],
        attire: [
            "Dhoti and Kurta - Traditional men's wear",
            "Pagri/Turban - Colorful headwear for men",
            "Ghagra Choli - Flared skirt and blouse for women",
            "Odhni - Traditional veil/dupatta",
            "Heavy silver jewelry and colorful fabrics"
        ],
        famous: [
            "Magnificent forts like Mehrangarh and Amber",
            "Palaces including City Palace and Hawa Mahal",
            "Thar Desert and camel safaris",
            "Colorful markets and handicrafts",
            "Royal heritage and architecture"
        ],
        languages: [
            "Hindi - Official language",
            "Rajasthani - Regional language with many dialects",
            "Marwari - Business community language",
            "Gujarati - In some border areas",
            "English - In urban areas"
        ]
    }
};

// Add more states data
Object.assign(statesData, {
    "tamil nadu": {
        name: "Tamil Nadu",
        facts: [
            "Southernmost state of India",
            "Ancient Dravidian culture and heritage",
            "Major hub for automobile industry",
            "Home to classical Tamil literature",
            "Has the longest coastline in India"
        ],
        festivals: [
            "Pongal - Harvest festival",
            "Diwali - Festival of lights",
            "Navaratri - Nine nights of goddess worship",
            "Karthigai Deepam - Festival of lamps",
            "Tamil New Year - Celebrated in April"
        ],
        artForms: [
            "Tanjore Paintings - Gold foil paintings",
            "Kanchipuram Silk - Traditional silk weaving",
            "Stone carving - Temple sculptures",
            "Bronze casting - Chola period art",
            "Kolam - Rangoli art form"
        ],
        dances: [
            "Bharatanatyam - Classical dance form",
            "Karagattam - Folk dance with water pots",
            "Kummi - Folk dance performed by women",
            "Mayilattam - Peacock dance",
            "Kavadi Attam - Devotional dance"
        ],
        cuisine: [
            "Idli Sambar - Steamed rice cakes with lentil curry",
            "Dosa - Crispy rice crepe",
            "Chettinad Chicken - Spicy chicken curry",
            "Rasam - Tangy soup",
            "Filter Coffee - Traditional South Indian coffee"
        ],
        attire: [
            "Veshti - Traditional dhoti for men",
            "Saree - Kanchipuram silk sarees for women",
            "Angavastram - Upper cloth for men",
            "Half saree - Traditional wear for young women",
            "Temple jewelry and flowers in hair"
        ],
        famous: [
            "Ancient temples like Meenakshi and Brihadeeswarar",
            "Classical music and dance traditions",
            "Marina Beach - Second longest beach in world",
            "Hill stations like Ooty and Kodaikanal",
            "Automobile industry in Chennai"
        ],
        languages: [
            "Tamil - Official language",
            "English - Widely used",
            "Telugu - In some northern districts",
            "Malayalam - In western border areas",
            "Hindi - Understood in urban areas"
        ]
    },
    "punjab": {
        name: "Punjab",
        facts: [
            "Known as the 'Granary of India'",
            "Birthplace of Sikhism",
            "Highest per capita income in agriculture",
            "Famous for its fertile plains",
            "Rich cultural heritage and hospitality"
        ],
        festivals: [
            "Baisakhi - Harvest festival and Sikh New Year",
            "Diwali - Festival of lights",
            "Holi - Festival of colors",
            "Karva Chauth - Festival for married women",
            "Lohri - Bonfire festival in winter"
        ],
        artForms: [
            "Phulkari - Traditional embroidery",
            "Jutti making - Traditional footwear",
            "Paranda - Hair accessory making",
            "Punjabi calligraphy - Gurmukhi script art",
            "Wooden handicrafts"
        ],
        dances: [
            "Bhangra - Energetic folk dance of men",
            "Giddha - Traditional women's folk dance",
            "Jhumar - Graceful dance form",
            "Luddi - Victory dance",
            "Malwai Giddha - Regional variation of Giddha"
        ],
        cuisine: [
            "Makki di Roti and Sarson da Saag - Corn bread with mustard greens",
            "Butter Chicken - Creamy chicken curry",
            "Rajma Chawal - Kidney beans with rice",
            "Chole Bhature - Spicy chickpeas with fried bread",
            "Lassi - Traditional yogurt drink"
        ],
        attire: [
            "Kurta Pajama - Traditional men's wear",
            "Turban - Religious headwear for Sikh men",
            "Salwar Kameez - Traditional women's outfit",
            "Dupatta - Traditional scarf",
            "Jutti - Traditional embroidered shoes"
        ],
        famous: [
            "Golden Temple in Amritsar",
            "Agricultural prosperity and farming",
            "Vibrant culture and festivals",
            "Punjabi music and Bollywood",
            "Hospitality and food culture"
        ],
        languages: [
            "Punjabi - Official language",
            "Hindi - Widely spoken",
            "English - In education and business",
            "Urdu - By some communities",
            "Gurmukhi - Script for Punjabi"
        ]
    }
});

class MultiStateAgent {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.useAPI = true; // Toggle for API usage
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
        
        // Add API toggle button
        this.addAPIToggle();
    }
    
    handleUserInput() {
        const input = this.userInput.value.trim();
        if (!input) return;
        
        this.addMessage(input, 'user');
        this.userInput.value = '';
        
        // Check for goodbye
        if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('goodbye')) {
            this.addMessage("Thank you for exploring Indian states with me! 🙏 Come back anytime to discover more about our incredible cultural heritage. Have a wonderful day! 🌟", 'bot');
            return;
        }
        
        this.processUserQuery(input);
    }
    
    async processUserQuery(input) {
        const parsed = this.parseInput(input);
        
        // Handle festival search queries
        if (parsed.festivalSearch) {
            this.handleFestivalQuery(parsed);
            return;
        }
        
        if (!parsed.state || !parsed.option) {
            this.addMessage(
                "I need both a state name and an option number! 😊<br><br>" +
                "Please format your request like:<br>" +
                "• <strong>Kerala, 5</strong> (cuisine)<br>" +
                "• <strong>State: Rajasthan, Option: 3</strong> (art forms)<br>" +
                "• <strong>Tamil Nadu 2</strong> (festivals)<br><br>" +
                "Choose an option from 1-8 to explore!<br><br>" +
                "💡 <strong>Pro tip:</strong> You can also search for festivals directly by typing <strong>'Diwali festival'</strong> or <strong>'Onam festival'</strong>!", 
                'bot'
            );
            return;
        }
        
        // Show loading message
        this.addMessage("🔍 Gathering information about " + parsed.state + "...", 'bot');
        
        if (this.useAPI) {
            try {
                await this.generateAPIResponse(parsed.state, parsed.option);
            } catch (error) {
                console.error('API Error:', error);
                this.addMessage("⚠️ API temporarily unavailable. Using offline data...", 'bot');
                this.generateOfflineResponse(parsed.state, parsed.option);
            }
        } else {
            this.generateOfflineResponse(parsed.state, parsed.option);
        }
    }
    
    async handleFestivalQuery(parsed) {
        if (parsed.festival && parsed.state) {
            // Specific festival in specific state
            this.addMessage(`🔍 Searching for information about ${parsed.festival}...`, 'bot');
            
            if (this.useAPI) {
                try {
                    const prompt = `Provide detailed information about ${parsed.festival} festival celebrated in ${parsed.state}, India. 
                    Include: celebration dates, cultural significance, rituals, traditions, food, decorations, and unique aspects. 
                    Format as 5-7 detailed points.`;
                    
                    const response = await this.callGeminiAPI(prompt);
                    this.removeLastMessage();
                    this.addMessage(this.formatFestivalResponse(parsed.festival, parsed.state, response), 'bot');
                } catch (error) {
                    this.removeLastMessage();
                    this.addMessage(`🎉 <strong>${parsed.festival}</strong> is a major festival celebrated in ${parsed.state}! For detailed information, try "${parsed.state}, 2" to explore all festivals of this state.`, 'bot');
                }
            }
        } else if (parsed.festival && parsed.national) {
            // National festival
            this.addMessage(`🔍 Searching for information about ${parsed.festival}...`, 'bot');
            
            if (this.useAPI) {
                try {
                    const prompt = `Provide detailed information about ${parsed.festival}, a major festival celebrated across India. 
                    Include: celebration dates, cultural significance, regional variations, rituals, traditions, food, and how it's celebrated in different states. 
                    Format as 6-8 detailed points.`;
                    
                    const response = await this.callGeminiAPI(prompt);
                    this.removeLastMessage();
                    this.addMessage(this.formatFestivalResponse(parsed.festival, 'India', response), 'bot');
                } catch (error) {
                    this.removeLastMessage();
                    this.addMessage(`🎉 <strong>${parsed.festival}</strong> is a major festival celebrated across India! It's observed with great enthusiasm in different states with unique regional traditions.`, 'bot');
                }
            }
        } else {
            // General festival search
            this.addMessage(
                `🎉 <strong>Festival Search Results</strong><br><br>` +
                `I have information about festivals from all Indian states! Here are some popular ones:<br><br>` +
                `<strong>National Festivals:</strong><br>` +
                `${indianFestivals.national.slice(0, 5).map(f => `• ${f}`).join('<br>')}<br><br>` +
                `<strong>Regional Festivals:</strong><br>` +
                `• Onam (Kerala)<br>• Durga Puja (West Bengal)<br>• Ganesh Chaturthi (Maharashtra)<br>• Baisakhi (Punjab)<br>• Pongal (Tamil Nadu)<br><br>` +
                `Try searching for a specific festival like <strong>"Diwali festival"</strong> or explore festivals by state using <strong>"Kerala, 2"</strong>!`,
                'bot'
            );
        }
    }
    
    formatFestivalResponse(festival, location, apiResponse) {
        let response = `<div class="state-info">`;
        response += `<h3>🎉 ${festival} Festival`;
        if (location !== 'India') {
            response += ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
        }
        response += `</h3>`;
        
        // Convert API response to formatted HTML
        const lines = apiResponse.split('\n').filter(line => line.trim());
        response += `<div class="api-content">`;
        
        let inList = false;
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
                if (!inList) {
                    response += `<ul>`;
                    inList = true;
                }
                response += `<li>${trimmed.substring(1).trim()}</li>`;
            } else if (trimmed.match(/^\d+\./)) {
                if (!inList) {
                    response += `<ol>`;
                    inList = true;
                }
                response += `<li>${trimmed.replace(/^\d+\./, '').trim()}</li>`;
            } else if (trimmed) {
                if (inList) {
                    response += `</ul>`;
                    inList = false;
                }
                response += `<p>${trimmed}</p>`;
            }
        });
        
        if (inList) {
            response += `</ul>`;
        }
        
        response += `</div></div>`;
        response += `<p><em>✨ Powered by AI</em> | Want to explore more festivals? Try searching for another festival or explore a state's culture! 🌟</p>`;
        
        return response;
    }
    
    parseInput(input) {
        // Check for festival search queries
        if (input.toLowerCase().includes('festival') && !input.match(/\b[1-8]\b/)) {
            return this.handleFestivalSearch(input);
        }
        
        // Remove common words and clean input
        const cleaned = input.toLowerCase()
            .replace(/state:/g, '')
            .replace(/option:/g, '')
            .replace(/[,]/g, ' ')
            .trim();
        
        // Extract option number
        const optionMatch = cleaned.match(/\b([1-8])\b/);
        const option = optionMatch ? parseInt(optionMatch[1]) : null;
        
        // Extract state name
        let state = cleaned.replace(/\b[1-8]\b/g, '').trim();
        
        // Handle common state name variations
        const stateVariations = {
            'tn': 'tamil nadu',
            'tamilnadu': 'tamil nadu',
            'kl': 'kerala',
            'rj': 'rajasthan',
            'pb': 'punjab',
            'wb': 'west bengal',
            'westbengal': 'west bengal',
            'ap': 'andhra pradesh',
            'andhrapradesh': 'andhra pradesh',
            'hp': 'himachal pradesh',
            'himachalpradesh': 'himachal pradesh',
            'up': 'uttar pradesh',
            'uttarpradesh': 'uttar pradesh',
            'mp': 'madhya pradesh',
            'madhyapradesh': 'madhya pradesh',
            'jk': 'jammu kashmir',
            'jammukashmir': 'jammu kashmir'
        };
        
        if (stateVariations[state]) {
            state = stateVariations[state];
        }
        
        return { state, option };
    }
    
    handleFestivalSearch(input) {
        // Extract festival name or state from input
        const festivalQuery = input.toLowerCase().replace(/festival/g, '').trim();
        
        // Search for specific festival
        for (const [state, festivals] of Object.entries(indianFestivals.regional)) {
            const matchingFestival = festivals.find(festival => 
                festival.toLowerCase().includes(festivalQuery) || 
                festivalQuery.includes(festival.toLowerCase())
            );
            if (matchingFestival) {
                return { festivalSearch: true, festival: matchingFestival, state: state };
            }
        }
        
        // Check national festivals
        const nationalMatch = indianFestivals.national.find(festival => 
            festival.toLowerCase().includes(festivalQuery) || 
            festivalQuery.includes(festival.toLowerCase().split(' ')[0])
        );
        
        if (nationalMatch) {
            return { festivalSearch: true, festival: nationalMatch, national: true };
        }
        
        return { festivalSearch: true, query: festivalQuery };
    }
    
    async generateAPIResponse(stateName, option) {
        const optionMap = {
            1: { title: 'Interesting Facts', emoji: '🔍', prompt: 'interesting facts and trivia' },
            2: { title: 'Festivals', emoji: '🎉', prompt: 'major festivals and celebrations' },
            3: { title: 'Traditional Art Forms', emoji: '🎨', prompt: 'traditional art forms and crafts' },
            4: { title: 'Popular Dance Forms', emoji: '💃', prompt: 'popular dance forms and folk dances' },
            5: { title: 'Cuisine & Famous Dishes', emoji: '🍛', prompt: 'cuisine, famous dishes, and food culture' },
            6: { title: 'Traditional Attire', emoji: '👘', prompt: 'traditional attire and clothing' },
            7: { title: 'Famous For', emoji: '⭐', prompt: 'unique things it is famous for' },
            8: { title: 'Languages Spoken', emoji: '🗣️', prompt: 'languages spoken and linguistic diversity' }
        };
        
        const selectedOption = optionMap[option];
        if (!selectedOption) {
            this.addMessage("Please choose a valid option number between 1-8! 😊", 'bot');
            return;
        }
        
        let prompt = `Provide detailed information about ${selectedOption.prompt} of ${stateName} state in India. 
        Format the response as a list of 5-7 key points. Be accurate, culturally respectful, and engaging. 
        Include specific examples and interesting details that showcase the rich heritage of ${stateName}.`;
        
        // Add festival context for festival queries
        if (option === 2) {
            const stateKey = stateName.toLowerCase();
            const stateFestivals = indianFestivals.regional[stateKey];
            if (stateFestivals) {
                prompt += `\n\nKey festivals to include: ${stateFestivals.join(', ')}. 
                Also mention major national festivals celebrated in ${stateName} like Diwali, Holi, Eid, Christmas etc.
                Provide details about celebration methods, cultural significance, dates, and unique traditions.`;
            }
        }
        
        try {
            const response = await this.callGeminiAPI(prompt);
            const formattedResponse = this.formatAPIResponse(stateName, selectedOption, response);
            
            // Remove loading message and add actual response
            this.removeLastMessage();
            this.addMessage(formattedResponse, 'bot');
        } catch (error) {
            throw error;
        }
    }
    
    async callGeminiAPI(prompt) {
        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        };
        
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }
    
    generateOfflineResponse(stateName, option) {
        const stateKey = stateName.toLowerCase();
        const stateData = statesData[stateKey];
        
        if (!stateData) {
            this.removeLastMessage();
            this.addMessage(
                `I don't have offline information about "${stateName}" yet! 😅<br><br>` +
                "Currently, I have detailed information about:<br>" +
                "• <strong>Kerala</strong><br>" +
                "• <strong>Rajasthan</strong><br>" +
                "• <strong>Tamil Nadu</strong><br>" +
                "• <strong>Punjab</strong><br><br>" +
                "Try one of these states! 🗺️",
                'bot'
            );
            return;
        }
        
        const optionMap = {
            1: { key: 'facts', title: 'Interesting Facts', emoji: '🔍' },
            2: { key: 'festivals', title: 'Festivals', emoji: '🎉' },
            3: { key: 'artForms', title: 'Traditional Art Forms', emoji: '🎨' },
            4: { key: 'dances', title: 'Popular Dance Forms', emoji: '💃' },
            5: { key: 'cuisine', title: 'Cuisine & Famous Dishes', emoji: '🍛' },
            6: { key: 'attire', title: 'Traditional Attire', emoji: '👘' },
            7: { key: 'famous', title: 'Famous For', emoji: '⭐' },
            8: { key: 'languages', title: 'Languages Spoken', emoji: '🗣️' }
        };
        
        const selectedOption = optionMap[option];
        const data = stateData[selectedOption.key];
        const response = this.formatResponse(stateData.name, selectedOption, data);
        
        this.removeLastMessage();
        this.addMessage(response, 'bot');
    }
    
    formatResponse(stateName, option, data) {
        let response = `<div class="state-info">`;
        response += `<h3>${option.emoji} ${option.title} of ${stateName}</h3>`;
        response += `<ul>`;
        
        data.forEach(item => {
            response += `<li>${item}</li>`;
        });
        
        response += `</ul></div>`;
        response += `<p>Want to explore more about ${stateName}? Choose another option (1-8), or ask about a different state! 🌟</p>`;
        
        return response;
    }
    
    formatAPIResponse(stateName, option, apiResponse) {
        let response = `<div class="state-info">`;
        response += `<h3>${option.emoji} ${option.title} of ${stateName}</h3>`;
        
        // Convert API response to formatted HTML
        const lines = apiResponse.split('\n').filter(line => line.trim());
        response += `<div class="api-content">`;
        
        let inList = false;
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
                if (!inList) {
                    response += `<ul>`;
                    inList = true;
                }
                response += `<li>${trimmed.substring(1).trim()}</li>`;
            } else if (trimmed.match(/^\d+\./)) {
                if (!inList) {
                    response += `<ol>`;
                    inList = true;
                }
                response += `<li>${trimmed.replace(/^\d+\./, '').trim()}</li>`;
            } else if (trimmed) {
                if (inList) {
                    response += inList === 'ul' ? `</ul>` : `</ol>`;
                    inList = false;
                }
                response += `<p>${trimmed}</p>`;
            }
        });
        
        if (inList) {
            response += `</ul>`;
        }
        
        response += `</div></div>`;
        response += `<p><em>✨ Powered by AI</em> | Want to explore more about ${stateName}? Choose another option (1-8), or ask about a different state! 🌟</p>`;
        
        return response;
    }
    
    removeLastMessage() {
        const messages = this.chatMessages.querySelectorAll('.message');
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.classList.contains('bot-message')) {
                lastMessage.remove();
            }
        }
    }
    
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = content;
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    addAPIToggle() {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'api-toggle-container';
        toggleContainer.innerHTML = `
            <label class="api-toggle">
                <input type="checkbox" id="apiToggle" ${this.useAPI ? 'checked' : ''}>
                <span class="toggle-slider"></span>
                <span class="toggle-label">AI-Powered Responses</span>
            </label>
        `;
        
        const inputContainer = document.querySelector('.input-container');
        inputContainer.parentNode.insertBefore(toggleContainer, inputContainer);
        
        document.getElementById('apiToggle').addEventListener('change', (e) => {
            this.useAPI = e.target.checked;
            const status = this.useAPI ? 'enabled' : 'disabled';
            this.addMessage(`🔄 AI-powered responses ${status}. ${this.useAPI ? 'Getting enhanced information from Gemini AI!' : 'Using offline database.'}`, 'bot');
        });
    }
}

// Initialize the chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MultiStateAgent();
});