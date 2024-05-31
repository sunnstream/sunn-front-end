//This is where all non-Finsweet javascript for front-end interactions will live. 


//Dropdown Selector
  //Modifies the dropdown selector
  $('.select_sort').each(function() {
    var s = $(this).text();
    $('').append('<option value="' + s + '">' + s + '</option>');
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


 // Modifies the top margin between the underline and .button_text
document.addEventListener('DOMContentLoaded', function() {
    // Select the text element within the specified structure
    var buttonText = document.querySelector('.button_tertiary .button_text');
    
    if (buttonText) {
        // Add the custom underline class
        buttonText.classList.add('custom-underline');
    }
});



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

 //History Carousel functionality

 




 