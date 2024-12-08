const headerMenu = document.querySelector(".header");
const burgerMenu = headerMenu.querySelector(".burger");
const headerBackdrop = headerMenu.querySelector(".header-backdrop");
const closeMenu = headerMenu.querySelector(".close-menu");

if (headerMenu && burgerMenu) {
  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("is-active");
    headerMenu.classList.toggle("menu-is-active");
    document.body.classList.toggle("overflow-hidden");
    document.body.setAttribute("data-lenis-prevent", "");
  });

  headerBackdrop.addEventListener("click", function () {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
    document.body.removeAttribute("data-lenis-prevent");
  });

  closeMenu.addEventListener("click", function () {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
    document.body.removeAttribute("data-lenis-prevent");
  });
}

window.addEventListener("scroll", function () {
  if (
    this.scrollY >=
    document.querySelector(".hero-section").offsetHeight / 2
  ) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

const heroTitle = document.querySelectorAll(".hero-title span");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroAction = document.querySelector(".hero-action");
const sliderListItem = document.querySelectorAll(".slider-list-item");
const sliderProgress = document.querySelector(".slider-progress");

gsap.fromTo(
  [heroSubtitle, heroTitle, heroAction, sliderListItem],
  {
    autoAlpha: 0,
    y: 100,
    stagger: 0.2,
  },
  {
    autoAlpha: 1,
    y: 0,
    stagger: 0.2,
  }
);
gsap.fromTo(
  sliderProgress,
  {
    autoAlpha: 0,
    y: "100",
  },
  {
    autoAlpha: 1,
    y: "0",
    delay: 1
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      invalidateOnRefresh: true,
      // markers: true,
    },
  })
  .to(
    ".sky",
    {
      y: 1000,
    },
    "0"
  )
  .to(
    ".mountains",
    {
      y: -300,
    },
    "0"
  )
  .to(
    ".man-standing",
    {
      y: -100,
    },
    "0"
  )
  .to(
    ".hero-content",
    {
      y: 450,
      autoAlpha: 0,
    },
    "0"
  );

const contentWrapper = document.querySelectorAll(".content-row");
contentWrapper.forEach((contentWrapper) => {
  const imageWrapper = contentWrapper.querySelector(".content-image");
  const image = imageWrapper.querySelector("img");

  const counter = contentWrapper.querySelector(".counter");

  const subtitle = contentWrapper.querySelectorAll(".content-subtitle");
  const title = contentWrapper.querySelectorAll(".content-title span");
  const description = contentWrapper.querySelectorAll(".content-copy");
  const action = contentWrapper.querySelectorAll(".content-action");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: contentWrapper,
        start: "center-=100 center",
        end: "center top",
        scrub: 0.2,
        pin: contentWrapper,
        invalidateOnRefresh: true,
        // markers: true,
      },
    })
    .fromTo(
      [subtitle, title, description, action],
      {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
      },
      "0"
    )
    .fromTo(
      counter,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      "0"
    )
    .fromTo(
      image,
      {
        autoAlpha: 0,
        scale: 1.5,
      },
      {
        autoAlpha: 1,
        scale: 1,
      },
      "0"
    );
});

gsap.to(".slider-progress-bar", {
  height: "100%",
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
