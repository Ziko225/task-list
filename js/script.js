{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({ //remove
            content: newTaskContent,
        })

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1); //Remove
        render(); 
    }

    const toggleTaskCheck = (taskIndex) => {
        tasks[taskIndex].check = !tasks[taskIndex].check
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-taskRemoveButton")

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleCheckButtons = document.querySelectorAll(".js-buttonCheck")

        toggleCheckButtons.forEach((toggleCheckButton, index) => {
            toggleCheckButton.addEventListener("click", () => {
                toggleTaskCheck(index);
            });
        });
    }

    const formResetEvent = () => {
        const resetForm = document.querySelector(".js-form").reset();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__block">
                    <button class="list__button list__button--checker js-buttonCheck js-taskCheckButton">${task.check ? "✓" : ""}</button>
                        <span class="list__task ${task.check ? "list__task--check" : ""}">
                            ${task.content}
                        </span>
                    <button class="list__button list__button--remover js-taskRemoveButton">🗑</button>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString

        bindEvents();
    };

    const onFormSumbit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-taskInput").value.trim();
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent)

        formResetEvent();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSumbit);
    };

    init();

};