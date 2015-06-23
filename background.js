var app = app || {};

(function () {

    //setTimeout(function () {
    //        // send message to background script
    //        chrome.runtime.sendMessage({ "newIconPath" : "img/icon_small_notify.png" });
    //
    //} , 5000);

    app.data.getLatestPosts();

})();


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // read `newIconPath` from request and read `tab.id` from sender
        chrome.browserAction.setIcon({
            path: request.newIconPath
        });
    });


