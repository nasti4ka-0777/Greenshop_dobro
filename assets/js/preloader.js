setTimeout(() => {
    document.querySelector('.preloader').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'registration.html';
    }, 500);
}, 1000);