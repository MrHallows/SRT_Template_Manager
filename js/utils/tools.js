/* tools.js */
/* utils/tools.js */


/* *
 * FedEx Dimensional Weight Calculator
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
 
$(document).ready(function() {

    $('#dimReset').click(function(e) {
        e.preventDefault();
        //logLinkView('resetDimWeight', 'event6');

        $('#length_val').val('');
        $('#width_val').val('');
        $('#height_val').val('');
        $('#dim_error').hide();
    });

    $('#dimRedo').click(function(e) {
        e.preventDefault();
        //logLinkView('recalculateDimWeight', 'event6');

        $('input').val('');
        $('#dim_error').hide();

        $('#dimForm_form').show();
        $('#dimResult').hide();
    });
    $('#dimShipNow').click(function(e) {
        //logLinkView('shipNowLink', 'event7');
    });

    $('#dimCalc').click(function(e) {
        e.preventDefault();

        var _shipRatio = 0;
        var _error = 0;
        var _trackString = 'calculateDimWeight: ';

        switch ($('#dimForm_form input[type="radio"]:checked').attr('class')) {
            // Pulling class as a value since value attribute clears out when resetting form
            case 'domestic':
                _shipRatio = 139;
                _trackString += 'dom ';
                break;
            case 'international':
                _shipRatio = 139;
                _trackString += 'int ';
                break;
            default:
                _shipRatio = 0;
        }

        if ($('#length_val').val().match(/^\d+$/) && $('#width_val').val().match(/^\d+$/) && $('#height_val').val().match(/^\d+$/)) {
            $('#dim_error').hide();
        } else {
            $('#dim_error').show();
            var _error = 1;
        }

        if (_error == 0) {
            var _length = $('#length_val').val();
            var _height = $('#height_val').val();
            var _width = $('#width_val').val();

            var _dimesions = _length * _width * _height;
            _trackString += _length + 'x';
            _trackString += _width + 'x';
            _trackString += _height + ' ';

            var _dimWeight = 0;
            _dimWeight = Math.ceil((_length * _width * _height) / _shipRatio);
            _trackString += 'dim: ' + _dimWeight;

            showResult(_dimWeight, _trackString);
        }

    });
    function showResult(_shippingWeight, _statement) {
        //logLinkView(_statement, 'event5');

        $('#result_weight').empty();
        $('#result_weight').append(_shippingWeight);

        $('#dimResult').show();
        $('#dimForm_form').hide();
    }

    $('#dimWeightFAQ_cta').click(function(e) {
        //logLinkView('dimWeightFAQ_Link', 'event8');
    });
    $('#quickGuide_cta').click(function(e) {
        //logLinkView('quickGuide_Link', 'event9');
    });
    $('#rightSizing_cta').click(function(e) {
        //logLinkView('rightSizing_Link', 'event10');
    });
});

/* HTML:
<form id="dimForm" class="fx-form fx-cf">
    <div class="fx-block-layout fx-cf">
        <div class="fx-half">
            <div class="fx-copy fx-form">										
                    <h2>Calculate your dimensional weight</h2>
                    <div id="dimResult" style="display: none;">
                        <div class="fx-form-note" style="background-color:#4d148c; color:#fff;margin-bottom:15px;">
                            <h2 style="margin-top:0;color:#fff;">Dimensional weight: <b><span id="result_weight">2</span> lbs.</b></h2>
                            <div class="fx-alert"><p><span>!</span>To ensure your invoice matches your quote, be sure to include all package dimensions (including length, width, and height) when creating your shipment.</p></div>
                        </div>
                        <div class="fx-form-buttons fx-cf" style="margin-bottom:20px;margin-right: 0;">
                            <a class="fx-btn" id="dimShipNow" href="https://pages.message.fedex.com/Redirect.aspx?EQ=Ydbgg24rDSaQGxE_azcGbopXa6h8jWTsqqVB9As3Saoomt1uMopBA2CojDTYMRbeVjRTXAvb9TVbefyhc-6t0YtUq9u2IIpq6pLRwTMPR60sFl-SwN8YE2_qcvCu47tuCPp1ncYKIYKiKhg12FuLItd_k1qjLNdP0iniu0PJNTEWUYtpHoBtikea3x3iMvlOwMNxQ9slJbVPIA_AQ-Btk40L-nmlTcQlv_xAvDbznK8__3jKO2YoryFHbhUvmIhAgA2">Ship now</a>

                            <button class="button btn-std" id="dimRedo">Recalculate</button>
                        </div>	
                    </div>
                <fieldset id="dimForm_form" style="display: block;">											
                    <div class="fx-datapoint fx-cf">
                        <label>Select one</label>
                        <div class="fx-inputwrap">
                            <label class="radio"><input type="radio" name="shipping" class="domestic" checked="" value=""> U.S. Domestic</label>
                            <label class="radio"><input type="radio" name="shipping" class="international" value=""> U.S. International (Import/Export)</label>
                        </div>
                        <label for="password_option" class="unselectable"><span></span> U.S. Domestic </label>
                        <label for="password_option" class="unselectable"><span></span> U.S. International (Import/Export) </label>
                    </div>								
                    <div class="fx-datapoint fx-cf">
                        <label>Enter dimensions to the nearest whole number (in.)</label>
                        <div class="fx-dimensions">
                            <input type="width" id="length_val">												
                            <label>&nbsp;(L)</label>
                        </div>
                        <div class="fx-dimensions" id="length_val">
                            <input type="width" id="width_val">												
                            <label>&nbsp;(W)</label>
                        </div>
                        <div class="fx-dimensions" id="length_val">
                            <input type="width" id="height_val">												
                            <label>&nbsp;(H)</label>
                        </div>
                        <div id="dim_error" class="fx-error-resolution" style="display: none;">Enter dimensions to the nearest whole number (in.)</div>
                    </div>
                    <div class="fx-form-buttons fx-cf" style="margin-bottom:20px;">
                        <button class="fx-btn" id="dimCalc">Calculate</button>

                        <button class="fx-btn grey-btn" id="dimReset">Reset</button>
                    </div>																				
                </fieldset>	
            </div>	
        </div>
    </div>
</form>


<label for="password_option" class="unselectable"><span></span> U.S. Domestic </label><label for="password_option" class="unselectable"><span></span> U.S. International (Import/Export) </label>
*/



$('#btnTools').on('click', function(e) {
    e.preventDefault();

    var $form = document.getElementById('content');

    modal.open({
        title: 'Tools',
        content: '<div id="tools-dim-calc" class="modal-input tools-tile" name="tools_dim_calc"><div>Dimensional Weight Calculator</div></div><div id="tools-1" class="modal-input tools-tile" name="tools_"><div>Another Tool</div></div><div id="tools-2" class="modal-input tools-tile" name="tools_"><div>Another Tool</div></div><div class="actionbar"><button class="button btn-cancel">Cancel</button><button class="button btn-submit">Save</button></div>'
    });

    $('#tools-dim-calc').on('click', function(e) {
        modal.close();
        //
        modal.open({
            title: 'Dimensional Weight Calculator',
            content: '<form id="dimForm" class=""><div class=""><div class=""><div class=""><h2>Calculate your dimensional weight</h2><div id="dimResult" style="display: none;"><div class="" style="background-color:#4d148c; color:#fff; margin-bottom:15px;"><h2 style="margin-top:0;color:#fff;">Dimensional weight: <b><span id="result_weight">2</span> lbs.</b></h2><div class="alert"><p><span>!</span>To ensure your invoice matches your quote, be sure to include all package dimensions (including length, width, and height) when creating your shipment.</p></div></div><div class="" style="margin-bottom:20px;margin-right: 0;"><a class="" id="dimShipNow" href="">Ship now</a><button class="button btn-std" id="dimRedo">Recalculate</button></div></div><fieldset id="dimForm_form" style="display:block;"><div class=""><label>Select one</label><div class="radio-container"><input type="radio"/><label class="unselectable"><span></span> U.S. Domestic</label></div><div class="radio-container"><input type="radio"/><label class="unselectable"><span></span> U.S. International (Import/Export)</label></div><div class=""><label>Enter dimensions to the nearest whole number (in.)</label><div class="dimensions"><label for="length_val">Length</label><input type="text" id="length-val" class="modal-input" name="length_val" placeholder="Length"></div><div class="dimensions"><label for="width_val">Width</label><input type="text" id="width-val" class="modal-input" name="width_val" placeholder="Width"></div><div class="dimensions"><label for="height_val">Height</label><input type="text" id="height-val" class="modal-input" name="height_val" placeholder="Height"></div><div id="dim_error" class="" style="display: none;">Enter dimensions to the nearest whole number (in.)</div></div><div class="" style="margin-bottom:20px;"><button class="button btn-submit" id="dimCalc">Calculate</button><button class="button btn-cancel" id="dimReset">Reset</button></div></fieldset></div></div></div></form>'
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

    $('.button.btn-submit').on('click', function(e) {
        modal.close();
        e.preventDefault();
    });

    $('.button.btn-cancel').on('click', function(e) {
        modal.close();
        e.preventDefault();
    });
});
