function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms) { }
}

sleep(20);

document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('loader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
};



	
    
    
$(window).load(function (){ 
       $(".before-after").twentytwenty({
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'Со скинали' // Set a custom after label
        
      });

      $(".before-slider").slick({
        draggable: false,
        
        swipe:false,
        dots: true,
        dotsClass: 'before-slider__dots',
        responsive:[
          {
            breakpoint: 768,
            settings:{
              arrows: false,
              
            }
          }
        ]
       
      });

      
  
  
  
 $(".reviews-slider").slick({
        
        dotsClass: 'reviews-slider__dots',
        dots: true,
        responsive:[
          {
            breakpoint: 768,
            settings:{
              arrows: false,
              
            }
          }
        ]
      });
    })
 var lastId,
		topMenu = $(".menu"),
		topMenuHeight = topMenu.outerHeight() + 15,
		// All list items
		menuItems = topMenu.find(".menu__link"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop - 50
		}, 1500);
		e.preventDefault();
  }); 
  $(window).scroll(function () {

		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});

		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    };
		})  
