/* utils.js */
/* utils/utils.js */


/*
// Chrome/Firefox/MSIE/Opera
function get_browser() {
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[0];
}
function get_browser_version() {
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
}
*/
// Chrome/Firefox/MSIE/Opera
function get_browser() {
	s = GetBrowser();
	s = s.split(' ');
	return s[0];
}
function get_version() {
	s = GetBrowser();
	s = s.split(' ');
	return s[1];
}
function GetBrowser() {
	var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'MSIE ' + (tem[1] || '');
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/)
		if (tem != null)
			return 'Opera ' + tem[1];
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null)
		M.splice(1, 1, tem[1]);
	return M.join(' ');
}
function GetOS() {
	var OSName = "unknown";
	if (navigator.appVersion.indexOf("Win") != -1)
		OSName = "Windows";
	if (navigator.appVersion.indexOf("X11") != -1)
		OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1)
		OSName = "Linux";
	if (navigator.appVersion.indexOf("Mac") != -1)
		OSName = "MacOS";
	if (navigator.userAgent.match(/Android/i))
		OSName = "Android";
	if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
		OSName = "iOS";
	return OSName;
}
function GetFileName(file) {
	i0 = file.lastIndexOf('/');
	i1 = file.lastIndexOf('\\');
	if (i0 > i1)
		i1 = i0;
	if (i1 == -1)
		i1 = 0;
	i1++;
	i2 = file.lastIndexOf('.');
	name = file.substring(i1, i2) || file;
	return name;
}
function GetFileExt(file) {
	var ext = file.substring(file.lastIndexOf('.'));
	return ext;
}

function ShortBtn() {
	var x, y, s;
	x = $(window).width() - 400;
	y = 20;
	//$("#short_div").popup("option", "arrow", "l,t,r,b");
	$("#short_div").popup("open", {
		arrow: true,
		x: x,
		y: y
	});
	var browser = get_browser();
	var os = GetOS();
	if (os == "iOS") {
		s = "Add to home screen:\n";
		s += "<ol>";
		s += "<li>Click the Share button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_065_share.png\">.</li>";
		s += "<li>Select <b>Add to Home Screen</b>.</li>";
		s += "</ol>";
	} else if (os == "Android") {
		s = "Add to home screen:\n";
		s += "<ol>";
		s += "<li>Click the Settings button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_011_3dot.png\">.</li>";
		s += "<li>Click the Star button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_006_star-empty.png\">.</li>";
		s += "<li>Select <b>Add shortcut to home screen</b>.</li>";
		s += "</ol>";
	} else if (browser == 'Chrome') {
		s = "Add to taskbar:\n";
		s += "<ol>";
		s += "<li>Click the Chrome menu <img src=\"//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/images/icons-png/bars-black.png\">.</li>";
		s += "<li>Click <b>More Tools</b>.</li>";
		s += "<li>Add the page:<ul>";
		s += "<li>Windows: Click <b>Add to taskbar</b>.</li>";
		s += "<li>Linux: Click <b>Add to desktop</b>.</li>";
		s += "</ul></li>";
		s += "<li>Check <b>Open as window</b>.</li>";
		s += "</ol>";
	} else if (browser == 'Firefox') {
		s = "Add to desktop:\n";
		s += "Drag the address bar icon <img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_134_globe.png\"> to the desktop.";
	}
	$("#short_div").html(s);
}


/**
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
