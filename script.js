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
    var layoutSections = document.querySelectorAll('.layout > .content > div');
    var layoutSection = document.querySelector('.layout');

    var offset = 50;

    if (window.scrollY > layoutSection.offsetTop - offset) {
        sidebar.classList.add('fixed');
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


