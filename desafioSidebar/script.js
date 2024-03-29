document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.list-pages ul li a');

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        links.forEach(otherLink => {
          otherLink.classList.remove('onsection');
        });
        link.classList.add('onsection');
      });
    });

    function updateActiveLink() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // 100 é a margem superior para considerar
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          links.forEach(link => {
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('onsection');
            } else {
              link.classList.remove('onsection');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebarContainerActive = document.querySelector('.sidebar-container-active');
  
    menuButton.addEventListener('click', function() {
      sidebarContainer.classList.toggle('hide-sidebar');
      sidebarContainerActive.classList.toggle('show-sidebar-active');
    });
  });
  