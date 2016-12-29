$(document).ready(function() {
    //menu class toggle 
    $('.navbar-toggler').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.navbar-minimal').toggleClass('open');
	})
    // Add smooth scrolling to all links TODO:CHANGE TO ALL LINKS, CURRENTLY ONLY ON FIRST NAV BUTTON
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
    // Moves banner image on mouseover function
    /**$('.bannerBackground').mousemove(function(e){
        var amountMovedX = (e.pageX * -0.5 / 60);
        var amountMovedY = (e.pageY * -1 / 30);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });   */
    // Slide toggle two divs on button click in content screen 2 
    $("#partOne").show();
    $("#partTwo").hide();
    
     $(".toggle").click(function () {       
        $("#partOne, #partTwo").slideToggle(400);      
    });
});