// Create Msbaha
let open_msbaha = document.querySelector(".open-msbaha");
let close_msbaha = document.querySelector(".close-msbaha");
let click_msbaha = document.querySelector(".click-msbaha");
let popup_msbaha = document.querySelector(".popup-msbaha");
let current_count = document.querySelector(".popup-msbaha .current-count h3");
let current_rotate = document.querySelector(".popup-msbaha .current-rotate h3");
let reset_count = document.querySelector(".popup-msbaha .restClose .reset");
let value = 0;
let currRotate = 1;

open_msbaha.addEventListener("click", () => {
  popup_msbaha.classList.add("active");
});

close_msbaha.addEventListener("click", () => {
  popup_msbaha.classList.remove("active");
});

click_msbaha.addEventListener("click", clickable);

function clickable() {
  click_msbaha.classList.add("active");
  value++;
  setTimeout(() => {
    click_msbaha.classList.remove("active");
  }, 200);
  current_count.innerHTML = value;

  if (current_count.innerHTML > 33) {
    resetCount();
    current_rotate.textContent = currRotate + 1;
    currRotate++;
  }
}

reset_count.addEventListener("click", resetCount);

function resetCount() {
  value = 0;
  current_count.innerHTML = value;
  current_rotate.textContent = 1;
}
// End Msbaha

// Create Countdown
let countDate = new Date("April 1, 2022 23:59:59").getTime();

let ramadan = setInterval(() => {
  // Get date now
  let now = new Date().getTime();
  // Get Difference between date now and countDate
  let gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.querySelector(".unit .day").innerHTML = d < 10 ? `0${d}` : d;
  document.querySelector(".unit .hour").innerHTML = h < 10 ? `0${h}` : h;
  document.querySelector(".unit .minute").innerHTML = m < 10 ? `0${m}` : m;
  document.querySelector(".unit .second").innerHTML = s < 10 ? `0${s}` : s;

  if (gap < 0) {
    clearInterval(ramadan);
    document.querySelector(".countdown-ramadan").style.display = "none";
  }
}, 1000);
// End Countdown

// Create ToDo List
let myInput = document.querySelector(".add-mission input");
let addTaskBtn = document.querySelector(".add-mission button");
let tasksContainer = document.querySelector(".missions .task-content");
let tasksCount = document.querySelector(".missions .tasks-count span");
const delAllTasks = document.querySelector(".missions .del-all");

addTaskBtn.addEventListener("click", () => {
  if (myInput.value == "") {
    alert("من فضلك ادخل مهمه واحده علي الاقل");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    // Check if span with no text msg is exsist ?
    if (document.body.contains(noTasksMsg)) {
      //Remove no tasks msg
      noTasksMsg.remove();
    }

    let mainDiv = document.createElement("div");
    let spanElement = document.createElement("span");
    let deleteElement = document.createElement("button");

    // Add class to Elements
    mainDiv.className = "task-box";
    deleteElement.className = "delete";

    // Add Text to Elements
    spanElement.appendChild(document.createTextNode(myInput.value));
    deleteElement.appendChild(document.createTextNode("حذف"));

    mainDiv.appendChild(spanElement);
    mainDiv.appendChild(deleteElement);
    tasksContainer.appendChild(mainDiv);

    // Empty the input
    myInput.value = "";
    // Focus on field after add
    myInput.focus();

    // Calculation Function
    calculateTask();
  }
});

// Delete Tasks
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();

    // Calculation Function
    calculateTask();

    // Check number of tasks inside container
    if (tasksContainer.childElementCount == 0) {
      createNoText();
    }
  }
});

// Delete All Tasks
delAllTasks.onclick = () => {
  document.querySelectorAll(".task-box").forEach((el) => {
    el.remove();
  });

  calculateTask();
};

// Calc The Tasks
function calculateTask() {
  // Calc All Tasks
  tasksCount.innerHTML = document.querySelectorAll(".task-box").length;
}

function createNoText() {
  // create span (no-tasks-message)
  let pMsg = document.createElement("p");
  // Add className
  pMsg.className = "no-tasks-message";

  // Append text to this span
  pMsg.appendChild(document.createTextNode("لا يوجد مهام"));

  tasksContainer.appendChild(pMsg);
}
// End ToDo List

// Create Copy Element
function copy(copyId) {
  let inputElement = document.createElement("textarea");

  let copyText = document.getElementById(copyId).textContent.trim();
  inputElement.value = copyText;
  document.body.appendChild(inputElement);

  inputElement.select();
  document.execCommand("copy");

  document.querySelectorAll(".copy-ele button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.previousElementSibling.classList.add("active");
      setTimeout(() => {
        btn.previousElementSibling.classList.remove("active");
      }, 2000);
    });
  });

  document.body.removeChild(inputElement);
}
