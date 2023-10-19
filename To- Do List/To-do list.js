const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dt = new Date();

const add = () => {
    let taskdes = document.querySelector("#box input").value;
    if (taskdes === "") {
        alert("You cant leave task name empty");
    }

    else if (taskdes.length > 48) {
        alert("Task title is too long. It must be 48 at max");
    }

    else {
        let task = document.createElement("section");
        task.innerHTML = `<section class="task">
        <div class="dt">
        <p class="time"><span class="hour">${dt.getHours()}</span>:<span class="min">${dt.getMinutes()}</span></p>
        <p class="date"><span class="day">${dt.getDay()}</span> <span class="month">${month[dt.getMonth()]}</span> <span class="year">${dt.getFullYear()}</span>
        </div>
        <div id="descont"><p class="des">${taskdes}</p></div>
        <section class="btnsec">
            <button class="donebtn" onclick="done()">&#x2713;</button>
            <button class="removebtn" onclick="remove()">&#10006;</button>
        </section>
    </section>`;
        document.getElementById("listarea").appendChild(task);
        document.querySelector("#box input").value = "";
        check()
    }
}

const remove = () => {
    let section = document.querySelector(".task:hover");
    section.remove()
}

const done = () => {
    let p = document.querySelector(".task:hover .des");
    p.classList.add("done");
    document.querySelector(".donebtn:hover").style.color = "#0f0";
}

setInterval(() => {
    let input = document.getElementById("bar").value.toUpperCase();
    let task = document.getElementsByClassName("task");
    if (input == "") {
        for (let i = 0; i < task.length; i++) {
            task[i].style.display = "flex";
        }
    }
}, 10)

document.querySelector("#box input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        add();
    }
})

const searchengine = () => {
    let input = document.getElementById("bar").value.toUpperCase();
    let products = document.getElementsByClassName("task");
    let des = document.querySelectorAll(".des");

    for (let i = 0; i < des.length; i++) {
        let match = products[i].getElementsByTagName("p")[2];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(input) > -1) {
                products[i].style.display = "flex";
            }
            else {
                products[i].style.display = "none";
            }
        }
    }
}

const check = () => {
    if (document.querySelector("#dtbtn").classList.contains("active")) {
        Array.from(document.querySelectorAll(".dt")).forEach(e => {
            e.style.display = "flex";
        })
    }
    else {
        Array.from(document.querySelectorAll(".dt")).forEach(e => {
            e.style.display = "none";
        })
    }
}

check();

const dtst = () => {
    document.querySelector("#dtbtn").classList.toggle("active");
    check();
}