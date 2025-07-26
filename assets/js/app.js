document.getElementById("year").textContent = new Date().getFullYear();

new Swiper('.skills-swiper', {
    loop: true,
    slidesPerView: 6,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
    }
});
new Swiper('.projects-swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

const form = document.getElementById("contact-form");
const successBox = document.getElementById("success");
const errorBox = document.getElementById("danger");

async function handleSubmit(event) {
    event.preventDefault();
    successBox.style.display = 'none';
    errorBox.style.display = 'none';

    const data = new FormData(form);

    try {
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        successBox.innerHTML = "✅ Thank you! Your message was sent successfully.";
        successBox.style.display = 'block';
        form.reset();
    } else {
        const result = await response.json();
        if (result.errors) {
        errorBox.innerHTML = result.errors.map(e => e.message).join(", ");
        } else {
        errorBox.innerHTML = "⚠️ Something went wrong. Please try again.";
        }
        errorBox.style.display = 'block';
    }
    } catch (error) {
    errorBox.innerHTML = "❌ Network error. Please try again later.";
    errorBox.style.display = 'block';
    }
}

form.addEventListener("submit", handleSubmit);