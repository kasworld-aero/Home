(function() { 
     document.getElementById('cd-slider-items').innerHTML = '<li> <div class="image" style="background-image:url(http://2.bp.blogspot.com/-i07h6sMCUEg/UR-BrwHTmUI/AAAAAAAAAeE/ZnKaokMzL_0/s1600/Best-way-to-Book-cheap-Air-Tickets-online.png);"></div> <div class="content"><h3>GET CHEAP FLIGHT BOOKING</h3> <a href="https://kasworld-aero.blogspot.com/p/flight-booking.html" class="button">BOOK NOW</a> </div> </li>' +'<li> <div class="image" style="background-image:url(http://3.bp.blogspot.com/-ICVewvsLnpQ/UKMYBqEdw-I/AAAAAAAAAI8/QawfRkNjBgw/s1600/Jared%2527s+pics+538.JPG);"></div> <div class="content"><h3>ALL AVIATION TOOLS AVAILBLE</h3> <a href="https://kasworld-aero.blogspot.com/p/contact-us.html" class="button">CONTACT US</a> </div> </li>'
       +'<li> <div class="image" style="background-image:url(https://1.bp.blogspot.com/-aOtJvBKSm4Q/YEER76zqR5I/AAAAAAAAFiA/7pOhke1wbaEXCqvSw2VkPPPIUZECCLd-gCLcBGAsYHQ/s640/AERO%2BRADAR.JPG);"></div> <div class="content"><h3>LIVE FLIGHT STATUS ON AERO RADAR</h3> <a href="https://kasworld-aero.blogspot.com/p/aero-radar.html" class="button">AERO RADAR</a> </div> </li>'
       +'<li> <div class="image" style="background-image:url(https://1.bp.blogspot.com/-RYu81y7yEto/XNe-FvqdoUI/AAAAAAAAM1c/UVQ3jAEtvDElHkevpdOJUOoMCyVHxesGQCLcBGAs/s1600/virgin%2Baustralia%2Bairlines%2Bjobs.PNG);"></div> <div class="content"><h3>MAKE YOUR CAREER IN AVIATION</h3> <a href="https://kasworld-aero.blogspot.com/p/jobs.html" class="button">JOBS SEARCH</a> </div> </li>';

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		//create nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//create button prev
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//create button next
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//create counter
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//update counter
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};
	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});

})();
