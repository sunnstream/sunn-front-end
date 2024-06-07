alert("Hello, world!");

document.addEventListener('DOMContentLoaded', () => {
    // Disables scroll while popup is open
    document.querySelectorAll('.open-modal').forEach(trigger => {
      trigger.addEventListener('click', function() { 
        document.querySelectorAll('.body').forEach(target => target.classList.add('is-no-scroll')); 
      });
    });
  
    document.querySelectorAll('.close-modal').forEach(trigger => {
      trigger.addEventListener('click', function() { 
        document.querySelectorAll('.body').forEach(target => target.classList.remove('is-no-scroll')); 
      });
    });
  
    // Controls button arrow colors by manipulating the SVG's fillColor attribute
    // Combined DOMContentLoaded event listener for efficiency
    var imgElements = document.querySelectorAll('img.button_icon');
    
    imgElements.forEach(function(img) {
      // Fetch the SVG content
      fetch(img.src)
        .then(response => response.text())
        .then(svgText => {
          // Create a temporary DOM element to hold the SVG
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = svgText;
  
          // Get the SVG element
          var svgElement = tempDiv.querySelector('svg');
  
          if (svgElement) {
            // Set the width and height to 1rem
            svgElement.style.width = '1rem';
            svgElement.style.height = '1rem';
  
            // Select all path elements within the SVG
            var paths = svgElement.querySelectorAll('path');
            
            // Iterate through each path element and change the fill attribute to "currentColor"
            paths.forEach(function(path) {
              path.setAttribute('fill', 'currentColor');
            });
  
            // Replace the img element with the modified SVG
            img.parentNode.replaceChild(svgElement, img);
          }
        })
        .catch(error => console.error('Error fetching SVG:', error));
    });
  
    // Gallery Slider functionality: https://swiperjs.com/
    const gallerySlider = new Swiper(".swiper.is-gallery", {
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,
      speed: 800,
      grabCursor: true,
      parallax: true,
      navigation: {
        nextEl: ".swiper-btn-next",  
        prevEl: ".swiper-btn-prev"   
      }
    });
    
    // Dropdown Selector
    // Modifies the dropdown selector
    document.querySelectorAll('.select_sort').forEach(function(element) {
      var s = element.textContent;
      var option = document.createElement('option');
      option.value = s;
      option.textContent = s;
      document.getElementById('mySelect').appendChild(option); // Assuming there is a select element with id "mySelect"
    });
  });

  
  

  //Card truncation

  document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 100; // Sets the maximum length of the truncated text
    const truncateElements = document.querySelectorAll('.truncate');
  
    truncateElements.forEach(element => {
      if (element.textContent.length > maxLength) {
        element.textContent = element.textContent.substring(0, maxLength) + '...';
      }
    });
  });

  //Swiper JS - Standard Title Slider

  const titleSlider = new Swiper(".swiper.is-slider.is-film-title", {
    loop: true,
    slidesPerView: 'auto',
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev"
    }

    console.log(".swiper-btn-next");

  });