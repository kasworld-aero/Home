// randome link add
    
let cnt= '450';
var luck = Math.floor(Math.random()*cnt); script = document.createElement('script'); script.src = 'https://kasworld-aero.blogspot.com/feeds/posts/summary?start-index='+luck+'&max-results=1&alt=json-in-script&callback=showLucky'; script.type = 'text/javascript'; document.getElementsByTagName('head')[0].appendChild(script);function showLucky(root){ var feed = root.feed; var entries = feed.entry || []; var entry = feed.entry[0]; for (var j = 0; j < entry.link.length; ++j){if (entry.link[j].rel == 'alternate'){
  document.getElementById('myLuckyPost').value = '<a href="'+entry.link[j].href+'">'+entry.link[j].title+'</a>'; 
 setTimeout(() => {
  document.getElementById('stform').click();
}, 5000)

   }}};
      
    
  
      
  const taskAdder = document.querySelector('.taskAdder');
const myTasks = document.querySelector('.myTasks');

const tasks = JSON.parse(localStorage.getItem('taskList')) || [];

taskAdder.addEventListener('submit', addTask);
myTasks.addEventListener('click', toggleDone);
outputTasks();


function addTask(e){
    e.preventDefault();
    const textTask = this.querySelector('[name=task]').value;
    const task = {
        textTask,done:false
    }

    tasks.push(task);
    saveStorage();
    outputTasks();

    this.reset();
}

function saveStorage(){
  
    localStorage.setItem('taskList',JSON.stringify(tasks));
}

function outputTasks() {
    let html = tasks.map(function(data,i) {
        let myClass = data.done ? 'done' : '';
        
    
        
        return '<li data-index='+i+'><div class="'+myClass+'">'+
            data.textTask+'<span class="remove">  X </span></div></li>';
        
          var targetDiv = document.querySelector('.dkal[data-index="' + i + '"]');
  targetDiv.appendChild(data.textTask);
    })

    myTasks.innerHTML = html.join('');
    
  
}

function toggleDone(e) {
    
    const myEl = e.target;
    const mySel = myEl.parentElement;
    if(myEl.className === 'remove') {
        let index = mySel.parentElement.dataset.index;
        let temp = tasks.splice(index,1);
        console.log(temp);
    } else {
    
   
        myEl.classList.toggle('done');
    
        tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
    }

    saveStorage();
    outputTasks();
}


var ul = document.querySelector('.myTasks');
ul.querySelectorAll('li').forEach(function(li) {
  var div = document.createElement('div');
  div.dataset.index = li.dataset.index;
  div.innerHTML = li.innerHTML.replace('<span class="remove">  X </span>', ' ');
  var targetDiv = document.querySelector('.dkal[data-index="' + li.dataset.index + '"]');
  targetDiv.appendChild(div);
});
