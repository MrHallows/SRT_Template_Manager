/* utils.js */
/* utils/utils.js */


/* *
 * Link Parser
 */
/*var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test#hash";
parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.pathname; // => "/pathname/"
parser.search;   // => "?search=test"
parser.hash;     // => "#hash"
parser.host;     // => "example.com:3000"

var parts = [];

parts.push(parser.protocol); // => "http:"
parts.push("\/\/"); // => "//"
parts.push(parser.host);     // => "example.com:3000"
parts.push(parser.pathname); // => "/pathname/"
parts.push(parser.search);   // => "?search=test"
parts.push(parser.hash);     // => "#hash"

var partsParser = (data) => {
	// 
	var result = '';
	log("parts.length: " + parts.length);

	for(var i = 0; i < parts.length; i++) {
		log(parts[i]);
		result += parts[i];
	}
	return document.getElementById('menu-search').value = result;
};
partsParser(parts);*/


/**
 * Encode URI
 * @function encode
 * @param {string} str 
 */
function encode(str) {
	return encodeURIComponent(str);
}

/**
 * Decode URI
 * @function decode
 * @param {string} str 
 */
function decode(str) {
	return decodeURIComponent(str);
}


/**
 * RegEx Helper Function
 */
function getMatches(string, regex, index) {
	index || (index = 1); // default to the first capturing group
	var matches = [];
	var match;
	while (match = regex.exec(string)) {
		matches.push(match[index]);
	}
	return matches;
}

// Example :
var myString = 'something format_abc something format_def something format_ghi';
var myRegEx = /(?:^|\s)format_(.*?)(?:\s|$)/g;

// Get an array containing the first capturing group for every match
var matches = getMatches(myString, myRegEx, 1);

// Log results
//document.getElementById('menu-search').value = (matches.length + ' matches found: ' + JSON.stringify(matches));
//log(matches);


/**
 * Validate Email Address
 */
function validateEmail(email) {
	var pattern = /^[A-z0-9\._%+-]{1,256}@[A-z0-9.-]{1,256}\.[A-z]{2,4}$/;
	return email.match(pattern);
}


/* *
 * Copy text
 */
function copy(id) {
    var obj = document.getElementById(id);
    obj.focus();
    obj.select();
    var clipbd = obj.createTextRange();
    clipbd.execCommand('Copy');
    clipbd.removeRange();
}

(function() {
    'use strict';

    // click events
    document.body.addEventListener('click', copytext, true);

    // event handler
    function copytext(e) {

        // find target element
        var t = e.target,
        	c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);

        // is element selectable?
        if (inp && inp.select) {

            // select text
            inp.select();

            try {
                // copy text
                document.execCommand('copy');
                inp.blur();
            } catch (err) {
                alert('Please press Ctrl/Cmd+C to copy.');
            }
        }
    }
})();


/**
   * @param {string} str
   * @param {?} length
   * @param {string} truncateStr
   * @return {?}
   */
/*var self = {};
String.prototype.truncate = function(str, length, truncateStr) {
    return truncateStr = truncateStr || "…",
    str.length > length ? str.slice(0, length) + truncateStr : str;
};*/


/**
 * Compare two dotted version strings (like '10.2.3').
 * @returns {Integer} 0: v1 == v2, -1: v1 < v2, 1: v1 > v2
 */
function versionCompare(v1, v2) {
    var v1parts = ("" + v1).split("."), v2parts = ("" + v2).split("."), minLength = Math.min(v1parts.length, v2parts.length), p1, p2, i;

    // Compare tuple pair-by-pair.
    for (i = 0; i < minLength; i++) {
        // Convert to integer if possible, because "8" > "10".
        p1 = parseInt(v1parts[i], 10);
        p2 = parseInt(v2parts[i], 10);

        if (isNaN(p1)) {
            p1 = v1parts[i];
        }
        if (isNaN(p2)) {
            p2 = v2parts[i];
        }
        if (p1 == p2) {
            continue;
        } else if (p1 > p2) {
            return 1;
        } else if (p1 < p2) {
            return -1;
        }

        // one operand is NaN
        return NaN;
    }

    // The longer tuple is always considered 'greater'
    if (v1parts.length === v2parts.length) {
        return 0;
    }

    return (v1parts.length < v2parts.length) ? -1 : 1;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Allow TAB insertion within <textarea>
 */
$('textarea').keydown(function(e) {
    //alert("Key was pressed!");
    if (e.keyCode === 9) {
        // Tab was pressed
        //alert("Tab was pressed!");
        // Get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var $this = $(this);
        var value = $this.val();

        // Set textarea value to: text before caret + tab + text after caret
        $this.val(value.substring(0, start) + "\t" + value.substring(end));

        // Put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // Prevent the focus loss
        e.preventDefault();
    }
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Allow TAB insertion within <textarea>
 */
function TabPress(e) {
    var evtobj = window.event ? event : e;
    //alert("Key was pressed!");
    if (evtobj.keyCode === 9) {
        // Tab was pressed
        //alert("Tab was pressed!");
        // Get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var $this = $(this);
        var value = $this.val();

        // Set textarea value to: text before caret + tab + text after caret
        $this.val(value.substring(0, start) + "\t" + value.substring(end));

        // Put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // Prevent the focus loss
        e.preventDefault();
    }
}
document.getElementsByTagName.onkeydown = TabPress;

// Save form using Ctrl+S
function KeyPress(e) {
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode == 83 && evtobj.ctrlKey) {
        e.preventDefault();
        $('#saveForm').click();
    } else if (evtobj.keyCode == 68 && evtobj.ctrlKey) {
        e.preventDefault();
        $('#insVal').click();
    } else if (evtobj.keyCode == 67 && evtobj.ctrlKey && evtobj.shiftKey) {
        e.preventDefault();
        $('#copyNotes').click();
        $('#notes').focus();
    }
}
document.onkeydown = KeyPress;

// Wrap selected text in quotes
/*function quoteSelection(e) {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	log(text);

	var evtobj = window.event ? event : e;
	if (evtobj.keyCode == 34 && evtobj.shiftKey) {
	e.preventDefault();
	text = text.replace(text, '"' + text + '"');
	}
	return text;
}
document.onkeydown = quoteSelection;*/

// Get selected text
/*function getSelection() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	return text;
}*/


/* *
 * Cookie Handler
 */
var Cookie = Cookie || {};

Cookie = {
	read: function(cookie_name) {
		var numOfCookies = document.cookie.length;
		var nameOfCookie = escapeEx(cookie_name) + "=";
		var cookieLen = nameOfCookie.length;
		var x = 0;
		while(x <= numOfCookies) {
			var y = (x + cookieLen);
			if (document.cookie.substring(x, y) == nameOfCookie)
				return(extractCookieValue(y));
			x = document.cookie.indexOf(" ", x) + 1;
			if (x == 0)
				break;
		}
		return null;
	},
	extract: function(val) {
		if((endOfCookie = document.cookie.indexOf(";",val)) == -1)
			endOfCookie = document.cookie.length;
		return unescapeEx(document.cookie.substring(val, endOfCookie));
	},
	create: function(name, value, expiredays, path) {
		var todayDate = new Date();
		name = escapeEx(name);
		value = escapeEx(value);
		todayDate.setDate(todayDate.getDate() + expiredays);
		document.cookie = name + "=" + value + "; expires=" + todayDate.toGMTString() + "; path=" + path + ";";
	},
	createTemp: function(name, value, path) {
		name = escapeEx(name);
		value = escapeEx(value);
		document.cookie=name + "=" + value + "; path=" + path + ";";
	},
	returnExp: function(days) {
		var todayDate = new Date();
		todayDate.setDate(todayDate.getDate() + days);
		return(todayDate.toGMTString());
	},
	delete: function(name, path) {
		var todayDate = new Date();
		var value = escapeEx(readCookie(name));
		todayDate.setDate(todayDate.getDate() - 1);
		document.cookie = name + "=" + value + "; expires=" + todayDate.toGMTString() + "; path=" + path + ";";
	},
	escapeEx: function(tmpstr) {
		tmpstr = escape(tmpstr);
		var tmpstr2 = "";
		while(true) {
			tmpstr2 = tmpstr.replace('+', '%2B');
			if(tmpstr2 == tmpstr)
				break;
			else
				tmpstr = tmpstr2;
		}
		return tmpstr2;
	},
	unescapeEx: function(tmpstr) {
		tmpstr = unescape(tmpstr);
		var tmpstr2 = "";
		while(true) {
			tmpstr2 = tmpstr.replace('%2B', '+');
			if(tmpstr2 == tmpstr)
				break;
			else
				tmpstr = tmpstr2;
		}
		return tmpstr2;
	}
};

// Standard cookie functions:
/*function readCookie(cookiename) {
	var numOfCookies = document.cookie.length;
	var nameOfCookie = escapeEx(cookiename) + "=";
	var cookieLen = nameOfCookie.length;
	var x = 0;
	while(x <= numOfCookies) {
		var y = (x + cookieLen);
		if (document.cookie.substring(x, y) == nameOfCookie)
			return(extractCookieValue(y));
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0)
			break;
	}
	return null;
}

function extractCookieValue(val) {
	if((endOfCookie = document.cookie.indexOf(";",val)) == -1)
		endOfCookie = document.cookie.length;
	return unescapeEx(document.cookie.substring(val, endOfCookie));
}

function createCookie(name, value, expiredays, path) {
	var todayDate = new Date();
	name = escapeEx(name);
	value = escapeEx(value);
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie=name + "=" + value + "; expires=" + todayDate.toGMTString() + "; path=" + path + ";";
}

function createTempCookie(name, value, path) {
	name = escapeEx(name);
	value = escapeEx(value);
	document.cookie=name + "=" + value + "; path=" + path + ";";
}

function returnExpiry(days) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + days);
	return(todayDate.toGMTString());
}

function deleteCookie(name, path) {
	var todayDate = new Date();
	var value = escapeEx(readCookie(name));
	todayDate.setDate(todayDate.getDate() - 1);
	document.cookie = name + "=" + value + "; expires=" + todayDate.toGMTString() + "; path=" + path + ";";
}

function escapeEx(tmpstr) {
	tmpstr = escape(tmpstr);
	var tmpstr2 = "";
	while(true) {
		tmpstr2 = tmpstr.replace('+', '%2B');
		if(tmpstr2 == tmpstr)
			break;
		else
			tmpstr = tmpstr2;
	}
	return tmpstr2;
}

function unescapeEx(tmpstr) {
	tmpstr = unescape(tmpstr);
	var tmpstr2 = "";
	while(true) {
		tmpstr2 = tmpstr.replace('%2B', '+');
		if(tmpstr2 == tmpstr)
			break;
		else
			tmpstr = tmpstr2;
	}
	return tmpstr2;
}*/



/**
 * Helper function to get an element's exact position
 */
function getPos(element) {
	var xPos = 0;
	var yPos = 0;

	while (element) {
		if (element.tagName == "BODY") {
			// deal with browser quirks with body/window/document and page scroll
			var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = element.scrollTop || document.documentElement.scrollTop;

			xPos += (element.offsetLeft - xScroll + element.clientLeft);
			yPos += (element.offsetTop - yScroll + element.clientTop);
		} else {
			// for all other non-BODY elements
			xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
			yPos += (element.offsetTop - element.scrollTop + element.clientTop);
		}

		element = element.offsetParent;
	}
	return {
		x: xPos,
		y: yPos
	};
}
