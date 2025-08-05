document.addEventListener('DOMContentLoaded', function() {
    // Initialize swipers for different sections
    ['credentials', 'inspirations', 'stats-swiper'].forEach(function(section) {
        const container = document.querySelector(`.swiper-container.${section}`);
        if (!container) return;

        const swiper = new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            on: {
                init: function() {
                    // Show initial info box
                    updateInfoBox(this);
                },
                slideChange: function() {
                    // Update info box on slide change
                    updateInfoBox(this);
                }
            }
        });

    function initializeSwiper(containerClass, options) {
        const container = document.querySelector(`.swiper-container.${containerClass}`);
        if (!container) return;

        // Extend swiper options with event handlers
        const swiperOptions = {
            ...options,
            on: {
                init: function() {
                    // Show initial info box
                    updateInfoBox(this);
                },
                slideChange: function() {
                    // Update info box on slide change
                    updateInfoBox(this);
                }
            }
        };

        return new Swiper(container, swiperOptions);
    }

    function updateInfoBox(swiper) {
        // Get the active slide even with loop mode
        const realIndex = swiper.realIndex;
        const activeSlide = swiper.slides[swiper.activeIndex];
        if (!activeSlide) return;

        const slideId = activeSlide.getAttribute('data-slide');
        const pageSection = swiper.el.closest('.page');
        if (!pageSection || !slideId) return;

        // Hide all info boxes in this section with transition
        const allInfoBoxes = pageSection.querySelectorAll('.info-box');
        allInfoBoxes.forEach(box => {
            box.style.opacity = '0';
            box.style.visibility = 'hidden';
        });

        // Show the matching info box with transition
        const matchingInfoBox = pageSection.querySelector(`.info-box[data-slide="${slideId}"]`);
        if (matchingInfoBox) {
            // First make it visible but transparent
            matchingInfoBox.style.visibility = 'visible';
            // Force a reflow to ensure the transition works
            void matchingInfoBox.offsetWidth;
            // Then fade it in
            matchingInfoBox.style.opacity = '1';
        }
    }

    // Add CSS for transitions
    const style = document.createElement('style');
    style.textContent = `
        .info-box {
            transition: opacity 0.3s ease;
            opacity: 0;
            visibility: hidden;
        }
        .info-box[style*="visibility: visible"] {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    }); 
});
