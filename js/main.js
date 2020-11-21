
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
        prevArrow: false,
        nextArrow: false
        //prevArrow: $('.arrow-left'),
        //nextArrow: $('.arrow-right')
      });
      $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active');
      });
      $('.select').on('click', function () {
        $('.select__dropdown').toggleClass('select__dropdown_open');
      });
      $('.select_option').on('click', function () {
       var value = $(this).attr('data-value');
       console.log(value);
        });


  $(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  });
  
$(".reviews-slider").slick({
        draggable: false,
        
        swipe:false,
        dotsClass: 'before-slider__dots',
        dots: true
        
        
        //prevArrow: $('.arrow-left'),
        //nextArrow: $('.arrow-right')
      });
      

    });
