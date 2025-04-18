const translations = {
  en: {
    title: "Valproic Acid Calculator",
    main_heading: "Calculator for correction of valproic acid levels",
    form_heading: "VPA Calculator",
    intro_text: `In blood, most medications are bound to serum proteins. The protein-bound fraction is considered pharmacologically inactive because <strong>only the unbound (free) fraction is available for pharmacological action.</strong><br>
    Protein binding depends on albumin and drug concentration. The free fraction of valproic acid varies more than other drugs. This calculator helps estimate the free concentration in hypoalbuminemia.`,
    info_text: `Valproate (VPA) is mainly used to treat epilepsy, bipolar disorder, and for migraine prevention. <strong>Overdose may cause:<br>drowsiness<br>tremor<br>stupor<br>respiratory depression<br>coma<br>acidosis<br>death.</strong><br>Therapeutic levels: 20–100 mg/L. Toxic: 150–1500 mg/L.`,
    footer_note: "This is my first programming project. The values and information are taken from",
    footer_text: "VPA Calculator"
  },
  de: {
    title: "Valproinsäure Rechner",
    main_heading: "Rechner zur Korrektur des Valproinsäure-Spiegels",
    form_heading: "VPA Rechner",
    intro_text: `Im Blut sind die meisten Medikamente an Serumproteine gebunden. Die gebundene Fraktion gilt als pharmakologisch inaktiv, da <strong>nur die ungebundene (freie) Fraktion wirksam ist.</strong><br>
    Die Proteinbindung hängt von Albumin- und Medikamentenkonzentration ab. Die freie Valproinsäure-Fraktion ist variabler als bei anderen Arzneimitteln. Dieser Rechner hilft bei der Korrektur bei Hypoalbuminämie.`,
    info_text: `Valproat (VPA) wird bei Epilepsie, bipolaren Störungen und Migräneprophylaxe verwendet. <strong>Überdosierung kann verursachen:<br>Schläfrigkeit<br>Zittern<br>Stupor<br>Atemdepression<br>Koma<br>Azidose<br>Tod.</strong><br>Therapeutisch: 20–100 mg/L. Toxisch: 150–1500 mg/L.`,
    footer_note: "Dies ist mein erstes Programmierprojekt. Die Werte und Informationen stammen aus",
    footer_text: "VPA Rechner"
  },
  ro: {
    title: "Calculator Acid Valproic",
    main_heading: "Calculator pentru corecția nivelurilor de acid valproic",
    form_heading: "Calculator VPA",
    intro_text: `În sânge, majoritatea medicamentelor sunt legate de proteine serice. Fracția legată este inactivă farmacologic, deoarece <strong>doar fracția liberă este activă.</strong><br>
    Legarea depinde de albumină și concentrația medicamentului. Acidul valproic are o variabilitate mai mare. Acest calculator ajută la estimarea fracției libere în hipoalbuminemie.`,
    info_text: `Valproatul (VPA) este folosit în epilepsie, tulburări bipolare și prevenirea migrenei. <strong>Supradoza poate cauza:<br>somnolență<br>tremur<br>stupor<br>depresie respiratorie<br>comă<br>acidoză<br>moarte.</strong><br>Terapeutic: 20–100 mg/L. Toxic: 150–1500 mg/L.`,
    footer_note: "Acesta este primul meu proiect de programare. Valorile și informațiile provin din",
    footer_text: "Calculator VPA"
  }
};

// language switcher logic
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  switcher.addEventListener("change", () => setLanguage(switcher.value));
  const defaultLang = localStorage.getItem("lang") || "en";
  switcher.value = defaultLang;
  setLanguage(defaultLang);
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
// DARK MODE TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleDarkMode");
  const isDark = localStorage.getItem("dark-mode") === "true";

  if (isDark) document.body.classList.add("dark-mode");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });
  }
});

