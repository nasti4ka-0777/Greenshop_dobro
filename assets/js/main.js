// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Toggle burger menu
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Handle submenu toggles
    const subMenuParents = document.querySelectorAll('.has-submenu');
    subMenuParents.forEach(parent => {
        parent.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Handle nested menus
    const subMenuItems = document.querySelectorAll('.sub-menu li');
    subMenuItems.forEach(item => {
        if (item.querySelector('.nested-menu')) {
            item.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.toggle('active');
                }
            });
        }
    });

    // Categories toggle functionality
    const categoriesHeader = document.querySelector('.categories-header');
    const categoriesSection = document.querySelector('.categories');

    categoriesHeader.addEventListener('click', function() {
        categoriesSection.classList.toggle('active');
    });

    // Price Range toggle functionality
    const priceRangeHeader = document.querySelector('.price-range .categories-header');
    const priceRangeSection = document.querySelector('.price-range');

    priceRangeHeader.addEventListener('click', function() {
        priceRangeSection.classList.toggle('active');
    });
});
