/* tooltip.js */
/* utils/tooltip.js */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Tooltip
 */
var tooltip = (() => {
    var method = {},
	$tooltip,
	$content;

    // Center the tooltip in the viewport
    /*method.center = (e) => {
        var top, left;
        top = Math.max($(window).height() - $tooltip.outerHeight(), 0) / 2;
        left = Math.max($(window).width() - $tooltip.outerWidth(), 0) / 2;
        
        $tooltip.css({
            top: top, //+ $(window).scrollTop(),
            left: left //+ $(window).scrollLeft()
        });
    };*/

    // Open the tooltip
    method.open = (settings) => {
        $content.empty().append(settings.content);
        $tooltip.css({
            width: settings.width || 'auto',
            minHeight: '20px',
            height: settings.height || 'auto',
            left: settings.left || this.pageX,
			top: settings.top || this.pageY/*,
			opacity: settings.opacity || 0/*,
			transition: settings.transition || '.2s ease'*/
        });
        $tooltip.show();
    };

    // Close the tooltip
    method.close = () => {
        $tooltip.hide();
        $content.empty();
    };

    method.flip = (e) => {

		var tooltip_w = $('.tool-tip').width() + 10;
		var tooltip_h = $('.tool-tip').height() + 2;

		var viewport_w = $('body').width();
		var viewport_h = $('body').height();

		//var top, left;

		// Keep menu in viewport left
		if(e.pageX + tooltip_w > viewport_w) {
			$('.tool-tip').css({
				left: e.pageX - tooltip_w
			});
		}

		// Keep menu in viewport top
		if(e.pageY + tooltip_h > viewport_h) {
			$('.tool-tip').css({
				top: e.pageY - tooltip_h
			});
		}
    };

    // Generate the HTML and add it to the document
    $tooltip = $('<div class="tool-tip"></div>');
    $content = $('<span class="tt-content"></span>');

    $tooltip.hide();
    $tooltip.append($content);

    $(document).ready(() => {
        $('body').append($tooltip);
    });

    return method;
}());


// Wait until the DOM has loaded before querying the document
$(document).ready(() => {

    $('[tip]').on('mousemove', (e) => {
    	//var evtobj = window.event ? event : e;

    	tooltip.open({
    		content: $(this).attr('tip'), //"Hello, Tooltip!",
    		left: e.pageX + 10,
    		top: e.pageY + 23,
    		/*opacity: 1*/
    	});
		tooltip.flip(e);
    	e.preventDefault();
    });

    $(document).on('mouseout', (e) => {
    	tooltip.close();
    	e.preventDefault();
    });

});
