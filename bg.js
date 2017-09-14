'use strict';

var logact = null;


chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
 
    if (msg.logact== 'downvoted') {
        logact = 'downvoted';
    }

    else if(msg.logact=='upvoted'){
        logact = 'upvoted';
    }

    else if(msg.logact=='user commented'){
        logact = 'user commented on the answer';
    }

    else if(msg.logact=='user shared'){
        logact = 'user shared the answer';
    }

    else if(msg.logact=='user searched'){
        logact = 'user searched in the search field'; 
    }

    else if(msg.logact=='scrolled'){
        logact = 'scrolled entire page';
    }
    

    if(logact!=null)
        saveAction();
})


function saveAction()
{ 
    var req = new XMLHttpRequest();

    req.open("POST","http://localhost:3000/api/action");

    req.setRequestHeader("Content-Type","application/json");

    req.send(JSON.stringify({'eventype': logact}));
    
    req.onreadystatechange = function() 
    { 
        if(req.readyState==4) 
        {console.log(req.responseText); 
        }

    }
}


