window.TRANSLATIONS = {
    // PT: only keys used by JS-rendered content.
    // Static HTML pages already have PT text baked in, so applyTranslations() skips PT entirely.
    pt: {
        "filter.new": "Novidades",
        "product.add_cart": "Adicionar ao Carrinho",
        "product.added": "✓ Adicionado",
        "product.size_label": "Tamanho",
        "cart.size": "Tamanho",
        "cart.remove_title": "Remover",
        "checkout.empty": "O teu carrinho está vazio. <a href=\"shop.html\">Ver coleção</a>",
        "cart.discount": "Desconto",
        "cart.promo_invalid": "Código de desconto inválido.",
        "cart.promo_applied": "Desconto de {pct}% aplicado!",
        "checkout.discount": "Desconto",
        "shop.load_error": "Erro ao carregar produtos.",
        "shop.empty_title": "Nada por aqui ainda",
        "shop.empty_sub": "Esta categoria ainda não tem produtos disponíveis.<br>Explora a nossa coleção completa.",
        "shop.empty_cta": "Ver toda a coleção",
        // Product detail sections
        "product.section_chars": "Características",
        "product.section_sizes": "Guia de Tamanhos",
        "product.section_trace": "Rastreabilidade",
        "product.trace_origin": "Origem",
        "product.trace_material": "Fonte dos materiais",
        "product.trace_spinning": "Fiação",
        "product.trace_knitting": "Malha / Tecelagem",
        "product.trace_finishing": "Acabamento",
        "product.trace_manufacturer": "Fabricante",
        "product.trace_certifications": "Certificações",
        "product.trace_carbon": "Pegada carbónica"
    },
    en: {
        // Nav
        "nav.home": "Home",
        "nav.shop": "Shop",
        "nav.newin": "New In",
        "nav.about": "About Us",
        "nav.women": "Woman",
        "nav.men": "Man",
        "nav.accessories": "Accessories",
        // Filter bar
        "filter.all": "All",
        "filter.new": "New",
        "filter.women": "Woman",
        "filter.men": "Man",
        "filter.accessories": "Accessories",
        // Home page
        "home.intro": "The Green 1.0 Collection is live. Come explore it!",
        "home.cta": "Go to the collection",
        "home.para1_line1": "A collection created with nature and innovation in mind.",
        "home.para1_line2": "We transform olive oil production waste into real performance.",
        "home.feat1": "Lightweight.",
        "home.feat2": "Breathable.",
        "home.feat3": "With antibacterial finish.",
        "home.feat4": "Ready to move with you at every step.",
        // Product page (JS-generated)
        "product.loading": "Loading...",
        "product.add_cart": "Add to Cart",
        "product.added": "✓ Added",
        "product.size_label": "Size",
        // Cart page
        "cart.title": "Your Cart",
        "cart.empty_title": "Your cart is empty",
        "cart.empty_sub": "You haven't added anything yet.<br>Explore our collection and find your next favourite.",
        "cart.explore_btn": "Explore collection →",
        "cart.shipping_note": "Shipping: €4.99 · VAT 23% included",
        "cart.total": "Total",
        "cart.checkout_btn": "Checkout →",
        "cart.continue_btn": "← Continue shopping",
        "cart.size": "Size",
        "cart.remove_title": "Remove",
        "cart.subtotal": "Subtotal",
        "cart.discount": "Discount",
        "cart.promo_placeholder": "Discount code",
        "cart.promo_btn": "Apply",
        "cart.promo_invalid": "Invalid discount code.",
        "cart.promo_applied": "{pct}% discount applied!",
        // Checkout page
        "checkout.back": "← Back to cart",
        "checkout.crumb": "Checkout",
        "checkout.summary_title": "Order Summary",
        "checkout.subtotal": "Subtotal",
        "checkout.shipping": "Shipping",
        "checkout.vat": "VAT 23% included in price",
        "checkout.discount": "Discount",
        "checkout.total": "Total",
        "checkout.form_title": "Your details",
        "checkout.name_label": "Full name",
        "checkout.name_ph": "Jane Smith",
        "checkout.email_label": "Email",
        "checkout.email_ph": "jane@email.com",
        "checkout.phone_label": "Phone",
        "checkout.phone_ph": "+44 7700 900000",
        "checkout.address_label": "Address",
        "checkout.address_ph": "12 Example Street",
        "checkout.zip_label": "Postcode",
        "checkout.zip_ph": "SW1A 1AA",
        "checkout.city_label": "City",
        "checkout.city_ph": "London",
        "checkout.form_error": "Please fill in all required fields.",
        "checkout.email_error": "Invalid email format.",
        "checkout.phone_error": "Invalid phone number (e.g. +44 7700 900000).",
        "checkout.confirm_btn": "Confirm Order →",
        "checkout.empty": "Your cart is empty. <a href=\"shop.html\">View collection</a>",
        // About page
        "about.title": "About Us",
        "about.intro": "Our brand is born from the need to connect movement with purpose.",
        "about.story1": "We transform olive production waste and recycled fibres into functional, antibacterial fabrics, produced in small batches in Portugal.",
        "about.story2": "Each piece is designed to combine durability and performance, with a design that moves naturally with the real rhythm of a run.",
        "about.intention": "We dress people who move with intention.",
        "about.antibacterial_title": "Antibacterial finish",
        "about.antibacterial_body": "The technology behind our pieces is a natural antibacterial finish, developed using compounds derived from olive oil production waste. This natural-based innovation helps keep fabrics fresher for longer, by reducing odor-causing bacteria.",
        "about.cta": "Green 1.0 Collection",
        // Footer
        "footer.tagline": "We moove together.",
        // Shop
        "shop.load_error": "Error loading products.",
        "shop.empty_title": "Nothing here yet",
        "shop.empty_sub": "This category has no products yet.<br>Explore our full collection.",
        "shop.empty_cta": "View all",
        // Product detail sections
        "product.section_chars": "Characteristics",
        "product.section_sizes": "Size Guide",
        "product.section_trace": "Traceability",
        "product.trace_origin": "Origin",
        "product.trace_material": "Material source",
        "product.trace_spinning": "Spinning",
        "product.trace_knitting": "Knitting / Weaving",
        "product.trace_finishing": "Finishing",
        "product.trace_manufacturer": "Manufacturer",
        "product.trace_certifications": "Certifications",
        "product.trace_carbon": "Carbon footprint"
    }
};

window.getLang = function () {
    return localStorage.getItem('lang') || 'pt';
};

window.t = function (key) {
    var lang = window.getLang();
    var dict = window.TRANSLATIONS[lang];
    if (dict && dict[key] !== undefined) return dict[key];
    // fallback to English as the complete reference dictionary
    var en = window.TRANSLATIONS['en'];
    return (en && en[key] !== undefined) ? en[key] : key;
};
