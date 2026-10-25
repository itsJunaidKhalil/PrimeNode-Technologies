import type { Locale } from "./types";
import { en, type MessageKey } from "./dictionaries/en";

export type { MessageKey };

const translations: Record<Locale, Record<MessageKey, string>> = {
  en: { ...en },
  zh: {
    ...en,
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.contact": "联系",
    "nav.getQuote": "获取报价",
    "footer.tagline":
      "您值得信赖的英国 IT 执行伙伴。专业品质、快速交付——覆盖全英国。",
    "footer.company": "公司",
    "footer.services": "服务",
    "footer.contact": "联系方式",
    "footer.copyright": "保留所有权利。",
    "footer.legal": "© {year} PRIMENODE TECHNOLOGIES LTD. 保留所有权利。",
    "footer.wfoe": "公司编号 17315220 · 英国",
    "footer.address":
      "71-75 Shelton Street, Covent Garden\nLondon, United Kingdom, WC2H 9JQ",
    "lang.label": "语言",
    "hero.badge": "英国注册 · 伦敦",
    "hero.line1Before": "您值得信赖的 ",
    "hero.line1Accent": "英国 IT",
    "hero.line2Accent": "执行",
    "hero.line2After": " 伙伴",
    "hero.subtitle":
      "我们帮助全球 MSP、系统集成商与 IT 企业在英国高效运营——以国际标准落地本地执行。",
    "hero.ctaPrimary": "启动项目",
    "hero.ctaSecondary": "了解服务",
    "hero.coreOps": "核心业务",
    "badge.eu": "英国标准",
    "badge.fast": "快速交付",
    "badge.nationwide": "全英覆盖",
  },
  sr: {
    ...en,
    "nav.home": "Početak",
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.contact": "Kontakt",
    "nav.getQuote": "Zatražite ponudu",
    "footer.tagline":
      "Vaš pouzdan partner za IT izvršenje u UK. Profesionalni kvalitet, brza isporuka — širom Ujedinjenog Kraljevstva.",
    "footer.company": "Kompanija",
    "footer.services": "Usluge",
    "footer.contact": "Kontakt",
    "footer.copyright": "Sva prava zadržana.",
    "footer.legal":
      "© {year} PRIMENODE TECHNOLOGIES LTD. Sva prava zadržana.",
    "footer.wfoe": "Broj kompanije 17315220 · Ujedinjeno Kraljevstvo",
    "footer.address":
      "71-75 Shelton Street, Covent Garden\nLondon, United Kingdom, WC2H 9JQ",
    "lang.label": "Jezik",
    "hero.badge": "Registrovano u UK · London",
    "hero.line1Before": "Vaš pouzdan ",
    "hero.line1Accent": "UK IT",
    "hero.line2Accent": "izvršni",
    "hero.line2After": " partner",
    "hero.subtitle":
      "Omogućavamo globalnim MSP, sistemskim integratorima i IT kompanijama da efikasno rade u UK — lokalno izvršenje po međunarodnim standardima.",
    "hero.ctaPrimary": "Započnite projekat",
    "hero.ctaSecondary": "Istražite usluge",
    "hero.coreOps": "Osnovne operacije",
    "badge.eu": "UK standardi",
    "badge.fast": "Brza isporuka",
    "badge.nationwide": "UK — širom zemlje",
  },
  de: {
    ...en,
    "nav.home": "Start",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.contact": "Kontakt",
    "nav.getQuote": "Angebot anfordern",
    "footer.tagline":
      "Ihr verlässlicher UK-IT-Execution-Partner. Professionelle Qualität, schnelle Umsetzung — landesweit im Vereinigten Königreich.",
    "footer.company": "Unternehmen",
    "footer.services": "Leistungen",
    "footer.contact": "Kontakt",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "footer.legal":
      "© {year} PRIMENODE TECHNOLOGIES LTD. Alle Rechte vorbehalten.",
    "footer.wfoe": "Firmennr. 17315220 · Vereinigtes Königreich",
    "footer.address":
      "71-75 Shelton Street, Covent Garden\nLondon, United Kingdom, WC2H 9JQ",
    "lang.label": "Sprache",
    "hero.badge": "UK-registriert · London",
    "hero.line1Before": "Ihr vertrauenswürdiger ",
    "hero.line1Accent": "UK-IT-",
    "hero.line2Accent": "Execution",
    "hero.line2After": " Partner",
    "hero.subtitle":
      "Wir helfen globalen MSPs, Systemintegratoren und IT-Unternehmen, im Vereinigten Königreich effizient zu arbeiten — mit lokaler Umsetzung nach internationalen Standards.",
    "hero.ctaPrimary": "Projekt starten",
    "hero.ctaSecondary": "Leistungen",
    "hero.coreOps": "Kernleistungen",
    "badge.eu": "UK-Standards",
    "badge.fast": "Schnelle Umsetzung",
    "badge.nationwide": "UK-weit",
  },
  it: {
    ...en,
    "nav.home": "Home",
    "nav.about": "Chi siamo",
    "nav.services": "Servizi",
    "nav.contact": "Contatti",
    "nav.getQuote": "Richiedi preventivo",
    "footer.tagline":
      "Il vostro partner affidabile per l’esecuzione IT nel Regno Unito. Qualità professionale, tempi rapidi — su tutto il territorio nazionale.",
    "footer.company": "Azienda",
    "footer.services": "Servizi",
    "footer.contact": "Contatti",
    "footer.copyright": "Tutti i diritti riservati.",
    "footer.legal":
      "© {year} PRIMENODE TECHNOLOGIES LTD. Tutti i diritti riservati.",
    "footer.wfoe": "N. società 17315220 · Regno Unito",
    "footer.address":
      "71-75 Shelton Street, Covent Garden\nLondon, United Kingdom, WC2H 9JQ",
    "lang.label": "Lingua",
    "hero.badge": "Registrata nel Regno Unito · Londra",
    "hero.line1Before": "Il vostro partner ",
    "hero.line1Accent": "IT nel Regno Unito",
    "hero.line2Accent": "Execution",
    "hero.line2After": " affidabile",
    "hero.subtitle":
      "Supportiamo MSP globali, system integrator e aziende IT a operare nel Regno Unito con esecuzione locale secondo standard internazionali.",
    "hero.ctaPrimary": "Avvia il progetto",
    "hero.ctaSecondary": "Scopri i servizi",
    "hero.coreOps": "Operazioni principali",
    "badge.eu": "Standard UK",
    "badge.fast": "Tempi rapidi",
    "badge.nationwide": "Copertura nazionale",
  },
  ar: {
    ...en,
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "طلب عرض سعر",
    "footer.tagline":
      "شريككم الموثوق لتنفيذ تكنولوجيا المعلومات في المملكة المتحدة. جودة احترافية وتنفيذ سريع — على مستوى البلاد.",
    "footer.company": "الشركة",
    "footer.services": "الخدمات",
    "footer.contact": "التواصل",
    "footer.copyright": "جميع الحقوق محفوظة.",
    "footer.legal":
      "© {year} PRIMENODE TECHNOLOGIES LTD. جميع الحقوق محفوظة.",
    "footer.wfoe": "رقم الشركة 17315220 · المملكة المتحدة",
    "footer.address":
      "71-75 Shelton Street, Covent Garden\nLondon, United Kingdom, WC2H 9JQ",
    "lang.label": "اللغة",
    "hero.badge": "مسجلة في المملكة المتحدة · لندن",
    "hero.line1Before": "شريككم الموثوق لتنفيذ ",
    "hero.line1Accent": "تقنية المعلومات في المملكة المتحدة",
    "hero.line2Accent": "",
    "hero.line2After": "",
    "hero.subtitle":
      "نساعد مزودي الخدمات والشركات العالمية على العمل بكفاءة في المملكة المتحدة — بتنفيذ محلي وفق المعايير الدولية.",
    "hero.ctaPrimary": "ابدأ مشروعك",
    "hero.ctaSecondary": "استكشف الخدمات",
    "hero.coreOps": "العمليات الأساسية",
    "badge.eu": "معايير بريطانية",
    "badge.fast": "تنفيذ سريع",
    "badge.nationwide": "على مستوى المملكة المتحدة",
  },
};

export function getMessage(locale: Locale, key: MessageKey): string {
  const row = translations[locale];
  return row[key] ?? translations.en[key] ?? String(key);
}
