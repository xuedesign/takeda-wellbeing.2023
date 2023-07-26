//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//fancybox
loadjs(['https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js']);