{
    var tasks = [];

    let hideDoneTask = false

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent, },
        ];
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

    const formFocusEvent = () => {
        const focusForm = document.querySelector(".js-taskInput").focus();
    }

    const renderButtons = () => {
        const taskElement = document.querySelector(".list__block")

        let htmlString1 = "";
        htmlString1 += `
                <h2 class="section__header--titles">Lista zadań</h2>
                <button class="header__button js-hideTask ${taskElement ? "" : "list__block--hiden"}">Ukryj ukończone</button>
                <button ${tasks.check === true ? "disable" : ""} class="header__button js-endTask ${taskElement ? "" : "list__block--hiden"}"> Ukończ wszystkie</button>
            `;
        document.querySelector(".js-headerButton").innerHTML = htmlString1
    }

    const renderTask = () => {
        let htmlTask = "";

        for (const task of tasks) {
            htmlTask += `
                <li class="list__block ${task.check && hideDoneTask ? "list__block--hiden" : ""}">
                    <button class="list__button list__button--checker js-buttonCheck js-taskCheckButton">${task.check ? "✓" : ""}</button>
                        <span class="list__task ${task.check ? "list__task--check" : ""}">
                            ${task.content}
                        </span>
                    <button class="list__button list__button--remover js-taskRemoveButton">🗑</button>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlTask
    }

    const render = () => {
        renderTask()
        renderButtons()


        bindEvents();
        renderButtons();
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

    formFocusEvent();
    init();
};