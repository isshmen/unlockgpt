// Carrier data
const carriersByCountry = {
    'WorldWide': ['WorldWide'],
    'Afghanistan': ['Afghan Wireless', 'Roshan', 'Etisalat Afghanistan', 'Salaam'],
    'Albania': ['Vodafone Albania', 'One Albania', 'ALBtelecom'],
    'Algeria': ['Djezzy', 'Mobilis', 'Ooredoo Algeria'],
    'Andorra': ['Andorra Telecom'],
    'Angola': ['Unitel Angola', 'Movicel'],
    'Antigua and Barbuda': ['FLOW', 'Digicel'],
    'Argentina': ['Movistar Argentina', 'Personal Argentina', 'Claro Argentina'],
    'Armenia': ['Beeline Armenia', 'Ucom', 'Viva-MTS'],
    'Australia': ['Telstra', 'Optus', 'Vodafone Australia', 'Belong', 'Boost Mobile','TPG Telecom', 'Amaysim', 'Kogan Mobile', 'ALDImobile'],
    'Austria': ['A1 Telekom Austria', 'Magenta Telekom', 'Drei (Three)'],
    'Azerbaijan': ['Azercell', 'Bakcell', 'Nar Mobile'],
    'Bahamas': ['BTC (Bahamas Telecommunications Company)', 'ALIV'],
    'Bahrain': ['Batelco', 'Zain Bahrain', 'stc Bahrain'],
    'Bangladesh': ['Grameenphone', 'Robi', 'Banglalink', 'Teletalk'],
    'Barbados': ['FLOW', 'Digicel'],
    'Belarus': ['A1 Belarus', 'MTS Belarus', 'life:)'],
    'Belgium': ['Proximus', 'Orange Belgium', 'Telenet'],
    'Belize': ['DigiCell', 'Smart Belize'],
    'Bhutan': ['Bhutan Telecom', 'TashiCell'],
    'Bolivia': ['Entel Bolivia', 'Tigo Bolivia', 'Viva Bolivia'],
    'Bosnia and Herzegovina': ['BH Telecom', 'm:tel BiH', 'HT Eronet'],
    'Botswana': ['Mascom', 'Orange Botswana', 'BTC Mobile (beMobile)'],
    'Brazil': ['Vivo', 'Claro Brasil', 'TIM Brasil', 'Oi'],
    'Brunei': ['DST', 'Progresif', 'Imagine'],
    'Bulgaria': ['A1 Bulgaria', 'Telenor Bulgaria', 'Vivacom'],
    'Burkina Faso': ['Orange Burkina Faso', 'Telmob', 'Moov Africa Burkina Faso'],
    'Burundi': ['Lumitel', 'Econet Leo', 'Smart Mobile', 'Onatel'],
    'Cabo Verde': ['CVTelecom (Unitel T+)', 'CVMóvel'],
    'Cambodia': ['Smart Axiata', 'Metfone', 'Cellcard'],
    'Cameroon': ['MTN Cameroon', 'Orange Cameroon', 'Nexttel'],
    'Canada': ['Rogers Wireless', 'Bell Mobility', 'Telus Mobility', 'Freedom Mobile', 'Videotron', 'SaskTel', 'Eastlink', 'Public Mobile', 'Fido', 'Koodo', 'Virgin Plus', 'Chatr'],
    'Central African Republic': ['Orange CAR', 'Telecel CAR', 'Azur'],
    'Chad': ['Airtel Chad', 'Moov Africa Chad'],
    'Chile': ['Movistar Chile', 'Entel Chile', 'Claro Chile', 'WOM'],
    'China': ['China Mobile', 'China Unicom', 'China Telecom'],
    'Colombia': ['Claro Colombia', 'Movistar Colombia', 'Tigo Colombia', 'Avantel', 'WOM'],
    'Comoros': ['Telma Comoros', 'Comores Telecom'],
    'Congo (Congo-Brazzaville)': ['Airtel Congo', 'MTN Congo'],
    'Congo (Congo-Kinshasa)': ['Vodacom Congo', 'Airtel Congo', 'Orange Congo', 'Africell'],
    'Costa Rica': ['Kolbi', 'Claro Costa Rica', 'Movistar Costa Rica'],
    'Côte d\'Ivoire': ['Orange Côte d\'Ivoire', 'MTN Côte d\'Ivoire', 'Moov Africa'],
    'Croatia': ['Hrvatski Telekom', 'A1 Croatia', 'Tele2 Croatia'],
    'Cuba': ['Cubacel'],
    'Cyprus': ['Cyta', 'Epic Cyprus', 'PrimeTel', 'MTN Cyprus'],
    'Czech Republic': ['O2 Czech Republic', 'T-Mobile Czech Republic', 'Vodafone Czech Republic'],
    'Denmark': ['TDC (YouSee)', 'Telia Denmark', 'Telenor Denmark', '3 Denmark'],
    'Djibouti': ['Djibouti Telecom'],
    'Dominica': ['FLOW', 'Digicel'],
    'Dominican Republic': ['Claro Dominicana', 'Altice', 'Viva'],
    'Ecuador': ['Claro Ecuador', 'Movistar Ecuador', 'CNT Mobile'],
    'Egypt': ['Vodafone Egypt', 'Orange Egypt', 'Etisalat Misr', 'WE'],
    'El Salvador': ['Tigo El Salvador', 'Claro El Salvador', 'Movistar El Salvador'],
    'Equatorial Guinea': ['GETESA', 'Muni'],
    'Eritrea': ['Eritel'],
    'Estonia': ['Telia Estonia', 'Elisa Estonia', 'Tele2 Estonia'],
    'Eswatini (Swaziland)': ['MTN Eswatini', 'Eswatini Mobile'],
    'Ethiopia': ['Ethio Telecom', 'Safaricom Ethiopia'],
    'Fiji': ['Vodafone Fiji', 'Digicel Fiji'],
    'Finland': ['Elisa Finland', 'DNA', 'Telia Finland'],
    'France': ['Orange France', 'SFR', 'Bouygues Telecom', 'Free Mobile'],
    'Gabon': ['Airtel Gabon', 'Moov Africa Gabon Telecom'],
    'Gambia': ['Africell Gambia', 'QCell', 'Gamcel', 'Comium'],
    'Georgia': ['MagtiCom', 'Silknet', 'Beeline Georgia'],
    'Germany': ['Telekom Deutschland', 'Vodafone Germany', 'O2 Germany'],
    'Ghana': ['MTN Ghana', 'Vodafone Ghana', 'AirtelTigo'],
    'Greece': ['Cosmote', 'Vodafone Greece', 'Wind Hellas'],
    'Grenada': ['FLOW', 'Digicel'],
    'Guatemala': ['Claro Guatemala', 'Tigo Guatemala', 'Movistar Guatemala'],
    'Guinea': ['Orange Guinea', 'MTN Guinea', 'Cellcom Guinea'],
    'Guinea-Bissau': ['MTN Guinea-Bissau', 'Orange Guinea-Bissau'],
    'Guyana': ['GTT+', 'Digicel Guyana'],
    'Haiti': ['Digicel Haiti', 'Natcom'],
    'Honduras': ['Tigo Honduras', 'Claro Honduras'],
    'Hungary': ['Magyar Telekom', 'Telenor Hungary', 'Vodafone Hungary', 'DIGI'],
    'Iceland': ['Síminn', 'Vodafone Iceland', 'Nova'],
    'India': ['Jio', 'Airtel', 'Vi (Vodafone Idea)', 'BSNL', 'MTNL'],
    'Indonesia': ['Telkomsel', 'Indosat Ooredoo Hutchison', 'XL Axiata', 'Smartfren', '3 Indonesia'],
    'Iran': ['MCI (Hamrah-e-Aval)', 'MTN Irancell', 'RighTel'],
    'Iraq': ['Zain Iraq', 'Asiacell', 'Korek Telecom'],
    'Ireland': ['Vodafone Ireland', 'Three Ireland', 'Eir Mobile'],
    'Israel': ['Cellcom', 'Partner Communications', 'Pelephone', 'Golan Telecom', 'HOT Mobile'],
    'Italy': ['TIM', 'Vodafone Italy', 'Wind Tre', 'Iliad Italy'],
    'Jamaica': ['Digicel Jamaica', 'FLOW'],
    'Japan': ['NTT Docomo', 'KDDI (au)', 'SoftBank', 'Rakuten Mobile'],
    'Jordan': ['Zain Jordan', 'Orange Jordan', 'Umniah'],
    'Kazakhstan': ['Beeline Kazakhstan', 'Kcell', 'Tele2 Kazakhstan', 'Altel'],
    'Kenya': ['Safaricom', 'Airtel Kenya', 'Telkom Kenya', 'Jamii Telecom'],
    'Kiribati': ['Athkl', 'OceanLink'],
    'Kuwait': ['Zain Kuwait', 'stc Kuwait', 'Ooredoo Kuwait'],
    'Kyrgyzstan': ['Beeline Kyrgyzstan', 'O!', 'Megacom'],
    'Laos': ['Unitel', 'Lao Telecom', 'Beeline Laos', 'ETL Mobile'],
    'Latvia': ['LMT', 'Tele2 Latvia', 'Bite Latvia'],
    'Lebanon': ['Touch Lebanon', 'Alfa'],
    'Lesotho': ['Vodacom Lesotho', 'Econet Telecom Lesotho'],
    'Liberia': ['Lonestar Cell MTN', 'Orange Liberia'],
    'Libya': ['Libyana', 'Al-Madar', 'Hatef Libya'],
    'Liechtenstein': ['FL1 (Telecom Liechtenstein)'],
    'Lithuania': ['Telia Lithuania', 'Bite Lithuania', 'Tele2 Lithuania'],
    'Luxembourg': ['POST Luxembourg', 'Orange Luxembourg', 'Tango'],
    'Madagascar': ['Telma Madagascar', 'Orange Madagascar', 'Airtel Madagascar'],
    'Malawi': ['TNM Malawi', 'Airtel Malawi'],
    'Malaysia': ['Maxis', 'Celcom', 'Digi', 'U Mobile', 'Unifi Mobile', 'YES (YTL Communications)'],
    'Maldives': ['Dhiraagu', 'Ooredoo Maldives'],
    'Mali': ['Orange Mali', 'Malitel'],
    'Malta': ['GO Mobile', 'Epic Malta', 'Melita'],
    'Marshall Islands': ['National Telecommunications Authority (NTA)'],
    'Mauritania': ['Chinguitel', 'Mattel', 'Mauritel'],
    'Mauritius': ['Emtel', 'My.T (Mauritius Telecom)', 'MTML'],
    'Mexico': ['Telcel', 'Movistar Mexico', 'AT&T Mexico', 'Flash Mobile', 'FreedomPop Mexico'],
    'Micronesia': ['FSM Telecommunications'],
    'Moldova': ['Orange Moldova', 'Moldcell', 'Unité'],
    'Monaco': ['Monaco Telecom'],
    'Mongolia': ['Unitel Mongolia', 'Mobicom', 'G-Mobile', 'Skytel'],
    'Montenegro': ['Telekom Crna Gora', 'Telenor Montenegro', 'M:tel Montenegro'],
    'Morocco': ['Maroc Telecom', 'Orange Morocco', 'Inwi'],
    'Mozambique': ['mCel', 'Vodacom Mozambique', 'Movitel'],
    'Myanmar (Burma)': ['MPT', 'Ooredoo Myanmar', 'Telenor Myanmar', 'MyTel'],
    'Namibia': ['MTC Namibia', 'TN Mobile'],
    'Nauru': ['Digicel Nauru'],
    'Nepal': ['Ncell', 'Nepal Telecom', 'Smart Telecom'],
    'Netherlands': ['KPN', 'Vodafone Netherlands', 'T-Mobile Netherlands', 'Tele2 Netherlands'],
    'New Zealand': ['Spark New Zealand', 'Vodafone New Zealand', '2degrees'],
    'Nicaragua': ['Claro Nicaragua', 'Tigo Nicaragua'],
    'Niger': ['Airtel Niger', 'Orange Niger', 'Moov Africa Niger'],
    'Nigeria': ['MTN Nigeria', 'Airtel Nigeria', 'Globacom', '9mobile'],
    'North Macedonia': ['A1 Macedonia', 'Telekom Macedonia', 'Lycamobile Macedonia'],
    'Norway': ['Telenor Norway', 'Telia Norway', 'Ice.net'],
    'Oman': ['Omantel', 'Ooredoo Oman', 'Vodafone Oman'],
    'Pakistan': ['Jazz', 'Telenor Pakistan', 'Zong', 'Ufone'],
    'Palau': ['Palau National Communications Corporation (PNCC)', 'PalauCel'],
    'Palestine': ['Jawwal', 'Ooredoo Palestine'],
    'Panama': ['Claro Panama', 'Movistar Panama', 'Digicel Panama', 'Cable & Wireless Panama'],
    'Papua New Guinea': ['bmobile-vodafone', 'Digicel PNG'],
    'Paraguay': ['Claro Paraguay', 'Tigo Paraguay', 'Personal Paraguay', 'Vox'],
    'Peru': ['Movistar Peru', 'Claro Peru', 'Entel Peru', 'Bitel'],
    'Philippines': ['Globe Telecom', 'Smart Communications', 'DITO Telecommunity'],
    'Poland': ['Orange Poland', 'T-Mobile Poland', 'Play', 'Plus'],
    'Portugal': ['MEO', 'NOS', 'Vodafone Portugal'],
    'Qatar': ['Ooredoo Qatar', 'Vodafone Qatar'],
    'Romania': ['Orange Romania', 'Vodafone Romania', 'Digi.Mobil', 'Telekom Romania'],
    'Russia': ['MTS Russia', 'MegaFon', 'Beeline Russia', 'Tele2 Russia'],
    'Rwanda': ['MTN Rwanda', 'Airtel Rwanda'],
    'Saint Kitts and Nevis': ['FLOW', 'Digicel'],
    'Saint Lucia': ['FLOW', 'Digicel'],
    'Saint Vincent and the Grenadines': ['FLOW', 'Digicel'],
    'Samoa': ['Digicel Samoa', 'Bluesky Samoa'],
    'San Marino': ['San Marino Telecom'],
    'São Tomé and Príncipe': ['Unitel STP', 'CST (Companhia Santomense de Telecomunicações)'],
    'Saudi Arabia': ['STC (Saudi Telecom Company)', 'Mobily', 'Zain Saudi Arabia'],
    'Senegal': ['Orange Senegal', 'Free Senegal', 'Expresso'],
    'Serbia': ['MTS Serbia', 'A1 Serbia', 'Yettel Serbia'],
    'Seychelles': ['Airtel Seychelles', 'Cable & Wireless Seychelles'],
    'Sierra Leone': ['Africell Sierra Leone', 'Orange Sierra Leone', 'QCell Sierra Leone'],
    'Singapore': ['Singtel', 'StarHub', 'M1', 'TPG Telecom'],
    'Slovakia': ['Orange Slovakia', 'Slovak Telekom', 'O2 Slovakia', '4ka'],
    'Slovenia': ['Telekom Slovenije', 'A1 Slovenia', 'Telemach'],
    'Solomon Islands': ['Our Telekom', 'BMobile'],
    'Somalia': ['Hormuud Telecom', 'Golis Telecom', 'Somnet', 'Somtel', 'Telesom'],
    'South Africa': ['Vodacom', 'MTN South Africa', 'Cell C', 'Telkom Mobile', 'Rain'],
    'South Korea': ['SK Telecom', 'KT Corporation', 'LG Uplus'],
    'South Sudan': ['Zain South Sudan', 'MTN South Sudan', 'Vivacell'],
    'Spain': ['Movistar', 'Vodafone Spain', 'Orange Spain', 'Yoigo'],
    'Sri Lanka': ['Dialog Axiata', 'Mobitel', 'Hutch', 'Airtel Sri Lanka'],
    'Sudan': ['Zain Sudan', 'MTN Sudan', 'Sudani'],
    'Suriname': ['Telesur', 'Digicel Suriname'],
    'Sweden': ['Telia Sweden', 'Tele2 Sweden', 'Telenor Sweden', '3 Sweden'],
    'Switzerland': ['Swisscom', 'Salt Mobile', 'Sunrise UPC'],
    'Syria': ['Syriatel', 'MTN Syria'],
    'Tajikistan': ['Tcell', 'MegaFon Tajikistan', 'Babilon-Mobile', 'Beeline Tajikistan'],
    'Tanzania': ['Vodacom Tanzania', 'Airtel Tanzania', 'Tigo Tanzania', 'Halotel', 'Zantel'],
    'Thailand': ['AIS', 'TrueMove H', 'dtac'],
    'Timor-Leste': ['Timor Telecom', 'Telkomcel', 'Telemor'],
    'Togo': ['Togocom', 'Moov Africa Togo'],
    'Tonga': ['Digicel Tonga', 'TCC (Tonga Communications Corporation)'],
    'Trinidad and Tobago': ['Digicel Trinidad and Tobago', 'bmobile (TSTT)'],
    'Tunisia': ['Ooredoo Tunisia', 'Tunisie Telecom', 'Orange Tunisia'],
    'Turkey': ['Turkcell', 'Vodafone Turkey', 'Türk Telekom'],
    'Turkmenistan': ['TM-Cell', 'Altyn Asyr'],
    'Tuvalu': ['Tuvalu Telecommunications Corporation'],
    'Uganda': ['MTN Uganda', 'Airtel Uganda', 'Lycamobile Uganda', 'Smile Communications'],
    'Ukraine': ['Kyivstar', 'Vodafone Ukraine', 'lifecell'],
    'United Arab Emirates': ['Etisalat UAE', 'du'],
    'United Kingdom': ['O2', 'Three', 'Vodafone UK', 'EE', 'Lycamobile', 'Giffgaff', 'Tesco Mobile', 'BT Mobile', 'Sky Mobile', 'Lebara'],
    'United States': ['Verizon Wireless', 'AT&T', 'T-Mobile', 'US Cellular', 'Cricket Wireless', 'Boost Mobile', 'Metro by T-Mobile', 'Google Fi', 'Xfinity Mobile', 'Tracfone', 'Spectrum Mobile', 'Straight Talk', 'Mint Mobile'],
    'Uruguay': ['Antel Uruguay', 'Movistar Uruguay', 'Claro Uruguay'],
    'Uzbekistan': ['Beeline Uzbekistan', 'Ucell', 'UzMobile', 'Perfectum Mobile'],
    'Vanuatu': ['Digicel Vanuatu', 'Vodafone Vanuatu'],
    'Vatican City': ['Vatican City Telecom (provided by TIM Italy)'],
    'Venezuela': ['Movilnet', 'Movistar Venezuela', 'Digitel'],
    'Vietnam': ['Viettel', 'Vinaphone', 'MobiFone', 'Vietnamobile', 'Gmobile'],
    'Yemen': ['Sabafon', 'MTN Yemen', 'Yemen Mobile', 'Y-Telecom'],
    'Zambia': ['Airtel Zambia', 'MTN Zambia', 'Zamtel'],
    'Zimbabwe': ['Econet Wireless Zimbabwe', 'NetOne', 'Telecel Zimbabwe']
};

const unlockingMessages = [
    "Initialising...",
    "Performing server authentication: connect_to_servers...",
    "Response: Successfully authenticated secure server connection.",
    "We're connecting your IMEI {imei} to our database...",
    "Importing files for encryption of user request",
    "Encrypting request: kernel.open_ssl_enc (for IMEI: {imei})",
    "Response: IMEI Successfully encrypted",
    "Your IMEI has been connected successfully...",
    "Encrypting request: kernel.open_ssl_enc (for Country & Carrier: {country}, {carrier})",
    "Response: Country and Carrier Successfully encrypted",
    "We're looking through {carrier} in {country}....",
    "We've found the {carrier} and {country} in our database",
    "Trying to connect to {carrier} through our backdoor servers...",
    "Initialization method: kernel.cc_server.application.main.init();",
    "Injecting into main method: inject_ssl(kernel.cc_server.application.main.init);",
    "We have successfully connected to {carrier} database...",
    "Injecting the information securely into encryption server...",
    "Response: All files were imported successfully.",
    "We're trying generating the unlock code for {imei} locked to {carrier}, {country}....",
    "Initialization method: kernel.cc_server.application.main.init();",
    "Response: Successfully extracted the unlock code from {carrier}",
    "ALL DONE! Please wait as we redirect you to download the unlock code and unlocking instructions page...",
    "Please wait, redirecting...."
];

// Services data
const services = [
    {
        title: "Carrier Unlock",
        version: "v2.1",
        description: "Unlock your phone from any carrier worldwide. Works with all major carriers and phone models."
    },
    {
        title: "FRP Bypass",
        version: "v5.2",
        description: "Remove Factory Reset Protection (FRP) lock from your Android device quickly and securely."
    },
    {
        title: "iCloud Unlock",
        version: "v14.9",
        description: "Remove iCloud activation lock from your iOS device. Compatible with all iOS versions."
    },
    {
        title: "IMEI Blacklist",
        version: "v10.5",
        description: "Check and resolve IMEI blacklist status for any mobile device."
    },
    {
        title: "Unlock Passcode",
        version: "v16.5",
        description: "Remove screen lock, PIN, pattern, or password from your device safely."
    },
    {
        title: "Unlock Password",
        version: "v3.5",
        description: "Recover or bypass forgotten passwords for various device accounts and services."
    },
    {
        title: "Hard/Factory Reset",
        version: "v3.5",
        description: "Safely reset your device to factory settings without losing important data."
    },
    {
        title: "Recover Files",
        version: "v3.5",
        description: "Recover deleted photos, messages, contacts and other important files from your device."
    }
];

// App state
let currentPage = 'homepage';
let selectedService = null;
let isMobile = window.innerWidth <= 767;

// Chat state
let messages = [];
let currentStep = "initial";
let isTyping = false;
let imei = "";
let selectedCountry = "";
let selectedCarrier = "";
let currentMessageIndex = 0;

// DOM elements
const mainContent = document.getElementById('main-content');
const servicesList = document.getElementById('services-list');
const navItems = document.querySelectorAll('.nav-item');
const backToServicesBtn = document.getElementById('back-to-services');
const serviceTitle = document.getElementById('service-title');
const messagesContainer = document.getElementById('messages-container');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const countrySelect = document.getElementById('country-select');
const carrierSelect = document.getElementById('carrier-select');
const countryCarrierSelector = document.getElementById('country-carrier-selector');
const instructionsModal = document.getElementById('instructions-modal');
const getUnlockCodeBtn = document.getElementById('get-unlock-code');

// Initialize app
function init() {
    setupEventListeners();
    renderServices();
    populateCountrySelect();
    checkMobile();
    showPage('homepage');
}

// Event listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            handlePageChange(page);
        });
    });

    // Back to services
    backToServicesBtn.addEventListener('click', () => {
        selectedService = null;
        showPage('homepage');
    });

    // Chat form
    chatForm.addEventListener('submit', handleChatSubmit);

    // Country/Carrier selectors
    countrySelect.addEventListener('change', handleCountryChange);
    carrierSelect.addEventListener('change', handleCarrierChange);

    // Modal
    getUnlockCodeBtn.addEventListener('click', () => {
        instructionsModal.classList.remove('active');
    });

    // Window resize
    window.addEventListener('resize', checkMobile);
}

// Handle page changes
function handlePageChange(page) {
    selectedService = null;
    showPage(page);
}

// Show page
function showPage(page) {
    currentPage = page;
    
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(el => {
        el.classList.remove('active');
    });
    
    // Update nav active state
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Show current page or service
    if (selectedService) {
        document.getElementById('service-interface').classList.add('active');
        serviceTitle.textContent = `${selectedService} Tool`;
    } else {
        document.getElementById(page).classList.add('active');
    }
}

// Check if mobile
function checkMobile() {
    isMobile = window.innerWidth <= 767;
    if (!isMobile) {
        mainContent.style.marginLeft = '280px';
    } else {
        mainContent.style.marginLeft = '0';
    }
}

// Render services
function renderServices() {
    servicesList.innerHTML = services.map(service => `
        <div class="service-item" data-service="${service.title}">
            <div class="service-info">
                <div class="service-header">
                    <h3 class="service-title">${service.title}</h3>
                    <span class="service-version">${service.version}</span>
                </div>
                <p class="service-description">${service.description}</p>
            </div>
            <button class="btn btn-primary ml-4">Access</button>
        </div>
    `).join('');
    
    // Add event listeners to service items
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const serviceName = item.dataset.service;
            selectService(serviceName);
        });
    });
}

// Select service
function selectService(serviceName) {
    selectedService = serviceName;
    resetChatState();
    showPage('service');
    initializeChat();
}

// Reset chat state
function resetChatState() {
    messages = [];
    currentStep = "initial";
    isTyping = false;
    imei = "";
    selectedCountry = "";
    selectedCarrier = "";
    currentMessageIndex = 0;
    messagesContainer.innerHTML = "";
    chatInput.value = "";
    countryCarrierSelector.classList.add('hidden');
    countrySelect.value = "";
    carrierSelect.value = "";
    carrierSelect.disabled = true;
}

// Initialize chat
function initializeChat() {
    setTimeout(() => {
        simulateTyping(
            "Welcome to the Carrier Unlock Tool! I am here to help you generating an unique unlock code for your device within next few minutes. No matter which phone's model or which carrier has locked your device, I support any of them.\n\nTo get started, send me your device's IMEI. A quick way to find the IMEI is by typing *#06# in your keypad and paste the IMEI below."
        );
    }, 500);
}

// Add message
function addMessage(text, isBot) {
    messages.push({ text, isBot });
    renderMessage(text, isBot, true);
    scrollToBottom();
}

// Render message
function renderMessage(text, isBot, animate = false) {
    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${isBot ? 'bot' : 'user'}`;
    messageEl.textContent = text;
    
    if (animate) {
        messageEl.style.animation = 'slideIn 0.3s ease-out';
    }
    
    messagesContainer.appendChild(messageEl);
}

// Simulate typing
async function simulateTyping(message) {
    showTypingIndicator();
    await sleep(1500);
    hideTypingIndicator();
    addMessage(message, true);
}

// Show typing indicator
function showTypingIndicator() {
    isTyping = true;
    const typingEl = document.createElement('div');
    typingEl.className = 'typing-indicator';
    typingEl.id = 'typing-indicator';
    typingEl.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(typingEl);
    scrollToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
    isTyping = false;
    const typingEl = document.getElementById('typing-indicator');
    if (typingEl) {
        typingEl.remove();
    }
}

// Scroll to bottom
function scrollToBottom() {
    setTimeout(() => {
        const chatContainer = document.getElementById('chat-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Validate IMEI
function validateIMEI(imei) {
    return /^\d{15,}$/.test(imei);
}

// Handle chat submit
async function handleChatSubmit(e) {
    e.preventDefault();
    const input = chatInput.value.trim();
    if (!input) return;

    addMessage(input, false);
    chatInput.value = "";

    switch (currentStep) {
        case "initial":
            if (!validateIMEI(input)) {
                await simulateTyping("Your IMEI is wrong! Please check and try again");
            } else {
                imei = input;
                await simulateTyping(`We've got your IMEI (${input} - so please memorize this IMEI as we will need this later), let's continue to the next. Please type "Continue" to move forward or "Back" to the previous page.`);
                currentStep = "confirmation";
            }
            break;
        case "confirmation":
            if (input.toLowerCase() === "continue") {
                currentStep = "country_carrier";
                await simulateTyping("Please select your phone's country and carrier from the dropdowns below:");
                countryCarrierSelector.classList.remove('hidden');
            } else if (input.toLowerCase() === "back") {
                currentStep = "initial";
                await simulateTyping("Welcome back! Please enter your device's IMEI number:");
            }
            break;
        case "country_carrier":
            if (selectedCountry && selectedCarrier) {
                await simulateTyping(`You've chosen ${selectedCountry} as Country and ${selectedCarrier} as carrier. If it's right, please type "Continue" to move to the next step, or "Back" to get back.`);
                currentStep = "final_confirmation";
            }
            break;
        case "final_confirmation":
            if (input.toLowerCase() === "continue") {
                await simulateTyping(`Confirmation: You have a ${selectedCarrier} locked phone in ${selectedCountry} with IMEI ${imei}. Would you like to generate the unlock code? please type "Continue" to move to the next step, or "Back" to get back.`);
                currentStep = "generate_code";
            } else if (input.toLowerCase() === "back") {
                currentStep = "country_carrier";
                selectedCountry = "";
                selectedCarrier = "";
                countrySelect.value = "";
                carrierSelect.value = "";
                carrierSelect.disabled = true;
                countryCarrierSelector.classList.remove('hidden');
                await simulateTyping("Please select your phone's country and carrier from the dropdowns below:");
            }
            break;
        case "generate_code":
            if (input.toLowerCase() === "continue") {
                await simulateUnlockProcess();
            } else if (input.toLowerCase() === "back") {
                currentStep = "final_confirmation";
                await simulateTyping(`You've chosen ${selectedCountry} as Country and ${selectedCarrier} as carrier. If it's right, please type "Continue" to move to the next step, or "Back" to get back.`);
            }
            break;
    }
}

// Simulate unlock process
async function simulateUnlockProcess() {
    currentStep = "unlocking";
    countryCarrierSelector.classList.add('hidden');
    
    for (let i = 0; i < unlockingMessages.length; i++) {
        currentMessageIndex = i;
        let message = unlockingMessages[i]
            .replace(/{imei}/g, imei)
            .replace(/{country}/g, selectedCountry)
            .replace(/{carrier}/g, selectedCarrier);
        await simulateTyping(message);
        await sleep(1000);
    }
    
    instructionsModal.classList.add('active');
}

// Populate country select
function populateCountrySelect() {
    const countries = Object.keys(carriersByCountry);
    countrySelect.innerHTML = '<option value="">Select Country</option>' + 
        countries.map(country => `<option value="${country}">${country}</option>`).join('');
}

// Handle country change
function handleCountryChange() {
    selectedCountry = countrySelect.value;
    
    if (selectedCountry) {
        const carriers = carriersByCountry[selectedCountry];
        carrierSelect.innerHTML = '<option value="">Select Carrier</option>' + 
            carriers.map(carrier => `<option value="${carrier}">${carrier}</option>`).join('');
        carrierSelect.disabled = false;
    } else {
        carrierSelect.innerHTML = '<option value="">Select Country First</option>';
        carrierSelect.disabled = true;
        selectedCarrier = "";
    }
}

// Handle carrier change
function handleCarrierChange() {
    selectedCarrier = carrierSelect.value;
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);