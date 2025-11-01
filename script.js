// Translation object
const translations = {
    en: {
        title: "Job Application Form",
        subtitle: "Tell us about yourself",
        complete: "% Complete",
        personalInfo: "Personal Information",
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email Address *",
        phone: "Phone Number *",
        location: "Location *",
        firstNamePlaceholder: "Enter your first name",
        lastNamePlaceholder: "Enter your last name",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+1234567890 or (123) 456-7890",
        locationPlaceholder: "City, State/Country",
        professionalInfo: "Professional Information",
        position: "Position Applied For *",
        experience: "Years of Experience *",
        currentCompany: "Current Company",
        education: "Highest Education Level *",
        pleaseSpecify: "Please specify",
        linkedin: "LinkedIn Profile",
        positionPlaceholder: "e.g., Software Engineer, Marketing Manager",
        currentCompanyPlaceholder: "Your current employer (optional)",
        educationOtherPlaceholder: "Your education level",
        linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
        selectYears: "Select years",
        "years0-1": "0-1 years",
        "years2-3": "2-3 years",
        "years4-5": "4-5 years",
        "years6-10": "6-10 years",
        "years10+": "10+ years",
        selectEducation: "Select education level",
        highSchool: "High School",
        associate: "Associate Degree",
        bachelor: "Bachelor's Degree",
        master: "Master's Degree",
        phd: "PhD",
        other: "Other",
        skills: "Skills & Qualifications",
        keySkills: "Key Skills *",
        languagesSpoken: "Languages Spoken",
        certifications: "Certifications",
        skillsPlaceholder: "Type a skill and press Enter or click Add",
        languagesPlaceholder: "Language (e.g., English, Spanish)",
        certificationsPlaceholder: "List any professional certifications you hold...",
        add: "Add",
        addSkills: "Add at least 3 skills",
        additionalInfo: "Additional Information",
        availability: "Availability *",
        expectedSalary: "Expected Salary Range",
        coverLetter: "Cover Letter / Why are you interested in this position? *",
        hearAboutUs: "How did you hear about us?",
        selectAvailability: "Select availability",
        immediate: "Immediate",
        within2weeks: "Within 2 weeks",
        within1month: "Within 1 month",
        within2months: "Within 2 months",
        within3months: "3+ months",
        min: "Min",
        max: "Max",
        coverLetterPlaceholder: "Tell us why you're interested in this role and what makes you a great fit...",
        selectSource: "Select source",
        jobBoard: "Job Board (Indeed, LinkedIn, etc.)",
        companyWebsite: "Company Website",
        employeeReferral: "Employee Referral",
        socialMedia: "Social Media",
        recruiter: "Recruiter",
        agreeTerms: "I agree to the Terms and Conditions and Privacy Policy *",
        previous: "Previous",
        next: "Next",
        submit: "Submit Application",
        successTitle: "Application Submitted Successfully!",
        successMessage: "Thank you for your interest. We'll review your application and get back to you soon.",
        characters: "/500 characters",
        selectPosition: "Select a position",
        positionOtherPlaceholder: "Enter your position"
    },
    ar: {
        title: "نموذج طلب التوظيف",
        subtitle: "أخبرنا عن نفسك",
        complete: "% مكتمل",
        personalInfo: "المعلومات الشخصية",
        firstName: "الاسم الأول *",
        lastName: "اسم العائلة *",
        email: "عنوان البريد الإلكتروني *",
        phone: "رقم الهاتف *",
        location: "الموقع *",
        firstNamePlaceholder: "أدخل اسمك الأول",
        lastNamePlaceholder: "أدخل اسم عائلتك",
        emailPlaceholder: "بريدك.الإلكتروني@example.com",
        phonePlaceholder: "+1234567890 or (123) 456-7890",
        locationPlaceholder: "المدينة، الولاية/البلد",
        professionalInfo: "المعلومات المهنية",
        position: "المنصب المتقدم له *",
        experience: "سنوات الخبرة *",
        currentCompany: "الشركة الحالية",
        education: "أعلى مستوى تعليمي *",
        pleaseSpecify: "يرجى التحديد",
        linkedin: "ملف LinkedIn الشخصي",
        positionPlaceholder: "مثلاً: مهندس برمجيات، مدير تسويق",
        currentCompanyPlaceholder: "صاحب العمل الحالي (اختياري)",
        educationOtherPlaceholder: "مستوى التعليم الخاص بك",
        linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
        selectYears: "اختر السنوات",
        "years0-1": "0-1 سنوات",
        "years2-3": "2-3 سنوات",
        "years4-5": "4-5 سنوات",
        "years6-10": "6-10 سنوات",
        "years10+": "10+ سنوات",
        selectEducation: "اختر مستوى التعليم",
        highSchool: "المدرسة الثانوية",
        associate: "درجة زمالة",
        bachelor: "درجة البكالوريوس",
        master: "درجة الماجستير",
        phd: "الدكتوراه",
        other: "أخرى",
        skills: "المهارات والمؤهلات",
        keySkills: "المهارات الأساسية *",
        languagesSpoken: "اللغات المحكية",
        certifications: "الشهادات",
        skillsPlaceholder: "اكتب مهارة واضغط Enter أو انقر إضافة",
        languagesPlaceholder: "اللغة (مثلاً: الإنجليزية، الإسبانية)",
        certificationsPlaceholder: "اذكر أي شهادات مهنية تحملها...",
        add: "إضافة",
        addSkills: "أضف 3 مهارات على الأقل",
        additionalInfo: "معلومات إضافية",
        availability: "التوفر *",
        expectedSalary: "نطاق الراتب المتوقع",
        coverLetter: "رسالة الغلاف / لماذا أنت مهتم بهذا المنصب؟ *",
        hearAboutUs: "كيف سمعت عنا؟",
        selectAvailability: "اختر التوفر",
        immediate: "فوري",
        within2weeks: "خلال أسبوعين",
        within1month: "خلال شهر",
        within2months: "خلال شهرين",
        within3months: "3+ أشهر",
        min: "الحد الأدنى",
        max: "الحد الأقصى",
        coverLetterPlaceholder: "أخبرنا لماذا أنت مهتم بهذا الدور وما الذي يجعلك مناسباً...",
        selectSource: "اختر المصدر",
        jobBoard: "لوحة الوظائف (Indeed، LinkedIn، إلخ)",
        companyWebsite: "موقع الشركة",
        employeeReferral: "إحالة موظف",
        socialMedia: "وسائل التواصل الاجتماعي",
        recruiter: "مسؤول التوظيف",
        agreeTerms: "أوافق على {terms} و {privacy} *",
        previous: "السابق",
        next: "التالي",
        submit: "إرسال الطلب",
        successTitle: "تم إرسال الطلب بنجاح!",
        successMessage: "شكراً لاهتمامك. سنراجع طلبك وسنعود إليك قريباً.",
        characters: "/500 حرف",
        selectPosition: "اختر منصب",
        positionOtherPlaceholder: "أدخل منصبك"
    },
    ku: {
        title: "فۆرمی داواکاری کار",
        subtitle: "پێمان بڵێ دەربارەی خۆت",
        complete: "% تەواو",
        personalInfo: "زانیاری کەسی",
        firstName: "ناوی یەکەم *",
        lastName: "ناوی کۆتایی *",
        email: "ناونیشانی ئیمەیڵ *",
        phone: "ژمارەی تەلەفۆن *",
        location: "شوێن *",
        firstNamePlaceholder: "ناوی یەکەمت بنووسە",
        lastNamePlaceholder: "ناوی کۆتایی بنووسە",
        emailPlaceholder: "ئیمەیڵ.تۆ@example.com",
        phonePlaceholder: "+1234567890 or (123) 456-7890",
        locationPlaceholder: "شار، وەلات/وڵات",
        professionalInfo: "زانیاری پیشەیی",
        position: "پێگەی داوات بۆ *",
        experience: "ساڵانی ئەزموون *",
        currentCompany: "کۆمپانیای ئێستا",
        education: "ئاستی خوێندنی بەرزترین *",
        pleaseSpecify: "تکایە دیاری بکە",
        linkedin: "پڕۆفایلی LinkedIn",
        positionPlaceholder: "بۆ نموونە: ئەندازیاری سۆفتوێر، بەڕێوەبەری بازاریابی",
        currentCompanyPlaceholder: "کارفرمای ئێستا (ئارەزوومەند)",
        educationOtherPlaceholder: "ئاستی خوێندنی تۆ",
        linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
        selectYears: "ساڵ هەڵبژێرە",
        "years0-1": "0-1 ساڵ",
        "years2-3": "2-3 ساڵ",
        "years4-5": "4-5 ساڵ",
        "years6-10": "6-10 ساڵ",
        "years10+": "10+ ساڵ",
        selectEducation: "ئاستی خوێندن هەڵبژێرە",
        highSchool: "قوتابخانەی ناوەندی",
        associate: "بڕوانامەی ئاسۆسیەیت",
        bachelor: "بڕوانامەی بەکالۆریۆس",
        master: "بڕوانامەی ماستەر",
        phd: "دکتۆرا",
        other: "هیتر",
        skills: "لێهاتوویی و تایبەتمەندی",
        keySkills: "لێهاتوویییە سەرەکییەکان *",
        languagesSpoken: "زمانەکانی قسەکردن",
        certifications: "بڕوانامەکان",
        skillsPlaceholder: "لێهاتوویییەک بنووسە و Enter دابگرە یان زیاد بکە کلیک بکە",
        languagesPlaceholder: "زمان (بۆ نموونە: ئینگلیزی، ئیسپانی)",
        certificationsPlaceholder: "هەر بڕوانامەیەکی پیشەیی کە هەتە تۆمار بکە...",
        add: "زیادکردن",
        addSkills: "کەمتر 3 لێهاتوویی زیاد بکە",
        additionalInfo: "زانیاری زیاتر",
        availability: "بەردەستبوون *",
        expectedSalary: "پلەی مووچەی چاوەڕوان",
        coverLetter: "نامەی دەربارەی / بۆچی بەم پێگەیەوە گرنگیت؟ *",
        hearAboutUs: "چۆن بزانیت دەربارەمان؟",
        selectAvailability: "بەردەستبوون هەڵبژێرە",
        immediate: "یەکسەر",
        within2weeks: "لە ماوەی 2 هەفتەدا",
        within1month: "لە ماوەی مانگێکدا",
        within2months: "لە ماوەی 2 مانگدا",
        within3months: "3+ مانگ",
        min: "کەمترین",
        max: "زۆرترین",
        coverLetterPlaceholder: "پێمان بڵێ بۆچی بەم ڕۆڵەوە گرنگیت و چی دەکات ببیتە باشترین...",
        selectSource: "سەرچاوە هەڵبژێرە",
        jobBoard: "بەردی کار (Indeed، LinkedIn، هتد)",
        companyWebsite: "ماڵپەڕی کۆمپانیا",
        employeeReferral: "ئامۆژگاری کارمەند",
        socialMedia: "میدیای کۆمەڵایەتی",
        recruiter: "گرتووکار",
        agreeTerms: "پەسند دەکەم {terms} و {privacy} *",
        previous: "پێشوو",
        next: "دواتر",
        submit: "ناردنی داواکاری",
        successTitle: "داواکاری بە سەرکەوتوویی نێردرا!",
        successMessage: "سوپاس بۆ گرنگیەکەت. ئێمە داواکاریەکەت پێداچوونەوە دەکەین و بەزوویی پێت دەگەڕێینەوە.",
        characters: "/500 پیت",
        selectPosition: "پێگە هەڵبژێرە",
        positionOtherPlaceholder: "پێگەکەت بنووسە"
    }
};

// Job positions data with translations
const jobPositions = {
    en: [
        "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
        "Mobile App Developer", "DevOps Engineer", "Data Engineer", "QA Engineer", "Security Engineer",
        "UI/UX Designer", "Graphic Designer", "Web Designer", "Product Designer", "Interaction Designer",
        "Data Analyst", "Data Scientist", "Business Analyst", "Financial Analyst", "Market Research Analyst",
        "Product Manager", "Project Manager", "Program Manager", "Engineering Manager", "Operations Manager",
        "Marketing Manager", "Sales Manager", "Business Development Manager", "Account Manager",
        "HR Manager", "Recruitment Specialist", "Training Specialist", "Compensation Analyst",
        "Accountant", "Financial Controller", "CFO", "Bookkeeper", "Tax Specialist",
        "Customer Support Specialist", "Customer Success Manager", "Technical Support", "Help Desk",
        "Content Writer", "Technical Writer", "Copywriter", "Content Manager", "Social Media Manager",
        "SEO Specialist", "Digital Marketing Specialist", "Email Marketing Specialist", "PPC Specialist",
        "Sales Representative", "Account Executive", "Business Development Representative", "Inside Sales",
        "Consultant", "Senior Consultant", "Strategy Consultant", "IT Consultant", "Management Consultant",
        "Doctor", "Nurse", "Pharmacist", "Medical Technician", "Physical Therapist",
        "Teacher", "Professor", "Educational Coordinator", "Curriculum Developer",
        "Lawyer", "Legal Advisor", "Paralegal", "Legal Assistant",
        "Architect", "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
        "Chef", "Restaurant Manager", "Hotel Manager", "Event Planner",
        "Translator", "Interpreter", "Localization Specialist",
        "Other"
    ],
    ar: [
        "مهندس برمجيات", "مطور واجهات أمامية", "مطور خلفي", "مطور كامل المكدس",
        "مطور تطبيقات الجوال", "مهندس DevOps", "مهندس بيانات", "مهندس ضمان الجودة", "مهندس أمن",
        "مصمم واجهات/تجربة المستخدم", "مصمم جرافيك", "مصمم ويب", "مصمم منتجات", "مصمم تفاعلي",
        "محلل بيانات", "عالم بيانات", "محلل أعمال", "محلل مالي", "باحث تسويقي",
        "مدير منتج", "مدير مشروع", "مدير برنامج", "مدير هندسة", "مدير عمليات",
        "مدير تسويق", "مدير مبيعات", "مدير تطوير الأعمال", "مدير حساب",
        "مدير موارد بشرية", "أخصائي توظيف", "أخصائي تدريب", "محلل تعويضات",
        "محاسب", "مراقب مالي", "مدير مالي", "كاتب حسابات", "أخصائي ضرائب",
        "أخصائي دعم العملاء", "مدير نجاح العملاء", "دعم فني", "مكتب المساعدة",
        "كاتب محتوى", "كاتب تقني", "كاتب إعلانات", "مدير محتوى", "مدير وسائل التواصل",
        "أخصائي SEO", "أخصائي تسويق رقمي", "أخصائي تسويق بريد إلكتروني", "أخصائي إعلانات مدفوعة",
        "مندوب مبيعات", "منفذ حسابات", "مندوب تطوير الأعمال", "مبيعات داخلية",
        "استشاري", "استشاري أول", "استشاري استراتيجي", "استشاري تقني", "استشاري إداري",
        "طبيب", "ممرض", "صيدلي", "فني طبي", "معالج فيزيائي",
        "معلم", "أستاذ", "منسق تعليمي", "مطور منهج",
        "محامي", "مستشار قانوني", "مساعد قانوني", "سكرتير قانوني",
        "مهندس معماري", "مهندس مدني", "مهندس ميكانيكي", "مهندس كهربائي", "مهندس إنشائي",
        "طاهي", "مدير مطعم", "مدير فندق", "منظم فعاليات",
        "مترجم", "مترجم فوري", "أخصائي توطين",
        "أخرى"
    ],
    ku: [
        "ئەندازیاری سۆفتوێر", "گەشەپێدەری وێب", "گەشەپێدەری پشت", "گەشەپێدەری تەواو",
        "گەشەپێدەری ئەپلیکەیشنی مۆبایل", "ئەندازیاری DevOps", "ئەندازیاری داتا", "ئەندازیاری چاکی", "ئەندازیاری ئاسایش",
        "دیزاینەری UI/UX", "دیزاینەری گرافیک", "دیزاینەری وێب", "دیزاینەری بەرهەم", "دیزاینەری کارلێک",
        "شیکاری داتا", "زانیاری داتا", "شیکاری بازرگانی", "شیکاری دارایی", "شیکاری بازاریابی",
        "بەڕێوەبەری بەرهەم", "بەڕێوەبەری پرۆژە", "بەڕێوەبەری پرۆگرام", "بەڕێوەبەری ئەندازیاری", "بەڕێوەبەری کارەکان",
        "بەڕێوەبەری بازاریابی", "بەڕێوەبەری فرۆشتن", "بەڕێوەبەری گەشەپێدانی بازرگانی", "بەڕێوەبەری حساب",
        "بەڕێوەبەری سەرچاوەکانی مرۆڤ", "تایبەتمەندی دەستپێکردن", "تایبەتمەندی پێشکەش", "شیکاری پاداشت",
        "ژمێریار", "کۆنتڕۆڵکەری دارایی", "بەڕێوەبەری دارایی", "نووسەری ژمارە", "تایبەتمەندی باج",
        "تایبەتمەندی پشتگیری کڕیار", "بەڕێوەبەری سەرکەوتنی کڕیار", "پشتگیری تەکنیکی", "دەستگەی یارمەتی",
        "نووسەری ناوەڕۆک", "نووسەری تەکنیکی", "نووسەری کۆپی", "بەڕێوەبەری ناوەڕۆک", "بەڕێوەبەری میدیای کۆمەڵایەتی",
        "تایبەتمەندی SEO", "تایبەتمەندی بازاریابی دیجیتاڵ", "تایبەتمەندی بازاریابی ئیمەیڵ", "تایبەتمەندی پێداکردن",
        "نوێنەری فرۆشتن", "جێبەجێکاری حساب", "نوێنەری گەشەپێدانی بازرگانی", "فرۆشتن لە ناوەوە",
        "ڕاوێژکار", "ڕاوێژکاری بەرزتر", "ڕاوێژکاری ستراتیژی", "ڕاوێژکاری IT", "ڕاوێژکاری بەڕێوەبردن",
        "دکتۆر", "پشتیوان", "دەرمانساز", "تەکنیکاری پزیشکی", "چارەسەرگری فیزیکی",
        "مامۆستا", "پرۆفیسۆر", "هاوبەشی پەروەردەیی", "گەشەپێدەری قوتابخانە",
        "یاسا", "ڕاوێژکاری یاسایی", "پارالێگاڵ", "یاریدەدەری یاسایی",
        "تەلارساز", "ئەندازیاری شارستانی", "ئەندازیاری میکانیکی", "ئەندازیاری کارەبا", "ئەندازیاری بیناسازی",
        "چێشت", "بەڕێوەبەری چێشتخانە", "بەڕێوەبەری هۆتێل", "پلاندەری بۆنە",
        "وەرگێڕ", "وەرگێڕی کاتی", "تایبەتمەندی ناوچەیی",
        "هیتر"
    ]
};

// Current language - default to English if not set
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Form state management
const formState = {
    currentSection: 0,
    sections: [],
    formData: {},
    skills: [],
    languages: []
};

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeForm();
    attachEventListeners();
    loadSavedData();
});

// Initialize form sections
function initializeForm() {
    const sections = document.querySelectorAll('.form-section');
    formState.sections = Array.from(sections);
    
    // Show first section
    if (formState.sections.length > 0) {
        formState.sections[0].classList.add('active');
    }
    
    updateProgress();
    updateNavigation();
}

// Initialize language
function initializeLanguage() {
    const dropdownBtn = document.getElementById('languageDropdownBtn');
    const dropdownMenu = document.getElementById('languageDropdownMenu');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Ensure current language is valid (en, ar, or ku)
    if (currentLanguage !== 'en' && currentLanguage !== 'ar' && currentLanguage !== 'ku') {
        currentLanguage = 'en';
    }
    
    // Update button text and active state
    updateLanguageButton();
    updateActiveLanguageOption();
    updateCurrency();
    updatePositions();
    
    // Toggle dropdown on button click
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });
    }
    
    // Handle language option clicks
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            closeDropdown();
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            closeDropdown();
        }
    });
    
    // Close dropdown on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dropdownMenu.classList.contains('active')) {
            closeDropdown();
        }
    });
    
    updateLanguage();
}

// Toggle dropdown menu
function toggleDropdown() {
    const dropdownBtn = document.getElementById('languageDropdownBtn');
    const dropdownMenu = document.getElementById('languageDropdownMenu');
    
    if (dropdownMenu.classList.contains('active')) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

// Open dropdown menu
function openDropdown() {
    const dropdownBtn = document.getElementById('languageDropdownBtn');
    const dropdownMenu = document.getElementById('languageDropdownMenu');
    
    if (!dropdownMenu || !dropdownBtn) return;
    
    // Immediately open the dropdown for instant response
    dropdownMenu.classList.add('active');
    dropdownBtn.setAttribute('aria-expanded', 'true');
}

// Close dropdown menu
function closeDropdown() {
    const dropdownBtn = document.getElementById('languageDropdownBtn');
    const dropdownMenu = document.getElementById('languageDropdownMenu');
    
    if (!dropdownMenu || !dropdownBtn) return;
    
    dropdownMenu.classList.remove('active');
    dropdownBtn.setAttribute('aria-expanded', 'false');
}

// Update language button text
function updateLanguageButton() {
    const btnText = document.getElementById('languageBtnText');
    if (!btnText) return;
    
    const languageNames = {
        'en': 'English',
        'ar': 'العربية (AR)',
        'ku': 'کوردی (KU)'
    };
    
    btnText.textContent = languageNames[currentLanguage] || 'English';
}

// Update active language option in dropdown
function updateActiveLanguageOption() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageButton();
    updateActiveLanguageOption();
    updateCurrency();
    updatePositions();
    updateLanguage();
}

// Update currency based on selected language
function updateCurrency() {
    const currencySelect = document.getElementById('salaryCurrency');
    if (!currencySelect) return;
    
    // Currency options for each language
    const currencyOptions = {
        'en': {
            'USD': 'USD ($)',
            'IQD': 'IQD (ع.د)'
        },
        'ar': {
            'USD': 'دولار أمريكي ($)',
            'IQD': 'دينار عراقي (ع.د)'
        },
        'ku': {
            'USD': 'دۆلاری ئەمریکی ($)',
            'IQD': 'دیناری عێراقی (د.ع)'
        }
    };
    
    // Default currency for each language
    const defaultCurrency = {
        'en': 'USD',
        'ar': 'IQD',
        'ku': 'IQD'
    };
    
    // Update currency options text
    Array.from(currencySelect.options).forEach(option => {
        const currencyValue = option.value;
        if (currencyOptions[currentLanguage] && currencyOptions[currentLanguage][currencyValue]) {
            option.textContent = currencyOptions[currentLanguage][currencyValue];
        }
    });
    
    // Set default currency based on language
    const newCurrency = defaultCurrency[currentLanguage];
    if (newCurrency && currencySelect.querySelector(`option[value="${newCurrency}"]`)) {
        currencySelect.value = newCurrency;
    }
}

// Update positions dropdown based on selected language
function updatePositions() {
    const positionSelect = document.getElementById('position');
    if (!positionSelect || !jobPositions[currentLanguage]) return;
    
    // Get currently selected value to preserve selection if possible
    const currentValue = positionSelect.value;
    const currentIndex = positionSelect.selectedIndex;
    
    // Clear existing options except the first "Select" option
    const selectOption = positionSelect.querySelector('option[value=""]');
    positionSelect.innerHTML = '';
    if (selectOption) {
        positionSelect.appendChild(selectOption);
    } else {
        const newSelectOption = document.createElement('option');
        newSelectOption.value = '';
        newSelectOption.setAttribute('data-translate', 'selectPosition');
        newSelectOption.textContent = translations[currentLanguage]['selectPosition'] || 'Select a position';
        positionSelect.appendChild(newSelectOption);
    }
    
    // Add all position options in current language
    jobPositions[currentLanguage].forEach((position, index) => {
        const option = document.createElement('option');
        // Use index-based value to maintain consistency across languages
        // Store English value as data attribute for reference
        option.value = jobPositions.en[index] || position;
        option.textContent = position;
        option.setAttribute('data-position-index', index.toString());
        positionSelect.appendChild(option);
    });
    
    // Try to restore previous selection by matching the English value
    if (currentValue && currentValue !== '') {
        const matchingOption = Array.from(positionSelect.options).find(opt => opt.value === currentValue);
        if (matchingOption) {
            positionSelect.value = currentValue;
        } else {
            positionSelect.value = '';
        }
    }
}

// Update all text elements with translations
function updateLanguage() {
    const lang = translations[currentLanguage];
    
    // Update HTML lang attribute and direction
    document.getElementById('htmlLang').setAttribute('lang', currentLanguage);
    if (currentLanguage === 'ar' || currentLanguage === 'ku') {
        document.getElementById('htmlLang').setAttribute('dir', 'rtl');
    } else {
        document.getElementById('htmlLang').setAttribute('dir', 'ltr');
    }
    
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            let text = lang[key];
            
            // Handle labels with required spans
            if (element.tagName === 'LABEL') {
                const requiredSpan = element.querySelector('.required');
                if (requiredSpan && text.includes('*')) {
                    // Preserve the required span
                    const before = text.substring(0, text.indexOf('*'));
                    const after = text.substring(text.indexOf('*') + 1);
                    element.innerHTML = before + requiredSpan.outerHTML + after;
                } else {
                    element.textContent = text;
                }
            } else if (element.tagName === 'SPAN' && element.closest('.checkbox-label')) {
                // Handle checkbox label span separately
                // This is handled below
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (lang[key]) {
            element.setAttribute('placeholder', lang[key]);
        }
    });
    
    // Update select options
    document.querySelectorAll('select').forEach(select => {
        Array.from(select.options).forEach(option => {
            if (option.hasAttribute('data-translate')) {
                const key = option.getAttribute('data-translate');
                if (lang[key]) {
                    option.textContent = lang[key];
                }
            }
        });
    });
    
    // Update checkbox label (special case with links)
    const termsSpan = document.querySelector('.checkbox-label span[data-translate]');
    if (termsSpan && lang['agreeTerms']) {
        const links = termsSpan.querySelectorAll('a');
        let text = lang['agreeTerms'];
        const requiredSpan = termsSpan.querySelector('.required');
        
        // Replace placeholders with links if available
        if (links.length >= 2) {
            if (text.includes('Terms and Conditions') && text.includes('Privacy Policy')) {
                // English version
                text = text.replace('Terms and Conditions', links[0].outerHTML);
                text = text.replace('Privacy Policy', links[1].outerHTML);
            } else if (text.includes('{terms}') && text.includes('{privacy}')) {
                // Arabic/Kurdish versions with placeholders
                text = text.replace('{terms}', links[0].outerHTML);
                text = text.replace('{privacy}', links[1].outerHTML);
            }
        }
        
        // Handle required span
        if (requiredSpan) {
            text = text.replace('*', requiredSpan.outerHTML);
        } else if (text.includes('*')) {
            text = text.replace('*', '<span class="required">*</span>');
        }
        
        termsSpan.innerHTML = text;
    }
}

// Attach event listeners
function attachEventListeners() {
    const form = document.getElementById('applicationForm');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Navigation buttons
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrevious);
    
    // Form submission
    form.addEventListener('submit', handleSubmit);
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
        
        // Auto-save on input
        input.addEventListener('input', debounce(autoSave, 1000));
    });
    
    // Skills management
    document.getElementById('addSkillBtn').addEventListener('click', addSkill);
    document.getElementById('skillsInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    });
    
    // Languages management
    document.getElementById('addLanguageBtn').addEventListener('click', addLanguage);
    document.getElementById('languagesInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addLanguage();
        }
    });
    
    // Cover letter character count
    document.getElementById('coverLetter').addEventListener('input', function() {
        updateCharacterCount('coverLetter', 'coverLetterCount', 500);
    });
    
    // Education level conditional field
    document.getElementById('education').addEventListener('change', function() {
        const otherGroup = document.getElementById('educationOtherGroup');
        if (this.value === 'other') {
            otherGroup.style.display = 'block';
            document.getElementById('educationOther').setAttribute('required', 'required');
        } else {
            otherGroup.style.display = 'none';
            document.getElementById('educationOther').removeAttribute('required');
        }
    });
    
    // Position conditional field for "Other"
    document.getElementById('position').addEventListener('change', function() {
        const otherGroup = document.getElementById('positionOtherGroup');
        // Check if "Other" option is selected (value is always "Other" regardless of language)
        if (this.value === 'Other') {
            otherGroup.style.display = 'block';
            document.getElementById('positionOther').setAttribute('required', 'required');
        } else {
            otherGroup.style.display = 'none';
            document.getElementById('positionOther').removeAttribute('required');
            document.getElementById('positionOther').value = '';
        }
    });
    
    // Phone number formatting
    document.getElementById('phone').addEventListener('input', formatPhoneNumber);
    
    // Salary validation
    document.getElementById('salaryMin').addEventListener('input', validateSalaryRange);
    document.getElementById('salaryMax').addEventListener('input', validateSalaryRange);
}

// Handle next section
function handleNext() {
    if (validateCurrentSection()) {
        if (formState.currentSection < formState.sections.length - 1) {
            formState.currentSection++;
            showSection(formState.currentSection);
            updateProgress();
            updateNavigation();
            scrollToTop();
        }
    } else {
        showSectionErrors();
    }
}

// Handle previous section
function handlePrevious() {
    if (formState.currentSection > 0) {
        formState.currentSection--;
        showSection(formState.currentSection);
        updateProgress();
        updateNavigation();
        scrollToTop();
    }
}

// Show specific section
function showSection(index) {
    formState.sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Update progress bar
function updateProgress() {
    const totalSections = formState.sections.length;
    const currentSection = formState.currentSection + 1;
    const progress = (currentSection / totalSections) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressPercent').textContent = Math.round(progress);
}

// Update navigation buttons
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Show/hide previous button
    if (formState.currentSection === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    // Show/hide next/submit buttons
    if (formState.currentSection === formState.sections.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Validate current section
function validateCurrentSection() {
    const currentSection = formState.sections[formState.currentSection];
    const requiredFields = currentSection.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    // Special validation for skills
    if (formState.currentSection === 2) { // Skills section
        if (formState.skills.length < 3) {
            showFieldError(document.getElementById('skillsInput'), getErrorMessage('skills'));
            isValid = false;
        }
    }
    
    // Special validation for position "Other" field
    if (formState.currentSection === 1) { // Professional section
        const positionSelect = document.getElementById('position');
        const positionOtherInput = document.getElementById('positionOther');
        if (positionSelect && positionSelect.value === 'Other') {
            if (!positionOtherInput || !positionOtherInput.value.trim()) {
                showFieldError(positionOtherInput, getErrorMessage('required'));
                isValid = false;
            }
        }
    }
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous errors
    clearError(e);
    
    // Check if required
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, getErrorMessage('required'));
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, getErrorMessage('email'));
            return false;
        }
    }
    
    // URL validation
    if (field.type === 'url' && value) {
        try {
            new URL(value);
        } catch {
            showFieldError(field, getErrorMessage('url'));
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        // Allow international format with + sign, digits, spaces, hyphens, parentheses
        const phoneRegex = /^[\+\d\s\(\)\-\.]+$/;
        
        if (!phoneRegex.test(value)) {
            showFieldError(field, getErrorMessage('phone'));
            return false;
        }
        
        // Check if it's an international number (starts with +)
        const isInternational = value.trim().startsWith('+');
        const digitsOnly = value.replace(/\D/g, '');
        
        if (isInternational) {
            // International numbers: minimum 8 digits (country code + number), maximum 15 digits
            if (digitsOnly.length < 8 || digitsOnly.length > 15) {
                showFieldError(field, getErrorMessage('phone'));
                return false;
            }
        } else {
            // Non-international numbers: minimum 10 digits (US format)
            if (digitsOnly.length < 10) {
                showFieldError(field, getErrorMessage('phone'));
                return false;
            }
        }
    }
    
    return true;
}

// Get translated error message
function getErrorMessage(key) {
    const errorMessages = {
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            url: 'Please enter a valid URL',
            phone: 'Please enter a valid phone number',
            skills: 'Please add at least 3 skills',
            salary: 'Maximum salary must be greater than minimum'
        },
        ar: {
            required: 'هذا الحقل مطلوب',
            email: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
            url: 'يرجى إدخال رابط صحيح',
            phone: 'يرجى إدخال رقم هاتف صحيح',
            skills: 'يرجى إضافة 3 مهارات على الأقل',
            salary: 'يجب أن يكون الحد الأقصى للراتب أكبر من الحد الأدنى'
        },
        ku: {
            required: 'ئەم بۆکسە پێویستە',
            email: 'تکایە ناونیشانی ئیمەیڵێکی دروست بنووسە',
            url: 'تکایە لینکێکی دروست بنووسە',
            phone: 'تکایە ژمارەیەکی تەلەفۆنی دروست بنووسە',
            skills: 'تکایە کەمتر 3 لێهاتوویی زیاد بکە',
            salary: 'پلەی مووچەی زۆرترین دەبێت گەورەتر بێت لە کەمترین'
        }
    };
    return errorMessages[currentLanguage]?.[key] || errorMessages.en[key] || key;
}

// Show field error
function showFieldError(field, messageKey) {
    const errorSpan = field.parentElement.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.textContent = typeof messageKey === 'string' && messageKey.startsWith('Please') 
            ? getErrorMessage(messageKey.includes('email') ? 'email' : 
                            messageKey.includes('URL') ? 'url' : 
                            messageKey.includes('phone') ? 'phone' : 
                            messageKey.includes('salary') ? 'salary' : 
                            messageKey.includes('skills') ? 'skills' : 'required')
            : messageKey;
    }
    field.style.borderColor = 'var(--error-color)';
}

// Clear field error
function clearError(e) {
    const field = e.target;
    const errorSpan = field.parentElement.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.textContent = '';
    }
    if (field.value.trim()) {
        field.style.borderColor = '';
    }
}

// Show all errors in current section
function showSectionErrors() {
    const currentSection = formState.sections[formState.currentSection];
    const requiredFields = currentSection.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, getErrorMessage('required'));
        } else {
            validateField({ target: field });
        }
    });
}

// Add skill
function addSkill() {
    const input = document.getElementById('skillsInput');
    const skill = input.value.trim();
    
    if (skill && !formState.skills.includes(skill.toLowerCase())) {
        formState.skills.push(skill.toLowerCase());
        renderSkills();
        input.value = '';
        updateSkillsHiddenField();
        clearError({ target: input });
    }
}

// Remove skill
function removeSkill(skill) {
    formState.skills = formState.skills.filter(s => s !== skill);
    renderSkills();
    updateSkillsHiddenField();
}

// Render skills tags
function renderSkills() {
    const container = document.getElementById('skillsTags');
    container.innerHTML = '';
    
    formState.skills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.innerHTML = `
            <span>${skill}</span>
            <button type="button" class="remove-btn" aria-label="Remove ${skill}">×</button>
        `;
        tag.querySelector('.remove-btn').addEventListener('click', () => removeSkill(skill));
        container.appendChild(tag);
    });
}

// Update skills hidden field
function updateSkillsHiddenField() {
    document.getElementById('skills').value = formState.skills.join(', ');
}

// Add language
function addLanguage() {
    const input = document.getElementById('languagesInput');
    const language = input.value.trim();
    
    if (language && !formState.languages.includes(language.toLowerCase())) {
        formState.languages.push(language.toLowerCase());
        renderLanguages();
        input.value = '';
    }
}

// Remove language
function removeLanguage(language) {
    formState.languages = formState.languages.filter(l => l !== language);
    renderLanguages();
}

// Render languages tags
function renderLanguages() {
    const container = document.getElementById('languagesTags');
    container.innerHTML = '';
    
    formState.languages.forEach(language => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.innerHTML = `
            <span>${language}</span>
            <button type="button" class="remove-btn" aria-label="Remove ${language}">×</button>
        `;
        tag.querySelector('.remove-btn').addEventListener('click', () => removeLanguage(language));
        container.appendChild(tag);
    });
    
    // Update hidden field
    document.getElementById('languages').value = formState.languages.join(', ');
}

// Update character count
function updateCharacterCount(textareaId, countId, maxLength) {
    const textarea = document.getElementById(textareaId);
    const countElement = document.getElementById(countId);
    const currentLength = textarea.value.length;
    
    countElement.textContent = currentLength;
    
    if (currentLength > maxLength) {
        countElement.parentElement.style.color = 'var(--error-color)';
        textarea.style.borderColor = 'var(--error-color)';
    } else {
        countElement.parentElement.style.color = 'var(--text-secondary)';
        textarea.style.borderColor = '';
    }
}

// Format phone number
function formatPhoneNumber(e) {
    let value = e.target.value;
    
    // Check if this is an international number starting with +
    const isInternational = value.trim().startsWith('+');
    
    if (isInternational) {
        // For international numbers, allow + and digits only, no formatting
        // Allow spaces for readability but user can type freely
        value = value.replace(/[^\d\+\s\-\(\)]/g, '');
        // Limit to reasonable length (15 digits after + for international numbers)
        const digitsAfterPlus = value.replace(/[^\d]/g, '').length;
        if (digitsAfterPlus > 15) {
            // Keep only first 15 digits after +
            const plusSign = value[0] === '+' ? '+' : '';
            const digits = value.replace(/[^\d]/g, '').slice(0, 15);
            value = plusSign + digits;
        }
    } else {
        // For non-international numbers, apply US-style formatting only if it looks like a US number
        const digitsOnly = value.replace(/\D/g, '');
        
        // Only format if it's a 10-digit US number (not starting with +)
        if (digitsOnly.length <= 10) {
            if (digitsOnly.length > 0) {
                if (digitsOnly.length <= 3) {
                    value = `(${digitsOnly}`;
                } else if (digitsOnly.length <= 6) {
                    value = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
                } else {
                    value = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
                }
            } else {
                value = '';
            }
        } else {
            // For longer numbers without +, allow free entry (could be international without +)
            value = value.replace(/[^\d\+\s\-\(\)]/g, '');
        }
    }
    
    e.target.value = value;
}

// Validate salary range
function validateSalaryRange() {
    const min = parseFloat(document.getElementById('salaryMin').value);
    const max = parseFloat(document.getElementById('salaryMax').value);
    
    if (min && max && min > max) {
        showFieldError(document.getElementById('salaryMax'), getErrorMessage('salary'));
        return false;
    }
    
    clearError({ target: document.getElementById('salaryMax') });
    return true;
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    // Validate all sections
    let isValid = true;
    for (let i = 0; i < formState.sections.length; i++) {
        formState.currentSection = i;
        showSection(i);
        if (!validateCurrentSection()) {
            isValid = false;
            break;
        }
    }
    
    if (!isValid) {
        showSectionErrors();
        return;
    }
    
    // Collect all form data
    const formData = new FormData(document.getElementById('applicationForm'));
    const data = {
        personal: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            location: formData.get('location')
        },
        professional: {
            position: formData.get('position') === 'Other' ? formData.get('positionOther') : formData.get('position'),
            positionOther: formData.get('position') === 'Other' ? formData.get('positionOther') : null,
            experience: formData.get('experience'),
            currentCompany: formData.get('currentCompany'),
            education: formData.get('education'),
            educationOther: formData.get('educationOther'),
            linkedin: formData.get('linkedin')
        },
        skills: {
            skills: formState.skills,
            languages: formState.languages,
            certifications: formData.get('certifications')
        },
        additional: {
            availability: formData.get('availability'),
            salary: {
                min: formData.get('salaryMin'),
                max: formData.get('salaryMax'),
                currency: formData.get('salaryCurrency')
            },
            coverLetter: formData.get('coverLetter'),
            referral: formData.get('referral')
        }
    };
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        console.log('Form Data:', data);
        
        // Clear saved data
        localStorage.removeItem('jobApplicationData');
        
        // Show success message
        document.getElementById('applicationForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Scroll to top
        scrollToTop();
    }, 1500);
}

// Auto-save form data
function autoSave() {
    const formData = new FormData(document.getElementById('applicationForm'));
    const data = {
        currentSection: formState.currentSection,
        formValues: {},
        skills: formState.skills,
        languages: formState.languages
    };
    
    // Save all input values
    document.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.type !== 'submit' && field.type !== 'button' && field.id !== 'skillsInput' && field.id !== 'languagesInput') {
            data.formValues[field.name || field.id] = field.value;
        }
    });
    
    localStorage.setItem('jobApplicationData', JSON.stringify(data));
}

// Load saved data
function loadSavedData() {
    const saved = localStorage.getItem('jobApplicationData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            
            // Restore form values
            if (data.formValues) {
                Object.keys(data.formValues).forEach(key => {
                    const field = document.querySelector(`[name="${key}"], #${key}`);
                    if (field) {
                        field.value = data.formValues[key];
                    }
                });
            }
            
            // Restore skills and languages
            if (data.skills) {
                formState.skills = data.skills;
                renderSkills();
                updateSkillsHiddenField();
            }
            
            if (data.languages) {
                formState.languages = data.languages;
                renderLanguages();
            }
            
            // Restore section if needed
            if (data.currentSection !== undefined && data.currentSection < formState.sections.length) {
                formState.currentSection = data.currentSection;
                showSection(data.currentSection);
                updateProgress();
                updateNavigation();
            }
            
            // Trigger education conditional field check
            const educationSelect = document.getElementById('education');
            if (educationSelect && educationSelect.value === 'other') {
                document.getElementById('educationOtherGroup').style.display = 'block';
            }
            
            // Trigger position conditional field check
            const positionSelect = document.getElementById('position');
            if (positionSelect && positionSelect.value === 'Other') {
                document.getElementById('positionOtherGroup').style.display = 'block';
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
