//Disables scroll while popup is open
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.open-modal').forEach(trigger => {
   trigger.addEventListener('click', function(){ 
     document.querySelectorAll('.body').forEach(target => target.classList.add('no-scroll')); 
     });
  });
 
  document.querySelectorAll('.close-modal').forEach(trigger => {
   trigger.addEventListener('click', function(){ 
     document.querySelectorAll('.body').forEach(target => target.classList.remove('no-scroll')); 
     });
  });
 });

 //Controls button arrow colors by manipulating the SVG's fillColor attribute
document.addEventListener('DOMContentLoaded', function() {
  // Select all img elements with the class "button_icon"
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
});

 //Gallery Slider functionality: https://swiperjs.com/
const gallerySlider = new Swiper(".swiper.is-gallery"), {
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 800,
  grabCursor: true,
  paralax: true,
  navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev"
  }};
  
//Dropdown Selector
//Modifies the dropdown selector

  document.querySelectorAll('.select_sort').forEach(function(element) {
      var s = element.textContent;
      var option = document.createElement('option');
      option.value = s;
      option.textContent = s;
      // Assuming there is a select element with id "mySelect"
      document.getElementById('mySelect').appendChild(option);
    });
  
  