$(document).ready(function(){

		$('.lazy').each(function(){
			var main_link = $(this).attr('data-src');
			$(this).attr('src',main_link);
		});
		// $('.lazy').attr('src',main_link);

		// var cuisine_height = $('.cuisines_block').height();
		// console.log(cuisine_height);
		// $('.sub_cuisine_open').css('height',cuisine_height);
		var l = $('.main_slide').scrollLeft(900000);
		var wid = $('.main_slide').scrollLeft();
		$('.main_slide').scrollLeft(0);

		$('#cuisine').click(function(){
			$('.plus').toggleClass('hide');
			$('.minus').toggleClass('sho');
			$(this).toggleClass('change_color');
			$('.cuisines_block').toggleClass('sub_cuisine_open');
		});

		setInterval(function(){
			var left_scroll = $('.main_slide').scrollLeft();


			console.log(left_scroll + " + " + wid);
			if(left_scroll!==0){
				$('.left-caret').fadeIn(500);
			}
			else{
				$('.left-caret').fadeOut(500);
			}


			if(left_scroll===wid){
				$('.right-caret').fadeOut(500);
			}
			else{
				$('.right-caret').fadeIn(500);
			}

		},100)

		$('.left-caret').click(function(){
				var lft = $('.main_slide').scrollLeft();
				$('.main_slide').animate({
					scrollLeft : lft-80
				},500);
			});
		$('.right-caret').click(function(){
				var lft = $('.main_slide').scrollLeft();
				$('.main_slide').animate({
					scrollLeft : lft+80
				},500);
			});
});