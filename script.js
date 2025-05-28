document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    const viewCompletedBtn = document.getElementById('viewCompletedBtn');
    const completedSection = document.getElementById('completedTasks');

    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const taskItem = document.createElement('div');
      taskItem.className = 'flex justify-between items-center p-4 bg-gray-50 border rounded-lg shadow';

      const taskLabel = document.createElement('span');
      taskLabel.className = 'flex-1 text-gray-800';
      taskLabel.textContent = taskText;

      const controls = document.createElement('div');
      controls.className = 'flex gap-2 items-center';

      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.className = 'bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded';
      completeBtn.addEventListener('click', () => {
        taskItem.remove();
        const completedItem = taskItem.cloneNode(true);
        completedItem.querySelector('button').remove();
        completedTaskList.appendChild(completedItem);
        completedSection.classList.remove('hidden');
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '✖';
      deleteBtn.className = 'text-red-500 hover:text-red-700 font-bold text-lg';
      deleteBtn.addEventListener('click', () => taskItem.remove());

      controls.appendChild(completeBtn);
      controls.appendChild(deleteBtn);

      taskItem.appendChild(taskLabel);
      taskItem.appendChild(controls);

      taskList.appendChild(taskItem);
      taskInput.value = '';
    });

    viewCompletedBtn.addEventListener('click', () => {
      completedSection.classList.toggle('hidden');
    });
  });