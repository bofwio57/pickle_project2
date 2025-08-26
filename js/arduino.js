gsap.set("#arduino .video_item", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray("#arduino .video_item:not(.video_item:last-child)");

images.forEach((image, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#arduino",
            scroller: document.body,
            start: () => "top -" + window.innerHeight * (i + 0.5),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
        },
    });

    tl.to(image, { height: 0 });
});

gsap.set("#arduino .txt_item", { zIndex: (i, target, targets) => targets.length - i });

var texts = gsap.utils.toArray("#arduino .txt_item");

texts.forEach((text, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#arduino",
            scroller: document.body,
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
        },
    });

    tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
});

ScrollTrigger.create({
    trigger: "#arduino",
    scroller: document.body,
    scrub: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true,
});
