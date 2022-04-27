{
    const tasks = [
        {
            content: "jakis tekst",
            check: true,
        },
        {
            content: "jakis tekst",
            check: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                
                <li class="list__block">
                    <button class="list__buttonChecker ${task.check ? "list__buttonChecker--check" : ""} js-taskCheckButton">✓</button>
                        <span class="list__taskText ${task.check ? "list__taskText--check" : ""}">
                            ${task.content}
                        </span>
                    <button class="list__buttonRemoveTask js-taskRemoveButton"><img class="buttonRemoveTask__img"
                    src="/img/remove.png" width="24px"></imb></button>
                </li>
            `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString
    };
    const init = () => {
        render();
    };
    console.log("hello  world");
    init();













}


















const formElement = document.querySelector(".js-form")
const taskInputElement = document.querySelector(".js-taskInput")