function Invert() {
	var css = ".page { filter : invert(80%); }";
	
	var insertingCSS = browser.tabs.insertCSS({ code : css });
}

browser.browserAction.onClicked.addListener(Invert);