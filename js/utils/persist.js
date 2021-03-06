/* persist.js */
/* utils/persist.js */


/* *
 * Handle localStorage
 *
 * Usage:
 *
 * ls.set('myKey', "I'm saved!");
 *
 * or..
 *
 * var item = {"name": "Andrew", "age": 26};
 * ls.set('myItem', item);
 *
 */


//var ls = ls || {};


if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    log("Web Storage is supported!");

    //var ls = ls || {};

    ls = {
        set: function(key, data) {
            if(typeof(data) == 'object') {
                //log("data( " + JSON.stringify(data) + " ) is of type: object");
                return window.localStorage.setItem(key, JSON.stringify(data));
            } else if(typeof(data) == 'string') {
                //log("data( " + data + " ) is of type: string");
                return window.localStorage.setItem(key, data);
            } else if(typeof(data) == 'undefined') {
                //log("data( " + data + " ) is of type: undefined");
                return window.localStorage.setItem(key, data);
            } else if(typeof(data) == 'number') {
                //log("data( " + data + " ) is of type: number");
                return window.localStorage.setItem(key, data);
            } else {
                //log("data( " + data + " ) is of type: " + typeof(data));
                return window.localStorage.setItem(key, data);
            }
        },
        get: function(key) {
            return window.localStorage.getItem(key);
        },
        remove: function(key) {
            return window.localStorage.removeItem(key);
        }
    };
} else {
    alert("Sorry! Web Storage is not supported!");
}


//var item = {"name": "Andrew", "age": 26};
//ls.set("myItem", item);
//ls.set("WebStorage", "is supported!");
//ls.set("Undefined", undefined);
//ls.set("Number", 2);


/*
var originalSetItem = localStorage.setItem;

localStorage.setItem = function() {
    var event = new Event('itemInserted');
    document.dispatchEvent(event);

    originalSetItem.apply(this, arguments);
}

var storageHandler = function(e) {
    alert('Item saved to localStorage');
};

document.addEventListener("itemInserted", storageHandler, false);

localStorage.setItem('foo', 'bar'); // Pops an alert
ls.set('bar', 'foo'); // Pops an alert
*/


/* *
 * Clear all cookies
 */
var clearCookies = function() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
};
