/* opal.js */
/*  */


/* *
 * opal namespace
 */
if (typeof opal === "undefined") {
    var opal = {};
};


// Generate
opal.gen = {
    // Element
    element: function(tag) {
	return document.createElement(tag);
    },
    // Text Node
    text: function(text) {
	return document.createTextNode(text);
    },
    // Attribute
    attr: function(attribute) {
	return document.createAttribute(attribute);
    },
    // Event
    event: function(event) {
	return document.createEvent(event);
    },
    // Comment
    comment: function(comment) {
	return document.createComment(comment);
    },
    // CDATA
    cdata: function(cdata) {
	return document.createCDATASection(cdata);
    },
    // Document Fragment
    dfrag: function(dfrag) {
	return document.createDocumentFragment(dfrag);
    },
    // Range
    range: function(range) {
	return document.createRange(range);
    },
    // Tree Walker
    twalk: function(twalk) {
	return document.createTreeWalker(twalk);
    },
    // Expression
    expr: function(expr) {
	return document.createExpression(expr);
    },
    // Node Iterator
    niter: function(niter) {
	return document.createNodeIterator(niter);
    }/*,
    // 
    : function() {
	return document.create;
    }*/
};
// Grab
opal.grab = {
    // ID
    id: function(id) {
	return document.getElementById(id);
    },
    // Class
    class: function(cls) {
	return document.getElementsByClassName(cls);
    },
    // Name
    name: function(name) {
	return document.getElementsByName(name);
    },
    // Tag
    tag: function(tag) {
	return document.getElementsByTagName(tag);
    },
    // All
    all: function(all) {
	return document.querySelectorAll(all);
    },
    // Active Element
    active: function() {
	return document.activeElement;
    }/*,
    // 
    : function() {
	return document.getElement;
    }*/
};


/*
var opal = (function() {
    var s = {};
    var obj = Object.prototype,
	arr = Array.prototype,
	doc = document;

	// Generate
	gen = {
	    // Element
	    element: function(tag) {
		return document.createElement(tag);
	    },
	    // Text Node
	    text: function(text) {
		return document.createTextNode(text);
	    },
	    // Attribute
	    attr: function(attribute) {
		return document.createAttribute(attribute);
	    },
	    // Event
	    event: function(event) {
		return document.createEvent(event);
	    },
	    // Comment
	    comment: function(comment) {
		return document.createComment(comment);
	    },
	    // CDATA
	    cdata: function(cdata) {
		return document.createCDATASection(cdata);
	    },
	    // Document Fragment
	    dfrag: function(dfrag) {
		return document.createDocumentFragment(dfrag);
	    },
	    // Range
	    range: function(range) {
		return document.createRange(range);
	    },
	    // Tree Walker
	    twalk: function(twalk) {
		return document.createTreeWalker(twalk);
	    },
	    // Expression
	    expr: function(expr) {
		return document.createExpression(expr);
	    },
	    // Node Iterator
	    niter: function(niter) {
		return document.createNodeIterator(niter);
	    }*//*,
	    // 
	    : function() {
		return document.create;
	    }*//*
	},
	// Access
	access = {
	    // ID
	    id: function(id) {
		return document.getElementById(id);
	    },
	    // Class
	    class: function(class) {
		return document.getElementsByClassName(class);
	    },
	    // Name
	    name: function(name) {
		return document.getElementsByName(name);
	    },
	    // Tag
	    tag: function(tag) {
		return document.getElementsByTagName(tag);
	    }*//*,
	    // 
	    : function() {
		return document.getElement;
	    }*//*
	}
})();*/
