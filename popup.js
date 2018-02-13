document.getElementById('clickme').onclick=myfunction;

function myfunction(){

// Check browser support
if (typeof(Storage) != "undefined") {

    var username=document.getElementById("u1").value;
    var password=document.getElementById("u2").value;

    // Store
    chrome.storage.sync.set({'username1': username, 'password1': password}, function() {
        console.log('Settings saved');
      });

    // Retrieve
    document.getElementById("result").innerHTML = "Successfully Saved";
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

