/* main.js */
/* js/main.js */


// Array of Notes
//var NotesList = localStorage[NotesList] ? JSON.parse(localStorage[NotesList]) : [];

// Array of Email
//var EmailList = localStorage[EmailList] ? JSON.parse(localStorage[EmailList]) : [];

// Array of Contacts
//var ContactsList = localStorage[ContactsList] ? JSON.parse(localStorage[ContactsList]) : [];


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

	//state.item = $tree_item_id;
	//alert("state.item: " + state.item);

	$('#' + state.item).find('.tree-row').attr('select', 'true');
	$('#' + state.item).find('.tree-children').attr('select', 'true');

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
	// var $selected = $('.tree-row[select=true]');
	// var $label = $selected.find('.tree-label');
	// var $label_text = $selected.find('.tree-label').text();
	// var $tree_item = $selected.parent('.tree-item');
	// var $tree_item_id = $tree_item.attr('id');
	// var $item_type = $tree_item.attr('item-type');

	var item = Tree.getActiveItem();
	var element = Tree.getActiveElement();
	//element.type = element.attributes['item-type'].nodeValue;

	log("item.type: ", item.type);
	log("element.type: ", element.type);
	switch(element.type) {
		case undefined:
			log("You have selected undefined!");
			break;

		case "note":
			log("You have selected a note!");
			$('#email-view').hide();
			$('#contact-view').hide();
			$('#note-view').show();

			var note = note || {};
			note.key = $tree_item_id;
			//var _this = JSON.parse(ls.get(note.key));

			if(item == null || item == undefined) {
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

			if(item.name == '' || item.name == null || item.name == undefined) {
				notification.open({
					severity: 'error',
					content: 'No name defined for this note!'
				});
			} else {
				$('#note-view .name > span').text(item.name);
			}

			if(item.body == '' || item.body == null || item.body == undefined) {
				notification.open({
					severity: 'error',
					content: 'No body defined for this note!'
				});
			} else {
				$('#note-view .body > pre').text(decode(item.body));
			}
			break;

		case "email":
			log("You have selected a email!");
			$('#note-view').hide();
			$('#contact-view').hide();
			$('#email-view').show();

			var email = email || {};
			email.key = $tree_item_id;
			//var item = JSON.parse(ls.get(email.key));

			$('#email-view .name > span').text(item.name);
			$('#email-view .to > span').text(item.to);
			$('#email-view .cc > span').text(item.cc);
			$('#email-view .subject > span').text(item.subject);
			$('#email-view .attachments > span').text(item.attachments);
			$('#email-view .body > pre').text(decode(item.body));
			break;

		case "contact":
			log("You have selected a contact!");
			$('#note-view').hide();
			$('#email-view').hide();
			$('#contact-view').show();

			var contact = contact || {};
			contact.key = $tree_item_id;
			//var _this = JSON.parse(ls.get(contact.key));

			$('#contact-view .firstname > span').text(item.first);
			$('#contact-view .lastname > span').text(item.last);
			$('#contact-view .fullname > span').text(item.full);
			$('#contact-view .phone > span').text(item.phone);
			$('#contact-view .email > span').text(item.email);
			$('#contact-view .business > span').text(item.business);
			$('#contact-view .ean > span').text(item.ean);
			$('#contact-view .comments > pre').text(decode(item.comments));
			break;
	}
});


/*
if (!ls.get("Notes:Index")) {
	ls.set("Notes:Index", 1);
} else {
	ls.get("Notes:Index");
}*/

if (!ls.get("Email:Index")) {
	ls.set("Email:Index", 1);
} else {
	ls.get("Email:Index");
}

if (!ls.get("Contacts:Index")) {
	ls.set("Contacts:Index", 1);
} else {
	ls.get("Contacts:Index");
}


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



/**
 * Right Shelf Menu Hover Glow
 */
$('.right-shelf').on('mouseover', function(e) {
	if (!$(this).hasClass('glow')) {
		$(this).addClass('glow');
	}
});
$('.right-shelf').on('mouseout', function (e) {
	if ($(this).hasClass('glow')) {
		$(this).removeClass('glow');
	}
});



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
