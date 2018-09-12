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
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
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
    var v1parts = ("" + v1).split("."),
        v2parts = ("" + v2).split("."),
        minLength = Math.min(v1parts.length, v2parts.length),
        p1, p2, i;

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
        while (x <= numOfCookies) {
            var y = (x + cookieLen);
            if (document.cookie.substring(x, y) == nameOfCookie)
                return (extractCookieValue(y));
            x = document.cookie.indexOf(" ", x) + 1;
            if (x == 0)
                break;
        }
        return null;
    },
    extract: function(val) {
        if ((endOfCookie = document.cookie.indexOf(";", val)) == -1)
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
        document.cookie = name + "=" + value + "; path=" + path + ";";
    },
    returnExp: function(days) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + days);
        return (todayDate.toGMTString());
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
        while (true) {
            tmpstr2 = tmpstr.replace('+', '%2B');
            if (tmpstr2 == tmpstr)
                break;
            else
                tmpstr = tmpstr2;
        }
        return tmpstr2;
    },
    unescapeEx: function(tmpstr) {
        tmpstr = unescape(tmpstr);
        var tmpstr2 = "";
        while (true) {
            tmpstr2 = tmpstr.replace('%2B', '+');
            if (tmpstr2 == tmpstr)
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


/**
 * SVG Social Icons
 */
var facebook = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"></path></svg>',
    twitter = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg>',
    googleplus = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 15h-2v-2h-2v2h-2v2h2v2h2v-2h2m-15-2v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C15.47 9.69 13.89 9 12 9c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12z" fill="#FFF"></path></svg>',
    pinterest = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16.539 4.5c-6.277 0-9.442 4.5-9.442 8.253 0 2.272.86 4.293 2.705 5.046.303.125.574.005.662-.33.061-.231.205-.816.27-1.06.088-.331.053-.447-.191-.736-.532-.627-.873-1.439-.873-2.591 0-3.338 2.498-6.327 6.505-6.327 3.548 0 5.497 2.168 5.497 5.062 0 3.81-1.686 7.025-4.188 7.025-1.382 0-2.416-1.142-2.085-2.545.397-1.674 1.166-3.48 1.166-4.689 0-1.081-.581-1.983-1.782-1.983-1.413 0-2.548 1.462-2.548 3.419 0 1.247.421 2.091.421 2.091l-1.699 7.199c-.505 2.137-.076 4.755-.039 5.019.021.158.223.196.314.077.13-.17 1.813-2.247 2.384-4.324.162-.587.929-3.631.929-3.631.46.876 1.801 1.646 3.227 1.646 4.247 0 7.128-3.871 7.128-9.053.003-3.918-3.317-7.568-8.361-7.568z"></path></svg>',
    tumblr = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M20.775 21.962c-.37.177-1.08.33-1.61.345-1.598.043-1.907-1.122-1.92-1.968v-6.217h4.007V11.1H17.26V6.02h-2.925s-.132.044-.144.15c-.17 1.556-.895 4.287-3.923 5.378v2.578h2.02v6.522c0 2.232 1.647 5.404 5.994 5.33 1.467-.025 3.096-.64 3.456-1.17l-.96-2.846z"></path></svg>',
    stumbleupon = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M16.97 14.245l1.25.583 1.865-.557v-1.29A4.088 4.088 0 0 0 16 9.01a4.089 4.089 0 0 0-4.085 3.943v5.912a.969.969 0 0 1-1.937 0V16.36H6.846v2.538a4.093 4.093 0 0 0 4.092 4.093c2.242 0 4.06-1.8 4.09-4.03l.005-5.84a.97.97 0 0 1 1.94 0v1.127h-.004zm5.05 2.114v2.62a.97.97 0 1 1-1.938 0v-2.57l-1.864.555-1.25-.583v2.552a4.093 4.093 0 0 0 8.186-.036v-2.54H22.02z"></path></svg>',
    reddit = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.882 2.882 0 0 0-1.9.713 14.075 14.075 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.314 14.314 0 0 0-7.316 2.029 2.908 2.908 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5.109 5.109 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5.2 5.2 0 0 0-.053-.706 2.963 2.963 0 0 0 1.427-2.51zm-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.709 1.709 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711zm9.565 4.968a5.573 5.573 0 0 1-4.081 1.272h-.032a5.576 5.576 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z" fill="#fff"></path></svg>',
    linkedin = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z" fill="#FFF"></path></svg>',
    digg = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M7.07 8.122V11.8h-4.2v8.927h6.828V8.122H7.07zm0 10.504H5.497V13.9H7.07v4.726zm3.678-6.826h2.626v8.927h-2.626zm0-3.678h2.626v2.626h-2.626zm3.677 3.678v8.927h4.2v1.05h-4.2v2.102h6.827V11.8h-6.827zm4.2 6.826H17.05V13.9h1.577v4.726zm3.677-6.826v8.927h4.202v1.05h-4.202v2.102h6.828V11.8h-6.828zm4.202 6.826H24.93V13.9h1.574v4.726z" fill="#FFF"></path></svg>';