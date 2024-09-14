

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    delay: 500,
    duration: 2500,
    // reset: true
})

sr.reveal(".hero__images", { origin: "right" })
sr.reveal(".hero__texts", { origin: "left" })
sr.reveal(".popular__cards, .feature ,.cta, .blog")
sr.reveal(".testimonial__group", { origin: "left" })
sr.reveal(".testimonial__text", { origin: "right" })