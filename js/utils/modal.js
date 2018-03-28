/* modal.js */
/* utils/modal.js */
/* http://www.jacklmoore.com/notes/jquery-modal-tutorial/ */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Modal
 */
var modal = (function() {
    var method = {},
	$overlay,
	$modal,
	$titlebar,
	$title,
	$close,
	$content;

    // Center the modal in the viewport
    method.center = function() {
        var top, left;
        top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
        left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

        $modal.css({
            top: top + $(window).scrollTop(),
            left: left + $(window).scrollLeft()
        });
    };

    // Open the modal
    method.open = function(settings) {
        $title.empty().append(settings.title);
        $content.empty().append(settings.content);
        /*$modal.css({
            width: settings.width || 'auto',
            height: settings.height || 'auto'
        });*/
        method.center();
        $(window).bind('resize.modal', method.center);
        $modal.show();
        $overlay.show();
    };

    // Close the modal
    method.close = function() {
        $modal.hide();
        $overlay.hide();
        $title.empty();
        $content.empty();
        $(window).unbind('resize.modal');
    };

    // Generate the HTML and add it to the document
    $overlay = $('<div id="overlay"></div>');
    $modal = $('<div id="modal" class="glow"></div>');
    $titlebar = $('<div class="titlebar unselectable"></div>');
    $title = $('<span class="modal-title"></span>');
    $minimize = $('<span class="minimize"></span>');
    $maximize = $('<span class="maximize"></span>');
    $close = $('<span class="close"></span>');
    $content = $('<form id="content" method="post"></form>');

    $modal.hide();
    $overlay.hide();
    $modal.append($titlebar.append($title, $close, $maximize, $minimize), $content);

    $(document).ready(function() {
        $('body').append($overlay, $modal);
    });

    $close.on('click', function(e) {
        method.close();
        e.preventDefault();
    });

    $('.button.btn-cancel').on('click', function(e) {
		method.close();
        e.preventDefault();
    });

    return method;
}());


/*
function save_data() {
    ls.set("server", this.value);
    log("Saving " + this.value);
}

function load_data() {
    var input = document.getElementById("server");
    input.value = ls.get("server");
    log("Loading " + input.value);
}
load_data();

var input = document.getElementById("server");
input.onchange = save_data;
*/


//localStorage.setItem('Tree') = $('.tree').html();
