// Selecione todos os elementos com imagens de fundo que deseja carregar com lazy loading
document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll(".js-lazy-background");

    if ("IntersectionObserver" in window) {
        const lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`;
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        // Fallback para navegadores sem suporte para IntersectionObserver
        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
        });
    }
});
