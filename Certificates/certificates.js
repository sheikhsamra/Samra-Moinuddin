// Example: fade-in animation for certificates on scroll
const boxes = document.querySelectorAll('.certificate-box');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
});
