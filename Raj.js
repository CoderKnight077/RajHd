// Example: Display an alert when someone clicks on a social icon
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('You are now leaving the website to visit my social media page!');
    });
});

