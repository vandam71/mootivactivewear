// Simple HTML include loader for static sites
(function () {
    function loadFragment(containerId, url, callback) {
        var container = document.getElementById(containerId);
        if (!container) return;
        fetch(url).then(function (resp) {
            if (!resp.ok) throw new Error('Network response was not ok');
            return resp.text();
        }).then(function (html) {
            container.innerHTML = html;
            if (callback) callback();
        }).catch(function (err) {
            console.error('Include failed for', url, err);
        });
    }

    function applyTranslations() {
        var lang = window.getLang ? window.getLang() : 'pt';
        // PT text is already baked into the HTML; only do DOM updates for non-PT languages
        if (lang === 'pt') return;
        var dict = window.TRANSLATIONS && window.TRANSLATIONS[lang] || {};
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) el.placeholder = dict[key];
        });
        document.documentElement.lang = lang;
    }

    function setupLangToggle() {
        var btn = document.querySelector('#site-header #langToggle');
        if (!btn) return;
        var lang = window.getLang ? window.getLang() : 'pt';
        btn.textContent = lang === 'pt' ? 'EN' : 'PT';
        btn.addEventListener('click', function () {
            var newLang = (window.getLang ? window.getLang() : 'pt') === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', newLang);
            window.location.reload();
        });
    }

    window.applyTranslations = applyTranslations;

    function setupNavToggle() {
        var btn = document.querySelector('#site-header .nav-toggle');
        var nav = document.querySelector('#site-header .main-nav');
        if (!btn || !nav) return;
        btn.addEventListener('click', function () {
            var open = nav.classList.toggle('nav-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        // close nav when a link is tapped
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('nav-open');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    function markActiveNav() {
        var params = new URLSearchParams(window.location.search);
        var filter = params.get('filter');
        var gender = params.get('gender');
        var category = params.get('category');
        var path = window.location.pathname;
        var links = document.querySelectorAll('#site-header .main-nav a');
        links.forEach(function (link) {
            var url = new URL(link.href, window.location.origin);
            link.classList.remove('active');
            // Home link active on index.html with no filters
            if ((path.endsWith('index.html') || path.endsWith('/')) && url.pathname.endsWith('index.html')) {
                if (!filter && !gender && !category) link.classList.add('active');
            }
            // Shop link active on shop.html with no filters
            if (path.endsWith('shop.html') && url.pathname.endsWith('shop.html') && !url.search) {
                if (!filter && !gender && !category) link.classList.add('active');
            }
            // About Us link active on about.html
            if (path.endsWith('about.html') && url.pathname.endsWith('about.html')) {
                link.classList.add('active');
            }
            // Highlight based on query params
            if (filter && url.searchParams.get('filter') === filter) link.classList.add('active');
            if (gender && url.searchParams.get('gender') === gender) link.classList.add('active');
            if (category && url.searchParams.get('category') === category) link.classList.add('active');
        });
    }

    function updateCartCount() {
        var badge = document.getElementById('cart-count');
        if (!badge) return;
        var cart = JSON.parse(localStorage.getItem('cart') || '[]');
        var total = cart.reduce(function (sum, item) { return sum + (item.qty || 1); }, 0);
        badge.textContent = total > 0 ? total : '';
        badge.style.display = total > 0 ? 'inline-flex' : 'none';
    }

    window.updateCartCount = updateCartCount;

    document.addEventListener('DOMContentLoaded', function () {
        applyTranslations();
        loadFragment('site-header', 'includes/header.html', function () {
            markActiveNav();
            updateCartCount();
            setupNavToggle();
            applyTranslations();
            setupLangToggle();
        });
        loadFragment('site-footer', 'includes/footer.html', function () {
            applyTranslations();
        });
    });
})();
