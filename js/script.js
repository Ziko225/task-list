{
    const tasks = [
        {
            content: "jakis tekst",
            check: true,
        },
        {
            content: "jakis tekst l Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas recusandae delectus natus necessitatibus. Maiores reiciendis natus fugiat rem nesciunt optio voluptas, quam laudantium recusandae asperiores odit totam nemo eius pariatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, sint pariatur. Odio, adipisci iste deserunt dolores perspiciatis modi consequatur labore vel ipsa? Maiores quos quia commodi ut, iure assumenda voluptatibus.",
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

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-taskInput").value.trim();
            if(newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            })
            render();
        })
    };
    init();
};