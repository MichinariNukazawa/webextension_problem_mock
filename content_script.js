'use strict';

browser.runtime.onMessage.addListener(request => {
	console.log(request);

	return Promise.resolve({response: "content_script response"});
});

