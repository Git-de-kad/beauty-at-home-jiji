// ============================================================
// CONFIGURATION — Coiffure à Domicile Oran
// ============================================================

// Numéro WhatsApp au format international SANS + ni 0
// Exemple pour un numéro algérien 0661 23 45 67 -> 213661234567
const WHATSAPP_NUMBER = "213XXXXXXXXX";

// ============================================================
// DICTIONNAIRE BILINGUE : Français / Arabe Algérie (darija raffinée)
// Les clés communes sont partagées entre les pages ; les clés
// spécifiques ne s'appliquent qu'à la page qui les utilise
// (body[data-page]).
// ============================================================

const I18N = {
  fr: {
    // --- Commun ---
    brand_name: "Beauty at Home <em>by Jiji</em>",
    nav_accueil: "Accueil",
    nav_prestations: "Prestations",
    nav_mariee: "Mariées",
    nav_beaute: "Beauté",
    nav_galerie: "Galerie",
    nav_apropos: "À propos",
    nav_contact: "Contact",
    btn_header_wa: "Réserver ↗",
    footer_text: "Coiffure à domicile — Oran, Algérie",
    footer_small: "© 2026 — Site conçu avec soin.",
    menu_open: "Ouvrir le menu",
    menu_close: "Fermer le menu",

    // --- Accueil ---
    kicker: "Coiffeuse à domicile — Oran &amp; wilaya",
    hero_title: "<span class=\"line\">L'art du cheveu,</span><span class=\"line\">chez <em>vous.</em></span>",
    hero_sub: "Coupe, brushing, soins et coiffures de mariée — je me déplace chez vous avec tout le matériel professionnel, dans le confort et l'intimité de votre maison.",
    hero_cta_wa: "Prendre rendez-vous sur WhatsApp",
    hero_cta_tarifs: "Découvrir les prestations",
    hero_note: "Réponse rapide du samedi au jeudi · Déplacement inclus",
    mq_1: "Brushing", mq_2: "Chignon mariée", mq_3: "Soins profonds", mq_4: "Balayage", mq_5: "Coupe femme",
    manifesto_text: "Pas de salon, pas d'attente, pas de trajet. <em>Un moment rien qu'à vous,</em> à la maison — avec la même exigence que les plus beaux salons.",
    manifesto_link: "Rencontrer Hadjira →",
    label_prestations: "Prestations &amp; tarifs",
    prest_head: "La carte",
    prest_sub: "Déplacement inclus à Oran. Tarifs indicatifs — devis gratuit sur WhatsApp pour les mariées et événements.",
    menu_1_t: "Coupe femme", menu_1_d: "Coupe moderne et brushing adaptés à votre visage.", menu_1_p: "dès 1 500 DA",
    menu_2_t: "Brushing &amp; wavy", menu_2_d: "Lisse glamour, boucles souples ou ondulations naturelles.", menu_2_p: "dès 2 000 DA",
    menu_3_t: "Enduit &amp; soins", menu_3_d: "Soin nourrissant, protéines, kératine — force et brillance.", menu_3_p: "dès 1 000 DA",
    menu_4_t: "Chignon &amp; soirée", menu_4_d: "Chignons sophistiqués, fiançailles et invitations.", menu_4_p: "dès 3 000 DA",
    menu_5_t: "Coloration &amp; balayage", menu_5_d: "Couleur, racines, balayage lumineux — selon longueur.", menu_5_p: "sur devis",
    menu_6_t: "Forfait mariée", menu_6_d: "Essai inclus, coiffure du jour J, pose voile et accessoires.", menu_6_p: "sur rendez-vous",
    menu_7_t: "Onglerie", menu_7_d: "Manucure, vernis semi-permanent, pose gel et capsules — des ongles impeccables.", menu_7_p: "dès 1 500 DA",
    menu_8_t: "Maquillage", menu_8_d: "Maquillage soirée, fiançailles et mariée — un teint qui tient toute la nuit.", menu_8_p: "dès 2 500 DA",
    menu_9_t: "Extensions cheveux", menu_9_d: "Toutes techniques : tresses, lace, à chaud, à froid, clip — volume et longueur sur mesure.", menu_9_p: "sur devis",
    prest_foot: "Déplacement inclus à Oran · Devis gratuit sur WhatsApp pour les mariées et événements",
    label_galerie: "Galerie",
    gal_head: "Réalisations <em>récentes</em>",
    cap_1: "Brushing wavy — à domicile, Bir El Djir",
    cap_2: "Chignon mariée — préparatifs à la maison",
    cap_3: "Soin profond &amp; brillance",
    cap_4: "Ondulé glamour — soirée",
    cap_5: "Balayage miel",
    cap_6: "Coupe moderne &amp; texture",
    strip_hint: "Faites défiler →",
    label_mariee: "Le jour J",
    mariee_head: "La mariée,<br><em>sereine</em>",
    mariee_text: "Les préparatifs se vivent chez vous, entourée des vôtres. Essai personnalisé en amont, coiffure du jour J, pose du voile et des accessoires — je reste jusqu'au dernier retouchage.",
    mariee_cta: "Réserver votre date",
    label_avis: "Elles m'ont fait confiance",
    avis_head: "Mots de <em>clientes</em>",
    avis_1_q: "« Sublimée le jour de mon mariage, directement à la maison. Professionnelle, douce, d'une patience infinie. »",
    avis_1_a: "Sarah — mariée, Oran",
    avis_2_q: "« Le brushing tient plusieurs jours. Je gagne deux heures de trajet et d'attente chaque semaine. »",
    avis_2_a: "Nesrine — cliente régulière, Bir El Djir",
    avis_3_q: "« L'enduit a redonné vie à mes cheveux. Ponctuelle, et réponse toujours rapide sur WhatsApp. »",
    avis_3_a: "Amina — Es Sénia",
    contact_title: "Réservez votre<br><em>créneau</em>",
    contact_btn: "Écrire sur WhatsApp ↗",
    contact_zones: "Oran centre · Bir El Djir · Es Sénia · Canastel · et alentours",

    // --- Page prestations ---
    title_prestations: "Prestations &amp; Tarifs — Coiffeuse à Domicile Oran | Coupes, Brushings, Soins, Chignons",
    desc_prestations: "Tarifs coiffeuse à domicile à Oran : coupe dès 1 500 DA, brushing dès 2 000 DA, enduit et soins dès 1 000 DA, chignons, coloration, forfait mariée. Déplacement inclus.",
    prest_h1: "Prestations <em>&amp;</em> tarifs",
    prest_lead: "Des tarifs clairs, sans surprise — le déplacement à Oran est toujours inclus. Pour les mariées et les événements, demandez votre devis gratuit sur WhatsApp.",
    cond_label: "Bon à savoir",
    cond_head: "Comment ça <em>se passe</em>",
    cond_1_t: "Déplacement inclus",
    cond_1_d: "Je me déplace partout à Oran et alentours : centre-ville, Bir El Djir, Es Sénia, Canastel… sans frais supplémentaires.",
    cond_2_t: "Matériel professionnel",
    cond_2_d: "Je viens avec tout le nécessaire : capes, brosses, fers, sèche-cheveux, produits de soin. Vous n'avez rien à préparer.",
    cond_3_t: "Devis gratuit",
    cond_3_d: "Coloration, balayage, mariées et événements : décrivez votre projet sur WhatsApp, je réponds avec un tarif précis.",
    prest_cta_title: "Un doute sur la <em>prestation&nbsp;?</em>",
    prest_cta_btn: "Demander un devis gratuit",

    // --- Page mariée ---
    title_mariee: "Coiffure Mariée à Domicile Oran — Forfait Mariée Prestige | Essai Inclus",
    desc_mariee: "Coiffure de mariée à domicile à Oran : essai personnalisé, coiffure du jour J, pose du voile et accessoires, retouches jusqu'au bout. Réservez votre date sur WhatsApp.",
    pk_label: "Coiffure de mariée — à domicile",
    pk_h1: "Votre plus beau jour,<br>en toute <em>sérénité</em>",
    pk_lead: "Les préparatifs se vivent chez vous, entourée des vôtres, sans trajet ni stress. Un accompagnement complet, de l'essai jusqu'au dernier retouchage.",
    steps_label: "L'accompagnement",
    steps_head: "Trois temps, <em>zéro stress</em>",
    step_1_t: "L'essai",
    step_1_d: "Plusieurs semaines avant : on teste les coiffures qui vous ressemblent, avec voile et accessoires. Photos à l'appui pour choisir sereinement.",
    step_2_t: "Le jour J",
    step_2_d: "Je viens chez vous à l'heure convenue, avec tout le matériel. Coiffure de la mariée — et si vous le souhaitez, de vos proches et demoiselles d'honneur.",
    step_3_t: "Les retouches",
    step_3_d: "Je reste disponible jusqu'au départ : derniers ajustements, pose du voile, retouches avant les photos et la cérémonie.",
    incl_label: "Le forfait comprend",
    incl_head: "Forfait mariée <em>prestige</em>",
    incl_1: "Essai personnalisé (1 h 30 env.)",
    incl_2: "Coiffure du jour J à domicile",
    incl_3: "Pose du voile et des accessoires",
    incl_4: "Coiffure d'une accompagnante en option",
    incl_5: "Retouches jusqu'au départ",
    incl_6: "Déplacement inclus sur Oran",
    incl_7: "Options maquillage &amp; beauté des ongles",
    incl_note: "Tarif sur rendez-vous — le plus tôt vous réservez votre date, plus vous êtes sûre qu'elle soit libre.",
    mariee_cta_title: "Réservez <em>votre date</em>",
    mariee_cta_btn: "Vérifier ma date sur WhatsApp",

    // --- Page galerie ---
    title_galerie: "Galerie — Réalisations de Coiffure à Domicile à Oran | Brushings, Chignons, Mariées",
    desc_galerie: "Réalisations de coiffure à domicile à Oran : brushings wavy, chignons de mariée, soins profonds, balayages. Le travail parle de lui-même.",
    gal_h1: "Réalisations <em>récentes</em>",
    gal_lead: "Chaque coiffure est réalisée à domicile, avec le même soin qu'en salon. Survolez, inspirez-vous — puis montrez-moi ce qui vous plaît sur WhatsApp.",
    gal_note: "De nouvelles réalisations sont ajoutées régulièrement — abonnez-vous sur Instagram pour suivre le fil au quotidien.",

    // --- Page contact ---
    title_contact: "Contact &amp; Rendez-vous — Coiffeuse à Domicile Oran | Réservation WhatsApp",
    desc_contact: "Réservez votre coiffeuse à domicile à Oran : réponse rapide du samedi au jeudi, déplacement inclus (centre, Bir El Djir, Es Sénia, Canastel). Questions fréquentes.",
    contact_h1: "Parlons de <em>votre coiffure</em>",
    contact_lead: "Une question, un devis, une date à bloquer ? Un message WhatsApp suffit — je réponds moi-même, du samedi au jeudi.",
    info_label: "Informations",
    info_1_l: "WhatsApp", info_1_v: "Le moyen le plus rapide — messages et appels",
    info_2_l: "Horaires", info_2_v: "Du samedi au jeudi · créneaux souples, y compris en soirée",
    info_3_l: "Zones", info_3_v: "Oran centre, Bir El Djir, Es Sénia, Canastel et alentours",
    info_4_l: "Délai", info_4_v: "48 h de préavis si possible · mariées : réservez dès maintenant",
    faq_label: "Questions fréquentes",
    faq_head: "Vous vous <em>demandez</em>…",
    faq_1_q: "Le déplacement est-il vraiment gratuit ?",
    faq_1_a: "Oui — le déplacement est inclus dans les tarifs pour tout Oran et ses alentours proches (Bir El Djir, Es Sénia, Canastel). Pour les localités plus éloignées, un petit supplément peut s'appliquer : précisez votre adresse sur WhatsApp.",
    faq_2_q: "Combien de temps à l'avance faut-il réserver ?",
    faq_2_a: "Idéalement 48 h de préavis pour un rendez-vous classique. Pour un vendredi ou une date de mariage, réservez dès maintenant — certaines dates partent des mois à l'avance.",
    faq_3_q: "Que dois-je préparer avant votre venue ?",
    faq_3_a: "Rien du tout : j'apporte capes, brosses, fers, sèche-cheveux et produits. Prévoyez simplement une chaise près d'une prise électrique, et si possible un accès à un point d'eau.",
    faq_4_q: "Faites-vous les cheveux des accompagnantes le jour du mariage ?",
    faq_4_a: "Oui — la mère de la mariée, les sœurs et les demoiselles d'honneur peuvent être coiffées le même matin. Précisez le nombre de personnes lors de la réservation pour que je prévoie le temps nécessaire.",
    faq_5_q: "Les tarifs sont-ils les mêmes que dans un salon ?",
    faq_5_a: "Les tarifs affichés sont comparables à ceux d'un salon — mais sans trajet ni attente, chez vous. La coloration et le balayage dépendent de la longueur et du produit : demandez votre devis gratuit sur WhatsApp.",

    // --- Page beauté (onglerie, maquillage, extensions) ---
    title_beaute: "Onglerie, Maquillage &amp; Extensions Cheveux à Domicile Oran | Beauté Complète",
    desc_beaute: "Beauté à domicile à Oran : onglerie (manucure, gel, semi-permanent), maquillage soirée et mariée, extensions cheveux toutes techniques (tresses, lace, clip). Déplacement inclus.",
    beaute_h1: "Beauté <em>complète</em>, à domicile",
    beaute_lead: "Au-delà de la coiffure : ongles, maquillage et extensions — tout pour être prête, sans bouger de chez vous. Les mêmes produits et le même geste qu'en institut.",
    ongles_label: "Onglerie",
    ongles_h1: "Des ongles <em>impeccables</em>",
    ongles_d: "Manucure soignée, vernis semi-permanent longue tenue, pose de gel et capsules — forme et couleur adaptées à vos mains et à votre style.",
    ongles_p: "dès 1 500 DA",
    maquillage_label: "Maquillage",
    maquillage_h1: "Un teint qui <em>tient</em> toute la nuit",
    maquillage_d: "Maquillage de soirée, fiançailles, hennas et mariée — préparation de la peau, teint longue tenue, regard travaillé. Essai possible pour les mariées.",
    maquillage_p: "dès 2 500 DA",
    extensions_label: "Extensions cheveux",
    extensions_h1: "Volume et longueur, <em>sur mesure</em>",
    extensions_d: "Toutes techniques selon votre nature de cheveux et le rendu souhaité : tresses, lace, pose à chaud, à froid, clip. Diagnostic gratuit sur WhatsApp pour un devis juste.",
    extensions_p: "sur devis",
    beaute_cta_title: "Composez votre <em>rituel beauté</em>",
    beaute_cta_btn: "Demander mon devis beauté",

    // --- Page à propos ---
    title_apropos: "Hadjira — Coiffeuse à Domicile à Oran | Institut de Beauté Ali",
    desc_apropos: "Hadjira, coiffeuse professionnelle à Oran, coiffeuse au sein de l'Institut de Beauté Ali — l'une des adresses les plus connues d'Oran sur les réseaux sociaux. Coiffure, onglerie, maquillage et extensions à domicile.",
    apropos_label: "À propos",
    apropos_h1: "Hadjira, <em>main de pro</em>,<br>au service de votre beauté",
    apropos_lead: "Coiffeuse professionnelle à Oran, Hadjira exerce au sein de l'Institut de Beauté Ali — l'une des adresses les plus en vue d'Oran sur Instagram et TikTok.",
    apropos_bio_1: "Formée au rythme exigeant des grands instituts oranais, Hadjira a fait ses armes au sein de l'<strong>Institut de Beauté Ali</strong> — cette adresse que tout Oran connaît sur les réseaux, où l'on vient de partout pour la coiffure, la beauté et le geste sûr.",
    apropos_bio_2: "C'est cette même exigence qu'elle apporte chez vous : matériel professionnel, produits de marque, finitions impeccables — et ce sens du détail qui fait qu'une coiffure tient du matin au soir.",
    apropos_bio_3: "Coiffure, onglerie, maquillage, extensions : une seule intervenante, une beauté pensée comme un tout, dans le confort de votre maison.",
    salon_label: "L'école du geste",
    salon_h2: "Formée à l'<em>Institut de Beauté Ali</em>",
    salon_text: "L'Institut de Beauté Ali est une référence à Oran : des milliers d'abonnées sur les réseaux, un flux de clientes qui ne dément pas, des standards élevés sur chaque prestation. C'est dans cette école du quotidien que Hadjira a aiguisé son geste — vitesse, précision, écoute.",
    salon_cta: "Voir ses réalisations",
    apropos_cta_title: "Bookez Hadjira<br><em>chez vous</em>",
    apropos_atelier_t: "L'atelier complet",
    apropos_atelier_d: "Coiffure, onglerie, maquillage et extensions : tout le nécessaire professionnel vient avec elle.",
    apropos_zones_t: "Tout Oran",
    apropos_zones_d: "Centre-ville, Bir El Djir, Es Sénia, Canastel et alentours — déplacement inclus.",
    apropos_wa_t: "Réponse directe",
    apropos_wa_d: "C'est Hadjira qui répond sur WhatsApp, du samedi au jeudi. Pas d'intermédiaire.",

    // --- Messages WhatsApp par page ---
    wa_accueil: "Bonjour, je souhaite prendre rendez-vous (coiffure à domicile à Oran).",
    wa_prestations: "Bonjour, j'aimerais un devis pour une prestation de coiffure à domicile à Oran.",
    wa_mariee: "Bonjour, je suis mariée et je souhaite vérifier la disponibilité de ma date (coiffure à domicile à Oran).",
    wa_beaute: "Bonjour, je souhaite un devis beauté (ongles, maquillage ou extensions) à domicile à Oran.",
    wa_galerie: "Bonjour, j'ai vu une coiffure sur votre site que j'adore, je voudrais la même !",
    wa_apropos: "Bonjour Hadjira, je souhaite prendre rendez-vous avec vous à domicile (Oran).",
    wa_contact: "Bonjour, j'ai une question sur la coiffure à domicile à Oran."
  },

  ar: {
    // --- مشترك ---
    brand_name: "بيوتي أت هوم <em>باي جيجي</em>",
    nav_accueil: "الرئيسية",
    nav_prestations: "الخدمات",
    nav_mariee: "العرائس",
    nav_beaute: "الجمال",
    nav_galerie: "الأعمال",
    nav_apropos: "من نحن",
    nav_contact: "اتصلي بنا",
    btn_header_wa: "الحجز ↗",
    footer_text: "كوافيز في الدار — وهران، الجزائر",
    footer_small: "© 2026 — موقع مصمم بإتقان.",
    menu_open: "فتح القائمة",
    menu_close: "إغلاق القائمة",

    // --- الرئيسية ---
    kicker: "كوافيز في الدار — وهران والضواحي",
    hero_title: "<span class=\"line\">فن الشعر،</span><span class=\"line\">في <em>دارك</em>.</span>",
    hero_sub: "قص الشعر، بروشينغ، علاجات وتسريحات العرائس — نجي عندك للدار بجميع المعدات الاحترافية، براحة وخصوصية تامة.",
    hero_cta_wa: "احجزي موعدك عبر واتساب",
    hero_cta_tarifs: "اكتشفي الخدمات",
    hero_note: "إجابة سريعة من السبت للخميس · التنقل داخل وهران مجاني",
    mq_1: "بروشينغ", mq_2: "شينيون عرائس", mq_3: "علاجات مكثفة", mq_4: "بالياج", mq_5: "قص الشعر",
    manifesto_text: "بلا صالون، بلا انتظار، بلا تعب. <em>وقت خاص بيك وحدك،</em> في دارك — بنفس مستوى أحلى الصالونات.",
    manifesto_link: "← تعرّفي على حاجرة",
    label_prestations: "الخدمات والأسعار",
    prest_head: "البطاقة",
    prest_sub: "التنقل داخل وهران مجاني. الأسعار استرشادية — استشارة مجانية عبر واتساب للعرائس والمناسبات.",
    menu_1_t: "قص الشعر النسائي", menu_1_d: "قص عصري وبروشينغ متناسق مع ملامح وجهك.", menu_1_p: "ابتداءً من 1500 دج",
    menu_2_t: "بروشينغ وويفي", menu_2_d: "بروشينغ ناعم، كيرلي خفيف أو ويفي طبيعي يدوم.", menu_2_p: "ابتداءً من 2000 دج",
    menu_3_t: "أوندوي وعلاجات", menu_3_d: "علاج مغذي، بروتين، كيراتين — قوة ولمعان من جديد.", menu_3_p: "ابتداءً من 1000 دج",
    menu_4_t: "شينيون ومناسبات", menu_4_d: "شينيون راقية للخطوبات والأعراس والمناسبات.", menu_4_p: "ابتداءً من 3000 دج",
    menu_5_t: "صباغة وبالياج", menu_5_d: "صبغة، جذور، بالياج مشرق — حسب طول الشعر.", menu_5_p: "حسب الطلب",
    menu_6_t: "باك العروسة", menu_6_d: "بروفة مسبقة، مشطة يوم الزفاف، طرح وأكسسوارات.", menu_6_p: "بالموعد المسبق",
    menu_7_t: "عناية بالأظافر", menu_7_d: "مانيكير، فرنيه شبه دائم، جيل وكابسول — أظافر مرتبة ومقصوصة.", menu_7_p: "ابتداءً من 1500 دج",
    menu_8_t: "ماكياج", menu_8_d: "ماكياج سهرات، خطوبات وعرائس — بشرة تدوم طول الليل.", menu_8_p: "ابتداءً من 2500 دج",
    menu_9_t: "وصلات الشعر", menu_9_d: "كل الطرق: ضفائر، لايس، حرارية، باردة، كليب — كثافة وطول على المقاس.", menu_9_p: "حسب الطلب",
    prest_foot: "التنقل داخل وهران مجاني · استشارة مجانية عبر واتساب للعرائس والمناسبات",
    label_galerie: "الأعمال",
    gal_head: "أعمال <em>حديثة</em>",
    cap_1: "بروشينغ ويفي — في الدار، بئر الجير",
    cap_2: "شينيون عروسة — تحضيرات في الدار",
    cap_3: "علاج مكثف ولمعان",
    cap_4: "ويفي للمناسبات",
    cap_5: "بالياج عسلي",
    cap_6: "قص عصري",
    strip_hint: "← اسحبي",
    label_mariee: "يوم الفرح",
    mariee_head: "العروسة،<br>بكل <em>راحة بال</em>",
    mariee_text: "التحضيرات تكون في دارك، مع صحباتك وأهلك. بروفة مسبقة، مشطة يوم الفرح، تركيب الطرح والأكسسوارات — نفضل معاك حتى آخر لمسة.",
    mariee_cta: "احجزي تاريخك",
    label_avis: "ثقو فيّا",
    avis_head: "كلام <em>الزبونات</em>",
    avis_1_q: "« بانت أحلى إطلالة نهار عرسي وانا في داري. محترفة، طيبة وصبرها ما يتنفروش. »",
    avis_1_a: "سارة — عروسة، وهران",
    avis_2_q: "« البروشينغ يشد أيام كاملة. ربحت ساعتين طريق وانتظار كل أسبوع. »",
    avis_2_a: "نسرين — زبونة دائمة، بئر الجير",
    avis_3_q: "« الأوندوي رجّع الحياة لشعري. وقت مضمون وإجابة سريعة في واتساب. »",
    avis_3_a: "أمينة — السانية",
    contact_title: "احجزي <em>موعدك</em>",
    contact_btn: "راسليني في واتساب ↗",
    contact_zones: "وسط وهران · بئر الجير · السانية · كانستيل · والضواحي",

    // --- صفحة الخدمات ---
    title_prestations: "الخدمات والأسعار — كوافيز في الدار وهران | قص، بروشينغ، علاجات، شينيون",
    desc_prestations: "أسعار الكوافيز في الدار بوهران: قص من 1500 دج، بروشينغ من 2000 دج، علاجات من 1000 دج، شينيون، صباغة، باك العروسة. التنقل مجاني.",
    prest_h1: "الخدمات <em>و</em> الأسعار",
    prest_lead: "أسعار واضحة بلا مفاجآت — التنقل داخل وهران دائماً مجاني. للعرائس والمناسبات، اطلبي استشارتك المجانية عبر واتساب.",
    cond_label: "من المهم تعرفي",
    cond_head: "كيفاش <em>تمشي</em> الأمور",
    cond_1_t: "التنقل مجاني",
    cond_1_d: "نمشي لكامل وهران والضواحي: الوسط، بئر الجير، السانية، كانستيل… بلا زيادة في السعر.",
    cond_2_t: "معدات احترافية",
    cond_2_d: "نجيب معايا كل شي: مريولات، فرش، مكواة، سيشوار ومنتجات العلاج. ما تحتاجيش تحضري أي حاجة.",
    cond_3_t: "استشارة مجانية",
    cond_3_d: "صباغة، بالياج، عرائس ومناسبات: وصفي مشروعك في واتساب ونجاوبك بسعر دقيق.",
    prest_cta_title: "عندك سؤال على <em>الخدمة؟</em>",
    prest_cta_btn: "اطلبي استشارة مجانية",

    // --- صفحة العرائس ---
    title_mariee: "كوافيز العروسة في الدار وهران — باك العروسة الفاخر | مع البروفة",
    desc_mariee: "تسريحة العروسة في دارك بوهران: بروفة شخصية، مشطة يوم الزفاف، تركيب الطرح والأكسسوارات، تعديلات حتى آخر لحظة. احجزي تاريخك عبر واتساب.",
    pk_label: "تسريحة العروسة — في الدار",
    pk_h1: "أحلى يوم،<br>بكل <em>راحة بال</em>",
    pk_lead: "التحضيرات تكون في دارك، مع أهلك وصحباتك، بلا تعب ولا ستريس. مرافقة كاملة من البروفة حتى آخر تعديل.",
    steps_label: "المرافقة",
    steps_head: "ثلاثة مراحل، <em>بلا ستريس</em>",
    step_1_t: "البروفة",
    step_1_d: "أسابيع قبل الفرح: نجربو التسريحات اللي تشبهك، مع الطرح والأكسسوارات. بصور كي فين تختاري بكل ارتياح.",
    step_2_t: "يوم الفرح",
    step_2_d: "نجي لدارك في الوقت المحدد بجميع المعدات. مشطة العروسة — وإذا حبيتي حتى صحباتك وقريباتك.",
    step_3_t: "التعديلات",
    step_3_d: "نبقى متوفرة حتى الخروج: آخر التعديلات، تركيب الطرحة، لمسات أخيرة قبل التصوير والحفل.",
    incl_label: "الباك يشمل",
    incl_head: "باك العروسة <em>الفاخر</em>",
    incl_1: "بروفة شخصية (ساعة ونصف تقريباً)",
    incl_2: "مشطة يوم الزفاف في الدار",
    incl_3: "تركيب الطرح والأكسسوارات",
    incl_4: "تسريحة مرافقة واحدة (اختياري)",
    incl_5: "تعديلات حتى الخروج",
    incl_6: "التنقل داخل وهران مجاني",
    incl_7: "خيارات الماكياج والعناية بالأظافر",
    incl_note: "السعر بالموعد المسبق — كل ما حجزتي تاريخك بدري، كل ما تكوني مضمونة.",
    mariee_cta_title: "احجزي <em>تاريخك</em>",
    mariee_cta_btn: "تحققي من تاريخي عبر واتساب",

    // --- صفحة الأعمال ---
    title_galerie: "الأعمال — تسريحات كوافيز في الدار وهران | بروشينغ، شينيون، عرائس",
    desc_galerie: "أعمال الكوافيز في الدار بوهران: بروشينغ ويفي، شينيون عرائس، علاجات، بالياج. الخدمة تهدر على روحها.",
    gal_h1: "أعمال <em>حديثة</em>",
    gal_lead: "كل تسريحة تُنجز في الدار بنفس عناية الصالون. شوفي، استوحاي الأفكار — وبعدين ورّيني اللي عجبك في واتساب.",
    gal_note: "نزيدو أعمال جديدة بانتظام — تابعينا في إنستغرام باش تشوفي الجديد كل يوم.",

    // --- صفحة الاتصال ---
    title_contact: "اتصلي بنا وموعد — كوافيز في الدار وهران | حجز واتساب",
    desc_contact: "احجزي كوافيز في الدار بوهران: إجابة سريعة من السبت للخميس، تنقل مجاني (الوسط، بئر الجير، السانية، كانستيل). أسئلة شائعة.",
    contact_h1: "نهضرو على <em>شعرك</em>",
    contact_lead: "سؤال، استشارة، ولا تاريخ تحجريه؟ رسالة واتساب تكفي — نجاوب شخصياً، من السبت للخميس.",
    info_label: "معلومات",
    info_1_l: "واتساب", info_1_v: "الطريقة الأسرع — رسائل ومكالمات",
    info_2_l: "التوقيت", info_2_v: "من السبت للخميس · مواعيد مرنة، حتى في المساء",
    info_3_l: "المناطق", info_3_v: "وسط وهران، بئر الجير، السانية، كانستيل والضواحي",
    info_4_l: "المهلة", info_4_v: "يفضل الحجز قبل 48 ساعة · العرائس: احجزي من الآن",
    faq_label: "أسئلة شائعة",
    faq_head: "يمكن <em>تسقسي</em>…",
    faq_1_q: "التنقل فعلاً مجاني؟",
    faq_1_a: "إيه — التنقل مضمّن في الأسعار لكامل وهران والضواحي القريبة (بئر الجير، السانية، كانستيل). للمناطق البعيدة يمكن يكون زيادة بسيطة: عطيني عنوانك في واتساب.",
    faq_2_q: "شقد من وقت قبل باش نحجز؟",
    faq_2_a: "يفضل 48 ساعة قبل الموعد العادي. أما للجمعة ولا تاريخ العرس، احجزي من الآن — التواريخ تخلص شهور قبل.",
    faq_3_q: "وش نحضر قبل ما تجي؟",
    faq_3_a: "ما تحتاجيش أي حاجة: نجيب المريولات، الفرش، المكواة، السيشوار والمنتجات. حضري غير كرسي قريب من بريز، وإمكانية وصول للماء.",
    faq_4_q: "تسريحي صحباتي نهار العرس؟",
    faq_4_a: "إيه — أم العروسة، الخواتات والصحبات يقدرو يتسريحو نفس الصباح. عيّني عدد الأشخاص في الحجز باش نحضّر الوقت المناسب.",
    faq_5_q: "الأسعار كيما في الصالون؟",
    faq_5_a: "الأسعار المعروضة قريبة من أسعار الصالونات — بلا تعب طريق ولا انتظار، وفي دارك. الصباغة والبالياج حسب الطول والمنتج: اطلبي استشارتك المجانية في واتساب.",

    // --- صفحة الجمال ---
    title_beaute: "أظافر، ماكياج ووصلات الشعر في الدار وهران | جمال كامل",
    desc_beaute: "جمال في الدار بوهران: عناية بالأظافر (مانيكير، جيل، فرنيه دائم)، ماكياج سهرات وعرائس، وصلات شعر بكل الطرق (ضفائر، لايس، كليب). التنقل مجاني.",
    beaute_h1: "جمال <em>كامل</em>، في دارك",
    beaute_lead: "ما عاد الكوافيز فقط: أظافر، ماكياج ووصلات — كل باش تكوني واجدة، بلا ما تتحركي من دارك. نفس المنتجات ونفس الاحترافية تاع المعهد.",
    ongles_label: "الأظافر",
    ongles_h1: "أظافر <em>مرتبة</em> وقصصة",
    ongles_d: "مانيكير بعناية، فرنيه شبه دائم يطول، جيل وكابسول — شكل ولون يناسب يديك وذوقك.",
    ongles_p: "ابتداءً من 1500 دج",
    maquillage_label: "الماكياج",
    maquillage_h1: "بشرة <em>تدوم</em> طول الليل",
    maquillage_d: "ماكياج سهرات، خطوبات، حناء وعرائس — تحضير البشرة، فوندوطون طويل المدى، عيون مرتبة. البروفة متوفرة للعرائس.",
    maquillage_p: "ابتداءً من 2500 دج",
    extensions_label: "وصلات الشعر",
    extensions_h1: "كثافة وطول <em>على المقاس</em>",
    extensions_d: "كل الطرق حسب طبيعة شعرك والنتيجة اللي تحبيها: ضفائر، لايس، تركيب حراري، بارد، كليب. تشخيص مجاني في واتساب باش يكون السعر مضبوط.",
    extensions_p: "حسب الطلب",
    beaute_cta_title: "ركّبي <em>روتين جمالك</em>",
    beaute_cta_btn: "اطلبي استشارة الجمال",

    // --- صفحة من نحن ---
    title_apropos: "حاجرة — كوافيز في الدار وهران | معهد الجمال علي",
    desc_apropos: "حاجرة، كوافيز محترفة بوهران، خدامة في معهد الجمال علي — من أشهر العناوين في وهران على السوشل ميديا. كوافيز، أظافر، ماكياج ووصلات في الدار.",
    apropos_label: "من نحن",
    apropos_h1: "حاجرة،<br>خدمة <em>محترفة</em> لمحبتك",
    apropos_lead: "كوافيز محترفة في وهران، حاجرة خدامة في معهد الجمال علي — من أشهر العناوين في وهران على إنستغرام وتيك توك.",
    apropos_bio_1: "تكوّنت على إيقاع المعاهد الكبيرة في وهران، حاجرة دارت خفتها في <strong>معهد الجمال علي</strong> — العنوان اللي وهران كامل يعرفو في السوشل ميديا، اللي يجيو له من كل بلاصة للكوافيز والجمال.",
    apropos_bio_2: "وهذي نفس الصرامة اللي تجيبها لدارك: معدات احترافية، منتجات معروفة، تشطيبات نقية — وحس التفاصيل اللي تخلي التسريحة تدوم من الصباح لليل.",
    apropos_bio_3: "كوافيز، أظافر، ماكياج، وصلات: شخص واحد، وجمال مفكّر كامل، في راحة دارك.",
    salon_label: "مدرسة المهارة",
    salon_h2: "تكوين في <em>معهد الجمال علي</em>",
    salon_text: "معهد الجمال علي مرجع في وهران: آلاف المتابعات في السوشل ميديا، زبونات ما يقطعوش، ومعايير عالية في كل خدمة. في هذي المدرسة اليومية فيّا حاجرة صقلت يدها — سرعة، دقة، وسمع الزبونة.",
    salon_cta: "شوفي أعمالها",
    apropos_cta_title: "احجزي حاجرة<br><em>في دارك</em>",
    apropos_atelier_t: "التجهيز الكامل",
    apropos_atelier_d: "كوافيز، أظافر، ماكياج ووصلات: كل المعدات الاحترافية تجي معاها.",
    apropos_zones_t: "كامل وهران",
    apropos_zones_d: "الوسط، بئر الجير، السانية، كانستيل والضواحي — التنقل مجاني.",
    apropos_wa_t: "إجابة مباشرة",
    apropos_wa_d: "حاجرة هي اللي تجاوب في واتساب، من السبت للخميس. بلا وسطاء.",

    // --- رسائل واتساب حسب الصفحة ---
    wa_accueil: "السلام عليكم، حابة نحجز موعد كوافيز في الدار (وهران).",
    wa_prestations: "السلام عليكم، حابة استشارة على خدمة كوافيز في الدار (وهران).",
    wa_mariee: "السلام عليكم، أنا عروسة وحابة نتحقق من تاريخي (كوافيز في الدار وهران).",
    wa_beaute: "السلام عليكم، حابة استشارة جمال (أظافر، ماكياج ولا وصلات) في الدار بوهران.",
    wa_galerie: "السلام عليكم، شفت تسريحة في الموقع عجبتني بزااف، حابا نفسها!",
    wa_apropos: "السلام عليكم حاجرة، حابة نحجز موعد معاك في الدار (وهران).",
    wa_contact: "السلام عليكم، عندي سؤال على الكوافيز في الدار (وهران).",
  }
};

// ============================================================
// ÉTAT GLOBAL
// ============================================================

let currentLang = localStorage.getItem("coiffure_lang") || "fr";
let currentTheme = localStorage.getItem("coiffure_theme") ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const PAGE = document.body.getAttribute("data-page") || "accueil";

// Titres/descriptions FR statiques (SEO) — sauvegardés pour revenir depuis l'arabe
const originalTitle = document.title;
const originalDesc = (document.querySelector('meta[name="description"]') || {}).content || "";

function pageWaMessage(t) {
  const key = "wa_" + PAGE;
  return t[key] !== undefined ? t[key] : t.wa_accueil;
}

function updateWhatsAppLinks(t) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pageWaMessage(t))}`;
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = "fr";
  currentLang = lang;
  localStorage.setItem("coiffure_lang", lang);
  const t = I18N[lang];
  const isRtl = lang === "ar";

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");

  // Titre & description : en arabe on traduit, en français on restaure l'original (SEO)
  document.title = isRtl ? (t["title_" + PAGE] || originalTitle) : originalTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", isRtl ? (t["desc_" + PAGE] || originalDesc) : originalDesc);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.setAttribute("aria-label", isRtl ? "Passer en français" : "التبديل إلى العربية");
    const label = langBtn.querySelector(".lang-label");
    if (label) label.textContent = isRtl ? "FR" : "عربي";
  }

  updateWhatsAppLinks(t);
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("coiffure_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.setAttribute("aria-label", theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre");
}

// ============================================================
// INITIALISATION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  setTheme(currentTheme);
  setLanguage(currentLang);

  // Thème
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", () => setTheme(currentTheme === "dark" ? "light" : "dark"));

  // Langue
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.addEventListener("click", () => setLanguage(currentLang === "fr" ? "ar" : "fr"));

  // Menu mobile
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      })
    );
  }

  // Préférence système
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("coiffure_theme")) setTheme(e.matches ? "dark" : "light");
    });
  }

  // Apparitions au scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // FAQ (accordéon)
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
});
