// Necessary element //
const taskinput = document.getElementById('taskinput')
const addtask = document.getElementById('addtask')
const tasklist = document.getElementById('tasklist')


// funksion to add task
const addtaskbutton = () =>{
    const taskname = taskinput.ariaValueMax.trim();
    if(taskname === ''){
alert('please enter a task name.')
return
    }

// create a new task 
const li = document.createElement('li')
li.classname = 'task flex justyfi-between items-center p-2 bgt-gray-100 rounded shadow'
// add task name 
const span = document.createElement('span')
span.classname = 'flex-01'
span.addEventListener('click',()=>)
}