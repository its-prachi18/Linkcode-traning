const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json({ tasks });
});

// POST a new task
app.post('/task', (req, res) => {
    const { newTask } = req.body;
    if (!newTask) {
        return res.status(400).json({ msg: "Task name is required" });
    }

    const task = {
        id: tasks.length + 1,  // Generate task ID
        name: newTask
    };

    tasks.push(task);
    res.status(201).json({ msg: "Task added successfully", task });
});

// DELETE a task by ID
app.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // Convert to number
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ msg: "Task not found" });
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({ msg: "Task deleted successfully" });
});

// PUT a task by ID
app.put('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { task: updatedTaskName } = req.body;

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({ msg: "Task not found" });
    }

    task.name = updatedTaskName; // Update task name
    res.status(200).json({ msg: "Task updated successfully", task });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});