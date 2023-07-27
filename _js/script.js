//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//fancybox
loadjs(['https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js']);