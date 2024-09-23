<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KRUSHIMITRA Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f8ea;
        }
        .dashboard {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #2c5e1a;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .card h2 {
            color: #2c5e1a;
            margin-top: 0;
        }
        .weather-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }
        #cropStatus {
            height: 20px;
            background-color: #e0e0e0;
            border-radius: 10px;
            overflow: hidden;
        }
        #cropStatusBar {
            height: 100%;
            width: 0;
            background-color: #4caf50;
            transition: width 0.5s ease-in-out;
        }
        .task-list {
            list-style-type: none;
            padding: 0;
        }
        .task-list li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .task-list input[type="checkbox"] {
            margin-right: 10px;
        }
        #addTaskForm {
            margin-top: 20px;
        }
        #addTaskForm input {
            padding: 5px;
            width: 70%;
        }
        #addTaskForm button {
            padding: 5px 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>KRUSHIMITRA Dashboard</h1>
    </header>
    <div class="dashboard">
        <div class="grid-container">
            <div class="card">
                <h2>Weather</h2>
                <div class="weather-icon" id="weatherIcon"></div>
                <p id="temperature"></p>
                <p id="description"></p>
            </div>
            <div class="card">
                <h2>Crop Status</h2>
                <div id="cropStatus">
                    <div id="cropStatusBar"></div>
                </div>
                <p id="cropStatusText"></p>
            </div>
            <div class="card">
                <h2>Tasks</h2>
                <ul id="taskList" class="task-list"></ul>
                <form id="addTaskForm">
                    <input type="text" id="newTask" placeholder="Add a new task" required>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div class="card">
                <h2>Crop Yield Forecast</h2>
                <p id="yieldForecast"></p>
            </div>
        </div>
    </div>

    <script>
        // Simulated weather data
        const weatherData = {
            temperature: 28,
            description: "Partly cloudy",
            icon: "🌤️"
        };

        // Update weather card
        document.getElementById('weatherIcon').textContent = weatherData.icon;
        document.getElementById('temperature').textContent = `${weatherData.temperature}°C`;
        document.getElementById('description').textContent = weatherData.description;

        // Simulated crop status
        const cropStatus = 75; // percentage
        document.getElementById('cropStatusBar').style.width = `${cropStatus}%`;
        document.getElementById('cropStatusText').textContent = `Crop health: ${cropStatus}%`;

        // Task management
        const taskList = document.getElementById('taskList');
        const addTaskForm = document.getElementById('addTaskForm');
        const newTaskInput = document.getElementById('newTask');

        const tasks = [
            { id: 1, text: "Water the crops", completed: false },
            { id: 2, text: "Check for pests", completed: true },
            { id: 3, text: "Apply fertilizer", completed: false }
        ];

        function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                    <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</span>
                `;
                taskList.appendChild(li);
            });
        }

        function toggleTask(id) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
            }
        }

        addTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTaskText = newTaskInput.value.trim();
            if (newTaskText) {
                tasks.push({ id: Date.now(), text: newTaskText, completed: false });
                newTaskInput.value = '';
                renderTasks();
            }
        });

        renderTasks();

        // Simulated crop yield forecast
        const yieldForecast = Math.floor(Math.random() * (15 - 10 + 1) + 10);
        document.getElementById('yieldForecast').textContent = `Estimated yield: ${yieldForecast} tons/hectare`;
    </script>
</body>
</html>