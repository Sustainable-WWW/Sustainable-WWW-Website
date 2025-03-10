document.addEventListener("DOMContentLoaded", function () {
    const swww_mobile_toggler = document.querySelector(".SWWW_MobileMenuToggler");
    const swww_mobile_menu = document.querySelector(".SWWW_Mobile_Menu");
    const swww_mobile_close_button = document.querySelector(".SWWW_Mobile_Menu_Close");
    const swww_mobile_menu_submenu_togglers = document.querySelectorAll(".SWWW_Mobile_Menu_Navigation_Submenu_Toggler");
  
    // IF MOBILE MENU TOGGLER AND MOBILE MENU EXISTS - ADD CLICK FUNCTION
    if (swww_mobile_toggler && swww_mobile_menu) {
        swww_mobile_toggler.addEventListener("click", function () {
            swww_mobile_menu.classList.toggle("SWWW_Mobile_Menu--Open");
        });
    }

    // IF MOBILE MENU CLOSE BUTTON EXISTS - ADD THE CLICK FUNCTION
    if (swww_mobile_close_button && swww_mobile_menu) {
        swww_mobile_close_button.addEventListener("click", function () {
            swww_mobile_menu.classList.remove("SWWW_Mobile_Menu--Open");
        });
    }

    // IF SUB MENU TOGGLERS - ADD CLICK FUNCTION
    swww_mobile_menu_submenu_togglers.forEach(function(toggler) {
        toggler.addEventListener("click", function () {
            const parentLi = toggler.closest("li");

            if (parentLi) {
                const submenu = parentLi.querySelector(".SWWW_Navigation_Submenu");
      
                // If the submenu exists
                if (submenu) {
                    // Check if the submenu has a max-height style
                    const currentMaxHeight = submenu.style.maxHeight;
      
                    if (currentMaxHeight) {
                        // If it already has a max-height, remove it
                        submenu.style.maxHeight = "";
                    } else {
                        // If it doesn't have a max-height, set it to the original height
                        const originalHeight = submenu.scrollHeight + "px";  // Get the original height of the submenu
                        submenu.style.maxHeight = originalHeight;
                    }
      
                    // Toggle the class on the <li> element
                    parentLi.classList.toggle("SWWW_Navigation_Submenu--Open");
                }
            }
        });
    });

    // FAQ ANSWER OPEN/CLOSE
    document.querySelectorAll(".SWWW_FAQ").forEach(function(faq) {
        faq.addEventListener("click", function(event) {
            if (event.target.tagName === "H4") {
                faq.classList.toggle("SWWW_FAQ--Open");
            }
        });
    });
});

// PAGE FADE-IN TRANSITION
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.SWWW_PageTransitionEffect');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('SWWW_PageTransitionEffect--Visible');

            setTimeout(() => observer.unobserve(entry.target), 100);
        });
    }, appearOptions);

    const setInitialVisibility = (element) => {
        requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top < windowHeight) {
                element.classList.add('SWWW_PageTransitionEffect--AlwaysVisible');
            } else {
                appearOnScroll.observe(element);
            }
        });
    };

    faders.forEach(fader => setInitialVisibility(fader));
});

// VIDEO PLAYER ELEMENT
// Switches the placeholder image with the video on click.
const videoPlaceholder = document.getElementById('SWWW_Explainer_Video');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        if (videoSrc) {
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = true;
            video.autoplay = true;
            video.muted = false;
            video.style.width = '100%';
            video.style.height = 'auto';
            this.replaceWith(video);
        } else {
            console.error('No data-video attribute found.');
        }
    });
} else {
    console.error('Element with ID "SWWW_Explainer_Video" not found.');
}