gsap.set("#report .txt_area p", { opacity: 1 });

document.querySelectorAll("#report .txt_area p").forEach((el) => {
    const split = new SplitText(el, {
        type: "chars",
        charsClass: "char",
    });
});
// 페이드 인
document.querySelectorAll("#report .txt_area p").forEach((el) => {
    gsap.from(el.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: { amount: 0.8 },
        scrollTrigger: {
            trigger: "#report",
            start: "top center", // 중앙쯤 들어올 때 시작
            toggleActions: "play reset play reset",
            // (enter, leave, enterBack, leaveBack)
        },
    });
});

gsap.set(".bown_btn", { y: "30px" });
gsap.from(".bown_btn", {
    y: "60px",
    duration: 0.5,
    ease: "power1.out",
    stagger: { amount: 0.8 },
    scrollTrigger: {
        trigger: "#report",
        start: "top center", // 중앙쯤 들어올 때 시작
        toggleActions: "play reset play reset",
        // (enter, leave, enterBack, leaveBack)
    },
});
