// gnb
let gnbItems = document.querySelectorAll('.gnb > li > a');
let gnbSection = document.querySelector('.gnb_section_pc');
let gnbContents = document.querySelectorAll('.gnb_section_pc > section');

gnbItems.forEach((gnb) => {
  gnb.addEventListener('mouseenter', () => {
    gnbSection.style.display = 'flex';

    gnbContents.forEach((content) => {
      if (gnb.dataset.gnb === content.className) {
        content.style.display = 'flex';
      } else {
        content.style.display = 'none';
      }
    });
  });
});

// lnb, snb
let lnbItems = document.querySelectorAll('.lnb > ul > li > a');
let snbItems = document.querySelectorAll('.snb > ul > li');

lnbItems.forEach((lnb) => {
  lnb.addEventListener('mouseenter', () => {
    snbItems.forEach((snb) => {
      if (lnb.dataset.lnb === snb.className) {
        snb.style.display = 'flex';
      } else {
        snb.style.display = 'none';
      }
    });
  });
});

document.querySelector('.header_wrap').addEventListener('mouseleave', () => {
  gnbSection.style.display = 'none';
  snbItems.forEach((snb) => {
    snb.style.display = 'none';
  });
});

// mobile
let mobileMenu = document.querySelector('.mobile_menu .menu_btn');
let mobileCloseBtn = document.querySelector('.mobile_menu .menu_close');
let gnbMobileSection = document.querySelector('.gnb_section_mobile');
let gnbMobileItems = document.querySelectorAll('.gnb_section_mobile > ul > li > a');


mobileMenu.addEventListener('click', (e) => {
  e.currentTarget.style.display = 'none';
  mobileCloseBtn.style.display = 'flex';
  gnbMobileSection.style.display = 'flex';
});

mobileCloseBtn.addEventListener('click', (e) => {
  e.currentTarget.style.display = 'none';
  mobileMenu.style.display = 'flex';
  gnbMobileSection.style.display = 'none';
  gnbMobileItems.forEach(item => {
    item.classList.remove('spread');
    if (item.nextElementSibling) {
      item.nextElementSibling.style.display = 'none';
    }
  });
});

gnbMobileItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle')) {
      e.target.classList.toggle('spread');
    } else {
      return;
    }
    
    if (e.target.classList.contains('spread')) {
      e.target.nextElementSibling.style.display = 'flex';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1023) {
    mobileMenu.style.display = 'flex';
    mobileCloseBtn.style.display = 'none';
    gnbMobileSection.style.display = 'none';
  }
});