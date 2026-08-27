document.addEventListener("DOMContentLoaded", async () => {

    /* =====================================================
       LOAD HEADER
    ===================================================== */

    const response = await fetch(
        "./components/header.html"
    );

    const data = await response.text();

    document.getElementById(
        "header-placeholder"
    ).innerHTML = data;


    /* =====================================================
       LOAD FOOTER
    ===================================================== */

    const footerResponse = await fetch(
        "./components/footer.html"
    );

    const footerData = await footerResponse.text();

    document.getElementById(
        "footer-placeholder"
    ).innerHTML = footerData;


    /* =====================================================
       HEADER ELEMENTS
    ===================================================== */

    const header =
        document.querySelector(".header");

    const hamburger =
        document.querySelector(".hamburger");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const closeButton =
        document.querySelector(".close-menu");


    /* =====================================================
       SCROLL HEADER
    ===================================================== */

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        /*
         * Dacă meniul mobil este deschis,
         * nu facem animația headerului.
         */

        if (
            mobileMenu.classList.contains("active")
        ) {
            return;
        }


        const currentScroll =
            window.scrollY;


        /*
         * Suntem în partea de sus
         */

        if (currentScroll <= 50) {

            header.classList.remove(
                "scrolled",
                "hidden-navbar"
            );

            lastScroll =
                currentScroll;

            return;
        }


        /*
         * Scroll în jos
         */

        if (
            currentScroll > lastScroll
        ) {

            header.classList.add(
                "hidden-navbar"
            );

        }


        /*
         * Scroll în sus
         */

        else {

            header.classList.remove(
                "hidden-navbar"
            );

            header.classList.add(
                "scrolled"
            );

        }


        lastScroll =
            currentScroll;

    });


    /* =====================================================
       OPEN MOBILE MENU
    ===================================================== */

    hamburger.addEventListener(
        "click",
        () => {

            hamburger.classList.add(
                "active"
            );

            mobileMenu.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    /* =====================================================
       CLOSE MOBILE MENU — X
    ===================================================== */

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


    /* =====================================================
       CLOSE MOBILE MENU — NAVIGATION LINK
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a"
        );


    mobileLinks.forEach(
        (link) => {

            link.addEventListener(
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

        }
    );


    /* =====================================================
       HEADER ENTRANCE
    ===================================================== */

    setTimeout(
        () => {

            header.classList.add(
                "visible"
            );

        },
        1200
    );

});


/* =========================================================
   LOADER + HERO ENTRANCE
========================================================= */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.querySelector(
                ".loader"
            );

        const heroContent =
            document.querySelector(
                ".hero-content"
            );

        const heroFeatures =
            document.querySelector(
                ".hero-features"
            );


        setTimeout(
            () => {

                loader?.classList.add(
                    "hidden"
                );

                heroContent?.classList.add(
                    "visible"
                );

                heroFeatures?.classList.add(
                    "visible"
                );

            },
            1200
        );

    }
);


/* =========================================================
   MOBILE HERO FEATURES
========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        if (window.innerWidth > 768) {
            return;
        }


        const wrapper =
            document.querySelector(
                ".hero-features-wrapper"
            );

        const cards =
            document.querySelectorAll(
                ".feature-card"
            );


        /*
         * Dacă nu există feature-uri,
         * nu facem nimic.
         */

        if (
            !wrapper ||
            !cards.length
        ) {
            return;
        }


        cards.forEach(
            (card) => {

                card.addEventListener(
                    "click",
                    () => {

                        card.scrollIntoView({
                            behavior:
                                "smooth",

                            inline:
                                "start",

                            block:
                                "nearest"
                        });

                    }
                );

            }
        );

    }
);