gsap.set("#purpose .txt_area p", { opacity: 1 });

document.querySelectorAll("#purpose .txt_area p").forEach((el) => {
    const split = new SplitText(el, {
        type: "chars",
        charsClass: "char",
    });
});
// 페이드 인
document.querySelectorAll("#purpose .txt_area p").forEach((el) => {
    gsap.from(el.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: { amount: 0.8 },
        scrollTrigger: {
            trigger: "#purpose",
            start: "top center", // 중앙쯤 들어올 때 시작
            toggleActions: "play reset play reset",
            // (enter, leave, enterBack, leaveBack)
        },
    });
});

gsap.set(".act_list", { y: "40px" });
gsap.timeline({
    scrollTrigger: {
        trigger: "#purpose .txt_area",
        start: "top 100%",
        end: "20% 100%",
        scrub: 2,
        markers: true,
    },
})
    .to(".act_list li:nth-child(1)", { y: "-40px", duration: 1, ease: "none" }, 0.2)
    .to(".act_list li:nth-child(2)", { y: "-40px", duration: 1, ease: "none" }, 0.4)
    .to(".act_list li:nth-child(3)", { y: "-40px", duration: 1, ease: "none" }, 0.6)
    .to(".act_list li:nth-child(4)", { y: "-40px", duration: 1, ease: "none" }, 0.8);
