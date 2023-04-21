window.onload = function(){

  var goalForm = document.forms.goal__form;
  var goalTitle = goalForm.goal__title;
  var goalDate = goalForm.goal__date;
  var goalList = document.getElementById("goals");
  var errorMsg = document.getElementById("error");
  var addGoalBtn = document.getElementById("add-goal-btn");
  var emptyGoals = document.getElementById("no-goals");
  var addGoalBlock = document.getElementById("add__goal");
  
  addGoalBtn.onclick = function(){
    addGoalBlock.style.display = "block";
    addGoalBtn.style.display = "none";
  }
  goalForm.onsubmit = function(){
    let goal = goalTitle.value;
    let date = goalDate.value.toString();
   

    if (goal === "" || date === "") {
      errorMsg.innerHTML = "All fields must be filled!"
    }
    else {
      goalList.innerHTML += "<li>" + goal + " by " + date + "</li>";
      goalList.style.display = "block";
      addGoalBlock.style.display = "none";
      emptyGoals.style.display = "none";
      addGoalBtn.style.display = "block";
    }
    return false;
  }; 
};