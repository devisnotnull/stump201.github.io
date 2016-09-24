
var callback = function(){
	// Rezise the skillz graphs
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	// 
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});

};

// Standard JQuery on document ready  
$(document).ready(callback);

var resize;

// Call 100ms after window resize
window.onresize = function() {

	clearTimeout(resize);

	resize = setTimeout(function(){
		callback();
	}, 100);

};