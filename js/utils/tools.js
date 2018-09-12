/* tools.js */
/* utils/tools.js */


/* *
 * Dimensional Weight Calculator
 *
 ~ Search Query URLs ~

Google:
<form action="https://www.google.com/search" target="_blank" id="search" method="get" name="f" onsubmit="return q.value!=''" role="search">
    <div>
        <input type="text" id="searchbox" class="textbox input" name="q" placeholder=" Search Google" autofocus="true">
        <input type="reset" id="searchBoxClear" class="button btn-x" value="×" onclick="searchBoxClear();" style="font-weight:bold; float:right;">
    </div>
</form>

FedEx.com:
https://www.fedex.com/en-us/search.html?q=



Clear all cookies:
document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/ // <-- ERASE THIS! , "=;expires=" + new Date().toUTCString() + ";path=/"); });
/*
Code for a bookmarklet:
javascript:(function(){document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/ // <-- ERASE THIS! , "=;expires=" + new Date().toUTCString() + ";path=/"); }); })();


/*
~ How is dim weight calculated? ~
Dim weight is calculated based on the length, height, and width of the package.
 The dim weight becomes the billable weight when the dim weight of your package exceeds its actual weight.

Follow these easy steps to calculate dim weight:

1) Calculate the cubic size of your package in inches.
    Round each measurement of your package to the nearest whole inch.
    Multiply the length by width by height of your package.
    The resulting total is the cubic size of your package.
2) Determine actual weight.
    Use any standard scale to determine the actual weight of your package.
    Increase any fraction to the next whole pound.
3) Determine dim weight.
    Divide the cubic size of your package in inches by 139.
    Increase any fraction to the next whole pound.
4) Determine billable weight.
    Compare the package's actual weight to its dim weight.
    The larger of the two weights is the billable weight and should be used to calculate the rate.
5) For multiple-package shipments, total the billable weight of all packages in the shipment.

*/



/* *
 * Freight Density Calculator
 * 
 * Code:
    function get_density() {
        var length = $("#length").val();
        var width = $("#width").val();
        var height = $("#height").val();
        var weight = $("#weight").val();

        var density;
        var cubicFeet;
        var cla = 0;
        var innerHtml;

        cubicFeet = (length * width * height) / 1728;
        var displayDensity = roundTo(weight / cubicFeet, 2);
        density = roundTo(Math.round((weight / cubicFeet) * 100) / 100, 2);
        if (isNaN(density) || !isFinite(density)) density = 0;

        $('.js-density-classification').each(function() {
            var min = $(this).data('min-density');
            var max = $(this).data('max-density');

            if (min === '' || isNaN(min)) min = -100000;
            else min = parseFloat(min);

            if (max === '' || isNaN(max) || max === 0) max = 99999999;
            else max = parseFloat(max);

            if (density >= min && density < max) {
                cla = $(this).html();
                return;
            }
        });

        innerHtml = "<p><strong>Freight Density (in lbs per cubic foot): " + displayDensity + "<br />Recommended Freight Class: " + cla.toString() + "</strong></p>";
        if (density > 0) {
            innerHtml += '<input type="submit" onclick="submitCalculation()" value="Get A Quote Now" />'; 
            $("#freightclass").val(cla.toString());
            checkSubmit = true;
        }
        $('#density_results').html(innerHtml);

    }

*/


/**
 * Tools
 */
$('#rs-tools').on('click', function(e) {
    e.preventDefault();

    var $form = document.getElementById('content');

    modal.open({
        title: 'Tools',
		content: '<div class="row">' +
					'<div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div>' +
				 	'<div id="tools-density-calc" class="modal-input tools-tile" name="tools_density_calc"><div>Freight Density Calculator</div></div>' +
					 '<div id="tools-2" class="modal-input tools-tile" name="tools_2"><div>Another Tool</div></div>' +
				 '</div>' +
				 '<div class="row">' +
				 	'<div id="tools-webhook-generator" class="modal-input tools-tile" name="tools_webhook_generator"><div>Discord Webhook Generator</div></div>' +
				 	'<div id="tools-4" class="modal-input tools-tile" name="tools_4"><div>Another Tool</div></div>' +
					 '<div id="tools-5" class="modal-input tools-tile" name="tools_5"><div>Another Tool</div></div>' +
				 '</div>'
	});
	

    /**
     * Dimensional Weight Calculator
     */
    $('#tools-dim-calc').on('click', function(e) {
        modal.close();
        //
        modal.open({
            title: 'Dimensional Weight Calculator',
            content: '<div id="calcBox"><p><span>L: <input type="text" id="length" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">W: <input type="text" id="width" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">H: <input type="text" id="height" class="calc-input" size="6"/></span></p><p><div class="data">Girth &#8674; <span id="girth" class="result"></span></div><div class="data">Length + Girth &#8674; <span id="lGirth" class="result"></span></div><div class="data">Dim Weight &#8674; <span id="dimWeight" class="result"></span></div><div class="data">Intl Dim Weight &#8674; <span id="intlDimWeight" class="result"></span></div><div class="data"><span id="error"></span></div></p></div><div class="actionbar"><button id="btnCalculate" class="button btn-submit">Calculate</button><button type="reset" id="btnClear" class="button btn-x"></button></div>'
        });

        document.getElementById('length').focus();

        /**
         * @function Calculate
         */
        $('#btnCalculate').on('click', function(e) {
            var l = document.getElementById('length').value;
            var w = document.getElementById('width').value;
            var h = document.getElementById('height').value;

            //log('length: ' + l);
            //log('width: ' + w);
            //log('height: ' + h);

            if(l == "" || w == "" || h == "") {
                alert("Error: All dimensions must be entered.");
                document.getElementById('length').focus();

                e.preventDefault();
            }

            var a = eval('(' + w + ' + ' + h + ') * 2');
            var b = eval('(' + w + ' * 2) + (' + h + ' * 2) + ' + l);
            var c = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');
            var d = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');

            //log(a);
            //log(b);
            //log(c);
            //log(d);

            if(isNaN(l) | isNaN(w) | isNaN(h)) {
                document.getElementById('error').innerHTML = "Error: [0-9] only";
            } else {
                document.getElementById('girth').innerHTML = a;
                document.getElementById('lGirth').innerHTML = b;
                document.getElementById('dimWeight').innerHTML = Math.ceil(c) + " lbs.";
                document.getElementById('intlDimWeight').innerHTML = Math.ceil(d) + " lbs.";
            }

            e.preventDefault();
        });

        $('#btnClear').on('click', function(e) {
            document.getElementById('length').value = "";
            document.getElementById('width').value = "";
            document.getElementById('height').value = "";
            document.getElementById('girth').innerHTML = "";
            document.getElementById('lGirth').innerHTML = "";
            document.getElementById('dimWeight').innerHTML = "";
            document.getElementById('intlDimWeight').innerHTML = "";
            document.getElementById('error').innerHTML = "";
            document.getElementById('length').focus();

            e.preventDefault();
        });

        $('#back').on('click', function(e) {
            modal.close();

            modal.open({
                title: 'Tools',
                content: '<div class="row"><div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div><div id="tools-density-calc" class="modal-input tools-tile" name="tools_density_calc"><div>Freight Density Calculator</div></div><div id="tools-2" class="modal-input tools-tile" name="tools_2"><div>Another Tool</div></div></div><div class="row"><div id="tools-3" class="modal-input tools-tile" name="tools_3"><div>Another Tool</div></div><div id="tools-4" class="modal-input tools-tile" name="tools_4"><div>Another Tool</div></div><div id="tools-5" class="modal-input tools-tile" name="tools_5"><div>Another Tool</div></div></div>'
            });
        });
        e.preventDefault();
    });


    /**
     * Freight Density Calculator
     */
    $('#tools-density-calc').on('click', function(e) {
        modal.close();
        //
        modal.open({
            title: 'Freight Density Calculator',
            content: '<div id="calcBox"><p><span>L: <input type="text" id="length" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">W: <input type="text" id="width" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">H: <input type="text" id="height" class="calc-input" size="6"/></span></p><p><div class="data">Girth &#8674; <span id="girth" class="result"></span></div><div class="data">Length + Girth &#8674; <span id="lGirth" class="result"></span></div><div class="data">Dim Weight &#8674; <span id="dimWeight" class="result"></span></div><div class="data">Intl Dim Weight &#8674; <span id="intlDimWeight" class="result"></span></div><div class="data"><span id="error"></span></div></p></div><div class="actionbar"><button id="btnCalculate" class="button btn-submit">Calculate</button><button type="reset" id="btnClear" class="button btn-x"></button></div>'
        });

        document.getElementById('length').focus();

        /**
         * @function Calculate
         */
        $('#btnCalculate').on('click', function(e) {
            var l = document.getElementById('length').value;
            var w = document.getElementById('width').value;
            var h = document.getElementById('height').value;

            log('length: ' + l);
            log('width: ' + w);
            log('height: ' + h);

            if(l == "" || w == "" || h == "") {
                alert("Error: All dimensions must be entered.");
                document.getElementById('length').focus();

                e.preventDefault();
            }

            var a = eval('(' + w + ' + ' + h + ') * 2');
            var b = eval('(' + w + ' * 2) + (' + h + ' * 2) + ' + l);
            var c = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');
            var d = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');

            //log(a);
            //log(b);
            //log(c);
            //log(d);

            if(isNaN(l) | isNaN(w) | isNaN(h)) {
                document.getElementById('error').innerHTML = "Error: [0-9] only";
            } else {
                document.getElementById('girth').innerHTML = a;
                document.getElementById('lGirth').innerHTML = b;
                document.getElementById('dimWeight').innerHTML = Math.ceil(c) + " lbs.";
                document.getElementById('intlDimWeight').innerHTML = Math.ceil(d) + " lbs.";
            }

            e.preventDefault();
        });

        $('#btnClear').on('click', function(e) {
            document.getElementById('length').value = "";
            document.getElementById('width').value = "";
            document.getElementById('height').value = "";
            document.getElementById('girth').innerHTML = "";
            document.getElementById('lGirth').innerHTML = "";
            document.getElementById('dimWeight').innerHTML = "";
            document.getElementById('intlDimWeight').innerHTML = "";
            document.getElementById('error').innerHTML = "";
            document.getElementById('length').focus();

            e.preventDefault();
        });

        $('#back').on('click', function(e) {
            modal.close();

            modal.open({
                title: 'Tools',
                content: '<div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div><div id="tools-1" class="modal-input tools-tile" name="tools_"><div>Another Tool</div></div><div id="tools-2" class="modal-input tools-tile" name="tools_"><div>Another Tool</div></div><div class="actionbar"><button class="button btn-cancel">Cancel</button><button class="button btn-submit">Save</button></div>'
            });
        });
        e.preventDefault();
    });


    /**
     * Unit Converter
     */
    $('#tools-dim-calc').on('click', function(e) {
        modal.close();
        //
        modal.open({
            title: 'Dimensional Weight Calculator',
            content: '<div id="calcBox"><p><span>L: <input type="text" id="length" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">W: <input type="text" id="width" class="calc-input" size="6"/></span> <span style="margin-left: 10px;">H: <input type="text" id="height" class="calc-input" size="6"/></span></p><p><div class="data">Girth &#8674; <span id="girth" class="result"></span></div><div class="data">Length + Girth &#8674; <span id="lGirth" class="result"></span></div><div class="data">Dim Weight &#8674; <span id="dimWeight" class="result"></span></div><div class="data">Intl Dim Weight &#8674; <span id="intlDimWeight" class="result"></span></div><div class="data"><span id="error"></span></div></p></div><div class="actionbar"><button id="btnCalculate" class="button btn-submit">Calculate</button><button type="reset" id="btnClear" class="button btn-x"></button></div>'
        });

        document.getElementById('length').focus();

        /**
         * @function Calculate
         */
        $('#btnCalculate').on('click', function(e) {
            var l = document.getElementById('length').value;
            var w = document.getElementById('width').value;
            var h = document.getElementById('height').value;

            //log('length: ' + l);
            //log('width: ' + w);
            //log('height: ' + h);

            if(l == "" || w == "" || h == "") {
                alert("Error: All dimensions must be entered.");
                document.getElementById('length').focus();

                e.preventDefault();
            }

            var a = eval('(' + w + ' + ' + h + ') * 2');
            var b = eval('(' + w + ' * 2) + (' + h + ' * 2) + ' + l);
            var c = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');
            var d = eval('(' + l + ' * ' + w + ' * ' + h + ') / 139');

            //log(a);
            //log(b);
            //log(c);
            //log(d);

            if(isNaN(l) | isNaN(w) | isNaN(h)) {
                document.getElementById('error').innerHTML = "Error: [0-9] only";
            } else {
                document.getElementById('girth').innerHTML = a;
                document.getElementById('lGirth').innerHTML = b;
                document.getElementById('dimWeight').innerHTML = Math.ceil(c) + " lbs.";
                document.getElementById('intlDimWeight').innerHTML = Math.ceil(d) + " lbs.";
            }

            e.preventDefault();
        });

        $('#btnClear').on('click', function(e) {
            document.getElementById('length').value = "";
            document.getElementById('width').value = "";
            document.getElementById('height').value = "";
            document.getElementById('girth').innerHTML = "";
            document.getElementById('lGirth').innerHTML = "";
            document.getElementById('dimWeight').innerHTML = "";
            document.getElementById('intlDimWeight').innerHTML = "";
            document.getElementById('error').innerHTML = "";
            document.getElementById('length').focus();

            e.preventDefault();
        });

        $('#back').on('click', function(e) {
            modal.close();

            modal.open({
                title: 'Tools',
                content: '<div class="row"><div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div><div id="tools-density-calc" class="modal-input tools-tile" name="tools_density_calc"><div>Freight Density Calculator</div></div><div id="tools-2" class="modal-input tools-tile" name="tools_2"><div>Another Tool</div></div></div><div class="row"><div id="tools-3" class="modal-input tools-tile" name="tools_3"><div>Another Tool</div></div><div id="tools-4" class="modal-input tools-tile" name="tools_4"><div>Another Tool</div></div><div id="tools-5" class="modal-input tools-tile" name="tools_5"><div>Another Tool</div></div></div>'
            });
        });
        e.preventDefault();
	});


    /**
     * Discord --> Bitbucket Webnook URL Generator
     */
    $('#tools-webhook-generator').on('click', function(e) {
        modal.close();
        //
        modal.open({
            title: 'Discord Webhook Generator',
			content: '<div id="calcBox">' +
						'<p>' +
							'<span><input type="text" id="webhook-url" class="calc-input" size="30" placeholder="Discord webhook URL"/></span>' +
						'</p>' +
						'<p>' +
							'<span><input type="text" id="new-url" class="calc-input" size="30" placeholder="Bitbucket webhook URL"/></span>' +
							'<div class="data"><span id="error"></span></div>' +
						'</p>' +
					 '</div>' +
					 '<div class="actionbar">' +
						'<button id="btnGenerate" class="button btn-submit">Generate</button>' +
						'<button type="reset" id="btnClear" class="button btn-x"></button>' +
					 '</div>'
        });

        document.getElementById('webhook-url').focus();

        /**
         * @function Generate
         */
        $('#btnGenerate').click(function(e) {
			let discordHookUrl = document.getElementById('webhook-url').value;
			let bitbucketHookUrl = document.getElementById('new-url').value;
			let error = false;

			if(discordHookUrl && discordHookUrl.includes('discordapp.com')) {
				const endSpacialPart = discordHookUrl.indexOf('discordapp.com');
				const startSpacialPart = (discordHookUrl.indexOf(':') + 3);// + :// 3 chars:)
		
				discordHookUrl = discordHookUrl.replace(discordHookUrl.substring(startSpacialPart, endSpacialPart), '');
				discordHookUrl = discordHookUrl.replace('https://discordapp.com', 'https://skyhook.glitch.me');
		
				//const provider = $('input[name=ex2]:checked').val();
				const provider = "bitbucket";
				document.getElementById('new-url').value = discordHookUrl + '/' + provider;
			} else {
				error = true;
			}
		
			if(!error) {
				document.getElementById('error').value = "URL Generated. Copied to Clipboard";
				//window.copyToClipboard(discordHookUrl);
				//show(snackbar, 'URL Generated. Copied to Clipboard');
			} else {
				document.getElementById('error').value = "Unable to create URL. Make sure your Discord URL is valid";
				//show(snackbar, 'Unable to create URL. Make sure your Discord URL is valid');
			}

			e.preventDefault();
		});

        $('#btnClear').on('click', function(e) {
            document.getElementById('webhook-url').value = "";
            document.getElementById('new-url').value = "";
            document.getElementById('error').innerHTML = "";
            document.getElementById('webhook-url').focus();

            e.preventDefault();
        });

        $('#back').on('click', function(e) {
            modal.close();

            modal.open({
                title: 'Tools',
                content: '<div class="row"><div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div><div id="tools-density-calc" class="modal-input tools-tile" name="tools_density_calc"><div>Freight Density Calculator</div></div><div id="tools-2" class="modal-input tools-tile" name="tools_2"><div>Another Tool</div></div></div><div class="row"><div id="tools-3" class="modal-input tools-tile" name="tools_3"><div>Another Tool</div></div><div id="tools-4" class="modal-input tools-tile" name="tools_4"><div>Another Tool</div></div><div id="tools-5" class="modal-input tools-tile" name="tools_5"><div>Another Tool</div></div></div>'
            });
        });
        e.preventDefault();
	});
	

    $('.button.btn-submit').on('click', function(e) {
        modal.close();
        e.preventDefault();
    });

    $('.button.btn-cancel').on('click', function(e) {
        modal.close();
        e.preventDefault();
    });
});



/**
 * Generate Table
 */
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByClassName('gen-table')[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');

    // creating all cells
    for(var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement('tr');

        for(var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement('td');
            var cellText = document.createTextNode('cell in row ' + i + ', column ' + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute('border', '2');
}
