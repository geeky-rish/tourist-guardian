// Language Service for Multilingual Support
const translations = {
  en: {
    // Navigation
    register: "Register",
    adminLogin: "Admin Login",
    logout: "Logout",
    
    // Registration Form
    touristRegistration: "Tourist Registration",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    aadharPassport: "Aadhaar/Passport Number",
    aadharPassportPlaceholder: "Enter Aadhaar or Passport number",
    tripStart: "Trip Start Date",
    tripEnd: "Trip End Date",
    emergencyContact: "Emergency Contact",
    emergencyContactPlaceholder: "Enter emergency contact number",
    submitRegistration: "Register Tourist",
    
    // Admin Dashboard
    adminDashboard: "Admin Dashboard",
    overview: "Overview",
    map: "Map",
    analytics: "Analytics",
    totalTourists: "Total Tourists",
    activeTourists: "Active Tourists",
    sosAlerts: "SOS Alerts",
    safeTourists: "Safe",
    areas: "Areas",
    trackedTourists: "Tracked Tourists",
    
    // Tourist List
    touristList: "Tourist List",
    searchTourists: "Search tourists...",
    filterAll: "All",
    filterActive: "Active",
    filterSOS: "SOS",
    resetSOS: "Reset SOS",
    viewDetails: "View Details",
    
    // Map
    liveMap: "Live Map",
    toggleHeatmap: "Toggle Heatmap",
    showHeatmap: "Show Heatmap",
    hideHeatmap: "Hide Heatmap",
    
    // Messages
    registrationSuccess: "Tourist registered successfully!",
    registrationError: "Registration failed. Please try again.",
    sosTriggered: "SOS triggered successfully",
    sosReset: "SOS reset successfully",
    loading: "Loading...",
    noData: "No data available",
    
    // Validation
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",
    invalidAadhar: "Please enter a valid Aadhaar number",
    invalidPassport: "Please enter a valid Passport number",
    
    // Status
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    sosActive: "SOS Active",
    safe: "Safe",
    
    // New Features
    safetyScore: "Safety Score",
    getScore: "Get Score",
    viewDetails: "View Details",
    contact: "Contact",
    generateEFIR: "Generate E-FIR",
    resetSOS: "Reset SOS",
    recentAlerts: "Recent Alerts",
    recentEFIRs: "Recent E-FIRs",
    noAlerts: "No alerts",
    noEFIRs: "No E-FIRs",
    voiceSOS: "Voice SOS",
    manualSOS: "Manual SOS",
    listening: "Listening for SOS keywords...",
    clickToStart: "Click to start voice recognition",
    transcript: "Transcript",
    sayKeywords: "Say: 'help', 'emergency', 'SOS', 'danger', 'police', or 'ambulance'",
    voiceNotSupported: "Voice SOS not supported",
    browserNotSupported: "Your browser doesn't support speech recognition. Use the manual SOS button instead.",
  },
  
  hi: {
    // Navigation
    register: "पंजीकरण",
    adminLogin: "एडमिन लॉगिन",
    logout: "लॉग आउट",
    
    // Registration Form
    touristRegistration: "पर्यटक पंजीकरण",
    name: "पूरा नाम",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    aadharPassport: "आधार/पासपोर्ट नंबर",
    aadharPassportPlaceholder: "आधार या पासपोर्ट नंबर दर्ज करें",
    tripStart: "यात्रा प्रारंभ तिथि",
    tripEnd: "यात्रा समाप्ति तिथि",
    emergencyContact: "आपातकालीन संपर्क",
    emergencyContactPlaceholder: "आपातकालीन संपर्क नंबर दर्ज करें",
    submitRegistration: "पर्यटक पंजीकरण करें",
    
    // Admin Dashboard
    adminDashboard: "एडमिन डैशबोर्ड",
    overview: "अवलोकन",
    map: "नक्शा",
    analytics: "विश्लेषण",
    totalTourists: "कुल पर्यटक",
    activeTourists: "सक्रिय पर्यटक",
    sosAlerts: "SOS अलर्ट",
    safeTourists: "सुरक्षित",
    areas: "क्षेत्र",
    trackedTourists: "ट्रैक किए गए पर्यटक",
    
    // Tourist List
    touristList: "पर्यटक सूची",
    searchTourists: "पर्यटक खोजें...",
    filterAll: "सभी",
    filterActive: "सक्रिय",
    filterSOS: "SOS",
    resetSOS: "SOS रीसेट करें",
    viewDetails: "विवरण देखें",
    
    // Map
    liveMap: "लाइव मैप",
    toggleHeatmap: "हीटमैप टॉगल करें",
    showHeatmap: "हीटमैप दिखाएं",
    hideHeatmap: "हीटमैप छुपाएं",
    
    // Messages
    registrationSuccess: "पर्यटक सफलतापूर्वक पंजीकृत!",
    registrationError: "पंजीकरण असफल। कृपया पुनः प्रयास करें।",
    sosTriggered: "SOS सफलतापूर्वक ट्रिगर किया गया",
    sosReset: "SOS सफलतापूर्वक रीसेट किया गया",
    loading: "लोड हो रहा है...",
    noData: "कोई डेटा उपलब्ध नहीं",
    
    // Validation
    required: "यह फील्ड आवश्यक है",
    invalidEmail: "कृपया एक वैध ईमेल दर्ज करें",
    invalidPhone: "कृपया एक वैध फोन नंबर दर्ज करें",
    invalidAadhar: "कृपया एक वैध आधार नंबर दर्ज करें",
    invalidPassport: "कृपया एक वैध पासपोर्ट नंबर दर्ज करें",
    
    // Status
    status: "स्थिति",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    sosActive: "SOS सक्रिय",
    safe: "सुरक्षित",
    
    // New Features
    safetyScore: "सुरक्षा स्कोर",
    getScore: "स्कोर प्राप्त करें",
    viewDetails: "विवरण देखें",
    contact: "संपर्क",
    generateEFIR: "E-FIR बनाएं",
    resetSOS: "SOS रीसेट करें",
    recentAlerts: "हाल के अलर्ट",
    recentEFIRs: "हाल के E-FIR",
    noAlerts: "कोई अलर्ट नहीं",
    noEFIRs: "कोई E-FIR नहीं",
    voiceSOS: "वॉइस SOS",
    manualSOS: "मैनुअल SOS",
    listening: "SOS कीवर्ड सुन रहे हैं...",
    clickToStart: "वॉइस रिकग्निशन शुरू करने के लिए क्लिक करें",
    transcript: "ट्रांसक्रिप्ट",
    sayKeywords: "कहें: 'मदद', 'आपातकाल', 'SOS', 'खतरा', 'पुलिस', या 'एम्बुलेंस'",
    voiceNotSupported: "वॉइस SOS समर्थित नहीं",
    browserNotSupported: "आपका ब्राउज़र स्पीच रिकग्निशन का समर्थन नहीं करता। कृपया मैनुअल SOS बटन का उपयोग करें।",
  },
  
  ta: {
    // Navigation
    register: "பதிவு",
    adminLogin: "நிர்வாகி உள்நுழைவு",
    logout: "வெளியேறு",
    
    // Registration Form
    touristRegistration: "சுற்றுலா பயணி பதிவு",
    name: "முழு பெயர்",
    namePlaceholder: "உங்கள் முழு பெயரை உள்ளிடவும்",
    aadharPassport: "ஆதார்/பாஸ்போர்ட் எண்",
    aadharPassportPlaceholder: "ஆதார் அல்லது பாஸ்போர்ட் எண்ணை உள்ளிடவும்",
    tripStart: "பயண தொடக்க தேதி",
    tripEnd: "பயண முடிவு தேதி",
    emergencyContact: "அவசரகால தொடர்பு",
    emergencyContactPlaceholder: "அவசரகால தொடர்பு எண்ணை உள்ளிடவும்",
    submitRegistration: "சுற்றுலா பயணியை பதிவு செய்க",
    
    // Admin Dashboard
    adminDashboard: "நிர்வாகி டாஷ்போர்டு",
    overview: "கண்ணோட்டம்",
    map: "வரைபடம்",
    analytics: "பகுப்பாய்வு",
    totalTourists: "மொத்த சுற்றுலா பயணிகள்",
    activeTourists: "செயலில் உள்ள பயணிகள்",
    sosAlerts: "SOS எச்சரிக்கைகள்",
    safeTourists: "பாதுகாப்பான",
    areas: "பகுதிகள்",
    trackedTourists: "கண்காணிக்கப்பட்ட பயணிகள்",
    
    // Tourist List
    touristList: "சுற்றுலா பயணி பட்டியல்",
    searchTourists: "பயணிகளை தேடுங்கள்...",
    filterAll: "அனைத்தும்",
    filterActive: "செயலில்",
    filterSOS: "SOS",
    resetSOS: "SOS மீட்டமை",
    viewDetails: "விவரங்களை பார்க்க",
    
    // Map
    liveMap: "நேரடி வரைபடம்",
    toggleHeatmap: "வெப்ப வரைபடத்தை மாற்று",
    showHeatmap: "வெப்ப வரைபடத்தை காட்டு",
    hideHeatmap: "வெப்ப வரைபடத்தை மறை",
    
    // Messages
    registrationSuccess: "சுற்றுலா பயணி வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
    registrationError: "பதிவு தோல்வி. மீண்டும் முயற்சிக்கவும்.",
    sosTriggered: "SOS வெற்றிகரமாக தூண்டப்பட்டது",
    sosReset: "SOS வெற்றிகரமாக மீட்டமைக்கப்பட்டது",
    loading: "ஏற்றுகிறது...",
    noData: "தரவு இல்லை",
    
    // Validation
    required: "இந்த புலம் தேவை",
    invalidEmail: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்",
    invalidPhone: "சரியான தொலைபேசி எண்ணை உள்ளிடவும்",
    invalidAadhar: "சரியான ஆதார் எண்ணை உள்ளிடவும்",
    invalidPassport: "சரியான பாஸ்போர்ட் எண்ணை உள்ளிடவும்",
    
    // Status
    status: "நிலை",
    active: "செயலில்",
    inactive: "செயலற்ற",
    sosActive: "SOS செயலில்",
    safe: "பாதுகாப்பான",
    
    // New Features
    safetyScore: "பாதுகாப்பு மதிப்பெண்",
    getScore: "மதிப்பெண் பெற",
    viewDetails: "விவரங்களை பார்க்க",
    contact: "தொடர்பு",
    generateEFIR: "E-FIR உருவாக்க",
    resetSOS: "SOS மீட்டமை",
    recentAlerts: "சமீபத்திய எச்சரிக்கைகள்",
    recentEFIRs: "சமீபத்திய E-FIR",
    noAlerts: "எச்சரிக்கைகள் இல்லை",
    noEFIRs: "E-FIR இல்லை",
    voiceSOS: "குரல் SOS",
    manualSOS: "கைமுறை SOS",
    listening: "SOS முக்கிய வார்த்தைகளை கேட்டுக்கொண்டிருக்கிறது...",
    clickToStart: "குரல் அங்கீகாரத்தை தொடங்க கிளிக் செய்யவும்",
    transcript: "பிரதி",
    sayKeywords: "சொல்லுங்கள்: 'உதவி', 'அவசரம்', 'SOS', 'ஆபத்து', 'காவல்துறை', அல்லது 'ஆம்புலன்ஸ்'",
    voiceNotSupported: "குரல் SOS ஆதரிக்கப்படவில்லை",
    browserNotSupported: "உங்கள் உலாவி குரல் அங்கீகாரத்தை ஆதரிக்கவில்லை. கைமுறை SOS பொத்தானைப் பயன்படுத்தவும்।",
  },
  
    pa: { // Punjabi
      register: "ਰਜਿਸਟਰ",
      adminLogin: "ਐਡਮਿਨ ਲੌਗਿਨ",
      logout: "ਲੌਗ ਆਊਟ",
      touristRegistration: "ਸੈਲਾਨੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
      name: "ਪੂਰਾ ਨਾਮ",
      namePlaceholder: "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਾਖਲ ਕਰੋ",
      aadharPassport: "ਆਧਾਰ/ਪਾਸਪੋਰਟ ਨੰਬਰ",
      aadharPassportPlaceholder: "ਆਧਾਰ ਜਾਂ ਪਾਸਪੋਰਟ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
      tripStart: "ਯਾਤਰਾ ਸ਼ੁਰੂ ਹੋਣ ਦੀ ਤਾਰੀਖ",
      tripEnd: "ਯਾਤਰਾ ਖਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ",
      emergencyContact: "ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ",
      emergencyContactPlaceholder: "ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
      submitRegistration: "ਸੈਲਾਨੀ ਰਜਿਸਟਰ ਕਰੋ",
      adminDashboard: "ਐਡਮਿਨ ਡੈਸ਼ਬੋਰਡ",
      overview: "ਜਾਇਜ਼ਾ",
      map: "ਨਕਸ਼ਾ",
      analytics: "ਵਿਸ਼ਲੇਸ਼ਣ",
      totalTourists: "ਕੁੱਲ ਸੈਲਾਨੀ",
      activeTourists: "ਸਕਰੀਅ ਸੈਲਾਨੀ",
      sosAlerts: "SOS ਚੇਤਾਵਨੀ",
      safeTourists: "ਸੁਰੱਖਿਅਤ",
      areas: "ਖੇਤਰ",
      trackedTourists: "ਟ੍ਰੈਕ ਕੀਤੇ ਸੈਲਾਨੀ",
      
      // Tourist List
      touristList: "ਸੈਲਾਨੀ ਸੂਚੀ",
      searchTourists: "ਸੈਲਾਨੀ ਖੋਜੋ...",
      filterAll: "ਸਭ",
      filterActive: "ਸਕਰੀਅ",
      filterSOS: "SOS",
      resetSOS: "SOS ਰੀਸੈਟ",
      viewDetails: "ਵੇਰਵੇ ਦੇਖੋ",
      
      // Map
      liveMap: "ਲਾਈਵ ਮੈਪ",
      toggleHeatmap: "ਹੀਟਮੈਪ ਟੌਗਲ",
      showHeatmap: "ਹੀਟਮੈਪ ਦਿਖਾਓ",
      hideHeatmap: "ਹੀਟਮੈਪ ਛੁਪਾਓ",
      
      // Messages
      registrationSuccess: "ਸੈਲਾਨੀ ਸਫਲਤਾਪੂਰਵਕ ਰਜਿਸਟਰ!",
      registrationError: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      sosTriggered: "SOS ਸਫਲਤਾਪੂਰਵਕ ਟ੍ਰਿਗਰ",
      sosReset: "SOS ਸਫਲਤਾਪੂਰਵਕ ਰੀਸੈਟ",
      loading: "ਲੋਡ ਹੋ ਰਿਹਾ...",
      noData: "ਕੋਈ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ",
      
      // Validation
      required: "ਇਹ ਖੇਤਰ ਜ਼ਰੂਰੀ ਹੈ",
      invalidEmail: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਈਮੇਲ ਦਾਖਲ ਕਰੋ",
      invalidPhone: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਫੋਨ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
      invalidAadhar: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਆਧਾਰ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
      invalidPassport: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਪਾਸਪੋਰਟ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
      
      // Status
      status: "ਸਥਿਤੀ",
      active: "ਸਕਰੀਅ",
      inactive: "ਗੈਰ-ਸਕਰੀਅ",
      sosActive: "SOS ਸਕਰੀਅ",
      safe: "ਸੁਰੱਖਿਅਤ"
},
  
    te: { // Telugu
      register: "నమోదు చేయండి",
      adminLogin: "అడ్మిన్ లాగిన్",
      logout: "లాగ్ అవుట్",
      touristRegistration: "పర్యాటక నమోదు",
      name: "పూర్తి పేరు",
      namePlaceholder: "మీ పూర్తి పేరు నమోదు చేయండి",
      aadharPassport: "ఆధార్/పాస్‌పోర్ట్ నంబర్",
      aadharPassportPlaceholder: "ఆధార్ లేదా పాస్‌పోర్ట్ నంబర్ నమోదు చేయండి",
      tripStart: "ప్రయాణ ప్రారంభ తేదీ",
      tripEnd: "ప్రయాణ ముగింపు తేదీ",
      emergencyContact: "తక్షణ పరిచయం",
      emergencyContactPlaceholder: "తక్షణ పరిచయం నంబర్ నమోదు చేయండి",
      submitRegistration: "పర్యాటకుడిని నమోదు చేయండి",
      adminDashboard: "అడ్మిన్ డాష్‌బోర్డు",
      overview: "అవలోకనం",
      map: "మ్యాప్",
      analytics: "విశ్లేషణ",
      totalTourists: "మొత్తం పర్యాటకులు",
      activeTourists: "సక్రియ పర్యాటకులు",
      sosAlerts: "SOS అలర్ట్స్",
      safeTourists: "సురక్షితం",
      areas: "ప్రాంతాలు",
      trackedTourists: "ట్రాక్ చేసిన పర్యాటకులు",
      
      // Tourist List
      touristList: "పర్యాటకుల జాబితా",
      searchTourists: "పర్యాటకులను వెతకండి...",
      filterAll: "అన్నీ",
      filterActive: "సక్రియ",
      filterSOS: "SOS",
      resetSOS: "SOS రీసెట్",
      viewDetails: "వివరాలను చూడండి",
      
      // Map
      liveMap: "లైవ్ మ్యాప్",
      toggleHeatmap: "హీట్‌మ్యాప్ టోగుల్",
      showHeatmap: "హీట్‌మ్యాప్ చూపించు",
      hideHeatmap: "హీట్‌మ్యాప్ దాచు",
      
      // Messages
      registrationSuccess: "పర్యాటకుడు విజయవంతంగా నమోదు!",
      registrationError: "నమోదు విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
      sosTriggered: "SOS విజయవంతంగా ట్రిగర్",
      sosReset: "SOS విజయవంతంగా రీసెట్",
      loading: "లోడ్ అవుతోంది...",
      noData: "డేటా లేదు",
      
      // Validation
      required: "ఈ ఫీల్డ్ అవసరం",
      invalidEmail: "దయచేసి చెల్లుబాటు అయ్యే ఈమెయిల్ నమోదు చేయండి",
      invalidPhone: "దయచేసి చెల్లుబాటు అయ్యే ఫోన్ నంబర్ నమోదు చేయండి",
      invalidAadhar: "దయచేసి చెల్లుబాటు అయ్యే ఆధార్ నంబర్ నమోదు చేయండి",
      invalidPassport: "దయచేసి చెల్లుబాటు అయ్యే పాస్‌పోర్ట్ నంబర్ నమోదు చేయండి",
      
      // Status
      status: "స్థితి",
      active: "సక్రియ",
      inactive: "నిష్క్రియ",
      sosActive: "SOS సక్రియ",
      safe: "సురక్షితం"
},
  
    kn: { // Kannada
      register: "ನೋಂದಣಿ ಮಾಡಿ",
      adminLogin: "ಆಡ್ಮಿನ್ ಲಾಗಿನ್",
      logout: "ಲಾಗ್ ಔಟ್",
      touristRegistration: "ಪ್ರವಾಸಿ ನೋಂದಣಿ",
      name: "ಪೂರ್ಣ ಹೆಸರು",
      namePlaceholder: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ",
      aadharPassport: "ಆಧಾರ್/ಪಾಸ್‌ಪೋರ್ಟ್ ಸಂಖ್ಯೆ",
      aadharPassportPlaceholder: "ಆಧಾರ್ ಅಥವಾ ಪಾಸ್‌ಪೋರ್ಟ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      tripStart: "ಪ್ರಯಾಣ ಪ್ರಾರಂಭ ದಿನಾಂಕ",
      tripEnd: "ಪ್ರಯಾಣ ಅಂತ್ಯದ ದಿನಾಂಕ",
      emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
      emergencyContactPlaceholder: "ತುರ್ತು ಸಂಪರ್ಕ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      submitRegistration: "ಪ್ರವಾಸಿಯನ್ನು ನೋಂದಣಿ ಮಾಡಿ",
      adminDashboard: "ಆಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      overview: "ವೀಕ್ಷಣೆ",
      map: "ನಕ್ಷೆ",
      analytics: "ವಿಶ್ಲೇಷಣೆ",
      totalTourists: "ಒಟ್ಟು ಪ್ರವಾಸಿಗಳು",
      activeTourists: "ಸಕ್ರಿಯ ಪ್ರವಾಸಿಗಳು",
      sosAlerts: "SOS ಅಲರ್ಟ್‌ಗಳು",
      safeTourists: "ಸುರಕ್ಷಿತ",
      areas: "ಪ್ರದೇಶಗಳು",
      trackedTourists: "ಟ್ರ್ಯಾಕ್ ಮಾಡಿದ ಪ್ರವಾಸಿಗಳು",
      
      // Tourist List
      touristList: "ಪ್ರವಾಸಿಗಳ ಪಟ್ಟಿ",
      searchTourists: "ಪ್ರವಾಸಿಗಳನ್ನು ಹುಡುಕಿ...",
      filterAll: "ಎಲ್ಲಾ",
      filterActive: "ಸಕ್ರಿಯ",
      filterSOS: "SOS",
      resetSOS: "SOS ರೀಸೆಟ್",
      viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      
      // Map
      liveMap: "ಲೈವ್ ನಕ್ಷೆ",
      toggleHeatmap: "ಹೀಟ್‌ಮ್ಯಾಪ್ ಟೋಗಲ್",
      showHeatmap: "ಹೀಟ್‌ಮ್ಯಾಪ್ ತೋರಿಸಿ",
      hideHeatmap: "ಹೀಟ್‌ಮ್ಯಾಪ್ ಮರೆಮಾಡಿ",
      
      // Messages
      registrationSuccess: "ಪ್ರವಾಸಿ ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಣಿ!",
      registrationError: "ನೋಂದಣಿ ವಿಫಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      sosTriggered: "SOS ಯಶಸ್ವಿಯಾಗಿ ಟ್ರಿಗರ್",
      sosReset: "SOS ಯಶಸ್ವಿಯಾಗಿ ರೀಸೆಟ್",
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      noData: "ಡೇಟಾ ಇಲ್ಲ",
      
      // Validation
      required: "ಈ ಕ್ಷೇತ್ರ ಅಗತ್ಯ",
      invalidEmail: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ನಮೂದಿಸಿ",
      invalidPhone: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      invalidAadhar: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಆಧಾರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      invalidPassport: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಪಾಸ್‌ಪೋರ್ಟ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
      
      // Status
      status: "ಸ್ಥಿತಿ",
      active: "ಸಕ್ರಿಯ",
      inactive: "ನಿಷ್ಕ್ರಿಯ",
      sosActive: "SOS ಸಕ್ರಿಯ",
      safe: "ಸುರಕ್ಷಿತ"
},
  
    as: { // Assamese
      register: "পঞ্জীয়ন কৰক",
      adminLogin: "এডমিন লগইন",
      logout: "লগ আউট",
      touristRegistration: "পর্যটক পঞ্জীয়ন",
      name: "সম্পূৰ্ণ নাম",
      namePlaceholder: "আপোনাৰ সম্পূৰ্ণ নাম লিখক",
      aadharPassport: "আধাৰ/পাছপোৰ্ট নম্বৰ",
      aadharPassportPlaceholder: "আধাৰ বা পাছপোৰ্ট নম্বৰ লিখক",
      tripStart: "ভ্ৰমণ আৰম্ভ তাৰিখ",
      tripEnd: "ভ্ৰমণ শেষ তাৰিখ",
      emergencyContact: "জৰুৰী যোগাযোগ",
      emergencyContactPlaceholder: "জৰুৰী যোগাযোগ নম্বৰ লিখক",
      submitRegistration: "পর্যটক পঞ্জীয়ন কৰক",
      adminDashboard: "এডমিন ডেছব'ৰ্ড",
      overview: "সামৰি চাওক",
      map: "মানচিত্ৰ",
      analytics: "বিশ্লেষণ",
      totalTourists: "মুঠ পর্যটক",
      activeTourists: "সক্ৰিয় পর্যটক",
      sosAlerts: "SOS সতর্কতা",
      safeTourists: "সুৰক্ষিত",
      areas: "অঞ্চলসমূহ",
      trackedTourists: "ট্ৰেক কৰা পর্যটক",
      
      // Tourist List
      touristList: "পর্যটকৰ তালিকা",
      searchTourists: "পর্যটক বিচাৰক...",
      filterAll: "সকলো",
      filterActive: "সক্ৰিয়",
      filterSOS: "SOS",
      resetSOS: "SOS ৰিসেট",
      viewDetails: "বিৱৰণ চাওক",
      
      // Map
      liveMap: "লাইভ মানচিত্ৰ",
      toggleHeatmap: "হিটমেপ টগল",
      showHeatmap: "হিটমেপ দেখুৱাওক",
      hideHeatmap: "হিটমেপ লুকুৱাওক",
      
      // Messages
      registrationSuccess: "পর্যটক সফলভাৱে পঞ্জীয়ন!",
      registrationError: "পঞ্জীয়ন বিফল। অনুগ্ৰহ কৰি পুনৰ চেষ্টা কৰক।",
      sosTriggered: "SOS সফলভাৱে ট্ৰিগাৰ",
      sosReset: "SOS সফলভাৱে ৰিসেট",
      loading: "লোড হৈ আছে...",
      noData: "কোনো ডেটা নাই",
      
      // Validation
      required: "এই ক্ষেত্ৰটো প্ৰয়োজন",
      invalidEmail: "অনুগ্ৰহ কৰি এটা বৈধ ইমেইল লিখক",
      invalidPhone: "অনুগ্ৰহ কৰি এটা বৈধ ফোন নম্বৰ লিখক",
      invalidAadhar: "অনুগ্ৰহ কৰি এটা বৈধ আধাৰ নম্বৰ লিখক",
      invalidPassport: "অনুগ্ৰহ কৰি এটা বৈধ পাছপোৰ্ট নম্বৰ লিখক",
      
      // Status
      status: "অবস্থা",
      active: "সক্ৰিয়",
      inactive: "নিষ্ক্ৰিয়",
      sosActive: "SOS সক্ৰিয়",
      safe: "সুৰক্ষিত"
},
  
    bn: { // Bengali
      register: "নিবন্ধন",
      adminLogin: "অ্যাডমিন লগইন",
      logout: "লগআউট",
      touristRegistration: "পর্যটক নিবন্ধন",
      name: "পূর্ণ নাম",
      namePlaceholder: "আপনার পূর্ণ নাম লিখুন",
      aadharPassport: "আধার/পাসপোর্ট নম্বর",
      aadharPassportPlaceholder: "আধার বা পাসপোর্ট নম্বর লিখুন",
      tripStart: "ভ্রমণ শুরু তারিখ",
      tripEnd: "ভ্রমণ শেষ তারিখ",
      emergencyContact: "জরুরি যোগাযোগ",
      emergencyContactPlaceholder: "জরুরি যোগাযোগ নম্বর লিখুন",
      submitRegistration: "পর্যটক নিবন্ধন করুন",
      adminDashboard: "অ্যাডমিন ড্যাশবোর্ড",
      overview: "সংক্ষিপ্ত বিবরণ",
      map: "মানচিত্র",
      analytics: "বিশ্লেষণ",
      totalTourists: "মোট পর্যটক",
      activeTourists: "সক্রিয় পর্যটক",
      sosAlerts: "SOS সতর্কবার্তা",
      safeTourists: "নিরাপদ",
      areas: "এলাকা",
      trackedTourists: "ট্র্যাক করা পর্যটক",
      
      // Tourist List
      touristList: "পর্যটক তালিকা",
      searchTourists: "পর্যটক খুঁজুন...",
      filterAll: "সব",
      filterActive: "সক্রিয়",
      filterSOS: "SOS",
      resetSOS: "SOS রিসেট",
      viewDetails: "বিস্তারিত দেখুন",
      
      // Map
      liveMap: "লাইভ মানচিত্র",
      toggleHeatmap: "হিটম্যাপ টগল",
      showHeatmap: "হিটম্যাপ দেখান",
      hideHeatmap: "হিটম্যাপ লুকান",
      
      // Messages
      registrationSuccess: "পর্যটক সফলভাবে নিবন্ধিত!",
      registrationError: "নিবন্ধন ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।",
      sosTriggered: "SOS সফলভাবে ট্রিগার",
      sosReset: "SOS সফলভাবে রিসেট",
      loading: "লোড হচ্ছে...",
      noData: "কোনো ডেটা নেই",
      
      // Validation
      required: "এই ক্ষেত্রটি প্রয়োজন",
      invalidEmail: "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন",
      invalidPhone: "অনুগ্রহ করে একটি বৈধ ফোন নম্বর লিখুন",
      invalidAadhar: "অনুগ্রহ করে একটি বৈধ আধার নম্বর লিখুন",
      invalidPassport: "অনুগ্রহ করে একটি বৈধ পাসপোর্ট নম্বর লিখুন",
      
      // Status
      status: "অবস্থা",
      active: "সক্রিয়",
      inactive: "নিষ্ক্রিয়",
      sosActive: "SOS সক্রিয়",
      safe: "নিরাপদ"
},  

mni: { // Meitei / Manipuri
    register: "নমোদোক",
    adminLogin: "অ্যাডমিন লগইন",
    logout: "লগআউট",
    touristRegistration: "পর্যটক নমোদোক",
    name: "পূর্ণ নাম",
    namePlaceholder: "আপনার পূর্ণ নাম লিখুন",
    aadharPassport: "আধার/পাসপোর্ট নম্বর",
    aadharPassportPlaceholder: "আধার বা পাসপোর্ট নম্বর লিখুন",
    tripStart: "ভ্রমণ শুরু তারিখ",
    tripEnd: "ভ্রমণ শেষ তারিখ",
    emergencyContact: "জরুরি যোগাযোগ",
    emergencyContactPlaceholder: "জরুরি যোগাযোগ নম্বর লিখুন",
    submitRegistration: "পর্যটক নমোদোক",
    adminDashboard: "অ্যাডমিন ড্যাশবোর্ড",
    overview: "সংক্ষিপ্ত বিবরণ",
    map: "মানচিত্র",
    analytics: "বিশ্লেষণ",
    totalTourists: "মোট পর্যটক",
    activeTourists: "সক্রিয় পর্যটক",
    sosAlerts: "SOS সতর্কবার্তা",
    safeTourists: "নিরাপদ",
    areas: "এলাকা",
    trackedTourists: "ট্র্যাক করা পর্যটক",
    
    // Tourist List
    touristList: "পর্যটক তালিকা",
    searchTourists: "পর্যটক খুঁজুন...",
    filterAll: "সব",
    filterActive: "সক্রিয়",
    filterSOS: "SOS",
    resetSOS: "SOS রিসেট",
    viewDetails: "বিস্তারিত দেখুন",
    
    // Map
    liveMap: "লাইভ মানচিত্র",
    toggleHeatmap: "হিটম্যাপ টগল",
    showHeatmap: "হিটম্যাপ দেখান",
    hideHeatmap: "হিটম্যাপ লুকান",
    
    // Messages
    registrationSuccess: "পর্যটক সফলভাবে নিবন্ধিত!",
    registrationError: "নিবন্ধন ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।",
    sosTriggered: "SOS সফলভাবে ট্রিগার",
    sosReset: "SOS সফলভাবে রিসেট",
    loading: "লোড হচ্ছে...",
    noData: "কোনো ডেটা নেই",
    
    // Validation
    required: "এই ক্ষেত্রটি প্রয়োজন",
    invalidEmail: "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন",
    invalidPhone: "অনুগ্রহ করে একটি বৈধ ফোন নম্বর লিখুন",
    invalidAadhar: "অনুগ্রহ করে একটি বৈধ আধার নম্বর লিখুন",
    invalidPassport: "অনুগ্রহ করে একটি বৈধ পাসপোর্ট নম্বর লিখুন",
    
    // Status
    status: "অবস্থা",
    active: "সক্রিয়",
    inactive: "নিষ্ক্রিয়",
    sosActive: "SOS সক্রিয়",
    safe: "নিরাপদ",
    
    // New Features
    safetyScore: "নিরাপত্তা স্কোর",
    getScore: "স্কোর পান",
    viewDetails: "বিস্তারিত দেখুন",
    contact: "যোগাযোগ",
    generateEFIR: "E-FIR তৈরি করুন",
    resetSOS: "SOS রিসেট করুন",
    recentAlerts: "সাম্প্রতিক অ্যালার্ট",
    recentEFIRs: "সাম্প্রতিক E-FIR",
    noAlerts: "কোন অ্যালার্ট নেই",
    noEFIRs: "কোন E-FIR নেই",
    voiceSOS: "ভয়েস SOS",
    manualSOS: "ম্যানুয়াল SOS",
    listening: "SOS কীওয়ার্ড শুনছি...",
    clickToStart: "ভয়েস রিকগনিশন শুরু করতে ক্লিক করুন",
    transcript: "ট্রান্সক্রিপ্ট",
    sayKeywords: "বলুন: 'সাহায্য', 'জরুরি', 'SOS', 'বিপদ', 'পুলিশ', বা 'অ্যাম্বুলেন্স'",
    voiceNotSupported: "ভয়েস SOS সমর্থিত নয়",
    browserNotSupported: "আপনার ব্রাউজার স্পিচ রিকগনিশন সমর্থন করে না। অনুগ্রহ করে ম্যানুয়াল SOS বাটন ব্যবহার করুন।",
  },
  
  brx: { // Bodo
    register: "रजिस्टार",
    adminLogin: "एडमिन लॉगिन",
    logout: "लॉगआउट",
    touristRegistration: "सैलानी रजिस्टार",
    name: "पूरा नाम",
    namePlaceholder: "अपन पूरा नाम दाबा",
    aadharPassport: "आधार/पासपोर्ट नंबर",
    aadharPassportPlaceholder: "आधार वा पासपोर्ट नंबर दाबा",
    tripStart: "यात्रा शुरू तारीख",
    tripEnd: "यात्रा समाप्त तारीख",
    emergencyContact: "आपतकालीन संपर्क",
    emergencyContactPlaceholder: "आपतकालीन संपर्क नंबर दाबा",
    submitRegistration: "सैलानी रजिस्टार",
    adminDashboard: "एडमिन डैशबोर्ड",
    overview: "अवलोकन",
    map: "नक्शा",
    analytics: "विश्लेषण",
    totalTourists: "कुल सैलानी",
    activeTourists: "सक्रिय सैलानी",
    sosAlerts: "SOS चेतावनी",
    safeTourists: "सुरक्षित",
    areas: "क्षेत्र",
    trackedTourists: "ट्रैक किए गए सैलानी",
    
    // Tourist List
    touristList: "सैलानी सूची",
    searchTourists: "सैलानी खोजो...",
    filterAll: "सब",
    filterActive: "सक्रिय",
    filterSOS: "SOS",
    resetSOS: "SOS रीसेट",
    viewDetails: "विवरण देखो",
    
    // Map
    liveMap: "लाइव नक्शा",
    toggleHeatmap: "हीटमैप टॉगल",
    showHeatmap: "हीटमैप दिखाओ",
    hideHeatmap: "हीटमैप छुपाओ",
    
    // Messages
    registrationSuccess: "सैलानी सफलतापूर्वक रजिस्टर!",
    registrationError: "रजिस्ट्रेशन असफल। कृपया पुनः प्रयास करें।",
    sosTriggered: "SOS सफलतापूर्वक ट्रिगर",
    sosReset: "SOS सफलतापूर्वक रीसेट",
    loading: "लोड हो रहा...",
    noData: "कोई डेटा नहीं",
    
    // Validation
    required: "यह क्षेत्र आवश्यक है",
    invalidEmail: "कृपया एक वैध ईमेल दर्ज करें",
    invalidPhone: "कृपया एक वैध फोन नंबर दर्ज करें",
    invalidAadhar: "कृपया एक वैध आधार नंबर दर्ज करें",
    invalidPassport: "कृपया एक वैध पासपोर्ट नंबर दर्ज करें",
    
    // Status
    status: "स्थिति",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    sosActive: "SOS सक्रिय",
    safe: "सुरक्षित",
    
    // New Features
    safetyScore: "सुरक्षा स्कोर",
    getScore: "स्कोर प्राप्त करें",
    viewDetails: "विवरण देखें",
    contact: "संपर्क",
    generateEFIR: "E-FIR बनाएं",
    resetSOS: "SOS रीसेट करें",
    recentAlerts: "हाल के अलर्ट",
    recentEFIRs: "हाल के E-FIR",
    noAlerts: "कोई अलर्ट नहीं",
    noEFIRs: "कोई E-FIR नहीं",
    voiceSOS: "वॉइस SOS",
    manualSOS: "मैनुअल SOS",
    listening: "SOS कीवर्ड सुन रहे हैं...",
    clickToStart: "वॉइस रिकग्निशन शुरू करने के लिए क्लिक करें",
    transcript: "ट्रांसक्रिप्ट",
    sayKeywords: "कहें: 'मदद', 'आपातकाल', 'SOS', 'खतरा', 'पुलिस', या 'एम्बुलेंस'",
    voiceNotSupported: "वॉइस SOS समर्थित नहीं",
    browserNotSupported: "आपका ब्राउज़र स्पीच रिकग्निशन का समर्थन नहीं करता। कृपया मैनुअल SOS बटन का उपयोग करें।",
  },
  
  kha: { // Khasi
    register: "Register",
    adminLogin: "Admin Login",
    logout: "Logout",
    touristRegistration: "Tourist Registration",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    aadharPassport: "Aadhaar/Passport Number",
    aadharPassportPlaceholder: "Enter Aadhaar or Passport number",
    tripStart: "Trip Start Date",
    tripEnd: "Trip End Date",
    emergencyContact: "Emergency Contact",
    emergencyContactPlaceholder: "Enter emergency contact number",
    submitRegistration: "Register Tourist",
    adminDashboard: "Admin Dashboard",
    overview: "Overview",
    map: "Map",
    analytics: "Analytics",
    totalTourists: "Total Tourists",
    activeTourists: "Active Tourists",
    sosAlerts: "SOS Alerts",
    safeTourists: "Safe",
    areas: "Areas",
    trackedTourists: "Tracked Tourists",
    
    // Tourist List
    touristList: "Tourist List",
    searchTourists: "Search tourists...",
    filterAll: "All",
    filterActive: "Active",
    filterSOS: "SOS",
    resetSOS: "Reset SOS",
    viewDetails: "View Details",
    
    // Map
    liveMap: "Live Map",
    toggleHeatmap: "Toggle Heatmap",
    showHeatmap: "Show Heatmap",
    hideHeatmap: "Hide Heatmap",
    
    // Messages
    registrationSuccess: "Tourist registered successfully!",
    registrationError: "Registration failed. Please try again.",
    sosTriggered: "SOS triggered successfully",
    sosReset: "SOS reset successfully",
    loading: "Loading...",
    noData: "No data available",
    
    // Validation
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",
    invalidAadhar: "Please enter a valid Aadhaar number",
    invalidPassport: "Please enter a valid Passport number",
    
    // Status
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    sosActive: "SOS Active",
    safe: "Safe",
    
    // New Features
    safetyScore: "Safety Score",
    getScore: "Get Score",
    viewDetails: "View Details",
    contact: "Contact",
    generateEFIR: "Generate E-FIR",
    resetSOS: "Reset SOS",
    recentAlerts: "Recent Alerts",
    recentEFIRs: "Recent E-FIRs",
    noAlerts: "No alerts",
    noEFIRs: "No E-FIRs",
    voiceSOS: "Voice SOS",
    manualSOS: "Manual SOS",
    listening: "Listening for SOS keywords...",
    clickToStart: "Click to start voice recognition",
    transcript: "Transcript",
    sayKeywords: "Say: 'help', 'emergency', 'SOS', 'danger', 'police', or 'ambulance'",
    voiceNotSupported: "Voice SOS not supported",
    browserNotSupported: "Your browser doesn't support speech recognition. Use the manual SOS button instead.",
  },
  
  lus: { // Mizo
    register: "Register",
    adminLogin: "Admin Login",
    logout: "Logout",
    touristRegistration: "Tourist Registration",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    aadharPassport: "Aadhaar/Passport Number",
    aadharPassportPlaceholder: "Enter Aadhaar or Passport number",
    tripStart: "Trip Start Date",
    tripEnd: "Trip End Date",
    emergencyContact: "Emergency Contact",
    emergencyContactPlaceholder: "Enter emergency contact number",
    submitRegistration: "Register Tourist",
    adminDashboard: "Admin Dashboard",
    overview: "Overview",
    map: "Map",
    analytics: "Analytics",
    totalTourists: "Total Tourists",
    activeTourists: "Active Tourists",
    sosAlerts: "SOS Alerts",
    safeTourists: "Safe",
    areas: "Areas",
    trackedTourists: "Tracked Tourists",
    
    // Tourist List
    touristList: "Tourist List",
    searchTourists: "Search tourists...",
    filterAll: "All",
    filterActive: "Active",
    filterSOS: "SOS",
    resetSOS: "Reset SOS",
    viewDetails: "View Details",
    
    // Map
    liveMap: "Live Map",
    toggleHeatmap: "Toggle Heatmap",
    showHeatmap: "Show Heatmap",
    hideHeatmap: "Hide Heatmap",
    
    // Messages
    registrationSuccess: "Tourist registered successfully!",
    registrationError: "Registration failed. Please try again.",
    sosTriggered: "SOS triggered successfully",
    sosReset: "SOS reset successfully",
    loading: "Loading...",
    noData: "No data available",
    
    // Validation
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",
    invalidAadhar: "Please enter a valid Aadhaar number",
    invalidPassport: "Please enter a valid Passport number",
    
    // Status
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    sosActive: "SOS Active",
    safe: "Safe",
    
    // New Features
    safetyScore: "Safety Score",
    getScore: "Get Score",
    viewDetails: "View Details",
    contact: "Contact",
    generateEFIR: "Generate E-FIR",
    resetSOS: "Reset SOS",
    recentAlerts: "Recent Alerts",
    recentEFIRs: "Recent E-FIRs",
    noAlerts: "No alerts",
    noEFIRs: "No E-FIRs",
    voiceSOS: "Voice SOS",
    manualSOS: "Manual SOS",
    listening: "Listening for SOS keywords...",
    clickToStart: "Click to start voice recognition",
    transcript: "Transcript",
    sayKeywords: "Say: 'help', 'emergency', 'SOS', 'danger', 'police', or 'ambulance'",
    voiceNotSupported: "Voice SOS not supported",
    browserNotSupported: "Your browser doesn't support speech recognition. Use the manual SOS button instead.",
  },
  
  nys: { // Nyishi / Arunachal placeholder
    register: "Register",
    adminLogin: "Admin Login",
    logout: "Logout",
    touristRegistration: "Tourist Registration",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    aadharPassport: "Aadhaar/Passport Number",
    aadharPassportPlaceholder: "Enter Aadhaar or Passport number",
    tripStart: "Trip Start Date",
    tripEnd: "Trip End Date",
    emergencyContact: "Emergency Contact",
    emergencyContactPlaceholder: "Enter emergency contact number",
    submitRegistration: "Register Tourist",
    adminDashboard: "Admin Dashboard",
    overview: "Overview",
    map: "Map",
    analytics: "Analytics",
    totalTourists: "Total Tourists",
    activeTourists: "Active Tourists",
    sosAlerts: "SOS Alerts",
    safeTourists: "Safe",
    areas: "Areas",
    trackedTourists: "Tracked Tourists",
    
    // Tourist List
    touristList: "Tourist List",
    searchTourists: "Search tourists...",
    filterAll: "All",
    filterActive: "Active",
    filterSOS: "SOS",
    resetSOS: "Reset SOS",
    viewDetails: "View Details",
    
    // Map
    liveMap: "Live Map",
    toggleHeatmap: "Toggle Heatmap",
    showHeatmap: "Show Heatmap",
    hideHeatmap: "Hide Heatmap",
    
    // Messages
    registrationSuccess: "Tourist registered successfully!",
    registrationError: "Registration failed. Please try again.",
    sosTriggered: "SOS triggered successfully",
    sosReset: "SOS reset successfully",
    loading: "Loading...",
    noData: "No data available",
    
    // Validation
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",
    invalidAadhar: "Please enter a valid Aadhaar number",
    invalidPassport: "Please enter a valid Passport number",
    
    // Status
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    sosActive: "SOS Active",
    safe: "Safe",
    
    // New Features
    safetyScore: "Safety Score",
    getScore: "Get Score",
    viewDetails: "View Details",
    contact: "Contact",
    generateEFIR: "Generate E-FIR",
    resetSOS: "Reset SOS",
    recentAlerts: "Recent Alerts",
    recentEFIRs: "Recent E-FIRs",
    noAlerts: "No alerts",
    noEFIRs: "No E-FIRs",
    voiceSOS: "Voice SOS",
    manualSOS: "Manual SOS",
    listening: "Listening for SOS keywords...",
    clickToStart: "Click to start voice recognition",
    transcript: "Transcript",
    sayKeywords: "Say: 'help', 'emergency', 'SOS', 'danger', 'police', or 'ambulance'",
    voiceNotSupported: "Voice SOS not supported",
    browserNotSupported: "Your browser doesn't support speech recognition. Use the manual SOS button instead.",
  }
  
}
  

class LanguageService {
  constructor() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en'
  }

  setLanguage(language) {
    this.currentLanguage = language
    localStorage.setItem('selectedLanguage', language)
    // Trigger a custom event for components to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }))
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

  getAvailableLanguages() {
    return [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
      { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
      { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
      { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
      { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
      { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
      { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
      { code: 'mni', name: 'মৈতৈলোন্', flag: '🇮🇳' },
      { code: 'brx', name: 'बड़ो', flag: '🇮🇳' },
      { code: 'kha', name: 'Khasi', flag: '🇮🇳' },
      { code: 'lus', name: 'Mizo', flag: '🇮🇳' },
      { code: 'nys', name: 'Nyishi', flag: '🇮🇳' }
    ]
  }

  t(key, params = {}) {
    const translation = translations[this.currentLanguage]?.[key] || translations['en'][key] || key
    
    // Simple parameter replacement
    return translation.replace(/\{(\w+)\}/g, (match, param) => params[param] || match)
  }

  // Get all translations for a specific language
  getTranslations(language = this.currentLanguage) {
    return translations[language] || translations['en']
  }
}

// Create singleton instance
const languageService = new LanguageService()

export default languageService
