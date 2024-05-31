//This is where all non-Finsweet javascript for front-end interactions will live. 


//Dropdown Selector
  //Modifies the dropdown selector
  $('').each(function() {
    var s = $(this).text();
    $('').append('<option value="' + s + '">' + s + '</option>');
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


// Add no-scroll class to body when homepage CMS popup is open

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.category_item-link').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.body').forEach(target => target.classList.add('no-scroll')); 
    });
 });

 document.querySelectorAll('.popup_close-wrapper').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.body').forEach(target => target.classList.remove('no-scroll')); 
    });
 });
});
