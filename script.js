
let tasks = [];

const addTask = () => {
    const title = document.getElementById('task-title').value;
    const status = document.getElementById('task-status').value;
    const priority = parseInt(document.getElementById('task-priority').value);

    if (title && status && priority >= 1 && priority <= 5) {
        const newTask = { title, status, priority };
        tasks.push(newTask);
        displayTasks();
    } else {
        alert('Please fill out all fields correctly!');
    }

  
    document.getElementById('task-title').value = '';
    document.getElementById('task-status').value = 'Pending';
    document.getElementById('task-priority').value = '';
};


const displayTasks = () => {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    if (tasks.length === 0) {
        taskListContainer.innerHTML = '<p>No tasks available.</p>';
    } else {
        tasks.map(task => {
            const taskElement = document.createElement('p');
            taskElement.textContent = `Task: ${task.title}, Status: ${task.status}`;
            taskListContainer.appendChild(taskElement);
        });
    }

    displayTaskTitles();
};

const filterByStatus = (status) => {
    const filteredTasks = tasks.filter(task => task.status === status);
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    if (filteredTasks.length === 0) {
        taskListContainer.innerHTML = `<p>No ${status} tasks available.</p>`;
    } else {
        filteredTasks.map(task => {
            const taskElement = document.createElement('p');
            taskElement.textContent = `Task: ${task.title}, Status: ${task.status}`;
            taskListContainer.appendChild(taskElement);
        });
    }
};


const findHighPriorityTask = () => {
    const highPriorityTask = tasks.find(task => task.priority === 5);
    const highPriorityContainer = document.getElementById('high-priority');
    if (highPriorityTask) {
        highPriorityContainer.textContent = `High Priority Task: ${highPriorityTask.title}`;
    } else {
        highPriorityContainer.textContent = 'No high-priority tasks available.';
    }
};


const displayTaskTitles = () => {
    const taskTitles = tasks.map(task => `Task: ${task.title}, Status: ${task.status}`).join('<br>');
    document.getElementById('task-list').innerHTML = taskTitles;
};


document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('filter-pending').addEventListener('click', () => filterByStatus('Pending'));
document.getElementById('filter-completed').addEventListener('click', () => filterByStatus('Completed'));
