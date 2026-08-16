// تحديد حالة اللغة الحالية
let currentLang = 'ar';

// جلب العناصر الأساسية من الصفحة
const langBtn = document.getElementById('lang-btn');
const srAnnouncer = document.getElementById('sr-announcer');

// كائن يحتوي على جميع النصوص باللغتين
const translations = {
    ar: {
        name: "طه سلام",
        desc: "مطور ويب في بداية مساري البرمجي. أعمل على تعلم وتطوير مهاراتي في بناء وتصميم صفحات الويب الحديثة.",
        skillsTitle: "💻 المهارات والتقنيات (قيد التعلم)",
        langBtnText: "EN",
        langBtnLabel: "تغيير اللغة إلى الإنجليزية",
        announcement: "تم تغيير لغة الموقع إلى العربية"
    },
    en: {
        name: "Taha Salam",
        desc: "A web developer at the beginning of my coding journey. I am learning and building skills in modern web development.",
        skillsTitle: "💻 Skills & Technologies (Learning)",
        langBtnText: "عربي",
        langBtnLabel: "Switch language to Arabic",
        announcement: "Language switched to English"
    }
};

// الاستماع لضغطات زر اللغة
langBtn.addEventListener('click', () => {
    // التبديل بين اللغتين
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // 1. تحديث الاتجاه واللغة لوسم HTML الرئيسي
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // 2. تحديث النصوص الظاهرة
    document.getElementById('user-name').innerText = translations[currentLang].name;
    document.getElementById('hero-desc').innerText = translations[currentLang].desc;
    document.getElementById('skills-title').innerText = translations[currentLang].skillsTitle;
    
    // 3. تحديث الزر وإتاحة الوصول (A11y)
    langBtn.innerText = translations[currentLang].langBtnText;
    langBtn.setAttribute('aria-label', translations[currentLang].langBtnLabel);

    // 4. إشعار قارئ الشاشة باللغة الجديدة
    srAnnouncer.innerText = translations[currentLang].announcement;
});