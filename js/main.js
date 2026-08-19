document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(
        "./components/header.html"
    );

    const data = await response.text();

    document.getElementById(
        "header-placeholder"
    ).innerHTML = data;

    const header =
        document.querySelector(".header");

    const hamburger =
        document.querySelector(".hamburger");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const closeButton =
        document.querySelector(".close-menu");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        if (mobileMenu.classList.contains("active"))
            return;

        const currentScroll =
            window.scrollY;

        if (currentScroll <= 50) {
            header.classList.remove(
                "scrolled",
                "hidden-navbar"
            );

            lastScroll = currentScroll;

            return;
        }

        if (currentScroll > lastScroll) {
            header.classList.add(
                "hidden-navbar"
            );
        } else {
            header.classList.remove(
                "hidden-navbar"
            );

            header.classList.add(
                "scrolled"
            );
        }

        lastScroll = currentScroll;
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.add("active");

        mobileMenu.classList.add("active");

        document.body.style.overflow =
            "hidden";
    });

    closeButton.addEventListener(
        "click",
        () => {
            hamburger.classList.remove(
                "active"
            );

            mobileMenu.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "";
        }
    );

    setTimeout(() => {
        header.classList.add("visible");
    }, 1200);
});

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader");

    const heroContent =
        document.querySelector(".hero-content");

    const heroFeatures =
        document.querySelector(".hero-features");

    setTimeout(() => {

        loader?.classList.add("hidden");

        heroContent?.classList.add("visible");

        heroFeatures?.classList.add("visible");

    }, 1200);

});


window.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth > 768) return;

    const wrapper =
        document.querySelector(
            ".hero-features-wrapper"
        );

    const cards =
        document.querySelectorAll(
            ".feature-card"
        );

    cards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                card.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest"
                });

            }
        );

    });

});