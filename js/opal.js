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
    element: (tag) => {
	return document.createElement(tag);
    },
    // Text Node
    text: (text) => {
	return document.createTextNode(text);
    },
    // Attribute
    attr: (attribute) => {
	return document.createAttribute(attribute);
    },
    // Event
    event: (event) => {
	return document.createEvent(event);
    },
    // Comment
    comment: (comment) => {
	return document.createComment(comment);
    },
    // CDATA
    cdata: (cdata) => {
	return document.createCDATASection(cdata);
    },
    // Document Fragment
    dfrag: (dfrag) => {
	return document.createDocumentFragment(dfrag);
    },
    // Range
    range: (range) => {
	return document.createRange(range);
    },
    // Tree Walker
    twalk: (twalk) => {
	return document.createTreeWalker(twalk);
    },
    // Expression
    expr: (expr) => {
	return document.createExpression(expr);
    },
    // Node Iterator
    niter: (niter) => {
	return document.createNodeIterator(niter);
    }/*,
    // 
    : () => {
	return document.create;
    }*/
};
// Grab
opal.grab = {
    // ID
    id: (id) => {
	return document.getElementById(id);
    },
    // Class
    class: (cls) => {
	return document.getElementsByClassName(cls);
    },
    // Name
    name: (name) => {
	return document.getElementsByName(name);
    },
    // Tag
    tag: (tag) => {
	return document.getElementsByTagName(tag);
    },
    // All
    all: (all) => {
	return document.querySelectorAll(all);
    },
    // Active Element
    active: () => {
	return document.activeElement;
    }/*,
    // 
    : () => {
	return document.getElement;
    }*/
};


/*
var opal = (() => {
    var s = {};
    var obj = Object.prototype,
	arr = Array.prototype,
	doc = document;

	// Generate
	gen = {
	    // Element
	    element: (tag) => {
		return document.createElement(tag);
	    },
	    // Text Node
	    text: (text) => {
		return document.createTextNode(text);
	    },
	    // Attribute
	    attr: (attribute) => {
		return document.createAttribute(attribute);
	    },
	    // Event
	    event: (event) => {
		return document.createEvent(event);
	    },
	    // Comment
	    comment: (comment) => {
		return document.createComment(comment);
	    },
	    // CDATA
	    cdata: (cdata) => {
		return document.createCDATASection(cdata);
	    },
	    // Document Fragment
	    dfrag: (dfrag) => {
		return document.createDocumentFragment(dfrag);
	    },
	    // Range
	    range: (range) => {
		return document.createRange(range);
	    },
	    // Tree Walker
	    twalk: (twalk) => {
		return document.createTreeWalker(twalk);
	    },
	    // Expression
	    expr: (expr) => {
		return document.createExpression(expr);
	    },
	    // Node Iterator
	    niter: (niter) => {
		return document.createNodeIterator(niter);
	    }*//*,
	    // 
	    : () => {
		return document.create;
	    }*//*
	},
	// Access
	access = {
	    // ID
	    id: (id) => {
		return document.getElementById(id);
	    },
	    // Class
	    class: (class) => {
		return document.getElementsByClassName(class);
	    },
	    // Name
	    name: (name) => {
		return document.getElementsByName(name);
	    },
	    // Tag
	    tag: (tag) => {
		return document.getElementsByTagName(tag);
	    }*//*,
	    // 
	    : () => {
		return document.getElement;
	    }*//*
	}
})();*/
