document.addEventListener("DOMContentLoaded", () => {
    gsap.from([".logo", ".nav_popup_toggle p"], {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: "expo.inOut",
    });

    const container = document.querySelector("main");
    const nav = document.querySelector("nav");
    const navPopupToggle = document.querySelector(".nav_popup_toggle");
    const navPopup = document.querySelector(".nav_popup");
    const navPopupContent = document.querySelector(".nav_popup_content");

    let isOpen = false;
    let isAnimating = false;

    navPopupToggle.addEventListener("click", () => {
        if (!isOpen) openMenu();
        else closeMenu();
    });

    //메뉴 토글 버튼 안의 텍스트
    function animateMenuToggle(isOpening) {
        const open = document.querySelector("p#nav_popup_open");
        const close = document.querySelector("p#nav_popup_close");

        gsap.to(isOpening ? open : close, {
            x: isOpening ? -5 : 5,
            y: isOpening ? -10 : 10,
            rotation: isOpening ? -5 : 5,
            opacity: 0,
            delay: 0.25,
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.to(isOpening ? close : open, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            delay: 0.5,
            duration: 0.5,
            ease: "power2.out",
        });
    }

    function openMenu() {
        if (isAnimating || isOpen) return;
        isAnimating = true;

        //nav bar
        gsap.to(nav, {
            background: "var(--page-color-body)",
            duration: 1.25,
            ease: "power4.inOut",
        });

        //회전 & 이동 & 확대
        gsap.to(container, {
            rotation: 10,
            x: 300,
            y: 450,
            scale: 1.5,
            duration: 1.25,
            ease: "power4.inOut",
        });

        animateMenuToggle(true);
        gsap.to(navPopupContent, {
            rotation: 0,
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.25,
            ease: "power4.inOut",
        });

        //아래에서 위로 슬라이드 + 페이드 인
        gsap.to(".menu a", {
            y: "0%",
            opacity: 1,
            duration: 1,
            delay: 0.75,
            stagger: 0.1,
            ease: "power3.out",
        });

        //펼쳐지면서 배경 열림
        gsap.to(navPopup, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
            duration: 1.25,
            ease: "power4.inOut",
            onComplete: () => {
                isOpen = true;
                isAnimating = false;
            },
        });
    }

    function closeMenu() {
        if (isAnimating || !isOpen) return;
        isAnimating = true;
        gsap.to(container, {
            rotation: 0,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.25,
            ease: "power4.inOut",
        });

        animateMenuToggle(false);

        gsap.to(navPopupContent, {
            rotation: -15,
            x: -100,
            y: -100,
            scale: 1.5,
            opacity: 0.25,
            duration: 1.25,
            ease: "power4.inOut",
        });

        gsap.to(navPopup, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.25,
            ease: "power4.inOut",
            onComplete: () => {
                isOpen = false;
                isAnimating = false;
                gsap.set(".menu a", { y: "120%" });
            },
        });
    }
});
