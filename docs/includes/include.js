// Simple HTML include loader for static sites
(function () {
    function loadFragment(containerId, url) {
        var container = document.getElementById(containerId);
        if (!container) return;
        fetch(url).then(function (resp) {
            if (!resp.ok) throw new Error('Network response was not ok');
            return resp.text();
        }).then(function (html) {
            container.innerHTML = html;
        }).catch(function (err) {
            console.error('Include failed for', url, err);
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
            // Info link active on index.html with no filters
            if ((path.endsWith('index.html') || path.endsWith('/')) && url.pathname.endsWith('index.html')) {
                if (!filter && !gender && !category) link.classList.add('active');
            }
            // Highlight based on query params
            if (filter && url.searchParams.get('filter') === filter) link.classList.add('active');
            if (gender && url.searchParams.get('gender') === gender) link.classList.add('active');
            if (category && url.searchParams.get('category') === category) link.classList.add('active');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadFragment('site-header', 'includes/header.html');
        loadFragment('site-footer', 'includes/footer.html');
        // run after a tick to allow header to insert
        setTimeout(markActiveNav, 50);
    });
})();
