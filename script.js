document.addEventListener('DOMContentLoaded', () => {

    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    const themeBtn = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        themeBtn.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const storyContent = document.getElementById('story-content');
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');
    
    let currentScale = 1;

    btnIncrease.addEventListener('click', () => {
        if (currentScale < 1.3) {
            currentScale += 0.05;
            storyContent.style.fontSize = `${currentScale}em`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentScale > 0.85) {
            currentScale -= 0.05;
            storyContent.style.fontSize = `${currentScale}em`;
        }
    });

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
