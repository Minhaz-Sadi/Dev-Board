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

