
console.log("Come to iaaa website!");

chrome.storage.sync.get(['username1', 'password1'], function(items) {
    document.getElementById("user_name").value = items["username1"];
    document.getElementById("password").value = items["password1"];
    location.href="javascript:oauthLogon(); void 0";
});





