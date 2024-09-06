document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});
window.onload = function() {
    const image =
    document.getElementById('resizable-image');
    image.style.width = '50%'
};