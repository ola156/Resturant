//pre load
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-page");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(".loading-page");
  });
});

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 1,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.1,
  }
);

//navbar

window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  //toggled fixed class in navbar on scroll
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

//show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

//card swiper
let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grapCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

//swiper main
const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//swiper
const swiperPro = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector(".food-preview-container");
let previewBox = document.querySelectorAll(".food-preview");

document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

//tab

let tabs = document.querySelectorAll(".tabs ul li");
let tabs_wrap = document.querySelectorAll(".tab_wrapper");

tabs.forEach((tab, tab_index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    tabs_wrap.forEach((content, content_index) => {
      if (content_index == tab_index) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

//menu-slide forv tab
const tabsBox = document.querySelector(".tab-box");

let isDragging = false;

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
};

const dragStop = () => {
  isDragging = false;
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

//event-slider

$(".event-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
