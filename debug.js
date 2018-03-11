/* debug.js */
/* utils/debug.js */


/* *
 * Usage:
 *
 * debug.log('info', 'Opening Edit modal..');
 *
 * or..
 *
 * debug.log('info', 'Clicked on ' + clicked.element + '!');
 */


var debug = {
    // Logger
    log: function(severity, msg) {
        // Severity types
        switch(severity) {
            case "info":
                console.log("debug[info]: " + msg);
                break;
            case "warning":
                console.log("debug[warning]: " + msg);
                break;
            case "error":
                alert("debug[error]: " + msg);
                break;
            /*case "":
                console.log("debug[]: " + msg);
                break;*/
        }
    }
};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Debug functions
 */
var _canLog = true;

function _log(mode, msg) {
	/* *
	 * Usage: logMsg("%o was toggled", this);
	 */
	if(!_canLog){
		return;
	}

	// Remove first argument
	var args = Array.prototype.slice.apply(arguments, [1]);

	// Prepend timestamp
	var dt = new Date();
	var tag = dt.getHours() + ":" + dt.getMinutes() + ":" +
				dt.getSeconds() + "." + dt.getMilliseconds();
	args[0] = tag + " - " + args[0];

	try {
		switch(mode) {
			case "info":
				window.console.info.apply(window.console, args);
				break;
			case "warn":
				window.console.warn.apply(window.console, args);
				break;
			default:
				window.console.log.apply(window.console, args);
				break;
		}
	} catch(e) {
		if( !window.console ) {
			_canLog = false; // Permanently disable, when logging is not supported by the browser
		} else if(e.number === -2146827850) {
			// fix for IE8, where window.console.log() exists, but does not support .apply()
			window.console.log(args.join(", "));
		}
	}
}


function log(msg) {
	Array.prototype.unshift.apply(arguments, ["debug"]);
	_log.apply(this, arguments);
}
