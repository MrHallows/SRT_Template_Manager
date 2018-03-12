/* notification.js */
/* utils/notification.js */
/* http://www.jacklmoore.com/notes/jquery-notification-tutorial/ */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Notification
 */
var notification = (() => {
    var method = {},
	$notification,
	$severity,
	$content,
	$close;

    // Open the notification
    method.open = (settings) => {		
		switch (settings.severity) {
			case 'success':
				$severity.addClass('success');
				$severity.removeClass('info');
				$severity.removeClass('warning');
				$severity.removeClass('error');
				break;
			case 'info':
				$severity.removeClass('success');
				$severity.addClass('info');
				$severity.removeClass('warning');
				$severity.removeClass('error');
				break;
			case 'warning':
				$severity.removeClass('success');
				$severity.removeClass('info');
				$severity.addClass('warning');
				$severity.removeClass('error');
				break;
			case 'error':
				$severity.removeClass('success');
				$severity.removeClass('info');
				$severity.removeClass('warning');
				$severity.addClass('error');
				break;
		
			default:
				break;
		}

		setTimeout(() => {
			$severity.empty().append(settings.severity);
			$content.empty().append(settings.content);
			
			$notification.removeClass('hide');
			$notification.addClass('show');
			$notification.show();
		}, 3000);
    };

    // Close the notification
    method.close = () => {
		$notification.removeClass('show');
		$notification.addClass('hide');
        $notification.hide();
        $severity.empty();
        $content.empty();
    };

    // Generate the HTML and add it to the document
    $notification = $('<div id="notification" class="unselectable"></div>');
    $severity = $('<span class="notification-severity"></span>');
    $content = $('<div class="notification-content"></div>');
    $close = $('<span class="close"></span>');

    // $notification.hide();
    $notification.append($severity, $content, $close);

    $(document).ready(() => {
        $('main').append($notification);
    });

    $close.on('click', (e) => {
        method.close();
        e.preventDefault();
    });

    $('.button.btn-cancel').on('click', (e) => {
		method.close();
        e.preventDefault();
    });

    return method;
});


$(document).ready(() => {
    
    // 
    $('#btnSettings').click((e) => {
        notification.open({
			severity: 'error',
			content: 'Hello!'
		});
		e.preventDefault();
    });
    
    // 
    $('.close').click((e) => {
        notification.close();
        e.preventDefault();
    });

})
