document.addEventListener("DOMContentLoaded", function () {
    // Loader
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
    });

    // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '×' : '☰';
    });

    // Close menu on click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // Active Page Indicator
    const currentPage = window.location.pathname.split('/').pop();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.classList.remove('active');
    });

    if (currentPage === 'index.html' || currentPage === '') {
        document.getElementById('home-box').classList.add('active');
    } else if (currentPage === 'kuliner.html') {
        document.getElementById('kuliner-box').classList.add('active');
    } else if (currentPage === 'budidaya.html') {
        document.getElementById('budidaya-box').classList.add('active');
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // Scroll Animation for Navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(28, 37, 41, 0.98)';
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'rgba(28, 37, 41, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
});