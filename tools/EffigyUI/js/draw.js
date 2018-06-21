/* draw.js */


/**
 * Draw Rectangle
 */
initDraw(document.getElementById('canvas'));


function initDraw(canvas) {
	function setMousePosition(e) {
		var ev = e || window.event; //Moz || IE
		if (ev.pageX) { //Moz
			mouse.x = ev.pageX + window.pageXOffset;
			mouse.y = ev.pageY + window.pageYOffset;
		} else if (ev.clientX) { //IE
			mouse.x = ev.clientX + document.body.scrollLeft;
			mouse.y = ev.clientY + document.body.scrollTop;
		}
	};

	var mouse = {
		x: 0,
		y: 0,
		startX: 0,
		startY: 0
	};
	var element = null;

	canvas.onmousemove = function (e) {
		setMousePosition(e);
		if (element !== null) {
			element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
			element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
			element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
			element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
		}
	}

	canvas.onclick = function (e) {
		if (element !== null) {
			element = null;
			canvas.style.cursor = "default";
			console.log("finsihed.");
		} else {
			console.log("begun.");
			mouse.startX = mouse.x;
			mouse.startY = mouse.y;
			element = document.createElement('div');
			element.className = 'rectangle'
			element.style.left = mouse.x + 'px';
			element.style.top = mouse.y + 'px';
			canvas.appendChild(element)
			canvas.style.cursor = "crosshair";
		}
	}
}


/**
 * Draw Line, Circle, etc.
 */


/**
 * Resize Rectangle
 */
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	rect = {},
	drag = false,
	mouseX,
	mouseY,
	closeEnough = 10,
	dragTL = dragBL = dragTR = dragBR = false;

function init() {
	canvas.addEventListener('mousedown', mouseDown, false);
	canvas.addEventListener('mouseup', mouseUp, false);
	canvas.addEventListener('mousemove', mouseMove, false);

	rect = {
		startX: 100,
		startY: 200,
		w: 300,
		h: 200
	}
}

function mouseDown(e) {
	mouseX = e.pageX - this.offsetLeft;
	mouseY = e.pageY - this.offsetTop;

	// if there isn't a rect yet
	if (rect.w === undefined) {
		rect.startX = mouseY;
		rect.startY = mouseX;
		dragBR = true;
	}

	// if there is, check which corner
	//   (if any) was clicked
	//
	// 4 cases:
	// 1. top left
	else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY)) {
		dragTL = true;
	}
	// 2. top right
	else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY)) {
		dragTR = true;

	}
	// 3. bottom left
	else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
		dragBL = true;

	}
	// 4. bottom right
	else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
		dragBR = true;

	}
	// (5.) none of them
	else {
		// handle not resizing
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();

}

function checkCloseEnough(p1, p2) {
	return Math.abs(p1 - p2) < closeEnough;
}

function mouseUp() {
	dragTL = dragTR = dragBL = dragBR = false;
}

function mouseMove(e) {
	mouseX = e.pageX - this.offsetLeft;
	mouseY = e.pageY - this.offsetTop;
	if (dragTL) {
		rect.w += rect.startX - mouseX;
		rect.h += rect.startY - mouseY;
		rect.startX = mouseX;
		rect.startY = mouseY;
	} else if (dragTR) {
		rect.w = Math.abs(rect.startX - mouseX);
		rect.h += rect.startY - mouseY;
		rect.startY = mouseY;
	} else if (dragBL) {
		rect.w += rect.startX - mouseX;
		rect.h = Math.abs(rect.startY - mouseY);
		rect.startX = mouseX;
	} else if (dragBR) {
		rect.w = Math.abs(rect.startX - mouseX);
		rect.h = Math.abs(rect.startY - mouseY);
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}

function draw() {
	ctx.fillStyle = "#222222";
	ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
	drawHandles();
}

function drawCircle(x, y, radius) {
	ctx.fillStyle = "#FF0000";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function drawHandles() {
	drawCircle(rect.startX, rect.startY, closeEnough);
	drawCircle(rect.startX + rect.w, rect.startY, closeEnough);
	drawCircle(rect.startX + rect.w, rect.startY + rect.h, closeEnough);
	drawCircle(rect.startX, rect.startY + rect.h, closeEnough);
}

init();
