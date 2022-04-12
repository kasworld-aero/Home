//This is main JS for kasworld-Aero


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
 
  document.body.innerHTML = '<div style="width: 100%; height: 100%; min-height:100vh;z-index:99999; padding-top: 250px; margin-left: 0px; border: 1px solid #666666; color: #FFF; background-color: #00aeef; text-align:center; font-family: arial, helvetica, sans-serif; padding-left: 5px; padding-right: 5px; border-radius: 7px; font-size: 18px;">It seems to be using of adblock by you or your browser.<br><br><span style="font-size: 12px;">Please disable adblocker to view this page.<br><br><span style="font-size: 12px;">Please notice that advertising helps us to host the project.<br><br>If you find these ads inappropriate, please contact me on support@kasworld-aero.ml</span><br><br><br><center><img src="https://1.bp.blogspot.com/--l4MBE8KR-4/VxekI3beiOI/AAAAAAAABHk/RvrIOue9UoQCf4Lg-Ys8v0ZXi8gA0wkzgCLcB/s600/Disable-Adblock.png" alt="Kasworld-Aero" height="200px" width="300px"><br><br> <a href="?">Reload It !!</a><br></center></div>';
}
