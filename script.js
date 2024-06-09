document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});



window.addEventListener('scroll', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarContainer = document.getElementById('sidebar-container');
    var layoutSections = document.querySelectorAll('.layout > .content > section');
    var layoutSection = document.querySelector('.layout');
    var elementHeight = layoutSection.offsetHeight;
    var layoutSectionBottom = layoutSection.offsetTop + elementHeight;

    var offset = 100;

    if (window.scrollY > layoutSection.offsetTop - offset) {
        if(this.window.scrollY >= layoutSectionBottom - 400){
          sidebarContainer.classList.add('sidebar-container-bottom');
          sidebar.classList.remove('fixed');
        }
        else{
            sidebarContainer.classList.remove('sidebar-container-bottom');
            sidebar.classList.add('fixed');
        }
    } else {
        sidebar.classList.remove('fixed');
    }


    layoutSections.forEach(function (section, index) {
        var sectionId = section.getAttribute('id');
        var sidebarItem = sidebar.querySelector('.sidebar-item:nth-child(' + (index + 1) + ') a');

        if (
            window.scrollY > section.offsetTop - offset &&
            window.scrollY < section.offsetTop + section.offsetHeight
        ) {
            sidebarItem.classList.add('active');
        } else {
            sidebarItem.classList.remove('active');
        }
    });


});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 101,
    modifier: 2,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


