  checkAdBlocker();

function checkAdBlocker() {
    try {
        fetch(
            new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
                method: 'HEAD',
                mode: 'no-cors'
            })).catch(error => {
            showNotification()
        });
    } catch (e) {
        // Request failed, likely due to ad blocker
        showNotification()
    }
}

function showNotification() {
 
  document.getElementById("postBody").innerHTML = '' + 
'<button style="background-color:white;"><hr/><hr/><strong style="color: red;"><svg width="24" height="24" viewBox="0 0 24 24" style="fill:currentColor;margin-right: 10px;"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"></path></svg>Ad-Block Enabled</strong><p  style="color: red;">Sorry, we detected that you have activated Ad-Blocker.For that, we hope that you disable it.</p><p style="color: red;">By disabling Ad-Blocker, you have helped us in developing this Website. Thank you</p></blockquote><hr/><hr/>' + 
'';
}
