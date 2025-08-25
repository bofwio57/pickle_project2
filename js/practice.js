document.querySelectorAll(".practice_item").forEach((section) => {
    let leftImg = section.querySelector(".img_area .left");
    let rightImg = section.querySelector(".img_area .right");
    let text = section.querySelector(".txt_area");

    // 시작 위치 초기화
    gsap.set([leftImg, rightImg], { x: 0, rotation: 0 });
    gsap.set(text, { opacity: 0, y: "40px" });

    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "100% bottom",
            scrub: true,
            // markers: true,
        },
    })
        .to(leftImg, { x: "-50%", rotation: "-5%", duration: 0.5 }, 0)
        .to(rightImg, { x: "50%", rotation: "5%", duration: 0.5 }, 0)
        .to(text, { opacity: 1, y: "0", duration: 0.5 }, 0.5);
});
