//This is main JS for kasworld-Aero


 document.body.onload = addElement;
function addElement () { 
  // create a new div element 
  // and give it popup content 
  var newDiv = document.createElement("div"); 
  newDiv.innerHTML +='<div id="popup" style="transform: translate(-50%, -50%); position: absolute;left: 50%;top:50%;max-width:600px;width: 100%;height:400px;z-index: 999;display: none;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;   padding: 10px;"><button class="close_button" style="position: absolute; right: 5px; z-index: 9999; top: 0;" onClick="closePopup()">close</button><div class="popup_body" style="  height: 100px;"><iframe style="width:100%;height:400px" src="https://www-golink.blogspot.com/p/pop-up.html"></iframe></div></div>';   

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("main_container"); 
  document.body.insertBefore(newDiv, currentDiv); 

  // open popup onload
  setTimeout(function() {
    
  openPopup();
    
    }, 15000);
}

function openPopup() {
  var el = document.getElementById('popup');
  el.style.display = 'block';
  
  // Updates: set window background color black
  document.body.style.background = '#353333';
}

function closePopup() {
  var el = document.getElementById('popup');
  el.style.display = 'none';
  document.body.style.background = 'white';
}
