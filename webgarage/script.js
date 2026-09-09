document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENT
    ========================== */

    const header =
        document.getElementById("header");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const bookingModal =
        document.getElementById("bookingModal");

    const openBookingButton =
        document.getElementById("openBookingButton");

    const contactBookingButton =
        document.getElementById("contactBookingButton");

    const closeBookingButton =
        document.getElementById("closeBookingButton");

    const modalOverlay =
        document.getElementById("modalOverlay");

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingDate =
        document.getElementById("bookingDate");

    const serviceModal =
        document.getElementById("serviceModal");

    const serviceModalTitle =
        document.getElementById("serviceModalTitle");

    const serviceModalText =
        document.getElementById("serviceModalText");

    const serviceBookingButton =
        document.getElementById("serviceBookingButton");

    const closeServiceButton =
        document.getElementById("closeServiceButton");

    const serviceOverlay =
        document.querySelector(".service-overlay");

    const serviceButtons =
        document.querySelectorAll(".service-action");

    const packageButtons =
        document.querySelectorAll(".package-button");

    const galleryModal =
        document.getElementById("galleryModal");

    const galleryModalTitle =
        document.getElementById("galleryModalTitle");

    const galleryButtons =
        document.querySelectorAll(".gallery-item");

    const closeGalleryButton =
        document.getElementById("closeGalleryButton");

    const galleryOverlay =
        document.querySelector(".gallery-overlay");

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    const currentYear =
        document.getElementById("currentYear");

    const backTop =
        document.getElementById("backTop");


    /* =========================
       YEAR
    ========================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================
       HEADER SCROLL
    ========================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();


    /* =========================
       MOBILE MENU
    ========================== */

    function closeMobileMenu() {

        if (!mobileMenuButton ||
            !mobileMenu) {
            return;
        }

        mobileMenuButton.classList.remove(
            "active"
        );

        mobileMenu.classList.remove(
            "active"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (mobileMenuButton &&
        mobileMenu) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                const isActive =
                    mobileMenu.classList.toggle(
                        "active"
                    );

                mobileMenuButton.classList.toggle(
                    "active",
                    isActive
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isActive)
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });

    }


    /* =========================
       ACTIVE NAV
    ========================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    function updateActiveNav() {

        const currentPosition =
            window.scrollY + 160;

        let currentSection = "home";


        sections.forEach(
            function (section) {

                const top =
                    section.offsetTop;

                const height =
                    section.offsetHeight;

                const id =
                    section.getAttribute("id");


                if (
                    currentPosition >= top &&
                    currentPosition < top + height
                ) {

                    currentSection = id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute("href");


                link.classList.toggle(
                    "active",
                    href === "#" + currentSection
                );

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =========================
       TOAST
    ========================== */

    let toastTimer = null;


    function showToast(message) {

        if (!toast ||
            !toastMessage) {
            return;
        }


        toastMessage.textContent =
            message;


        toast.classList.add("show");


        if (toastTimer) {

            clearTimeout(toastTimer);

        }


        toastTimer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                4000
            );

    }


    /* =========================
       MODAL HELPERS
    ========================== */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        const otherActiveModal =
            document.querySelector(
                ".modal.active"
            );


        if (!otherActiveModal) {

            document.body.classList.remove(
                "modal-open"
            );

        }

    }


    /* =========================
       BOOKING
    ========================== */

    function openBooking() {

        closeMobileMenu();

        openModal(bookingModal);

    }


    if (openBookingButton) {

        openBookingButton.addEventListener(
            "click",
            openBooking
        );

    }


    if (contactBookingButton) {

        contactBookingButton.addEventListener(
            "click",
            openBooking
        );

    }


    if (closeBookingButton) {

        closeBookingButton.addEventListener(
            "click",
            function () {

                closeModal(bookingModal);

            }
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            function () {

                closeModal(bookingModal);

            }
        );

    }


    /* =========================
       DATE MINIMUM
    ========================== */

    if (bookingDate) {

        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");


        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        bookingDate.min =
            `${year}-${month}-${day}`;

    }


    /* =========================
       SERVICE MODAL
    ========================== */

    const serviceDescriptions = {

        "Auto Detailing":
            "Perawatan menyeluruh bagian eksterior dan interior untuk membantu mengembalikan kebersihan serta tampilan kendaraan.",

        "Ceramic Coating":
            "Treatment perlindungan permukaan cat untuk membantu menjaga kilap dan memberikan lapisan proteksi tambahan.",

        "Paint Correction":
            "Proses polishing bertahap untuk membantu mengurangi swirl, oksidasi, dan cacat ringan pada permukaan cat.",

        "Interior Detailing":
            "Pembersihan dan perawatan area interior agar kendaraan kembali terasa bersih, rapi, dan nyaman."

    };


    let selectedService = "";


    serviceButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    selectedService =
                        button.getAttribute(
                            "data-service"
                        );


                    if (serviceModalTitle) {

                        serviceModalTitle.textContent =
                            selectedService;

                    }


                    if (serviceModalText) {

                        serviceModalText.textContent =
                            serviceDescriptions[
                                selectedService
                            ] ||
                            "Informasi layanan tersedia melalui konsultasi.";

                    }


                    openModal(serviceModal);

                }
            );

        }
    );


    if (closeServiceButton) {

        closeServiceButton.addEventListener(
            "click",
            function () {

                closeModal(serviceModal);

            }
        );

    }


    if (serviceOverlay) {

        serviceOverlay.addEventListener(
            "click",
            function () {

                closeModal(serviceModal);

            }
        );

    }


    if (serviceBookingButton) {

        serviceBookingButton.addEventListener(
            "click",
            function () {

                closeModal(serviceModal);

                openBooking();


                const serviceSelect =
                    document.getElementById(
                        "service"
                    );


                if (serviceSelect &&
                    selectedService) {

                    serviceSelect.value =
                        selectedService;

                }

            }
        );

    }


    /* =========================
       PACKAGE BUTTONS
    ========================== */

    packageButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const packageName =
                        button.getAttribute(
                            "data-package"
                        );


                    openBooking();


                    const message =
                        document.getElementById(
                            "customerMessage"
                        );


                    if (message) {

                        message.value =
                            "Saya tertarik dengan paket " +
                            packageName +
                            ".";

                    }


                    showToast(
                        "Paket " +
                        packageName +
                        " dipilih."
                    );

                }
            );

        }
    );


    /* =========================
       BOOKING FORM
    ========================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const formData =
                    new FormData(
                        bookingForm
                    );


                const name =
                    String(
                        formData.get("name") || ""
                    ).trim();


                const phone =
                    String(
                        formData.get("phone") || ""
                    ).trim();


                const vehicle =
                    String(
                        formData.get("vehicle") || ""
                    ).trim();


                const service =
                    String(
                        formData.get("service") || ""
                    ).trim();


                const date =
                    String(
                        formData.get("date") || ""
                    ).trim();


                if (
                    !name ||
                    !phone ||
                    !vehicle ||
                    !service ||
                    !date
                ) {

                    showToast(
                        "Mohon lengkapi data booking."
                    );

                    return;

                }


                const dateObject =
                    new Date(
                        date + "T00:00:00"
                    );


                const formattedDate =
                    dateObject.toLocaleDateString(
                        "id-ID",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }
                    );


                const message =
                    [
                        "Permintaan Booking Haryadi Garage",
                        "",
                        "Nama: " + name,
                        "WhatsApp: " + phone,
                        "Kendaraan: " + vehicle,
                        "Layanan: " + service,
                        "Tanggal: " + formattedDate,
                        "Catatan: " +
                            (
                                formData.get(
                                    "message"
                                ) || "-"
                            )
                    ].join("\n");


                /*
                    DATA DISIMPAN DI BROWSER
                    AGAR FORM TETAP BERFUNGSI
                    TANPA BACKEND.
                */

                try {

                    localStorage.setItem(
                        "haryadiGarageBooking",
                        JSON.stringify(
                            {
                                name,
                                phone,
                                vehicle,
                                service,
                                date,
                                message:
                                    formData.get(
                                        "message"
                                    ) || "",
                                createdAt:
                                    new Date().toISOString()
                            }
                        )
                    );

                } catch (error) {

                    console.warn(
                        "Local storage tidak tersedia.",
                        error
                    );

                }


                closeModal(bookingModal);

                bookingForm.reset();


                showToast(
                    "Permintaan booking berhasil disiapkan."
                );


                /*
                    Salin detail booking ke clipboard
                    jika browser mengizinkan.
                */

                if (
                    navigator.clipboard &&
                    window.isSecureContext
                ) {

                    navigator.clipboard
                        .writeText(message)
                        .catch(
                            function () {
                                /* Tidak masalah jika clipboard gagal. */
                            }
                        );

                }

            }
        );

    }


    /* =========================
       GALLERY
    ========================== */

    galleryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const title =
                        button.getAttribute(
                            "data-title"
                        ) ||
                        "Gallery";


                    if (galleryModalTitle) {

                        galleryModalTitle.textContent =
                            title;

                    }


                    openModal(galleryModal);

                }
            );

        }
    );


    if (closeGalleryButton) {

        closeGalleryButton.addEventListener(
            "click",
            function () {

                closeModal(galleryModal);

            }
        );

    }


    if (galleryOverlay) {

        galleryOverlay.addEventListener(
            "click",
            function () {

                closeModal(galleryModal);

            }
        );

    }


    /* =========================
       ESC CLOSE
    ========================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            closeModal(bookingModal);
            closeModal(serviceModal);
            closeModal(galleryModal);

            closeMobileMenu();

        }
    );


    /* =========================
       BACK TO TOP
    ========================== */

    function updateBackTop() {

        if (!backTop) {
            return;
        }


        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop
    );


    if (backTop) {

        backTop.addEventListener(
            "click",
            function () {

                window.scrollTo(
                    {
                        top: 0,
                        behavior: "smooth"
                    }
                );

            }
        );

    }


    updateBackTop();


    /* =========================
       PREVENT INVALID PHONE
    ========================== */

    const phoneInput =
        document.getElementById(
            "customerPhone"
        );


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9+]/g,
                        ""
                    );

            }
        );

    }


    /* =========================
       INITIALIZATION
    ========================== */

    console.log(
        "Haryadi Garage website berhasil dimuat."
    );

});
