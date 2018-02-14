$( document ).ready(function() // run the script as soon as the page loads
{	
	var headerHeight = $('#header').height(); // getting the height of the header div

	$(window).scroll(function() // run the script when the user is scrolling
	{
	    if ($(window).scrollTop() >= headerHeight/1.61 && $(window).width() > 900) // if the user has scrolled passed 61% of the headers height 
	    {                                                                          // AND their browser window is in a "desktop-like" resolution/aspect-ratio then...

			$('#header-fixed').css('opacity','1'),100; // show/fade-in the alternate fixed header
			$('#header-fixed').css('margin-top','0'),100; // side the alterate fixed header in from the top
			
	    }
	    else // if not (else)...
	    {
			$('#header-fixed').css('opacity','0'),100; // hide/fade-out the alternate fixed header, showing the main header
			$('#header-fixed').css('margin-top','-25vh'),100; // hide the alternate fixed header by pushing it up off the screen
	    }
	})	
});
