const badgeEl = document.querySelector('header .badges');
const scrollEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if(window.scrollY) {
    // badge hidden
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(scrollEl, .2, {
      x: 0
    });
  }
  else {
    // badge show
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(scrollEl, .2, {
      x: 100
    });
  }
}, 300));

scrollEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// _.throttle(function, time)
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // Hide logic
    promotionEl.classList.add('hide');
  }
  else {
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size) {
  gsap.to(selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: delay
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  console.log(1);
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

