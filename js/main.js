$(document).ready(function() {
    //Move 4 images in preparation for slide in animation
    if (($(window).width() <= 1024) && ($(window).height() <= 1366)) {
        //$("#laptop").css("margin-left", "-1000px");
        //$("#wacom").css("margin-left", "-500px");
    }
    else {
        $("#kamera").css("margin-left", "-1500px");
        $("#ipad").css("margin-left", "-1000px");
        $("#laptop").css("margin-left", "-500px");
        $("#wacom").css("margin-left", "-250px");
    }
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
    var control = 1;
    $(".toggle").click(function () {
        if ($(window).width() < 768 && $(window).height() < 740){
            if(control % 2 == 1){
                $("#contentTwoFirst").css("height", "185vh");
                control++;
            }
            else{
                $("#contentTwoFirst").css("height", "95vh");
                control--;
            }
        }
        $("#partOne, #partTwo").slideToggle(400);      
    });
    //activate slide in animation when scroll bar reaches a certain pixel value
    var scrollCheck = true
    $(window).scroll(function() {
        if($(this).height() < 750){
            if ($(this).scrollTop() > 500 && scrollCheck == true){
                scrollCheck = false;
                $( "#kamera" ).addClass("kameraAnim");
                $( "#ipad" ).addClass("ipadAnim");
                $( "#laptop" ).addClass("laptopAnim");
                $( "#wacom" ).addClass("wacomAnim");
            }
        } 
        if ($(this).scrollTop() > 700 && scrollCheck == true) {
            scrollCheck = false;
            $( "#kamera" ).addClass("kameraAnim");
            $( "#ipad" ).addClass("ipadAnim");
            $( "#laptop" ).addClass("laptopAnim");
            $( "#wacom" ).addClass("wacomAnim");
        }
    });
});