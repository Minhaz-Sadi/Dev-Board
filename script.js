// chaange background

const buttton = document.getElementById('theme-change');

function getColor(){
    const colors = ["#34495e", "#16a085", "#2980b9", "#f39c12"];

    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
}

buttton.addEventListener('click', function(){
    document.body.style.backgroundColor = getColor();
});


// current date

function date(){
    const date = new Date();

    const dayName = date.toLocaleDateString('en', {
        weekday: "short"
    });
    const fullDate = date.toLocaleDateString('en', {
        month: "short",
        day: "2-digit",
        year: "numeric"
    });

     document.getElementById("day").textContent = dayName;
    document.getElementById("date").textContent = fullDate;
}
date();

// Task add

const buttons = document.querySelectorAll(".complete-btn");


for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (e) {
		const cardTitleId = `card-${i + 1}`;
		completeTask(buttons[i], e, cardTitleId);
	});
}

function completeTask(btn, event, titleId){
    event.preventDefault();
    let assigned = Number(document.getElementById("task-assign-num").innerText);
    let completed = Number(document.getElementById("complete-task-num").innerText);
    let count = Number(document.getElementById("count-task").innerText);

    let title = document.getElementById(titleId).innerText;

    assigned--;
    
    document.getElementById("task-assign-num").innerText = assigned < 10 ? "0"+assigned : assigned;

    completed++;
    count++;

    document.getElementById("complete-task-num").innerText = completed;
    document.getElementById("count-task").innerText = count;

    //history

    let history = document.getElementById("task-complete-container");

    let log = document.createElement("div");
    log.innerHTML = `
        <div class="p-3">
            <p class="bg-[#F4F7FF] p-3 rounded-lg">
                You have completed the task ${title} at ${currentTime()}.
            </p>
        </div>
    `;

    history.append(log);

    btn.style.backgroundColor = "gray";
    btn.disabled = true;

    alert("Board Updated Successfully");

    if(assigned === 0){
         alert("Congrats!!! You have completed all the current tasks!");
    }

}

function currentTime(){
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let period = hour >= 12 ? "PM" : "AM";

    if(hour>12){
        hour  = hour - 12;
    }
    if(hour === 0){
        hour = 12;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }

    return hour + ":" + min + ":" + sec + " " + period;
    
}


// clear history

document.getElementById("clear-history").addEventListener("click", function () {
	document.getElementById("task-complete-container").innerHTML = "";
});