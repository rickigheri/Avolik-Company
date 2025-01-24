document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('single-content')) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                } else if (entry.target.classList.contains('sidebar')) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                }
            }
        });
    });

    const targets = document.querySelectorAll('.single-content, .sidebar');
    targets.forEach(target => observer.observe(target));
});