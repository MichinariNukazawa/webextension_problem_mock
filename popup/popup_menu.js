'use strict';

function onError(error) {
	console.error(`Error: ${error}`);
}

window.addEventListener( 'load', function(e){
	console.log('popup load');
	let checkbox_element = document.getElementById('ld_is_enabled');

	checkbox_element.addEventListener('change', function(e) {
	console.debug('popup is_enable change');

	// message to current tab content_script
	browser.tabs.query({active: true, currentWindow: true}, tabs => {
		browser.tabs.sendMessage(
				tabs[0].id,
				{ type: 'popup_change' }
				).then(response => {
					console.log(response.response);
				}).catch(onError);
				});
	});

}, false);

