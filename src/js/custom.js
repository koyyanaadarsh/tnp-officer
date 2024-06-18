$("#banner-slider").owlCarousel({
	items : 1,
	nav:true,
	dots:false,
	loop:true,
	autoplay:true,
	mouseDrag:true,
	autoplayHoverPause:true,
	navText : ["<span><i class='las la-angle-left'></i></span>","<span><i class='las la-angle-right'></i></span>"]
});

$("#logos-slider").owlCarousel({
	nav:false,
	dots:false,
	loop:true,
	autoplay:true,
	mouseDrag:true,
	autoplayTimeout: 1200,
	autoplayHoverPause:false,
	responsiveClass: true,
	responsive: {
  0: {
	items: 2, 
	margin:0  
  },
  600: {
	items: 3,
	margin:10  
  },
  1000: {
	items: 5,
	margin:20
  }
}
});

$("#testimonial-slider").owlCarousel({
	nav:true,
	dots:false,
	loop:true,
	autoplay:true,
	mouseDrag:true,
	autoplayHoverPause:true,
	navText : ["<span><i class='las la-arrow-circle-left'></i></span>","<span><i class='las la-arrow-circle-right'></i></span>"],
	responsiveClass: true,
	responsive: {
  0: {
	items: 1, 
	nav: true,
	autoplay:false,
	margin:0  
  },
  600: {
	items: 2,
	nav: false,
	margin:0  
  },
  1000: {
	items: 2,
	nav: false,
	loop: true,
	margin:0
  }
}
});

$('.owl-carousel').owlCarousel({
loop: true,
responsiveClass: true,
responsive: {
  0: {
	items: 1,
	nav: true
  },
  600: {
	items: 2,
	nav: false,
	margin:20  
  },
  1000: {
	items: 3,
	nav: false,
	loop: true,
	margin:30
  }
}
});

jQuery(window).scroll(function(){ 
	var scroll = jQuery(window).scrollTop();
	if (scroll>=150){ 
		jQuery('header').addClass('fixed-nav');
	}
	else{
		jQuery('header').removeClass('fixed-nav');
	}
});


wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};


    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
});