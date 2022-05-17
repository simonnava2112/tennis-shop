//let showMenu = document.querySelector('.menu-icon');
//let navigation = document.querySelector('.navigation');

jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

    menuBtn.click(function() {
        
        if(menu.hasClass('show')){

            
            menu.removeClass('show')

        }else {

        menu.addClass('show');
        }
    
    });

});

//Get the modal
let modal = document.querySelectorAll(".modal");

// Get the button that opens the modal
let cuerdas = document.querySelectorAll(".carta-producto");

// Get the <span> element that closes the modal
let cerrar = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
for(let i = 0; i < modal.length; i++) {
    cuerdas[i].onclick = function() {
        modal[i].style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    cerrar[i].onclick = function() {
        modal[i].style.display = "none";
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.style.display == "block") {
    event.target.style.display = "none";
  }
}