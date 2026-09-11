// ============================================================
// CONFIGURATION — c'est le SEUL fichier à modifier pour les
// infos de contact. Tout le reste du site se met à jour seul.
// ============================================================

// À PERSONNALISER : numéro WhatsApp au format international SANS + ni 0
// Exemple pour un numéro algérien 0661 23 45 67  ->  213661234567
const WHATSAPP_NUMBER = "213XXXXXXXXX";

// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Tous les liens marqués data-wa pointent vers WhatsApp avec message prérempli
  const text = encodeURIComponent(
    document.querySelector("[data-wa]")?.dataset.waText ||
      "Bonjour, je souhaite prendre rendez-vous (coiffure à domicile)."
  );
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Menu mobile
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }
});
