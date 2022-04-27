{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskCheck = (taskIndex) => {
        tasks[taskIndex].check = !tasks[taskIndex].check
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__block">
                    <button class="list__buttonChecker js-buttonCheck ${task.check ? "list__buttonChecker--check" : ""} js-taskCheckButton">✓</button>
                        <span class="list__taskText ${task.check ? "list__taskText--check" : ""}">
                            ${task.content}
                        </span>
                    <button class="list__buttonRemoveTask js-taskRemoveButton"><img class="buttonRemoveTask__img"
                    src="./img/remove.png" width="24px"></imb></button>
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString

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
    };

    const onFormSumbit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-taskInput").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent)
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSumbit);
    };
    
    init();
};