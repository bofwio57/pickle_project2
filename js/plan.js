document.addEventListener("DOMContentLoaded", function () {
    // 플랜 등장
    const planListLi = gsap.utils.toArray(".plan_list li");

    planListLi.forEach((gsIt) => {
        const imgName = gsIt.querySelector(".plan_list li p");
        const imgArea = gsIt.querySelector(".img_area");
        const imgBox = gsIt.querySelector(".plan_list .img_box");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsIt,
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        tl.from(imgName, 1, { opacity: 0, translateY: "80px", ease: "expo.out" });
        tl.to(imgArea, 0.5, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "expo.out" }, "-=1");
        tl.to(imgBox, 1.5, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "expo.out" }, "-=0.5");
    });

    // 플랜 클릭시
    const imgImg = document.querySelectorAll(".plan_list .img_box img");
    for (let x = 0; x < imgImg.length; x++) {
        imgImg.item(x).onclick = function () {
            window.open(this.src);
        };
    }
});
