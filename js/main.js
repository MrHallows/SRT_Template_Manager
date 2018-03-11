/* main.js */
/* js/main.js */


// Array of Notes
var NotesList = localStorage[NotesList] ? JSON.parse(localStorage[NotesList]) : [];

// Array of Email
var EmailList = localStorage[EmailList] ? JSON.parse(localStorage[EmailList]) : [];

// Array of Contacts
var ContactsList = localStorage[ContactsList] ? JSON.parse(localStorage[ContactsList]) : [];


var state = state || {};

// View State
$(window).on('beforeunload', function() {
	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $tree_item.attr('item-type');

	// Save active tab state
	//var state = state || {};

	/*state.tab = $('a.active').attr('href');
	alert("state.tab: " + state.tab);
	state.item = $tree_item_id;
	alert("state.item: " + state.item);*/

	state.item = $tree_item_id;
	state = ls.set("SRTTM_State", JSON.stringify(state));
	//alert("state.item: " + state.item);

	/*$('.active').removeClass('active')
	$('a[href="' + state.tab + '"]').attr('class', 'active');
	$('.active').click();*/
});

$(window).on('load', function() {
	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $tree_item.attr('item-type');

	if(!ls.get("SRTTM_State")) {
		state = {
			tab: $('.active').attr('href'),
			item: $tree_item_id
		};
		ls.set("SRTTM_State", JSON.stringify(state));
	} else {
		state = JSON.parse(ls.get("SRTTM_State"));
	}
	
	state.item = $tree_item_id;
	//alert("state.item: " + state.item);

	$('.active').removeClass('active')
	$('a[href="' + state.tab + '"]').attr('class', 'active');
	$('.active').click();

	// Set 'display' property of .tree-children to 'none'
	//$('.tree-children').css('display', 'none');
	//$('.tree-children').addClass('hidden');
});

/*$(document).on('change', function() {
	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $tree_item.attr('item-type');

	//var state = state || {};

	state.tab = $('.tree-tab > a.active').id;
	alert("state.tab: " + state.tab);
	state.item = $tree_item_id;
	alert("state.item: " + state.item);

	ls.set("SRTTM_State", JSON.stringify(state));
});*/


$(document).on('click', '.tree-row', function() {
	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $tree_item.attr('item-type');

	log($item_type);
	switch($item_type) {
		case undefined:
			log("You have selected undefined!");
			break;

		case "note":
			log("You have selected a note!");
			$('#note-view').show();
			$('#email-view').hide();
			$('#contact-view').hide();

			var note = note || {};
			note.key = $tree_item_id;
			var _this = JSON.parse(ls.get(note.key));

			if(_this == null || undefined) {
				notification.open({
					severity: 'error',
					content: 'Note has not been defined!'
				});
			} else {
				notification.open({
					severity: 'success',
					content: 'Note has been defined!'
				});
			}

			if(_this.name == '' || null || undefined) {
				notification.open({
					severity: 'error',
					content: 'No name defined for this note!'
				});
			} else {
				$('#note-view .name > span').text(_this.name);
			}

			if(_this.body == '' || null || undefined) {
				notification.open({
					severity: 'error',
					content: 'No body defined for this note!'
				});
			} else {
				$('#note-view .body > pre').text(decode(_this.body));
			}
			break;

		case "email":
			log("You have selected a email!");
			$('#note-view').hide();
			$('#email-view').show();
			$('#contact-view').hide();

			var email = email || {};
			email.key = $tree_item_id;
			var _this = JSON.parse(ls.get(email.key));

			$('#email-view .name > span').text(_this.name);
			$('#email-view .to > span').text(_this.to);
			$('#email-view .cc > span').text(_this.cc);
			$('#email-view .subject > span').text(_this.subject);
			$('#email-view .attachments > span').text(_this.attachments);
			$('#email-view .body > pre').text(decode(_this.body));
			break;

		case "contact":
			log("You have selected a contact!");
			$('#note-view').hide();
			$('#email-view').hide();
			$('#contact-view').show();

			var contact = contact || {};
			contact.key = $tree_item_id;
			var _this = JSON.parse(ls.get(contact.key));

			$('#contact-view .firstname > span').text(_this.first);
			$('#contact-view .lastname > span').text(_this.last);
			$('#contact-view .fullname > span').text(_this.full);
			$('#contact-view .phone > span').text(_this.phone);
			$('#contact-view .email > span').text(_this.email);
			$('#contact-view .business > span').text(_this.business);
			$('#contact-view .ean > span').text(_this.ean);
			$('#contact-view .comments > pre').text(decode(_this.comments));
			break;
	}
});


/*
if (!ls.get("Notes:index")) {
	ls.set("Notes:index", 1);
} else {
	ls.get("Notes:index");
}

if (!ls.get("Email:index")) {
	ls.set("Email:index", 1);
} else {
	ls.get("Email:index");
}

if (!ls.get("Contacts:index")) {
	ls.set("Contacts:index", 1);
} else {
	ls.get("Contacts:index");
}*/


/*$('input').on('focus', function(e) {
    //$(this).after('<span class="input-clear"></span>');
    $(this).wrap('<span class="deleteicon"/>').after($('<span/>').click(function() {
        $(this).prev('input').val('').trigger('change').focus();
    }));
    $('input').on('blur', function(e) {
        $('input').parent('.deleteicon').find('span').remove();
    });
});*/
/*$('input').on('blur', function(e) {
    $(this).remove('.deleteicon span');
});*/

/*$(document).ready(function() {
    $('input').wrap('<span class="deleteicon"/>').after($('<span/>').click(function() {
        $(this).prev('input').val('').trigger('change').focus();
    }));
});*/

/* *
 * Resize
 */
/*var startingHeight;
var other;
$('.cp-panel').resizable({
    handles: 's',
    // try using "n" to see what happens...
    start: function(e, ui) {
        if ($(this).next('.cp-panel').length > 0) {
            other = $(this).next('.cp-panel');
        } else {
            other = $(this).prev('.cp-panel');
        }
        startingHeight = other.height();
    },
    resize: function(e, ui) {
        var dh = ui.size.height - ui.originalSize.height;
        if (dh > startingHeight) {
            // can't resize the box more then it's neighbour
            dh = startingHeight;
            ui.size.height = ui.originalSize.height + dh;
        }
        other.height(startingHeight - dh);
    }
});*/


/* *
 * Date Picker Handler
 */
/* HTML Example:
 *
 * <label>Start Date: </label><input name="StartDate">
 * <input id="date" type="button" value="select" onclick="displayDatePicker('StartDate');">
 */
$('.date').on('click', function(e) {
	$(this).each(function() {
		displayDatePicker('StartDate');
	});
});


/* *
 * Clear Cookies
 */
$('#btnClearCookies').on('click', function() {
	clearCookies();
	alert("Cookies have been cleared!");
});





    $('.modal-input').on('keydown', function(e) {
        if($(this).val() != "") {
            $(this).siblings('label').css('visibility', 'hidden');
            var lbl_text = $(this).siblings('label').text();
            log("Label " + lbl_text + " is hidden");
            log("Textbox value: " + $(this).val());
        } else {
            $(this).siblings('label').css('visibility', 'visible');
            var lbl_text = $(this).siblings('label').text();
            log("Label " + lbl_text + " is visible");
            log("Textbox value: " + $(this).val());
        }
    });