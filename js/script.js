/* =========================
   GALLERY DATA
========================= */

const galleryData = {

    exterior: {
        title: "Exterior",

        images: [
            {
                src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2000&q=90",
                alt: "Exterior cabană"
            },
            {
                src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90",
                alt: "Peisaj montan"
            },
            {
                src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90",
                alt: "Natură și munți"
            },
            {
                src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=90",
                alt: "Peisaj de munte"
            }
        ]
    },


    living: {
        title: "Living",

        images: [
            {
                src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
                alt: "Living"
            },
            {
                src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
                alt: "Living și dining"
            },
            {
                src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
                alt: "Interior"
            }
        ]
    },


    dormitoare: {
        title: "Dormitoare",

        images: [
            {
                src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
                alt: "Dormitor"
            },
            {
                src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
                alt: "Dormitor"
            },
            {
                src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2000&q=90",
                alt: "Dormitor"
            },
            {
                src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90",
                alt: "Dormitor"
            }
        ]
    },


    bucatarie: {
        title: "Bucătărie",

        images: [
            {
                src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
                alt: "Bucătărie"
            },
            {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
                alt: "Bucătărie"
            },
            {
                src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=2000&q=90",
                alt: "Bucătărie"
            }
        ]
    },


    bai: {
        title: "Băi",

        images: [
            {
                src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
                alt: "Baie"
            },
            {
                src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90",
                alt: "Baie"
            }
        ]
    },


    curte: {
        title: "Curte & terasă",

        images: [
            {
                src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=90",
                alt: "Curte"
            },
            {
                src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=90",
                alt: "Natură"
            },
            {
                src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=90",
                alt: "Peisaj"
            }
        ]
    }

};


/* =========================
   GALLERY
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".gallery-card");

    const modal =
        document.querySelector(".gallery-modal");

    const modalInner =
        document.querySelector(".gallery-modal-inner");

    const modalImage =
        document.querySelector(".gallery-modal-image");

    const modalCategory =
        document.querySelector(".gallery-modal-category");

    const modalCounter =
        document.querySelector(".gallery-modal-counter");

    const dotsContainer =
        document.querySelector(".gallery-dots");

    const closeButton =
        document.querySelector(".gallery-modal-close");

    const previousButton =
        document.querySelector(
            ".gallery-modal-arrow--prev"
        );

    const nextButton =
        document.querySelector(
            ".gallery-modal-arrow--next"
        );


    let currentGallery = null;

    let currentIndex = 0;


    /* =====================
       OPEN
    ===================== */

    function openGallery(category) {

        const gallery =
            galleryData[category];

        if (!gallery) return;

        currentGallery = gallery;

        currentIndex = 0;

        modalCategory.textContent =
            gallery.title;

        createDots();

        updateImage();

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =====================
       CLOSE
    ===================== */

    function closeGallery() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

        currentGallery = null;

    }


    /* =====================
       IMAGE
    ===================== */

    function updateImage() {

        if (!currentGallery) return;


        const image =
            currentGallery.images[currentIndex];


        modalImage.style.opacity = "0";


        setTimeout(() => {

            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

            modalImage.style.opacity = "1";

        }, 120);


        modalCounter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(currentGallery.images.length).padStart(2, "0")}`;


        updateDots();

    }


    /* =====================
       NEXT
    ===================== */

    function nextImage() {

        if (!currentGallery) return;

        currentIndex =
            (currentIndex + 1)
            % currentGallery.images.length;

        updateImage();

    }


    /* =====================
       PREVIOUS
    ===================== */

    function previousImage() {

        if (!currentGallery) return;

        currentIndex =
            (currentIndex - 1 + currentGallery.images.length)
            % currentGallery.images.length;

        updateImage();

    }


    /* =====================
       DOTS
    ===================== */

    function createDots() {

        dotsContainer.innerHTML = "";

        currentGallery.images.forEach(
            (_, index) => {

                const dot =
                    document.createElement("button");

                dot.type = "button";

                dot.className =
                    "gallery-dot";

                dot.setAttribute(
                    "aria-label",
                    `Imaginea ${index + 1}`
                );

                dot.addEventListener(
                    "click",
                    (event) => {

                        event.stopPropagation();

                        currentIndex = index;

                        updateImage();

                    }
                );

                dotsContainer.appendChild(dot);

            }
        );

    }


    function updateDots() {

        const dots =
            dotsContainer.querySelectorAll(
                ".gallery-dot"
            );

        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );

            }
        );

    }


    /* =====================
       CARD CLICK
    ===================== */

    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.gallery;

                openGallery(category);

            }
        );

    });


    /* =====================
       BUTTONS
    ===================== */

    closeButton.addEventListener(
        "click",
        closeGallery
    );


    nextButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            nextImage();

        }
    );


    previousButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            previousImage();

        }
    );


    /* =====================
       BACKGROUND CLICK
       CLOSES MODAL
    ===================== */

    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal ||
                event.target === modalInner
            ) {

                closeGallery();

            }

        }
    );


    /* =====================
       IMAGE DOES NOT CLOSE
    ===================== */

    modalImage.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

        }
    );


    /* =====================
       KEYBOARD
    ===================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !modal.classList.contains("active")
            ) return;


            if (event.key === "Escape") {

                closeGallery();

            }


            if (event.key === "ArrowRight") {

                nextImage();

            }


            if (event.key === "ArrowLeft") {

                previousImage();

            }

        }
    );

});


/* =========================================================
   EXPERIENCES DATA
========================================================= */

const experienceData = {

    prapastiile: {
        number: "01",

        title: "Prăpăstiile Zărneștiului",

        category: "Natură & drumeții",

        distance: "~8 km",

        drive: "~15 min",

        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90",

        description:
            "Unul dintre cele mai spectaculoase locuri naturale din zona Zărneștiului, la poalele masivului Piatra Craiului. Este o alegere bună pentru o zi petrecută în natură și pentru trasee în zonă.",

        map:
            "https://www.google.com/maps?q=Prăpăstiile%20Zărneștiului&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Prăpăstiile+Zărneștiului"
    },


    aventura: {
        number: "02",

        title: "Wolf Park Adventure",

        category: "Aventură",

        distance: "~6 km",

        drive: "~10 min",

        image:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=2000&q=90",

        description:
            "O variantă bună pentru cei care vor să adauge puțină aventură unei zile în natură. Wolf Park Adventure se află în zona Zărnești, pe direcția Poiana Mărului.",

        map:
            "https://www.google.com/maps?q=Wolf+Park+Adventure+Zarnesti&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Wolf+Park+Adventure+Zarnesti"
    },


    bran: {
        number: "03",

        title: "Castelul Bran",

        category: "Istorie & cultură",

        distance: "~15 km",

        drive: "~20 min",

        image:
            "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=2000&q=90",

        description:
            "Unul dintre cele mai cunoscute obiective turistice din România și una dintre excursiile clasice pe care le poți face din Poiana Mărului.",

        map:
            "https://www.google.com/maps?q=Castelul+Bran&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Castelul+Bran"
    },


    dino: {
        number: "04",

        title: "Dino Parc Râșnov",

        category: "Familie",

        distance: "~17 km",

        drive: "~25 min",

        image:
            "https://images.unsplash.com/photo-1551404787-7c0f4c4d5c0b?auto=format&fit=crop&w=2000&q=90",

        description:
            "O destinație potrivită mai ales pentru familii. Dino Parc este situat în Râșnov, în apropierea Cetății Râșnov, și poate fi combinat ușor cu o excursie în oraș.",

        map:
            "https://www.google.com/maps?q=Dino+Parc+Rasnov&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Dino+Parc+Rasnov"
    },


    ursi: {
        number: "05",

        title: "Rezervația de Urși",

        category: "Natură & animale",

        distance: "~13 km",

        drive: "~20 min",

        image:
            "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=2000&q=90",

        description:
            "Rezervația de la Zărnești este una dintre atracțiile cunoscute ale zonei și poate fi inclusă într-o zi de explorare în jurul Poienii Mărului.",

        map:
            "https://www.google.com/maps?q=Sanctuarul+de+Ursi+Zarnesti&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Sanctuarul+de+Ursi+Zarnesti"
    },


    mancare: {
        number: "06",

        title: "Unde mănânci",

        category: "Restaurante",

        distance: "În Poiana Mărului",

        drive: "În apropiere",

        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90",

        description:
            "Dacă nu vrei să gătești la cabană, în Poiana Mărului există mai multe variante unde poți lua masa, printre care Maidali Restaurant, Restaurant Mama Leti și Flori de Mar.",

        map:
            "https://www.google.com/maps?q=restaurants+Poiana+Marului+Brasov&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=restaurants+Poiana+Marului+Brasov"
    },


    cumparaturi: {
        number: "07",

        title: "Ai uitat ceva?",

        category: "Cumpărături",

        distance: "În Poiana Mărului",

        drive: "În apropiere",

        image:
            "https://images.unsplash.com/photo-1601598851547-4302969d7a1f?auto=format&fit=crop&w=2000&q=90",

        description:
            "Pentru lucrurile de care ai nevoie pe parcursul sejurului există magazine în Poiana Mărului, inclusiv un minimarket local.",

        map:
            "https://www.google.com/maps?q=Minimarket+Poiana+Marului+Brasov&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Minimarket+Poiana+Marului+Brasov"
    },


    piatra: {
        number: "08",

        title: "Piatra Craiului",

        category: "Munți & drumeții",

        distance: "În zona cabanei",

        drive: "În funcție de traseu",

        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=90",

        description:
            "Poiana Mărului este poziționată într-o zonă excelentă pentru explorarea peisajului montan și a zonei Piatra Craiului. Pentru trasee, durata și dificultatea depind de punctul ales și de traseul parcurs.",

        map:
            "https://www.google.com/maps?q=Piatra+Craiului&output=embed",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Piatra+Craiului"
    }

};


/* =========================================================
   EXPERIENCE MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const experienceCards =
        document.querySelectorAll(
            ".experience-card"
        );

    const experienceModal =
        document.querySelector(
            ".experience-modal"
        );

    if (!experienceModal || !experienceCards.length) {
        return;
    }


    /* =========================
       ELEMENTS
    ========================= */

    const modalCard =
        experienceModal.querySelector(
            ".experience-modal-card"
        );

    const modalClose =
        experienceModal.querySelector(
            ".experience-modal-close"
        );

    const modalImage =
        experienceModal.querySelector(
            ".experience-modal-image img"
        );

    const modalCategory =
        experienceModal.querySelector(
            ".experience-modal-category"
        );

    const modalDistance =
        experienceModal.querySelector(
            ".experience-modal-distance"
        );

    const modalNumber =
        experienceModal.querySelector(
            ".experience-modal-number"
        );

    const modalTitle =
        experienceModal.querySelector(
            ".experience-modal-heading h2"
        );

    const modalQuickItems =
        experienceModal.querySelectorAll(
            ".experience-quick-item"
        );

    const modalDescription =
        experienceModal.querySelector(
            ".experience-description p"
        );

    const modalMap =
        experienceModal.querySelector(
            ".experience-map iframe"
        );

    const modalMapsButton =
        experienceModal.querySelector(
            ".experience-map-button"
        );


    /* =========================
       QUICK INFO ELEMENTS
    ========================= */

    const distanceValue =
        modalQuickItems[0]?.querySelector(
            "strong"
        );

    const driveValue =
        modalQuickItems[1]?.querySelector(
            "strong"
        );

    const categoryValue =
        modalQuickItems[2]?.querySelector(
            "strong"
        );


    /* =========================
       OPEN MODAL
    ========================= */

    function openExperience(key) {

        const data =
            experienceData[key];

        if (!data) return;


        /* IMAGE */

        modalImage.style.opacity = "0";

        setTimeout(() => {

            modalImage.src =
                data.image;

            modalImage.alt =
                data.title;

            modalImage.style.opacity = "1";

        }, 100);


        /* TEXT */

        modalNumber.textContent =
            data.number;

        modalTitle.textContent =
            data.title;

        modalCategory.textContent =
            data.category;

        modalDistance.textContent =
            `${data.distance} de cabană`;

        distanceValue.textContent =
            data.distance;

        driveValue.textContent =
            data.drive;

        categoryValue.textContent =
            data.category;

        modalDescription.textContent =
            data.description;


        /* MAP */

        modalMap.src =
            data.map;

        modalMapsButton.href =
            data.mapsLink;


        /* OPEN */

        experienceModal.classList.add(
            "active"
        );

        experienceModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =========================
       CLOSE MODAL
    ========================= */

    function closeExperience() {

        experienceModal.classList.remove(
            "active"
        );

        experienceModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    /* =========================
       CARD CLICK
    ========================= */

    experienceCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const key =
                    card.dataset.experience;

                openExperience(key);

            }
        );

    });


    /* =========================
       CLOSE BUTTON
    ========================= */

    modalClose.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            closeExperience();

        }
    );


    /* =========================
       CARD DOES NOT CLOSE
    ========================= */

    modalCard.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

        }
    );


    /* =========================
       BACKGROUND CLOSE
    ========================= */

    experienceModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                experienceModal
            ) {

                closeExperience();

            }

        }
    );


    /* =========================
       ESC
    ========================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !experienceModal.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            if (event.key === "Escape") {

                closeExperience();

            }

        }
    );

});