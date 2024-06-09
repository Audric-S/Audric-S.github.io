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



(function(){
    emailjs.init("dMyJQpveAD2JagX0W");
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        emailjs.send("service_lpjhhhq", "template_wd0v24h", {
            from_name: name,
            reply_to: email,
            message_html: message
        }).then(function(response) {
            console.log('E-mail envoyé avec succès!', response);
            resetForm(); 
            openModal('Votre message a été envoyé avec succès!');
        }, function(error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
            openModal('Une erreur s\'est produite lors de l\'envoi du message.');
        });
    });
})();


function resetForm() {
    document.getElementById('contact-form').reset();
}

var modal = document.getElementById('modal');
var closeButton = document.getElementsByClassName('close')[0];

function closeModal() {
    modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

function openModal(message) {
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}
