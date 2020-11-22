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
    
  

