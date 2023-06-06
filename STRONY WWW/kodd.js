jQuery(function($)
	{
		//zresetuj scrolla
		$.scrollTo(0);
		
		$('#link2').click(function() { $.scrollTo($('#onas'), 1000);
		});
		$('#link3').click(function() { $.scrollTo($('#ola'), 1000);
		});
		$('#link4').click(function() { $.scrollTo($('#seba'), 1000);
		});
		$('#link5').click(function() { $.scrollTo($('#daniel'), 1000);
		});
		$('#link6').click(function() { $.scrollTo($('#anna'), 1000);
		});
		$('#link7').click(function() { $.scrollTo($('#karo'), 1000);
		});
		$('#link8').click(function() { $.scrollTo($('#gal'), 1000);
		});
		$('#link9').click(function() { $.scrollTo($('#kontakt'), 1000);
		});
	}
	);
		
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry)
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}else {
					entry.target.classList.remove('show');
				}
			});
		});

	const hiddenElements = document.querySelectorAll('.hidden');

	hiddenElements.forEach((el) => observer.observe(el));
	
	const hiddenElements1 = document.querySelectorAll('.hidden1');

	hiddenElements1.forEach((el) => observer.observe(el));

/*
var my_element = document.getElementById("my_element");

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
*/

$(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });
	
/*	
$(document).ready(function(){
  // Add smooth scrolling to all links
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
    } // End if
  });
});
*/
	