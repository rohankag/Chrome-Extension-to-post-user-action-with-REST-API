'use strict';


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    	 console.log('scrolled entire page');
      chrome.extension.sendMessage({'logact':'scrolled'});
    }
};

var ac1 = document.getElementsByClassName('vote-up-off');
for(var i=0;i<ac1.length;i++){
ac1[i].onclick = function() {
  console.log('upvoted');
	chrome.extension.sendMessage({'logact':'upvoted'});
}
};

var ac2 = document.getElementsByClassName('vote-down-off');
for(var i=0;i<ac2.length;i++){
ac2[i].onclick = function() {
  console.log('downvoted');
    chrome.extension.sendMessage({'logact':'downvoted'});
  }
};

var ac3 = document.getElementsByClassName('js-add-link comments-link disabled-link');
for(var i=0;i<ac3.length;i++){
ac3[i].onclick = function() {
  console.log('user commented');
    chrome.extension.sendMessage({'logact':'user commented'});
  }
};

var ac4 = document.getElementsByClassName('short-link');
for(var i=0;i<ac4.length;i++){
ac4[i].onclick = function() {
  console.log('user shared the answer');
    chrome.extension.sendMessage({'logact':'user shared'});
  }
};

var ac5 = document.getElementsByClassName('f-input js-search-field');
for(var i=0;i<ac5.length;i++){
ac5[i].onclick = function() {
  console.log('user searched in the search field');
    chrome.extension.sendMessage({'logact':'user searched'});
  }
};


