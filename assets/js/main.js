// Main_visual
const visualSwiper = new Swiper(".visual_wrap .swiper", {
  slidesPerView: 1,
  effect: 'fade',
  allowTouchMove: false,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

enableAutoplayOnView(visualSwiper);

// Main_point
const pointTabs = document.querySelectorAll('.point_tabs a');

const pointSwiper = new Swiper(".point_wrap .swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  touchRatio: 0.7,
  speed: 650,
  pagination: {
    el: ".point_wrap .swiper .swiper-pagination",
    type: 'bullets',
    enabled: true
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
      pagination: {
        enabled: false
      }
    }
  },
  on: {
    init: function() {equalizeSwiperHeight(this)},
    resize: function() {equalizeSwiperHeight(this)},
    breakpoint: function() {equalizeSwiperHeight(this)},
    slideChange: function() {
      setPointActiveTab(this.activeIndex);
    }
  }
});

pointTabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    pointSwiper.slideTo(index);
    setPointActiveTab(index);
  });
});

function setPointActiveTab(index) {
  pointTabs.forEach(tab => {
    tab.classList.remove('on');
    tab.setAttribute('aria-selected', 'false');
  });
  pointTabs[index].classList.add('on');
  pointTabs[index].setAttribute('aria-selected', 'true');
}

// Main_preview
const previewTabs = document.querySelectorAll('.preview_tabs a');

const previewSwiper = new Swiper(".preview_wrap .swiper", {
  slidesPerView: 1,
  touchRatio: 0.7,
  speed: 0,
  allowTouchMove: false,
  autoHeight: true,
  observer: true,
  observeParents: true,
  on: {
    slideChange: function() {
      setPreviewActiveTab(this.activeIndex);
    }
  }
});

previewTabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    previewSwiper.slideTo(index);
    setPreviewActiveTab(index);

    setTimeout(() => {
      previewSwiper.update();
      previewSwiper.updateAutoHeight(300);
    }, 50);
  });
});

const resizeObserver = new ResizeObserver(() => {
  previewSwiper.update();
  previewSwiper.updateAutoHeight(300);
});

resizeObserver.observe(document.querySelector('.preview_wrap'));

document.querySelectorAll('.preview_wrap img').forEach(img => {
  img.addEventListener('load', () => {
    previewSwiper.update();
    previewSwiper.updateAutoHeight(300);
  });
});

function setPreviewActiveTab(index) {
  previewTabs.forEach(tab => {
    tab.classList.remove('on');
    tab.setAttribute('aria-selected', 'false');
  });
  previewTabs[index].classList.add('on');
  previewTabs[index].setAttribute('aria-selected', 'true');
}

// Main_merit
const meritSwiper = new Swiper(".merit_wrap .swiper", {
  slidesPerView: 1,
  spaceBetween: 45,
  navigation: {
    prevEl: '.merit_prev',
    nextEl: '.merit_next'
  },
  a11y: {
    prevSlideMessage: '이전 특장점',
    nextSlideMessage: '다음 특장점'
  },
  touchRatio: 0.7,
  speed: 650,
  pagination: {
    el: ".merit_wrap .swiper .swiper-pagination",
    type: 'bullets',
    enabled: true
  },
  breakpoints: {
    768: {
      pagination: {
        enabled: false
      }
    }
  },
  on: {
    init: function() {equalizeSwiperHeight(this)},
    resize: function() {equalizeSwiperHeight(this)},
    breakpoint: function() {equalizeSwiperHeight(this)}
  }
});

// Main_feature
const featureTabs = document.querySelectorAll('.feature_tabs a');

const featureSwiper = new Swiper(".feature_wrap .swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  touchRatio: 0.7,
  speed: 650,
  on: {
    init: function() {equalizeSwiperHeight(this)},
    resize: function() {equalizeSwiperHeight(this)},
    breakpoint: function() {equalizeSwiperHeight(this)},
    slideChange: function() {
      setFeatureActiveTab(this.activeIndex);
    }
  }
});

featureTabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    featureSwiper.slideTo(index);
    setFeatureActiveTab(index);
  });
});

function setFeatureActiveTab(index) {
  featureTabs.forEach(tab => {
    tab.classList.remove('on');
    tab.setAttribute('aria-selected', 'false');
  });
  featureTabs[index].classList.add('on');
  featureTabs[index].setAttribute('aria-selected', 'true');
}

// Main_report
const reportSwiper = new Swiper(".report_wrap .swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    prevEl: '.report_prev',
    nextEl: '.report_next'
  },
  a11y: {
    prevSlideMessage: '이전 도입사례',
    nextSlideMessage: '다음 도입사례'
  },
  touchRatio: 0.7,
  speed: 650,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
  on: {
    init: function() {equalizeSwiperHeight(this)},
    resize: function() {equalizeSwiperHeight(this)},
    breakpoint: function() {equalizeSwiperHeight(this)}
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true
  }
});

enableAutoplayOnView(reportSwiper);

// Main_client
document.querySelectorAll('.client .marquee_track').forEach((track) => {
  const items = [...track.children];
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
});


// 슬라이드 높이값 맞춤
function equalizeSwiperHeight(swiper) {
  if (!swiper || !swiper.slides) return;

  requestAnimationFrame(() => {
    let max = 0;

    swiper.slides.forEach(slide => {
      slide.style.height = 'auto';
    });

    swiper.slides.forEach(slide => {
      if (slide.offsetParent === null) return;
      max = Math.max(max, slide.offsetHeight);
    });

    swiper.slides.forEach(slide => {
      slide.style.height = max + 'px';
    });
  });
}

// 스크롤 위치 시 슬라이드 작동
function enableAutoplayOnView(swiper, threshold = 0.3) {
  if (!swiper || !swiper.el) return;

  if (!swiper.params.autoplay) {
    swiper.params.autoplay = {
      delay: 5000,
      disableOnInteraction: false
    };
    swiper.autoplay.start();
  }

  swiper.autoplay.stop();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    });
  }, {threshold});

  observer.observe(swiper.el);
}