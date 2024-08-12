// src/utils/common.js

// Function to determine the menu styles based on its open state and screen width
export const getMenuStyles = (menuOpened) => {
    // Check if the document width is less than or equal to 800px
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: menuOpened ? "0" : "-100%", // Slide menu in when opened, out when closed
        transition: "right 0.3s ease-in-out" // Smooth transition effect
      };
    }
    return {}; // Return empty style object for wider screens
  };
  
// Swiper slider settings for displaying cards
export const sliderSettings = {
    slidesPerView: 3, // Always show three slides at a time
    spaceBetween: 30, // Space between slides
    breakpoints: {
      480: {
        slidesPerView: 1, // Show one slide per view on very small screens
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2, // Show two slides per view on small screens
        spaceBetween: 30
      },
      750: {
        slidesPerView: 3, // Show three slides per view on medium screens
        spaceBetween: 30
      },
      900: {
        slidesPerView: 3, // Continue to show three slides per view on larger screens
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3, // Continue to show three slides per view on very large screens
        spaceBetween: 50
      },
      1400: {
        slidesPerView: 3, // Continue to show three slides per view on extra large screens
        spaceBetween: 60
      },
    },
  };