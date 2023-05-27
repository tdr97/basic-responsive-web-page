window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('scroll-calss', window.scrollY > 150)
    })
    // const faqs = document.querySelectorAll('.faq');

// // faqs.forEach(faq => {
// //     faq.addEventListener('click', () => {
// //         faq.classList.toggle('open');
// //     })
// //     const icon = faq.querySelector('.faq-icon i');
// //     if (icon.className === 'uil uil-plus') {
// //         icon.className = 'uil uil-minus'
// //     } else { icon.className = 'uil uil-plus' }

// // })

// // function clicked(faq) {
// //     const faqs = document.querySelectorAll('.faq');
// //     faqs.forEach(faq => {
// //         faq.addEventListener('click', () => {
// //             faq.classList.toggle('open');


// //         })
// //     })
function clicked(faq) {
    const faqs = document.querySelectorAll('.faq');
    // faqs.addEventListener('click', () => {
    faqs.forEach(faq => {
            faq.classList.toggle('open');
        })
        // })
}

const menu = document.querySelector('.ul');
const open = document.querySelector('.open-btn');
const close = document.querySelector('.close-btn');

open.addEventListener('click', () => {
    // menu.style.display = "flex";
    menu.setAttribute('display', flex);

    // open.style.display = "none";
    open.setAttribute('display', none);

    // close.style.display = "flex";
    close.setAttribute('display', flex);

    menu.classList.toggle('open-list');

})