/* init.js */
/* js/init.js */
/* Initialize dynamic changes to the document */


// Apply class 'unselectable' to all label elements within #template-view
$('#template-view div, #template-view label').addClass('unselectable');
$('#template-view span, #template-view pre').css({
	"-ms-user-select": "text",
	"-webkit-user-select": "text",
	"user-select": "text"
});


if(!ls.get("Tree:Notes")) {
    ls.set("Tree:Notes", JSON.stringify(Tree.notes));
}
if(!ls.get("Tree:Email")) {
    ls.set("Tree:Email", JSON.stringify(Tree.email));
}
if(!ls.get("Tree:Contacts")) {
    ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));
}
