gsap.timeline({
    scrollTrigger: {
        trigger: "#member", // tirgger 대상
        start: "30% 55%",
        end: "100% 0%",
        scrub: 1,
    },
})
    .to(".member_item:nth-child(1)", { y: "40", rotate: 40, ease: "none", duration: 7 }, 0)
    .to(".member_item:nth-child(2)", { y: "190", rotate: -50, ease: "none", duration: 6 }, 0)
    .to(".member_item:nth-child(3)", { y: "100", rotate: -50, ease: "none", duration: 7 }, 0)
    .to(".member_item:nth-child(4)", { y: "280", rotate: 50, ease: "none", duration: 6 }, 0);
