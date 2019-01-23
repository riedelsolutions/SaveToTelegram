'use strict';

var number = 0;  //phone number here (without the  +, add later)

/*function saveNumber(){
	var input = document.getElementById("input").value;
	number = input;
	console.log(number);
}
*/
chrome.runtime.onInstalled.addListener(function() { //Once it's installed, opens a page, maybe github.io page? idk
		chrome.browserAction.setPopup({popup: 'popup.html'});	
	});

 chrome.browserAction.onClicked.addListener(function() {
 	
  });