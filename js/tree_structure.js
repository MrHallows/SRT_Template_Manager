/* tree_structure.js */
/* js/tree_structure.js */


/* TODO:
 *
 * 
 *
 */


/*var state = {
	tab: '',
	item: ''
};
ls.set('SRTTM_State', JSON.stringify(state));*/


// Set the Notes tab to 'active'
/*$(document).ready(function() {
	if($('.tree-tabs a').hasClass('active')) {
		$(this).removeAttr('class', 'active');
		$('a[href="#tab-notes"]').attr('class', 'active');
	} else {
		$('a[href="#tab-notes"]').attr('class', 'active');
	}
});*/


// Save the tree to localStorage
/*$(window).on('load', function() {
	alert("window loading..");
	if(!ls.get('Notes_Tree')) {
		alert("Notes Tree not saved/loaded properly!\nSaving current state..");
		ls.set('Notes_Tree', $('#tab-notes').html());
	} else {
		$('#tab-notes').html(ls.get('Notes_Tree'));
	}

	if(!ls.get('Email_Tree')) {
		alert("Email Tree not saved/loaded properly!\nSaving current state..");
		ls.set('Email_Tree', $('#tab-email').html());
	} else {
		$('#tab-email').html(ls.get('Email_Tree'));
	}

	if(!ls.get('Contacts_Tree')) {
		alert("Contacts Tree not saved/loaded properly!\nSaving current state..");
		ls.set('Contacts_Tree', $('#tab-contacts').html());
	} else {
		$('#tab-contacts').html(ls.get('Contacts_Tree'));
	}
});*/

// Save the tree to localStorage
/*$(document).on('change', function() {
	alert("document changed!");
	ls.set('Notes_Tree', $('#tab-notes').html());
	ls.set('Email_Tree', $('#tab-email').html());
	ls.set('Contacts_Tree', $('#tab-contacts').html());
});*/


var state = state || {};

// Tabs
$('.tree-tabs').each(function() {
	// For each set of tabs, we want to keep track of
	// which tab is active and its associated content
	var $active, $content, $links = $(this).find('a');

	// If the location.hash matches one of the links, use that as the active tab.
	// If no match is found, use the first link as the initial active tab.
	$active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
	
	$active.addClass('active');

	$content = $($active[0].hash);

	// Hide the remaining content
	$links.not($active).each(function() {
		$(this.hash).hide();
	});

	// Bind the click event handler
	$(this).on('click', 'a', function(e) {

		// Make the old tab inactive
		$active.removeClass('active');
		$content.hide();

		// Update the variables with the new link and content
		$active = $(this);
		$content = $(this.hash);

		// Make the tab active
		$active.addClass('active');
		$content.show();

		// Save active tab state
		state.tab = $(this).attr('href');
		ls.set("SRTTM_State", JSON.stringify(state));

		// Prevent the anchor's default click action
		e.preventDefault();
	});
});

/*$('.tree-tab').on('click', function() {
    $(this).find('a').click();
});*/


// Dynamically set tree-item id's
/*var noteId = 0;//ls.get("Notes:Index");
$('.tree-item[item-type=note]').each(function() {
	this.id = 'note-' + ++noteId;
});

var emailId = 0;//ls.get("Email:Index");
$('.tree-item[item-type=email]').each(function() {
	this.id = 'email-' + ++emailId;
});

var contactId = 0;//ls.get("Contacts:Index");
$('.tree-item[item-type=contact]').each(function() {
	this.id = 'contact-' + ++contactId;
});*/


// Tree Components
/*var $tree = $('<div class="tree"></div>');
var $tree_item = function(item_type) {
	switch(item_type) {
		case "folder":
			return $('<div class="tree-item" item-type="folder" expanded="false" has-children="true"></div>');
			break;
		case "note":
			return $('<div class="tree-item" item-type="note" expanded="false" has-children="false"></div>');
			break;
		case "email":
			return $('<div class="tree-item" item-type="email" expanded="false" has-children="false"></div>');
			break;
		case "contact":
			return $('<div class="tree-item" item-type="contact" expanded="false" has-children="false"></div>');
			break;
		default:
			return $('<div class="tree-item" item-type="folder" expanded="false" has-children="true"></div>');
			break;
	}
};
var $tree_row = function(has_children) {
	switch(has_children) {
		case true:
			return $('<div class="tree-row" has-children="true" may-have-children="" select="false"></div>');
			break;
		case false:
			return $('<div class="tree-row" has-children="false" may-have-children="" select="false"></div>');
			break;
		default: // false
			return $('<div class="tree-row" has-children="false" may-have-children="" select="false"></div>');
			break;
	}
};
var $expand_icon = $('<span class="expand-icon"></span>');
var $tree_label = function(label) {
	return $('<span class="tree-label">' + label + '</span>');
};*/
/*var $rename = function() {
	return $('<input type="text" class="tree-rename" style="display: none;">');
};
$('.tree-label').after($rename());*/


// Edit tree-label text
/*$('.tree-row').on('dblclick', function() {
	var $tree_rename = $('<input type="text" class="tree-rename"/>');
	$tree_rename.init = (function() {
		return new $tree_rename;
	});//
	$('.tree-rename').remove();
	//$tree_rename.val("");
	var $lbl = $(this).find('.tree-label');
	var lbltxt = $lbl.text();
	var $notthis = $('.tree-label').parent().not(this).find('.tree-label');
	//var $ren = $(this).find('.tree-rename');
	log("$tree_rename.val(): " + $tree_rename.val());
	$lbl.after($tree_rename);
	$tree_rename.val($lbl.text());
	//var lbltxt = $lbl.text();
	$lbl.text("");
	$tree_rename.show().focus().select();
	log("$tree_rename.val(): " + $tree_rename.val());
	//$lbl.attr('contenteditable', 'true').focus().select();
	//log($lbl.text());
	// When ENTER is pressed, set value
	$tree_rename.on('keyup', function(e) {
		var keycode = e.charCode || e.keyCode;
		if(keycode === 13 || keycode === 9) {
			e.preventDefault();
			log("Pressed Enter Key!");
			if($tree_rename == "") {
				alert("Rename Error: the field cannot be blank.");
			} else {
				$lbl.text($tree_rename.val());
				$tree_rename.remove();
			}
			log("$lbl.text(): " + $lbl.text());
			log("$tree_rename.val(): " + $tree_rename.val());
			$('.tree-rename').remove();
			//$tree_rename.val("");
		}
	});
	log("$lbl.text(): " + $lbl.text());
	log("$tree_rename.val(): " + $tree_rename.val());
	//log("$ren.val(): " + $ren.val());
});*/


/*$('.tree-row').on('click', function() {
	var $lbl = $(this).find('.tree-label[contenteditable=true]');
	var $notthis = $('.tree-label').parent().not(this).find('.tree-label');
	//log("Label: " + $lbl.text());
});*/


$(document).ready(function() {
	// Set all tree-item and tree-children elements' 'expanded' attribute to 'false'
	$('.tree-item').attr('expanded', 'false');
	$('.tree-children').attr('expanded', 'false');

	// Set all tree-item and tree-children elements' 'select' attribute to 'false'
	$('.tree-item').attr('select', 'false');
	$('.tree-children').attr('select', 'false');

	// Remove 'is-editing' attribute from all tree-item elements
	$('.tree-item[is-editing]').removeAttr('is-editing');
});


// Toggle the 'expanded' attribute: true/false
$('.tree').on('click', '.tree-row[has-children=true] .expand-icon', function() {
	//log("this: " + $(this).text());
	var $par = $(this).parent().parent('.tree-item');
	var $sib = $(this).parent().next('.tree-children'); //.tree-children[expanded]
	var $lbl = $(this).parent().find('.tree-label');

	// Handle left padding
	var padl = $par.css('-webkit-padding-start');
	//log("padl: " + padl);

	/*$sib.css('-webkit-padding-start', function() {
		var digits = padl.match(/\d+/);
		//log("digits: " + digits);
		var newPad = (digits + 17) + 'px';
		//log("newPad: " + newPad);
		return newPad;
	});*/

	//var tier1_padl = $sib.find('.tree-row').css('-webkit-padding-start');
	//log("tree-children: " + tier1_padl);
	if($par.attr('expanded') == 'true') {
		$par.attr('expanded', 'false');
		$sib.attr('expanded', 'false');
		log("Attribute 'expanded' set to 'false' for item: " + $lbl.text());
	} else {
		$par.attr('expanded', 'true');
		$sib.attr('expanded', 'true');
		log("Attribute 'expanded' set to 'true' for item: " + $lbl.text());
	}
	//log("this: " + $(this).text());

	// Slide animation for .tree-children
	/*if($sib.css('-webkit-padding-start') == '0px') {
		var digits = padl.match(/\d+/);
		//log("digits: " + digits);
		newPad = (digits + 17) + 'px';
		//log("newPad: " + newPad);
		//$sib.css('display', 'block');
		return newPad;
	} else if($sib.css('-webkit-padding-start') == '17px') {
		var digits = padl.match(/\d+/);
		//log("digits: " + digits);
		newPad = (digits) + 'px';
		//log("newPad: " + newPad);
		//$sib.css('display', 'none');
		return newPad;
	}*/

	/*if($par.attr('expanded') == 'true') {
		$sib.attr('expanded', 'true');

		setTimeout(function() {
			$sib.css('display', 'block');
		}, 20);
	} else {
		$sib.attr('expanded', 'false');

		$sib.one('transitionend', function(e) {
			$sib.css({'display':'none','-webkit-padding-start':''});
		});
	}*/
});



// Set all tree-item and tree-children elements' 'select' attribute to 'false'
$(document).ready(function() {
	$('.tree-item').attr('select', 'false');
	$('.tree-children').attr('select', 'false');
});

// Toggle the 'select' attribute: true/false
$('.tree').on('click', '.tree-row', function() {
	var $par = $(this).parent('.tree-item');
	var $lbl = $(this).find('.tree-label');
	$('.tree-row').not(this).attr('select', 'false'); // false
	$('.tree-row').not(this).parent().attr('select', 'false'); // false
	$(this).attr('select', 'true'); // true
	$par.attr('select', 'true'); // true
	log("Selected: " + $lbl.text());

	// Save active item state
	state.item = $par.id;
	ls.set("SRTTM_State", JSON.stringify(state));

	//log($('.tree-row').not(this).parent('.tree-item'));
});

// Toggle the 'select' attribute: true/false
$('.tree').on('contextmenu', '.tree-row', function() {
	var $par = $(this).parent('.tree-item');
	var $lbl = $(this).find('.tree-label');
	$('.tree-row').not(this).attr('select', 'false'); // false
	$('.tree-row').not(this).parent().attr('select', 'false'); // false
	$(this).attr('select', 'true'); // true
	$par.attr('select', 'true'); // true
	log("Selected: " + $lbl.text());

	// Save active item state
	state.item = $par.id;
	ls.set("SRTTM_State", JSON.stringify(state));

	//log($('.tree-row').not(this).parent('.tree-item'));
});


/* *
 * This is used as a blueprint for new tree item elements.
 * @type {!HTMLElement}
 */
/*
var treeItemProto = (function() {
	var treeItem = document.createElement('div');
	treeItem.className = 'tree-item';
	treeItem.innerHTML = '<div class="tree-row">' + '<span class="expand-icon"></span>' + '<span class="tree-label"></span>' + '</div>' + '<div class="tree-children" role="group"></div>';
	treeItem.setAttribute('role', 'treeitem');
	return treeItem;
});
*/


/* *
 * Truncate Tree Labels
 */
//var $lbl_full;
//var $lbl_short;

/*var $selected = $('.tree-row[select=true]');
var $label = $selected.find('.tree-label');
var $label_text = $selected.find('.tree-label').text();
var $tree_item = $selected.parent('.tree-item');
var $tree_item_id = $tree_item.attr('id')
var $item_type = $selected.parent('.tree-item').attr('item-type');
var title_ext = " - " + $label_text;

var $form = document.getElementById('content');

var getLabelFull = (function() {
	$('.tree-label').each(function() {
		var full = $(this).text();
		log("getLabelFull: " + full);

		return full;
	});
})();

var getLabelShort = (function() {
	$('.tree-label').each(function() {
		var length = $(this).text().length;
		var cap = 19;
		var id = $(this).parent('.tree-item').attr('id');

		if(length >= cap) {
			var short = $(this).text().substr(0, cap) + "…";
			log("getLabelShort: " + short);
		}

		return short;
	});
})();*/

/*
var label = (function() {
	$('.tree-label').each(function() {

		//var $lbl_full = $(this).text();
		//$lbl_full.truncate($(this).text(), 19, "…");

		// Label text
		var $lbl_full = $(this).text();
		log("Label (Full): " + $lbl_full);

		// Label text length
		var $lbl_length = $(this).text().length;
		log("	Label Length: " + $lbl_length);

		var cap = 20;

		if($lbl_length >= cap) {
			log("		More than " + cap + " characters!\n");

			$lbl_short = $(this).text().substr(0, cap) + "…";
			log("	Label (Short): " + $lbl_short);

			$(this).text($lbl_short);
			log("	");
		} else {
			log("		Less than " + cap + " characters!");
			log("	");
		}

	});
})();
*/

//alert("label: " + label);


/* Context Menu for NoteTemplates */
$(document).on('contextmenu', ':not(.tree)', function(e) {
	e.preventDefault();
	var contextmenu_w = $('cr-menu').width();
	var contextmenu_h = $('cr-menu').height();
	var viewport_w = $('body').width();
	var viewport_h = $('body').height();
	// Display menu
	$('cr-menu').css({
		display: "block",
		left: e.pageX,
		top: e.pageY
	});
	// Keep menu in viewport left
	if(e.pageX + contextmenu_w > viewport_w) {
		$('cr-menu').css({
			left: e.pageX - contextmenu_w
		});
	}
	// Keep menu in viewport top
	if(e.pageY + contextmenu_h > viewport_h) {
		$('cr-menu').css({
			top: e.pageY - contextmenu_h - 20
		});
	}
	//log("contextmenu width: " + contextmenu_w + "px\n" + "contextmenu height: " + contextmenu_h + "px");
	//log("viewport width: " + viewport_w + "px\n" + "viewport height: " + viewport_h + "px");
});
$(document).on('click', function(e) {
	$('cr-menu').css({
		display: "none"
	});
});
