window.addEventListener('scroll', () => {
	//listens to scroll on entire window

	let x = document.getElementsByClassName("hidden");
			//defines all hidden content to call later
	let y = window.pageYOffset;
			//defines current px scrolled
		
		if(y>600) {
			x.classList.add('show');
				//add show class to elements w/ hidden class		
		}

});