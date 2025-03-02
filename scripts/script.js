document.getElementById("card-btn-1")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Fix Mobile Button Issue at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity);

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-1").disabled = true;
})

document.getElementById("card-btn-2")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Add Dark Mode at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity);    

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-2").disabled = true;
})

document.getElementById("card-btn-3")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Optimize Home page at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity); 

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-3").disabled = true;
})

document.getElementById("card-btn-4")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Add new emoji at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity); 

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-4").disabled = true;
})

document.getElementById("card-btn-5")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Integrate OpenAI API at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity); 

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-5").disabled = true;
})

document.getElementById("card-btn-6")
.addEventListener("click", function(){

    alert("Board Updated Successfully")

    const taskAssigned = document.getElementById("task-assigned").innerText;
    const taskCompleted = document.getElementById("task-completed").innerText;

    let taskLeft = parseInt(taskAssigned);
    let taskDone = parseInt(taskCompleted);

    taskDone = taskDone + 1;
    taskLeft = taskLeft -1;

    document.getElementById("task-assigned").innerText = taskLeft;
    document.getElementById("task-completed").innerText = taskDone;

    const activityContainer = document.getElementById("activity-log");
    const newActivity = document.createElement("p");
    newActivity.classList.add("text-center", "bg-[#F4F7FF]", "rounded-lg", "text-base", "w-[90%]", "mx-auto", "p-5", "m-5");
    newActivity.textContent = "You have Complete Improve Job searching at " + timeNow();
    console.log(newActivity);

    activityContainer.appendChild(newActivity); 

    if(taskLeft===0){
        alert("Congrats!! You have completed all the currrent task.")
    }

    document.getElementById("card-btn-6").disabled = true;
})

document.getElementById("clear-history")
.addEventListener("click", function(){
    const activityContainer = document.getElementById("activity-log");
    activityContainer.innerText = "";


})

document.getElementById("go-to-blog")
.addEventListener("click", function(){
    window.location.href = "./main.html";
})

document.getElementById("random-color")
.addEventListener("click", function(){
        const colorCodes = "0123456789ABCDEF";
        let colorPalate = "#";
        for (let i = 0; i < 6; i++) {
            colorPalate = colorPalate + colorCodes[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = colorPalate;
})

function timeNow(){
    const dateNow = new Date();
    const timeRightNow = new Date().toLocaleTimeString();

    return timeRightNow;

}