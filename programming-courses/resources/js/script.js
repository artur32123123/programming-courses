(function () {
    var squares = document.querySelector('.animation-block');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
            }
        });
    });

    observer.observe(squares);
})();
