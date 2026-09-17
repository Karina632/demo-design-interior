/* =========================
   GALLERY DATA
========================= */

const galleryData = {

    exterior: {
        title: "Exterior",

        images: [
            {
                src: "images/exterior1.jpg",
                alt: "Exterior cabană"
            },
            {
                src: "images/exterior2.jpg",
                alt: "Peisaj montan"
            },
            {
                src: "images/exterior3.jpg",
                alt: "Natură și munți"
            },
            {
                src: "images/exterior4.png",
                alt: "Natură și munți"
            },
            {
                src: "images/exterior5.png",
                alt: "Natură și munți"
            }
            
        ]
    },


    living: {
        title: "Living",

        images: [
            {
                src: "images/living2.png",
                alt: "Living"
            },
            {
                src: "images/bucatarie.jpg",
                alt: "Living"
            },
            {
                src: "images/living.jpg",
                alt: "Living și dining"
            }
          
        ]
    },


    dormitoare: {
        title: "Dormitoare",

        images: [
            {
                src: "images/dormitor2.jpg",
                alt: "Dormitor"
            },
            {
                src: "images/dormitor3.jpg",
                alt: "Dormitor"
            },
            {
                src: "images/dormitor4.jpg",
                alt: "Dormitor"
            },
            {
                src: "images/dormitor5.jpg",
                alt: "Dormitor"
            },
            {
                src: "images/dormitor6.jpg",
                alt: "Dormitor"
            },
            {
                src: "images/dormitor1.jpg",
                alt: "Dormitor"
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


