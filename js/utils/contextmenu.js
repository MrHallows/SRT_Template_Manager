/* contextmenu.js */
/* utils/contextmenu.js */


/* *
 * Tree Context Menu
 */
var $context_menu = $('<div class="context-menu">');
var $new_item = ((label) => {
	$('<span class="menu-item"><a href="#">' + label + '</a></span>');
});

// Start the context menu with attribute 'status' set to 'inactive'
/*$('.context-menu').attr('status', 'inactive');

// On right mouse click, set attribute 'status' to 'active'
$(document).on('contextmenu', () => {
	$('.context-menu').attr('status', 'active');
});

// On left mouse click, set attribute 'status' to 'inactive'
$(document).on('click', () => {
	$('.context-menu').attr('status', 'inactive');
});*/


var $get_this = (() => {
	return $(this);
});

/* getPos */
//var getPos


/*$(document).on('contextmenu', (e) => {
    if (!$(e.target).is("#special"))
		return false;

    alert('#special right clicked');
    e.preventDefault();
});*/



/* *
 * Context Menu
 */
$(document).on('contextmenu', '.tree-row', (e) => {
	// Restrict the context menu to only open if .tree-row or .tree-label is right clicked.
	if (!$(e.target).is('.tree-row') && !$(e.target).is('.tree-label'))
		return false;

	$this = $get_this().parent('.tree-item');
	log("this: " + $this.tagName);

	log(".context-menu shown at: (" + e.pageX + ", " + e.pageY + ")");

    var $lbl = $(this).find('.tree-label');
	log(".context-menu opened on: " + e.target.classList == "tree-label");

	if(e.target.classList != "") {
		log(".context-menu opened on: " + e.target.classList);
	} else {
		log("Element tag: <" + e.target.tagName.toLowerCase() + ">\nError: No classes have been defined for this element.");
	}

	var contextmenu_w = $('.context-menu').width() + 2;
	var contextmenu_h = $('.context-menu').height() + 2;

	var viewport_w = $('body').width();
	var viewport_h = $('body').height();

	// Display menu
	$('.context-menu').css({
		display: "block",
		left: e.pageX,
		top: e.pageY
	});

	// Keep menu in viewport left
	if(e.pageX + contextmenu_w > viewport_w) {
		$('.context-menu').css({
			left: e.pageX - contextmenu_w
		});
	}

	// Keep menu in viewport top
	if(e.pageY + contextmenu_h > viewport_h) {
		$('.context-menu').css({
			top: e.pageY - contextmenu_h - 3
		});
	}

	//log("contextmenu width: " + contextmenu_w + "px\n" + "contextmenu height: " + contextmenu_h + "px");
	//log("viewport width: " + viewport_w + "px\n" + "viewport height: " + viewport_h + "px");

	e.preventDefault();
});


// Disable unrelated menu items
$('.tree').on('contextmenu', '.tree-row', (e) => {

	// If the right-clicked tree-row is not a folder, disable the "New Item" & "New Folder" menu items
	if($(this).parent('.tree-item').attr('item-type') != "folder") {
		$('#cm-new-folder').addClass('disabled');
		$('#cm-new-item').addClass('disabled');
	} else { // Otherwise, "enable" all menu items
		$('#cm-new-folder').removeClass('disabled');
		$('#cm-new-item').removeClass('disabled');
	}

	// If the right-clicked tree-row is a folder, disable the "Edit" menu item
	if($(this).parent('.tree-item').attr('item-type') == "folder") {
		$('#cm-edit').addClass('disabled');
	} else { // Otherwise, "enable" all menu items
		$('#cm-edit').removeClass('disabled');
	}

	e.preventDefault();
});


/* *
 * Menu Items: Functionality
 */

/* *
 * Rename
 */
$('.context-menu').on('click', '#cm-rename', (e) => {
	log("cm-rename clicked: (" + e.pageX + ", " + e.pageY + ")");
	log("e.target: " + e.target);

	e.preventDefault();

	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $item_type = $selected.parent('.tree-item').attr('item-type');
	var title_ext = " - " + $label_text;

	var $form = document.getElementById('content');

	modal.open({
		title: 'Rename' + title_ext,
		content: '<input type="search" class="modal-input" name="rename_new_name" placeholder="New Name"/><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Save</button></div>'
	});

	$form.rename_new_name.value = $label_text;
	$form.rename_new_name.focus();
	$form.rename_new_name.select();

	$('.modal-input[name=rename_new_name]').keydown((e) => {
		if (e.keyCode === 13) {
			$('.button.btn-submit.submit').click();
		}
	});

	$('.button.btn-submit.submit').on('click', (e) => {
		e.preventDefault();
		$('.tree-row[select=true]').find('.tree-label').text($form.rename_new_name.value);
		modal.close();
	});

	$('.button.btn-cancel.cancel').on('click', (e) => {
		e.preventDefault();
		modal.close();
	});
});


/* *
 * Edit
 */
$('.context-menu').on('click', '#cm-edit', (e) => {
	log("cm-edit clicked: (" + e.pageX + ", " + e.pageY + ")");
	log("e.target: " + e.target);

	e.preventDefault();

	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id')
	var $item_type = $selected.parent('.tree-item').attr('item-type');
	var title_ext = " - " + $label_text;

	var $form = document.getElementById('content');

	switch($item_type) {

		case "folder":
			/*modal.open({
				title: 'Edit Folder' + title_ext,
				content: '<input type="search" id="edit-template-name" class="modal-input" name="edit_folder_name" placeholder="Template Name"/><textarea id="edit-template-body" class="modal-input" name="edit_template_body"></textarea><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Save</button></div>'
			});*/
			alert("Disabled! Please select the 'Rename' option instead.");
			break;


		case "note":
			modal.open({
				title: 'Edit Note Template' + title_ext,
				content: '<input type="search" id="edit-template-name" class="modal-input" name="edit_note_name" placeholder="Template Name"/><textarea id="edit-template-body" class="modal-input" name="edit_note_body"></textarea><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Save</button></div>'
			});

			// Notes namespace
			var Notes = {
				index: ls.get("Notes:index"),

				init: () => {
					// Initialize the storage index
					if (!Notes.index) {
						ls.set("Notes:index", Notes.index = 1);
					}

					var note = note || {};

					if($tree_item.attr('id') == "" || $tree_item.attr('id') == null || $tree_item.attr('id') == undefined) {
						$tree_item.attr('id', 'note-' + ls.get("Notes:index"));
						note.key = $tree_item.attr('id');
					} else {
						note.key = $tree_item.attr('id');
					}

					//note.key = $tree_item.attr('id');

					// Check if the key already exists
					var exists = (key) => {
						if(!ls.get(note.key)) {
							return false;
						}
						return true;
					};

					// If the exists, open the Edit modal
					if(exists(note.key)) {
						alert("Valid key: " + note.key);
						Notes.edit(note);
					} else { // Otherwise, create it
						alert("Invalid key: " + note.key);
						Notes.create(note);
					}

					// On Save
					$('.button.btn-submit.submit').on('click', (e) => {

						// Save the note
						Notes.save(note);

						modal.close();
						e.preventDefault();
					});
				},

				// Create
				create: (note) => {
					alert("Creating note: " + note.key);

					ls.set(note.key, JSON.stringify(note));
					ls.set("Notes:index", ++Notes.index);

					alert("Created key: " + ls.get(note.key));
				},

				// Edit
				edit: (note) => {
					alert("Editing note: " + note.key);

					var _this = JSON.parse(ls.get(note.key));

					$form.edit_note_name.value = _this.name;
					$form.edit_note_body.value = decode(_this.body);
				},

				// Save
				save: (note) => {
					alert("Saving note: " + note.key);

					note.name = $form.edit_note_name.value;
					note.body = encode($form.edit_note_body.value);

					$label.text(note.name);

					alert("Saved key: " + note.key);
					ls.set(note.key, JSON.stringify(note));
				},

				// Path
				path: (note) => {
					//var path = ;
					//$tree_item = $selected.parent('.tree-item');
				}
			};
			Notes.init();
			break;


		case "email":
			modal.open({
				title: 'Edit Email Template' + title_ext,
				content: '<input type="search" id="edit-template-email-name" class="modal-input" name="edit_email_name" placeholder="Template Name"/><input type="search" id="edit-template-email-to" class="modal-input" name="edit_email_to" placeholder="To"/><input type="search" id="edit-template-email-cc" class="modal-input" name="edit_email_cc" placeholder="Cc"/><input type="search" id="edit-template-email-subject" class="modal-input" name="edit_email_subject" placeholder="Subject"/><input type="search" id="edit-template-email-attachments" class="modal-input" name="edit_email_attachments" placeholder="Attachments"/><textarea id="edit-template-email-body" class="modal-input" name="edit_email_body"></textarea><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Save</button></div>'
			});

			// Emails namespace
			var Emails = {
				index: ls.get("Emails:index"),

				init: () => {
					// Initialize the storage index
					if (!Emails.index) {
						ls.set("Emails:index", Emails.index = 1);
					}

					var email = email || {};

					if($tree_item.attr('id') == "" || $tree_item.attr('id') == null || $tree_item.attr('id') == undefined) {
						$tree_item.attr('id', 'note-' + ls.get("Emails:index"));
						email.key = $tree_item.attr('id');
					} else {
						email.key = $tree_item.attr('id');
					}

					//email.key = $tree_item.attr('id');

					// Check if the key already exists
					var exists = (key) => {
						if(!ls.get(email.key)) {
							return false;
						}
						return true;
					};

					// If the exists, open the Edit modal
					if(exists(email.key)) {
						alert("Valid key: " + email.key);
						Emails.edit(email);
					} else { // Otherwise, create it
						alert("Invalid key: " + email.key);
						Emails.create(email);
					}

					// On Save
					$('.button.btn-submit.submit').on('click', (e) => {

						// Save the email
						Emails.save(email);

						modal.close();
						e.preventDefault();
					});
				},

				// Create
				create: (email) => {
					alert("Creating email: " + email.key);

					ls.set(email.key, JSON.stringify(email));
					ls.set("Emails:index", ++Emails.index);

					alert("Created key: " + ls.get(email.key));
				},

				// Edit
				edit: (email) => {
					alert("Editing email: " + email.key);

					var _this = JSON.parse(ls.get(email.key));

					$form.edit_email_name.value = _this.name;
					$form.edit_email_to.value = _this.to;
					$form.edit_email_cc.value = _this.cc;
					$form.edit_email_subject.value = _this.subject;
					$form.edit_email_attachments.value = _this.attachments;
					$form.edit_email_body.value = decode(_this.body);
				},

				// Save
				save: (email) => {
					alert("Saving email: " + email.key);

					email.name = $form.edit_email_name.value;
					email.to = $form.edit_email_to.value;
					email.cc = $form.edit_email_cc.value;
					email.subject = $form.edit_email_subject.value;
					email.attachments = $form.edit_email_attachments.value;
					email.body = encode($form.edit_email_body.value);

					$label.text(email.full);

					alert("Saved key: " + email.key);
					ls.set(email.key, JSON.stringify(email));
				},

				// Path
				path: (email) => {
					//var path = ;
					//$tree_item = $selected.parent('.tree-item');
				}
			};
			Emails.init();
			break;


		case "contact":
			modal.open({
				title: 'Edit Contact' + title_ext,
				content: '<input type="hidden" class="modal-input" name="_id" value="0"/><input type="search" id="edit-contact-first-name" class="modal-input" name="edit_contact_first_name" placeholder="First Name"/><input type="search" id="edit-contact-last-name" class="modal-input" name="edit_contact_last_name" placeholder="Last Name"/><input type="search" id="edit-contact-full-name" class="modal-input" name="edit_contact_full_name" placeholder="Full Name"/><input type="search" id="edit-contact-phone" class="modal-input" name="edit_contact_phone" placeholder="Phone" onkeydown="javascript:backspacerDOWN(this,event);" onkeyup="javascript:backspacerUP(this,event);"/><input type="search" id="edit-contact-email" class="modal-input" name="edit_contact_email" placeholder="Email"/><input type="search" id="edit-contact-business" class="modal-input" name="edit_contact_business" placeholder="Business"/><input type="search" id="edit-contact-ean" class="modal-input" name="edit_contact_ean" placeholder="EAN"/><textarea id="edit-contact-comments" class="modal-input" name="edit_contact_comments" placeholder="Comments"></textarea><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Save</button></div>'
			});

			// Contacts namespace
			var Contacts = {
				index: ls.get("Contacts:index"),

				init: () => {
					// Initialize the storage index
					if (!Contacts.index) {
						ls.set("Contacts:index", Contacts.index = 1);
					}

					var contact = contact || {};

					if($tree_item.attr('id') == "" || $tree_item.attr('id') == null || $tree_item.attr('id') == undefined) {
						$tree_item.attr('id', 'note-' + ls.get("Contacts:index"));
						contact.key = $tree_item.attr('id');
					} else {
						contact.key = $tree_item.attr('id');
					}

					//contact.key = $tree_item.attr('id');

					// Check if the key already exists
					var exists = (key) => {
						if(!ls.get(contact.key)) {
							return false;
						}
						return true;
					};

					// If the exists, open the Edit modal
					if(exists(contact.key)) {
						alert("Valid key: " + contact.key);
						Contacts.edit(contact);
					} else { // Otherwise, create it
						alert("Invalid key: " + contact.key);
						Contacts.create(contact);
					}

					// On Save
					$('.button.btn-submit.submit').on('click', (e) => {

						// Save the contact
						Contacts.save(contact);

						modal.close();
						e.preventDefault();
					});
				},

				// Create
				create: (contact) => {
					alert("Creating contact: " + contact.key);

					ls.set(contact.key, JSON.stringify(contact));
					ls.set("Contacts:index", ++Contacts.index);

					alert("Created key: " + ls.get(contact.key));
				},

				// Edit
				edit: (contact) => {
					alert("Editing contact: " + contact.key);

					var _this = JSON.parse(ls.get(contact.key));

					$form.edit_contact_first_name.value = _this.first;
					$form.edit_contact_last_name.value = _this.last;
					$form.edit_contact_full_name.value = _this.full;
					$form.edit_contact_phone.value = _this.phone;
					$form.edit_contact_email.value = _this.email;
					$form.edit_contact_business.value = _this.business;
					$form.edit_contact_ean.value = _this.ean;
					$form.edit_contact_comments.value = decode(_this.comments);
				},

				// Save
				save: (contact) => {
					alert("Saving contact: " + contact.key);

					contact.first = $form.edit_contact_first_name.value;
					contact.last = $form.edit_contact_last_name.value;
					contact.full = $form.edit_contact_full_name.value = ($form.edit_contact_first_name.value + " " + $form.edit_contact_last_name.value);
					contact.phone = $form.edit_contact_phone.value;
					contact.email = $form.edit_contact_email.value;
					contact.business = $form.edit_contact_business.value;
					contact.ean = $form.edit_contact_ean.value;
					contact.comments = encode($form.edit_contact_comments.value);

					$label.text(contact.full);

					alert("Saved key: " + contact.key);
					ls.set(contact.key, JSON.stringify(contact));
				},

				// Path
				path: (contact) => {
					//var path = ;
					//$tree_item = $selected.parent('.tree-item');
				}
			};
			Contacts.init();
			break;
	}

	$('.button.btn-cancel.cancel').on('click', (e) => {
		modal.close();
		e.preventDefault();
	});
});


/* *
 * Delete
 */
$('.context-menu').on('click', '#cm-delete', (e) => {
	log("cm-delete clicked: (" + e.pageX + ", " + e.pageY + ")");
	log("e.target: " + e.target);

	// Give the user a second chance
	var confirm_delete;

	var $item_type = $('[select=true]').parent('.tree-item').attr('item-type');

	switch($item_type) {
		case "folder":
			confirm_delete = confirm("Warning: This action cannot be undone!\nAre you sure you would like to delete this folder and all of its contents?");
			break;
		case "note":
			confirm_delete = confirm("Warning: This action cannot be undone!\nAre you sure you would like to delete this note template?");
			break;
		case "email":
			confirm_delete = confirm("Warning: This action cannot be undone!\nAre you sure you would like to delete this email template?");
			break;
		case "contact":
			confirm_delete = confirm("Warning: This action cannot be undone!\nAre you sure you would like to delete this contact?");
			break;
	}

	log("confirm_delete: " + confirm_delete);

	if(confirm_delete == true) {
		log("e.target: " + e.target);
		$('[select=true]').parent('.tree-item').remove();
		log("Item was deleted!");
	} else {
		log("Item was not deleted!");
	}
});


/* *
 * New Item
 */
$('.context-menu').on('click', '#cm-new-item', (e) => {
	log("cm-new-item clicked: (" + e.pageX + ", " + e.pageY + ")");
	log("e.target: " + e.target);

	if($(e.target).is('.disabled')) {
		alert("Disabled! To create a new Item, open the context menu (right click) on the folder you would like it to be created in.");
		return false;
	} else {
		// New Item Modal
		$('#new-item-parent').val($(this).val());
	}

	var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $selected.closest('.tree-tab-content').attr('item-type');
	//alert("$item_type: " + $item_type);
	var $item_id = $item_type + '-' + ls.get("Notes:index");
	var title_ext = " - " + $label_text;

	var $form = document.getElementById('content');
	var $tab = $('.tree-row[select=true]').parent('.tree-tab-content');
	var parentFolder = $('.tree-row[select=true]').find('.tree-label').text();
	var path = $('.tree-row[select=true]').parents('.tree-item[item-type=folder]')
							.each(() => {
								return $(this).find('.tree-label:first').text();
							}).get().join('/');


	switch($item_type) {

		case "note":
			//Notes.init();
			modal.open({
				title: parentFolder + ' → New Item → ' + path,
				content: '<input type="search" id="new-item-name" class="modal-input" name="new_item_name" placeholder="New Item Name"/><textarea id="new-item-body" class="modal-input" name="new_note_body"></textarea><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Create</button></div>'
			});
			$('.modal-input').focus();

			$('.button.btn-submit.submit').on('click', (e) => {
				e.preventDefault();

				//ls.set("Notes:index", ++Notes.index);

				var $this = $('.tree-row[select=true]').parent('.tree-item');
				var $tree_item = $('<div id="' + $item_id + '" class="tree-item" item-type="' + $item_type + '" has-children="false"></div>');
				var $tree_row = $('<div class="tree-row" has-children="false"></div>');
				var $tree_label = $('<span class="tree-label"></span>'); /*' + $form.new_item_name.value + '*/
				var $tree_children = $('<div class="tree-children" expanded="false"></div>');

				var add_item = () => {
					if(!$this.find('.tree-children:first')) {
						// Create .tree-children
						$this.append($tree_children);
					}

					// Add new folder to .tree-children
					$this.find('.tree-children:first').append( //.prepend() to place at the top
						$tree_item.append(
							$tree_row.append(
								$tree_label.text($form.new_item_name.value)
							)
						)
					);
				};
				add_item();

				modal.close();
			});
			break;


		case "email":
			//
			alert("Disabled! Please select the 'Rename' option instead.");
			break;


		case "contact":
			//
			alert("Disabled! Please select the 'Rename' option instead.");
			break;
	}

	$('.button.btn-cancel.cancel').on('click', (e) => {
		modal.close();
		e.preventDefault();
	});

	e.preventDefault();
});


/* *
 * New Folder
 */
$('.context-menu').on('click', '#cm-new-folder', (e) => {
	log("cm-new-folder clicked: (" + e.pageX + ", " + e.pageY + ")");
	log("e.target: " + e.target);
	
	if($(e.target).is('.disabled')) {
		alert("Disabled! To create a new Folder, open the context menu (right click) on the folder you would like it to be created in.");
		return false;
	} else {
		// New Folder Modal
		$('#new-folder-parent').val($(this).val());
	}

	var parentFolder = $('.tree-row[select=true]').find('.tree-label').text();

	var $form = document.getElementById('content');

	modal.open({
		title: parentFolder + ' → New Folder',
		content: '<input type="search" class="modal-input" name="new_folder_name" placeholder="New Folder Name"/><div class="actionbar"><button class="button btn-cancel cancel">Cancel</button><button class="button btn-submit submit">Create</button></div>'
	});
	$('.modal-input').focus();

	$('.button.btn-submit.submit').on('click', (e) => {
		e.preventDefault();

		var $this = $('.tree-row[select=true]').parent('.tree-item');
		var $tree_item = $('<div class="tree-item" item-type="folder" has-children="true" expanded="false"></div>');
		var $tree_row = $('<div class="tree-row" has-children="true" may-have-children=""></div>');
		var $expand_icon = $('<span class="expand-icon"></span>');
		var $tree_label = $('<span class="tree-label">' + $form.new_folder_name.value + '</span>');
		var $tree_children = $('<div class="tree-children" expanded="false"></div>');

		var add_folder = () => {
			if(!$this.find('.tree-children:first')) {
				// Create .tree-children
				$this.append($tree_children);
			}

			// Add new folder to .tree-children
			$this.find('.tree-children:first').append(
				$tree_item.append(
					$tree_row.append(
						$expand_icon, $tree_label
					)
				).append($tree_children)
			);
		};
		add_folder();

		modal.close();
	});

	$('.button.btn-cancel.cancel').on('click', (e) => {
		modal.close();
		e.preventDefault();
	});
    
	e.preventDefault();
});


/* *
 * Hide context menu
 */
$(document).on('click', (e) => {
	$('.context-menu').css({
		display: "none"
	});

	log('Element tag: <' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList + '">');
});
