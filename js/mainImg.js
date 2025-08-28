gsap.from(".pickle_img", {
    duration: 2,
    delay: 1,
    opacity: 0,
    ease: "expo.inOut",
});

gsap.from(".main_tit", {
    duration: 2,
    delay: 1.3,
    opacity: 0,
    y: 50,
    ease: "expo.inOut",
});

gsap.set(".sub_page header .container", { opacity: 0 });
gsap.to(".sub_page header .container", {
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "expo.inOut",
});
