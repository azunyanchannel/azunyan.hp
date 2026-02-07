window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const rabbit = document.querySelector('.rabbit');

    // Minimum load time of 2.5 seconds to show off the cute animation
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');

        // Remove from DOM after transition
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Matches CSS transition duration
    }, 2500);
});
