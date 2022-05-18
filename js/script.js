{
    var tasks = [];

    let hideCheckTasks = false

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            {
                content: newTaskContent,
            },
        ];
        render();
    };

    const removeTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    }

    const tasksHidder = (HideTaskButton) => {
        HideTaskButton.addEventListener("click", () => {
            hideCheckTasks = !hideCheckTasks
            render();
        })
    }

    const tasksChecker = (checkAllTasks) => {
        checkAllTasks.addEventListener("click", () => {
            tasks = tasks.map((task) => ({
                ...task,
                check: true,
            }))
            render();
        });
    };

    const toggleTaskCheck = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            { ...tasks[index], check: !tasks[index].check },
            ...tasks.slice(index + 1),
        ];
        render();
    }

    const bindButtons = () => {

        const checkAllTasks = document.querySelector(".js-checkAllTasks")
        if (checkAllTasks) checkAllTasks.addEventListener("click", (tasksChecker(checkAllTasks)));

        const HideTaskButton = document.querySelector(".js-hideTask")
        if (HideTaskButton) HideTaskButton.addEventListener("click", (tasksHidder(HideTaskButton)));
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
        const isEveryTaskDone = tasks.every(({ check }) => check)

        let htmlString1 = "";
        htmlString1 += `
                <h2 class="section__header--titles">Lista zadań</h2>
                <button class="header__button js-hideTask ${taskElement ? "" : "list__block--hidden"}">${hideCheckTasks ? "Pokaż" : "Ukryj"} ukończone</button>
                <button ${isEveryTaskDone === true ? "disabled" : ""} class="header__button js-checkAllTasks ${taskElement ? "" : "list__block--hidden"}"> Ukończ wszystkie</button>
            `;
        document.querySelector(".js-headerButton").innerHTML = htmlString1
    }

    const renderTask = () => {
        let htmlTask = "";

        for (const task of tasks) {
            htmlTask += `
                <li class="list__block ${task.check && hideCheckTasks ? "list__block--hidden" : ""}">
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
        renderTask();
        renderButtons();

        bindEvents();
        renderButtons();
        bindButtons();
    };

    const onFormSumbit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-taskInput").value.trim();
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent)
        formResetEvent();
        formFocusEvent();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSumbit);
        formFocusEvent();
    };

    init();
};