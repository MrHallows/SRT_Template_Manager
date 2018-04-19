/* settings.js */
/* utils/settings.js */


/* HTML content

<div id="app-settings">
	<h3>General</h3>
	<div class="controls">
		<p>
			<label class="checkbox-container">
				<input type="checkbox" name="autoRun">
				<span class="checkbox"></span>Auto-run code
				<small>(beta)</small>
			</label>
		</p>
		<p>
			<label class="checkbox-container">
				<input type="checkbox" name="tabIcons">
				<span class="checkbox"></span>File Tree Tabs: Show icons instead of text
				<small></small>
			</label>
		</p>
	</div>
	<h3>File Tree</h3>
	<div class="controls">
		<p>
			<label class="checkbox-container">
				<input type="checkbox" name="autoRun">
				<span class="checkbox"></span>Auto-run code
				<small>(beta)</small>
			</label>
		</p>
		<p>
			<label class="checkbox-container">
				<input type="checkbox" name="tabIcons">
				<span class="checkbox"></span>File Tree Tabs: Show icons instead of text
				<small></small>
			</label>
		</p>
	</div>
</div>
<div class="actionbar">
	<button class="button btn-cancel">Cancel</button>
	<button class="button btn-submit">Save</button>
</div>
*/

/**
 * Settings
 */
$('#rs-settings').on('click', function(e) {
    e.preventDefault();

    var $form = document.getElementById('content');

    modal.open({
        title: 'Settings',
        content: '<div id="app-settings"><h3>General</h3><div class="controls"><p><label class="checkbox-container"><input type="checkbox" name="autoRun"><span class="checkbox"></span>Auto-run code<small>(beta)</small></label></p><p><label class="checkbox-container"><input type="checkbox" name="tabIcons"><span class="checkbox"></span>File Tree Tabs: Show icons instead of text<small></small></label></p></div><h3>File Tree</h3><div class="controls"><p><label class="checkbox-container"><input type="checkbox" name="autoRun"><span class="checkbox"></span>Auto-run code<small>(beta)</small></label></p><p><label class="checkbox-container"><input type="checkbox" name="tabIcons"><span class="checkbox"></span>Tabs: Show icons instead of text<small></small></label></p></div></div><div class="actionbar"><button class="button btn-cancel">Cancel</button><button class="button btn-submit">Save</button></div>'
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

//<div class="actionbar"><button class="button btn-cancel">Cancel</button><button class="button btn-submit">Save</button></div>
