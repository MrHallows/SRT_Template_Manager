/* dialog.js */
/* js/utils/dialog.js */
/* http://jsfiddle.net/vivekkt91/bds77/ */



/*
<div id="modal" style="display: none;">
    <div class="titlebar unselectable">
        <span class="modal-title"></span>
        <span class="close"></span>
        <span class="maximize"></span>
        <span class="minimize"></span>
    </div>
	<form id="content" method="post">
		<h1>Oops!</h1>
		<p>Alert this pages</p>
		<a id="btnClose" href="#">Ok</a>
	</form>
</div>
<div id="modal" style="left: 520px; display: block;">
</div>
*/


var ALERT_TITLE = "Alert";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
	window.alert = function(msg) {
		createCustomAlert(msg);
	}
}

function createCustomAlert(msg) {
	d = document;

	if(d.getElementById("overlay")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "overlay";
	mObj.style.height = d.documentElement.scrollHeight + "px";

	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "modal";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
	alertObj.style.visiblity = "visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(msg));
	msg.innerHTML = msg;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "btnClose";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() {
		removeCustomAlert();
		return false;
	}

	alertObj.style.display = "block";

}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("overlay"));
}

function ful() {
	alert('Alert this pages');
}