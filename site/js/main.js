// ============================================================
// CONFIGURATION — Coiffure à Domicile Oran
// ============================================================

// Numéro WhatsApp au format international SANS + ni 0
// Exemple pour un numéro algérien 0661 23 45 67 -> 213661234567
const WHATSAPP_NUMBER = "213XXXXXXXXX";

// ============================================================
// DICTIONNAIRE BILINGUE : Français / Arabe Algérie (Darija raffinée)
// ============================================================

const I18N = {
  fr: {
    page_title: "Coiffeuse à Domicile à Oran — Coupe, Brushing, Mariées | Réservation WhatsApp",
    meta_desc: "Coiffeuse professionnelle à domicile à Oran : coupe, brushing, soins, chignons et coiffures de mariée. Je me déplace chez vous. Réservation simple par WhatsApp.",
    brand_name: "Coiffure <span>Oran</span>",
    nav_prestations: "Prestations",
    nav_tarifs: "Tarifs",
    nav_galerie: "Galerie",
    nav_avis: "Avis",
    nav_contact: "Contact",
    btn_header_wa: "WhatsApp",
    hero_kicker: "À domicile, partout à Oran",
    hero_title: "Coiffeuse à domicile<br>à <em>Oran</em>",
    hero_sub: "Coupe, brushing, soins et coiffures de mariée — je me déplace chez vous, dans le confort et l'intimité de votre maison.",
    hero_cta_wa: "Réserver sur WhatsApp",
    hero_cta_tarifs: "Voir les tarifs",
    hero_badge_title: "100% à domicile",
    hero_badge_sub: "Oran & wilaya",
    zone_1: "Oran centre",
    zone_2: "Bir El Djir",
    zone_3: "Es Sénia",
    zone_4: "Canastel",
    zone_5: "et alentours",
    why_1_title: "Confort total",
    why_1_desc: "Pas de trajet, pas d'attente en salon. Vous restez chez vous, je viens avec tout le matériel professionnel.",
    why_2_title: "Intimité & Sérénité",
    why_2_desc: "Un moment rien que pour vous ou en famille — idéal pour les soins profonds et les préparatifs de mariage.",
    why_3_title: "Gain de temps",
    why_3_desc: "Créneaux flexibles, y compris en soirée et le week-end. Votre planning reste le vôtre.",
    prestations_title: "Prestations <em>&amp;</em> tarifs",
    prestations_sub: "Déplacement inclus à Oran. Tarifs indicatifs — devis gratuit sur WhatsApp pour les mariées et événements.",
    card_1_title: "Coupe femme",
    card_1_desc: "Coupe moderne + brushing adaptés à la morphologie de votre visage, à domicile.",
    card_1_price: "dès <strong>1 500 DZD</strong>",
    card_2_title: "Brushing &amp; Wavy",
    card_2_desc: "Brushing lisse, boucles glamour ou ondulations naturelles pour toutes vos occasions.",
    card_2_price: "dès <strong>2 000 DZD</strong>",
    card_3_title: "Enduit &amp; Soins",
    card_3_desc: "Soin nourrissant, enduit protéiné, kératine, brillance et force retrouvées.",
    card_3_price: "dès <strong>1 000 DZD</strong>",
    card_4_title: "Chignon &amp; Soirée",
    card_4_desc: "Chignons sophistiqués de soirée, fiançailles ou invitée d'honneur — attaches incluses.",
    card_4_price: "dès <strong>3 000 DZD</strong>",
    card_5_title: "Coloration / Balayage",
    card_5_desc: "Couleur, racines, balayage lumineux — selon longueur, devis personnalisé sur WhatsApp.",
    card_5_price: "sur devis",
    card_6_title: "Forfait Mariée Prestige",
    card_6_desc: "Essai personnalisé inclus, coiffure du jour J, pose voile/accessoires, déplacement. Le plus beau jour mérite le meilleur accompagnement.",
    card_6_price: "sur rendez-vous",
    galerie_title: "Réalisations <em>réelles</em>",
    galerie_sub: "Photographies réelles de mes prestations — authenticité et finitions soignées.",
    galerie_cap_1: "Brushing Wavy naturel",
    galerie_cap_2: "Chignon mariée raffiné",
    galerie_cap_3: "Soin profond &amp; brillance",
    galerie_cap_4: "Coupe moderne &amp; texture",
    galerie_cap_5: "Ondulé glamour soirée",
    galerie_cap_6: "Balayage miel lumineux",
    avis_title: "Témoignages <em>clientes</em>",
    avis_1_quote: "« Très professionnelle et d'une grande douceur. Elle a sublimé ma coiffure et celle de mes proches le jour de mon mariage, directement à la maison. Un vrai soulagement ! »",
    avis_1_author: "— Sarah, mariée, Oran",
    avis_2_quote: "« Le brushing tient plusieurs jours sans faiblir. Je gagne deux heures de trajet et d'attente chaque semaine. »",
    avis_2_author: "— Nesrine, cliente régulière, Bir El Djir",
    avis_3_quote: "« L'enduit a redonné vie à mes cheveux. Réservation simple, ponctualité exemplaire et réponse rapide sur WhatsApp. »",
    avis_3_author: "— Amina, Es Sénia",
    cta_title: "Réservez votre créneau à domicile",
    cta_desc: "Réponse rapide du samedi au jeudi. Prévoyez 48 h de préavis si possible — pour les mariées, réservez votre date dès maintenant.",
    cta_btn: "Écrire sur WhatsApp",
    footer_text: "Coiffure à domicile — Oran, Algérie",
    footer_sub: "© 2026 — Site vitrine conçu avec soin.",
    wa_message: "Bonjour, je souhaite prendre rendez-vous (coiffure à domicile à Oran)."
  },
  ar: {
    page_title: "كوافيز في الدار وهران — حلاقة، بروشينغ، تسريحات عرائس | حجز واتساب",
    meta_desc: "كوافيز محترفة تجيك حتى للدار في وهران: قص، بروشينغ، كيراتين وأوندوي، تسريحات عرائس ومناسبات. راحة وخصوصية تامة في منزلك. حجز سهل عبر واتساب.",
    brand_name: "كوافيز <span>وهران</span>",
    nav_prestations: "الخدمات",
    nav_tarifs: "الأسعار",
    nav_galerie: "أعمالنا",
    nav_avis: "آراء الزبونات",
    nav_contact: "اتصلي بنا",
    btn_header_wa: "واتساب",
    hero_kicker: "خدمة منزلية راقية — كامل وهران",
    hero_title: "كوافيز محترفة في منزلك<br>بـ <em>وهران</em>",
    hero_sub: "قص الشعر، بروشينغ، كيراتين وتسريحات العرائس — نتنقل عندك حتى للدار، بكل راحة وخصوصية تامة.",
    hero_cta_wa: "احجزي موعدك عبر واتساب",
    hero_cta_tarifs: "اكتشفي الأسعار",
    hero_badge_title: "خدمة منزلية 100%",
    hero_badge_sub: "وهران وضواحيها",
    zone_1: "وسط وهران",
    zone_2: "بئر الجير",
    zone_3: "السانية",
    zone_4: "كانستيل",
    zone_5: "وضواحيها",
    why_1_title: "راحة تامة في دارك",
    why_1_desc: "بلا تعب ولا تنقل ولا انتظار في الصالونات. تجيك الحفافة للدار بجميع المعدات الاحترافية.",
    why_2_title: "خصوصية وراحة بال",
    why_2_desc: "أجواء خاصة ومريحة ليك وحدك أو مع عائلتك — مثالية لعلاجات الشعر وتحضيرات العرس بدون أي إحراج.",
    why_3_title: "ربح الوقت ومواعيد مرنة",
    why_3_desc: "مواعيد تناسب وقتك، بما فيها المساء وعطلة نهاية الأسبوع. وقتك يبقى ليك.",
    prestations_title: "الخدمات <em>و</em> الأسعار",
    prestations_sub: "التنقل داخل وهران متوفر. أسعار واضحة — استشارة وحجز مجاني عبر واتساب للعرائس والمناسبات.",
    card_1_title: "قص الشعر النسائي",
    card_1_desc: "قص وتسريح متناسق مع ملامح وجهك، في راحة منزلك.",
    card_1_price: "ابتداءً من <strong>1500 دج</strong>",
    card_2_title: "بروشينغ و ويفي",
    card_2_desc: "بروشينغ أملس وناعم، تموجات طبيعية أو ويفي جذاب لجميع خرجاتك.",
    card_2_price: "ابتداءً من <strong>2000 دج</strong>",
    card_3_title: "علاج الشعر وأوندوي",
    card_3_desc: "علاج مغذي مكثف، بروتين، كيراتين، واسترجاع لمعان وقوة شعرك.",
    card_3_price: "ابتداءً من <strong>1000 دج</strong>",
    card_4_title: "شينيون ومناسبات",
    card_4_desc: "تسريحات شينيون راقية للأفراح، الخطوبات ومناسبات الأهل — مع التثبيت التام.",
    card_4_price: "ابتداءً من <strong>3000 دج</strong>",
    card_5_title: "صباغة وليماش وبالياج",
    card_5_desc: "صبغة الجذور، بالياج مشرق، خصلات عسلية أو كراميل — حسب طول وكثافة الشعر.",
    card_5_price: "حسب الطلب",
    card_6_title: "باك العروسة الفاخر",
    card_6_desc: "بروفة مسبقة، مشطة يوم الزفاف، تثبيت التاج والطرحة والتنقل لعندك. أحلى يوم يستاهل أفضل إطلالة.",
    card_6_price: "حسب الموعد المسبق",
    galerie_title: "أعمالنا <em>الحقيقية</em>",
    galerie_sub: "صور حقيقية لخدماتنا وتسريحاتنا — دقة وإتقان في كل تفصيل.",
    galerie_cap_1: "بروشينغ ويفي طبيعي",
    galerie_cap_2: "شينيون عروسة فخم",
    galerie_cap_3: "علاج ولمعان الشعر",
    galerie_cap_4: "قص وتسريح عصري",
    galerie_cap_5: "ويفي هوليوودي للمناسبات",
    galerie_cap_6: "بالياج عسلي مشرق",
    avis_title: "آراء <em>زبوناتنا</em>",
    avis_1_quote: "« يعطيها الصحة، خدمة متقونة وتعامل راقي بزااف. مشطتني أنا وأخواتي نهار عرسي في الدار وهناتنا من التعب والستريس. »",
    avis_1_author: "— سارة، عروسة، وهران",
    avis_2_quote: "« البروشينغ يشد ما شاء الله أيام كاملة ويبقى يلمع. ربحت ساعتين نتاع طريق وانتظار كل أسبوع. »",
    avis_2_author: "— نسرين، زبونة دائمة، بئر الجير",
    avis_3_quote: "« علاج الشعر والأوندوي رجعو الحيوية لشعري. استجابة سريعة في واتساب والتزام كبير بالوقت. »",
    avis_3_author: "— أمينة، السانية",
    cta_title: "احجزي موعدك في المنزل",
    cta_desc: "إجابة سريعة من السبت إلى الخميس. يفضل الحجز قبل 48 ساعة — وللعرائس سارعي بحجز موعدك وتاريخك مسبقاً.",
    cta_btn: "تواصلي مباشرة عبر واتساب",
    footer_text: "حلاقة وتصفيف الشعر في المنزل — وهران، الجزائر",
    footer_sub: "© 2026 — موقع مصمم بإتقان لخدمتكم.",
    wa_message: "السلام عليكم، حابة نحجز موعد كوافيز في الدار (وهران)."
  }
};

// ============================================================
// ÉTAT GLOBAL & FONCTIONS
// ============================================================

let currentLang = localStorage.getItem("coiffure_lang") || "fr";
let currentTheme = localStorage.getItem("coiffure_theme") ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

/**
 * Met à jour tous les liens WhatsApp avec le bon message selon la langue
 */
function updateWhatsAppLinks() {
  const t = I18N[currentLang] || I18N.fr;
  const encodedText = encodeURIComponent(t.wa_message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/**
 * Applique la langue (textes, dir, attributs meta)
 */
function setLanguage(lang) {
  if (!I18N[lang]) lang = "fr";
  currentLang = lang;
  localStorage.setItem("coiffure_lang", lang);

  const t = I18N[lang];
  const isRtl = lang === "ar";

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");

  // Mettre à jour le titre et la description SEO
  document.title = t.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.meta_desc);

  // Mettre à jour tous les éléments data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Mettre à jour le bouton de langue
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.setAttribute("aria-label", isRtl ? "Passer en Français" : "التحويل إلى العربية");
    const langLabel = langToggleBtn.querySelector(".lang-label");
    if (langLabel) {
      langLabel.textContent = isRtl ? "FR" : "عربي";
    }
  }

  // Mettre à jour les liens WhatsApp
  updateWhatsAppLinks();
}

/**
 * Applique le thème (light ou dark)
 */
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("coiffure_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    const isDark = theme === "dark";
    themeBtn.setAttribute("aria-label", isDark ? "Activer le mode clair" : "Activer le mode sombre");
    themeBtn.classList.toggle("is-dark", isDark);
  }
}

// ============================================================
// INITIALISATION AU CHARGEMENT DU DOM
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialiser le thème et la langue
  setTheme(currentTheme);
  setLanguage(currentLang);

  // 2. Bouton bascule de thème
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  // 3. Bouton bascule de langue
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "fr" ? "ar" : "fr";
      setLanguage(nextLang);
    });
  }

  // 4. Menu mobile
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // 5. Écouteur de préférence système de thème
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("coiffure_theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }
});
